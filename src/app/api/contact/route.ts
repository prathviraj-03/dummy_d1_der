import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import { Inquiry } from "@/models/Inquiry";
import { sendNotification } from "@/lib/notifications";
import { z } from "zod";

const formSchema = z.object({
  name: z.string().min(2),
  phone: z.string().min(10),
  email: z.string().email().optional().or(z.literal("")),
  concern: z.string().min(5),
  date: z.string().min(1),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    // Validate request body
    const validatedData = formSchema.parse(body);

    // Connect to database
    await connectDB();

    // Save to database
    const newInquiry = await Inquiry.create({
      name: validatedData.name,
      phone: validatedData.phone,
      email: validatedData.email,
      concern: validatedData.concern,
      preferredDate: validatedData.date,
    });

    // Fire off notification asynchronously
    sendNotification(validatedData);

    return NextResponse.json({ 
      success: true, 
      message: "Inquiry saved successfully",
      id: newInquiry._id 
    }, { status: 201 });

  } catch (error: unknown) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.issues }, { status: 400 });
    }
    
    console.error("Contact API Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" }, 
      { status: 500 }
    );
  }
}
