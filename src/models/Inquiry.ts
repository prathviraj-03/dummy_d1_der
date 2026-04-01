import mongoose, { Schema, Document } from "mongoose";

export interface IInquiry extends Document {
  name: string;
  phone: string;
  email?: string;
  concern: string;
  preferredDate: string;
  status: "new" | "contacted" | "resolved";
  createdAt: Date;
}

const InquirySchema = new Schema<IInquiry>({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String },
  concern: { type: String, required: true },
  preferredDate: { type: String, required: true },
  status: { type: String, enum: ["new", "contacted", "resolved"], default: "new" },
  createdAt: { type: Date, default: Date.now },
});

export const Inquiry = mongoose.models.Inquiry || mongoose.model<IInquiry>("Inquiry", InquirySchema);
