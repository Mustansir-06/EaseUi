import { cva, type VariantProps } from "class-variance-authority";
import React, { useEffect, useState } from "react";

interface CarouselContextType {
  curr: number;
  totalItems: number;
  itemsPerView: number;
  orientation: "horizontal" | "vertical";
  setTotalItems: React.Dispatch<React.SetStateAction<number>>;
  setItemsPerView: React.Dispatch<React.SetStateAction<number>>;
  handleNext: () => void;
  handlePrev: () => void;
}

const CarouselContext =
  React.createContext<CarouselContextType | null>(null);

const useCarousel = () => {
  const context = React.useContext(CarouselContext);

  if (!context) {
    throw new Error(
      "Carousel components must be used inside a Carousel"
    );
  }

  return context;
};

const carouselVariant = cva("relative", {
  variants: {
    orientation: {
      horizontal: "overflow-hidden",
      vertical: "overflow-hidden",
    },

    size: {
      sm: "w-64 max-w-full",
      md: "w-80 max-w-full",
      lg: "w-96 max-w-full",
      xl: "w-[32rem] max-w-full",
      full: "w-full",
    },
  },

  defaultVariants: {
    orientation: "horizontal",
    size: "full",
  },
});

const carouselAnimation = cva("flex ease-in-out", {
  variants: {
    animation: {
      none: "transition-none",
      fast: "transition-transform duration-300",
      normal: "transition-transform duration-500",
      slow: "transition-transform duration-1000",
      slower: "transition-transform duration-[1500ms]",
      verySlow: "transition-transform duration-[2500ms]",
    },
  },

  defaultVariants: {
    animation: "normal",
  },
});

interface CarouselProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof carouselVariant> {
  children: React.ReactNode;
}

const Carousel = React.forwardRef<
  HTMLDivElement,
  CarouselProps
>(
  (
    {
      className,
      orientation: orientationProp,
      size = "full",
      children,
      ...props
    },
    ref
  ) => {
    const orientation =
      orientationProp ?? "horizontal";

    const [curr, setCurr] = useState(0);
    const [totalItems, setTotalItems] = useState(0);
    const [itemsPerView, setItemsPerView] = useState(1);

    const maxIndex = Math.max(
      totalItems - itemsPerView,
      0
    );

    const handleNext = () => {
      setCurr((prev) =>
        prev >= maxIndex ? prev : prev + 1
      );
    };

    const handlePrev = () => {
      setCurr((prev) =>
        prev <= 0 ? 0 : prev - 1
      );
    };

    useEffect(() => {
      setCurr((prev) =>
        Math.min(prev, maxIndex)
      );
    }, [maxIndex]);

    return (
      <CarouselContext.Provider
        value={{
          curr,
          totalItems,
          itemsPerView,
          orientation,
          setTotalItems,
          setItemsPerView,
          handleNext,
          handlePrev,
        }}
      >
        <div
          ref={ref}
          className={carouselVariant({
            orientation,
            size,
            className,
          })}
          {...props}
        >
          {children}
        </div>
      </CarouselContext.Provider>
    );
  }
);

Carousel.displayName = "Carousel";

interface CarouselContentProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  animation?:
    | "none"
    | "fast"
    | "normal"
    | "slow"
    | "slower"
    | "verySlow";
  itemsPerView?: 1 | 2 | 3 | 4;
}

const CarouselContent = React.forwardRef<
  HTMLDivElement,
  CarouselContentProps
