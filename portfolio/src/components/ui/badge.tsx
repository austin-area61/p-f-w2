import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-lg border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-[#112240] text-teal-300 shadow hover:bg-[#1a2c4e]",
        secondary:
          "border-transparent bg-[#112240] text-teal-300 hover:bg-[#1a2c4e]",
        destructive:
          "border-transparent bg-[#112240] text-teal-300 shadow hover:bg-[#1a2c4e]",
        outline: "border-teal-300 text-teal-300 bg-[#112240]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
