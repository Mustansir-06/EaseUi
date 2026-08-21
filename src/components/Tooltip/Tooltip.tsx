import { cva, type VariantProps } from "class-variance-authority";
import React, { useEffect, useRef, useState } from "react";

import { entranceAnimations } from "@/libs/animations/entranceAnimation";

const tooltipVariant = cva(
  "z-50 rounded-md font-medium shadow-lg",
  {
    variants: {
      variant: {
        light:
          "bg-white text-gray-900 border border-gray-200",
        dark: "bg-gray-900 text-white",
        primary: "bg-indigo-600 text-white",
        secondary:
          "bg-gray-100 text-gray-900",
      },

      size: {
        sm: "px-2.5 py-1 text-xs",
        md: "px-3 py-1.5 text-sm",
        lg: "px-4 py-2 text-base",
      },
    },

    defaultVariants: {
      variant: "light",
      size: "sm",
    },
  }
);

interface TooltipProps
  extends Omit<
      React.HTMLAttributes<HTMLDivElement>,
      "content"
    >,
    VariantProps<typeof tooltipVariant> {
  content: React.ReactNode;

  position?: "top" | "bottom" | "left" | "right";

  delay?: number;

  animation?: keyof typeof entranceAnimations;

  disabled?: boolean;
}

const Tooltip = React.forwardRef<
  HTMLDivElement,
  TooltipProps
>(
  (
    {
      className,
      variant,
      size,
      content,
      position = "top",
      delay = 0,
      animation = "fadeIn",
      disabled = false,
      children,
      ...props
    },
    ref
  ) => {
    const [showTooltip, setShowTooltip] =
      useState(false);

    const timeoutRef =
      useRef<ReturnType<typeof setTimeout> | null>(
        null
      );

    const tooltipRef =
      useRef<HTMLDivElement | null>(null);

    const mouseenter = () => {
      if (disabled) return;

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        setShowTooltip(true);
      }, delay);
    };

    const mouseleave = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      setShowTooltip(false);
    };

    useEffect(() => {
      if (!showTooltip) return;

      const el = tooltipRef.current;

      if (!el) return;

      if (animation !== "none") {
        entranceAnimations[animation]?.(el);
      }
    }, [showTooltip, animation]);

    useEffect(() => {
      return () => {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
      };
    }, []);

    const positionClasses = {
      top: "absolute bottom-full left-1/2 -translate-x-1/2 mb-2",
      bottom:
        "absolute top-full left-1/2 -translate-x-1/2 mt-2",
      left: "absolute right-full top-1/2 -translate-y-1/2 mr-2",
      right:
        "absolute left-full top-1/2 -translate-y-1/2 ml-2",
    };

    return (
      <div
        ref={ref}
        className="relative inline-block"
        onMouseEnter={mouseenter}
        onMouseLeave={mouseleave}
        {...props}
      >
        {children}

        {showTooltip && !disabled && (
          <div
            ref={tooltipRef}
            className={`${positionClasses[position]} ${tooltipVariant(
              {
                variant,
                size,
              }
            )} ${className || ""}`}
          >
            {content}
          </div>
        )}
      </div>
    );
  }
);

Tooltip.displayName = "Tooltip";

export {
  Tooltip,
  tooltipVariant,
};