import { HTMLAttributes, forwardRef } from "react";
import { cn } from "@/utils/helpers";

export const Section = forwardRef<HTMLElement, HTMLAttributes<HTMLElement>>(
  ({ className, ...props }, ref) => (
    <section
      ref={ref}
      className={cn("py-20 md:py-28", className)}
      {...props}
    />
  )
);
Section.displayName = "Section";

