import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const govButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 font-heading",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:bg-gov-orange-hover shadow-sm hover:shadow-md active:scale-[0.98]",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-gov-cream-dark border border-border",
        outline:
          "border-2 border-primary text-primary bg-transparent hover:bg-accent",
        ghost:
          "text-foreground hover:bg-accent hover:text-accent-foreground",
        link:
          "text-primary underline-offset-4 hover:underline",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 px-4 text-xs",
        lg: "h-12 px-8 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface GovButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof govButtonVariants> {
  asChild?: boolean;
}

const GovButton = React.forwardRef<HTMLButtonElement, GovButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(govButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
GovButton.displayName = "GovButton";

export { GovButton, govButtonVariants };