>(
  (
    {
      className,
      children,
      animation = "normal",
      itemsPerView = 1,
      ...props
    },
    ref
  ) => {
    const {
      curr,
      orientation,
      setTotalItems,
      setItemsPerView,
    } = useCarousel();

    const totalItems =
      React.Children.count(children);

    useEffect(() => {
      setTotalItems(totalItems);
      setItemsPerView(itemsPerView);
    }, [
      totalItems,
      itemsPerView,
      setTotalItems,
      setItemsPerView,
    ]);

    const trackSize =
      (totalItems / itemsPerView) * 100;

    const itemSize =
      totalItems > 0
        ? 100 / totalItems
        : 100;

    const translate =
      totalItems > 0
        ? (curr * 100) / totalItems
        : 0;

    return (
      <div className="h-full w-full overflow-hidden">
        <div
          ref={ref}
          className={carouselAnimation({
            animation,
            className,
          })}
          style={{
            width:
              orientation === "horizontal"
                ? `${trackSize}%`
                : "100%",

            height:
              orientation === "vertical"
                ? `${trackSize}%`
                : "100%",

            transform:
              orientation === "horizontal"
                ? `translateX(-${translate}%)`
                : `translateY(-${translate}%)`,

            flexDirection:
              orientation === "horizontal"
                ? "row"
                : "column",
          }}
          {...props}
        >
          {React.Children.map(
            children,
            (child) => {
              if (!React.isValidElement(child)) {
                return child;
              }

              return React.cloneElement(
                child as React.ReactElement<{
                  style?: React.CSSProperties;
                }>,
                {
                  style: {
                    ...(child.props as {
                      style?: React.CSSProperties;
                    }).style,

                    ...(orientation === "horizontal"
                      ? {
                          width: `${itemSize}%`,
                          minWidth: `${itemSize}%`,
                        }
                      : {
                          height: `${itemSize}%`,
                          minHeight: `${itemSize}%`,
                        }),
                  },
                }
              );
            }
          )}
        </div>
      </div>
    );
  }
);

CarouselContent.displayName = "CarouselContent";

interface CarouselItemProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const CarouselItem = React.forwardRef<
  HTMLDivElement,
  CarouselItemProps
>(
  (
    {
      className,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={`shrink-0 ${className ?? ""}`}
        {...props}
      >
        {children}
      </div>
    );
  }
);

CarouselItem.displayName = "CarouselItem";

interface CarouselButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const CarouselPrevious = React.forwardRef<
  HTMLButtonElement,
  CarouselButtonProps
>(
  (
    {
      className,
      children,
      ...props
    },
    ref
  ) => {
    const {
      handlePrev,
      curr,
      orientation,
    } = useCarousel();

    const position =
      orientation === "horizontal"
        ? "left-3 top-1/2 -translate-y-1/2"
        : "top-3 left-1/2 -translate-x-1/2";

    return (
      <button
        ref={ref}
        type="button"
        onClick={handlePrev}
        disabled={curr === 0}
        className={`
          absolute ${position} z-10
          flex h-10 w-10
          items-center justify-center
          rounded-full
          border border-gray-200
          bg-white/90
          text-gray-700
          shadow-md
          backdrop-blur-sm
          transition-all duration-200
          hover:scale-105
          hover:bg-white
          hover:shadow-lg
          active:scale-95
          disabled:pointer-events-none
          disabled:opacity-40
          ${className ?? ""}
        `}
        {...props}
      >
        {children ??
          (orientation === "horizontal"
            ? "←"
            : "↑")}
      </button>
    );
  }
);

CarouselPrevious.displayName =
  "CarouselPrevious";

const CarouselNext = React.forwardRef<
  HTMLButtonElement,
  CarouselButtonProps
>(
  (
    {
      className,
      children,
      ...props
    },
    ref
  ) => {
    const {
      handleNext,
      curr,
      totalItems,
      itemsPerView,
      orientation,
    } = useCarousel();

    const maxIndex = Math.max(
      totalItems - itemsPerView,
      0
    );

    const position =
      orientation === "horizontal"
        ? "right-3 top-1/2 -translate-y-1/2"
        : "bottom-3 left-1/2 -translate-x-1/2";

    return (
      <button
        ref={ref}
        type="button"
        onClick={handleNext}
        disabled={curr >= maxIndex}
        className={`
          absolute ${position} z-10
          flex h-10 w-10
          items-center justify-center
          rounded-full
          border border-gray-200
          bg-white/90
          text-gray-700
          shadow-md
          backdrop-blur-sm
          transition-all duration-200
          hover:scale-105
          hover:bg-white
          hover:shadow-lg
          active:scale-95
          disabled:pointer-events-none
          disabled:opacity-40
          ${className ?? ""}
        `}
        {...props}
      >
        {children ??
          (orientation === "horizontal"
            ? "→"
            : "↓")}
      </button>
    );
  }
);

CarouselNext.displayName = "CarouselNext";

export {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  carouselVariant,
  carouselAnimation,
};