import React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import "./Button.css";  // Import the CSS file

const buttonVariants = cva(
    "button-base", // base class
    {
        variants: {
            variant: {
                default: "button-default",
                destructive: "button-destructive",
                outline: "button-outline",
                secondary: "button-secondary",
                ghost: "button-ghost",
                link: "button-link",
            },
            size: {
                default: "button-size-default",
                sm: "button-size-sm",
                lg: "button-size-lg",
                icon: "button-size-icon",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
);

const Button = React.forwardRef(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : "button";
        const variantClasses = buttonVariants({ variant, size });
        const combinedClasses = `${variantClasses} ${className || ""}`.trim();

        return (
            <Comp
                className={combinedClasses}
                ref={ref}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";

export { Button, buttonVariants };
