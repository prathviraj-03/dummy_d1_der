import { HTMLAttributes, forwardRef } from "react";
import { cn } from "@/utils/helpers";

export const Card = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("rounded-2xl border bg-card text-card-foreground shadow-sm transition-shadow hover:shadow-md", className)}
      {...props}
    />
  )
);
Card.displayName = "Card";

