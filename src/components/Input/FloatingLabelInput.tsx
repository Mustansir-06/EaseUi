import React, { useState } from "react";
import { cn } from "@/libs/utils";
import { cva } from "class-variance-authority";

const wrapper = cva("relative w-full");

const inputCls = cva(
  "w-full bg-transparent border-b border-gray-500 pb-2 pt-6 focus:outline-none transition-all",
  {
    variants: {
      size: {
        sm: "text-sm",
        md: "text-base",
        lg: "text-lg",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

export interface FloatingLabelProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    "size"
  > {
  label?: React.ReactNode;
  size?: "sm" | "md" | "lg";
}

export const FloatingLabelInput = React.forwardRef<
  HTMLInputElement,
  FloatingLabelProps
>(
  (
    {
      label,
      size = "md",
      className,
      value,
      defaultValue,
      onFocus,
      onBlur,
      ...props
    },
    ref
  ) => {
    const [focused, setFocused] = useState(false);

    const filled =
      value !== undefined
        ? String(value).length > 0
        : defaultValue !== undefined &&
          String(defaultValue).length > 0;

    const shrink = focused || filled;

    return (
      <div className={wrapper()}>
        <input
          ref={ref}
          value={value}
          defaultValue={defaultValue}
          {...props}
          onFocus={(e) => {
            setFocused(true);
            onFocus?.(e);
          }}
          onBlur={(e) => {
            setFocused(false);
            onBlur?.(e);
          }}
          className={cn(
            inputCls({ size }),
            className
          )}
        />

        <label
          className={cn(
            "absolute left-0 top-2 origin-left pointer-events-none text-gray-500 transform transition-all duration-200",
            shrink
              ? "-translate-y-4 scale-75"
              : "translate-y-0 scale-100"
          )}
        >
          {label}
        </label>
      </div>
    );
  }
);

FloatingLabelInput.displayName = "FloatingLabelInput";