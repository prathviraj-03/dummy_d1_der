"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "react-hot-toast";
import { contact } from "@/data/contact";
import { Section } from "@/components/ui/Section";
import { MapPin, Phone, Mail, Clock, Loader2 } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  phone: z.string().min(10, "Valid phone number required"),
  email: z.string().email("Invalid email address").optional().or(z.literal("")),
  concern: z.string().min(5, "Please briefly describe your concern"),
  date: z.string().min(1, "Preferred date is required"),
});

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { register, handleSubmit, reset, formState: { errors } } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      
      if (!response.ok) throw new Error(result.error || "Failed to submit");
      
      toast.success("Appointment request sent successfully!");
      reset();
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section id="contact" className="bg-cream py-24">
      <div className="container mx-auto px-4">
        <FadeIn direction="up">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-forest mb-4 tracking-tight">Get in Touch</h2>
            <p className="text-text-body font-medium max-w-2xl mx-auto">
              Ready to start your journey to healthier skin? Book a consultation today.
            </p>
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-12 bg-white rounded-3xl overflow-hidden shadow-2xl border border-sage/20">
          
          <FadeIn direction="right">
            <div className="p-8 md:p-12 bg-forest text-white h-full flex flex-col justify-between">
              <div>
                <h3 className="text-3xl font-bold mb-8 text-white tracking-tight">Clinic Details</h3>
                <div className="space-y-6">
                  <div className="flex gap-4 items-start">
                    <MapPin className="text-gold mt-1 flex-shrink-0" />
                    <p className="text-white/90 font-medium leading-relaxed text-lg">{contact.address}</p>
                  </div>
                  <div className="flex gap-4 items-center">
                    <Phone className="text-gold flex-shrink-0" />
                    <p className="text-white/90 font-medium text-lg">{contact.phone}</p>
                  </div>
                  <div className="flex gap-4 items-center">
                    <Mail className="text-gold flex-shrink-0" />
                    <p className="text-white/90 font-medium text-lg">{contact.email}</p>
                  </div>
                  <div className="flex gap-4 items-center">
                    <Clock className="text-gold flex-shrink-0" />
                    <p className="text-white/90 font-medium text-lg">{contact.hours}</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 h-64 rounded-2xl overflow-hidden shadow-lg border border-white/10 max-h-[300px]">
                <iframe 
                  src={contact.mapsEmbed} 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="left" delay={0.2}>
            <div className="p-8 md:p-12 h-full">
              <h3 className="text-2xl font-bold text-forest mb-6 tracking-tight">Book an Appointment</h3>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div>
                  <label className="block text-sm font-bold text-forest mb-2">Full Name</label>
                  <input 
                    type="text" 
                    {...register("name")}
                    className="w-full px-4 py-3 rounded-xl border-2 border-sage/50 focus:border-forest focus:ring-0 outline-none transition-all bg-cream/50 text-text-dark font-medium"
                    placeholder="John Doe"
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1 font-medium">{errors.name.message}</p>}
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-bold text-forest mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      {...register("phone")}
                      className="w-full px-4 py-3 rounded-xl border-2 border-sage/50 focus:border-forest focus:ring-0 outline-none transition-all bg-cream/50 text-text-dark font-medium"
                      placeholder="+91..."
                    />
                    {errors.phone && <p className="text-red-500 text-sm mt-1 font-medium">{errors.phone.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-forest mb-2">Preferred Date</label>
                    <input 
                      type="date" 
                      {...register("date")}
                      className="w-full px-4 py-3 rounded-xl border-2 border-sage/50 focus:border-forest focus:ring-0 outline-none transition-all bg-cream/50 text-text-dark font-medium"
                    />
                    {errors.date && <p className="text-red-500 text-sm mt-1 font-medium">{errors.date.message}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-forest mb-2">Email (Optional)</label>
                  <input 
                    type="email" 
                    {...register("email")}
                    className="w-full px-4 py-3 rounded-xl border-2 border-sage/50 focus:border-forest focus:ring-0 outline-none transition-all bg-cream/50 text-text-dark font-medium"
                    placeholder="john@example.com"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1 font-medium">{errors.email.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-bold text-forest mb-2">Your Concern</label>
                  <textarea 
                    {...register("concern")}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border-2 border-sage/50 focus:border-forest focus:ring-0 outline-none transition-all resize-none bg-cream/50 text-text-dark font-medium"
                    placeholder="Tell us what you'd like to discuss..."
                  />
                  {errors.concern && <p className="text-red-500 text-sm mt-1 font-medium">{errors.concern.message}</p>}
                </div>

                <button type="submit" disabled={isSubmitting} className="w-full bg-forest text-white rounded-xl h-14 text-lg font-bold hover:bg-forest/90 transition-colors flex items-center justify-center shadow-md">
                  {isSubmitting ? (
                    <><Loader2 className="mr-2 h-5 w-5 animate-spin" /> Submitting...</>
                  ) : "Request Appointment"}
                </button>
              </form>
            </div>
          </FadeIn>

        </div>
      </div>
    </Section>
  );
}

