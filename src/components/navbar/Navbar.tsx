import { Slot } from "@radix-ui/react-slot";
import React, {
  forwardRef,
  useEffect,
  useRef,
} from "react";
import {
  cva,
  type VariantProps,
} from "class-variance-authority";
import { cn } from "@/libs/utils";
import {
  entranceAnimations,
} from "@/libs/animations/entranceAnimation";
import {
  hoverAnimations,
} from "@/libs/animations/hoverAnimation";
import gsap from "gsap";
import { Button } from "../Button";

const navbarVariants = cva(
  "w-full flex items-center justify-between px-6 rounded-md border transition-all",
  {
    variants: {
      variant: {
        light:
          "bg-white text-gray-800 border-gray-200 shadow-sm",
        dark:
          "bg-slate-900 text-white border-slate-800",
        primary:
          "bg-indigo-600 text-white border-indigo-600",
        glass:
          "bg-white/10 backdrop-blur-md text-gray-900 border-white/30 shadow-lg",
      },

      size: {
        sm: "h-12",
        default: "h-16",
        lg: "h-20",
        xl: "h-24",
      },
    },

    defaultVariants: {
      variant: "light",
      size: "default",
    },
  }
);

interface NavbarProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof navbarVariants> {
  asChild?: boolean;
  animation?: keyof typeof entranceAnimations;
  hoverAnimation?: keyof typeof hoverAnimations;
}

const Navbar = forwardRef<HTMLElement, NavbarProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      animation = "fadeIn",
      hoverAnimation = "none",
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "nav";

    const navbarRef =
      useRef<HTMLElement | null>(null);

    useEffect(() => {
      if (
        !navbarRef.current ||
        animation === "none"
      ) {
        return;
      }

      entranceAnimations[animation]?.(
        navbarRef.current
      );
    }, [animation]);

    const handleMouseEnter = () => {
      if (
        navbarRef.current &&
        hoverAnimation !== "none"
      ) {
        hoverAnimations[hoverAnimation]?.(
          navbarRef.current
        );
      }
    };

    const handleMouseLeave = () => {
      if (!navbarRef.current) return;

      gsap.to(navbarRef.current, {
        scale: 1,
        rotation: 0,
        y: 0,
        x: 0,
        duration: 0.2,
        ease: "power2.out",
      });
    };

    return (
      <Comp
        ref={(node) => {
          navbarRef.current =
            node as HTMLElement;

          if (typeof ref === "function") {
            ref(node as HTMLElement);
          } else if (ref) {
            ref.current =
              node as HTMLElement;
          }
        }}
        className={cn(
          navbarVariants({
            variant,
            size,
          }),
          className
        )}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...props}
      >
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-600 text-sm font-bold text-white">
            E
          </div>

          <span className="text-lg font-bold">
            EaseUI
          </span>
        </div>

        <div className="hidden items-center gap-6 md:flex">
          <a
            href="#"
            className="text-sm transition-colors hover:text-indigo-600"
          >
            Home
          </a>

          <a
            href="#"
            className="text-sm transition-colors hover:text-indigo-600"
          >
            About
          </a>

          <a
            href="#"
            className="text-sm transition-colors hover:text-indigo-600"
          >
            Components
          </a>

          <a
            href="#"
            className="text-sm transition-colors hover:text-indigo-600"
          >
            Templates
          </a>
        </div>

        <Button hoverAnimation="none">
          Get Started
        </Button>
      </Comp>
    );
  }
);

Navbar.displayName = "Navbar";

export {
  Navbar,
  navbarVariants,
};