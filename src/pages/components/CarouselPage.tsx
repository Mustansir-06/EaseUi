import PropsTable from "@/components/Personal/PropsTable";
import ComponentDemo from "../ComponentsDemo";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/Carousel/Carousel";

const CarouselPage = () => {
  const basicCode = `import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/Carousel/Carousel";

<Carousel className="max-w-xl mx-auto">
  <CarouselContent>
    <CarouselItem>
      <div className="h-64 flex items-center justify-center rounded-xl bg-indigo-500 text-white text-2xl">
        Slide 1
      </div>
    </CarouselItem>

    <CarouselItem>
      <div className="h-64 flex items-center justify-center rounded-xl bg-purple-500 text-white text-2xl">
        Slide 2
      </div>
    </CarouselItem>

    <CarouselItem>
      <div className="h-64 flex items-center justify-center rounded-xl bg-pink-500 text-white text-2xl">
        Slide 3
      </div>
    </CarouselItem>
  </CarouselContent>

  <CarouselPrevious />
  <CarouselNext />
</Carousel>`;

  const navigationCode = `<Carousel className="max-w-xl mx-auto">
  <CarouselContent>
    <CarouselItem>
      <div className="h-64 flex items-center justify-center rounded-xl bg-indigo-500 text-white text-2xl">
        First
      </div>
    </CarouselItem>

    <CarouselItem>
      <div className="h-64 flex items-center justify-center rounded-xl bg-purple-500 text-white text-2xl">
        Second
      </div>
    </CarouselItem>

    <CarouselItem>
      <div className="h-64 flex items-center justify-center rounded-xl bg-pink-500 text-white text-2xl">
        Third
      </div>
    </CarouselItem>
  </CarouselContent>

  <CarouselPrevious />
  <CarouselNext />
</Carousel>`;

  const horizontalCode = `<Carousel
  orientation="horizontal"
  className="max-w-xl mx-auto"
>
  <CarouselContent>
    <CarouselItem>
      <div className="h-64 flex items-center justify-center rounded-xl bg-indigo-500 text-white text-2xl">
        Horizontal 1
      </div>
    </CarouselItem>

    <CarouselItem>
      <div className="h-64 flex items-center justify-center rounded-xl bg-purple-500 text-white text-2xl">
        Horizontal 2
      </div>
    </CarouselItem>

    <CarouselItem>
      <div className="h-64 flex items-center justify-center rounded-xl bg-pink-500 text-white text-2xl">
        Horizontal 3
      </div>
    </CarouselItem>
  </CarouselContent>

  <CarouselPrevious />
  <CarouselNext />
</Carousel>`;

  const verticalCode = `<Carousel
  orientation="vertical"
  size="md"
  className="h-[400px] mx-auto"
>
  <CarouselContent>
    <CarouselItem>
      <div className="h-full w-full flex items-center justify-center rounded-xl bg-indigo-500 text-white text-2xl">
        Vertical 1
      </div>
    </CarouselItem>

    <CarouselItem>
      <div className="h-full w-full flex items-center justify-center rounded-xl bg-purple-500 text-white text-2xl">
        Vertical 2
      </div>
    </CarouselItem>

    <CarouselItem>
      <div className="h-full w-full flex items-center justify-center rounded-xl bg-pink-500 text-white text-2xl">
        Vertical 3
      </div>
    </CarouselItem>
  </CarouselContent>

  <CarouselPrevious />
  <CarouselNext />
</Carousel>`;

  const sizeCode = `<Carousel size="sm">
  <CarouselContent>
    ...
  </CarouselContent>
</Carousel>

<Carousel size="md">
  <CarouselContent>
    ...
  </CarouselContent>
</Carousel>

<Carousel size="lg">
  <CarouselContent>
    ...
  </CarouselContent>
</Carousel>

<Carousel size="xl">
  <CarouselContent>
    ...
  </CarouselContent>
</Carousel>

<Carousel size="full">
  <CarouselContent>
    ...
  </CarouselContent>
</Carousel>`;

  const multipleItemsCode = `<Carousel className="max-w-4xl mx-auto">
  <CarouselContent itemsPerView={3}>
    <CarouselItem className="px-2">
      <div className="h-48 flex items-center justify-center rounded-xl bg-indigo-500 text-white">
        Card 1
      </div>
    </CarouselItem>

    <CarouselItem className="px-2">
      <div className="h-48 flex items-center justify-center rounded-xl bg-purple-500 text-white">
        Card 2
      </div>
    </CarouselItem>

    <CarouselItem className="px-2">
      <div className="h-48 flex items-center justify-center rounded-xl bg-pink-500 text-white">
        Card 3
      </div>
    </CarouselItem>

    <CarouselItem className="px-2">
      <div className="h-48 flex items-center justify-center rounded-xl bg-orange-500 text-white">
        Card 4
      </div>
    </CarouselItem>

    <CarouselItem className="px-2">
      <div className="h-48 flex items-center justify-center rounded-xl bg-green-500 text-white">
        Card 5
      </div>
    </CarouselItem>
  </CarouselContent>

  <CarouselPrevious />
  <CarouselNext />
</Carousel>`;

  const animationCode = `<Carousel className="max-w-xl">
  <CarouselContent animation="slow">
    <CarouselItem>
      ...
    </CarouselItem>

    <CarouselItem>
      ...
    </CarouselItem>

    <CarouselItem>
      ...
    </CarouselItem>
  </CarouselContent>

  <CarouselPrevious />
  <CarouselNext />
</Carousel>`;

  const propsData = [
    {
      prop: "orientation",
      type: '"horizontal" | "vertical"',
      default: '"horizontal"',
      description:
        "Controls the direction of carousel movement.",
    },
    {
      prop: "size",
      type: '"sm" | "md" | "lg" | "xl" | "full"',
      default: '"full"',
      description:
        "Controls the width of the carousel.",
    },
    {
      prop: "itemsPerView",
      type: "1 | 2 | 3 | 4",
      default: "1",
      description:
        "Controls how many items are visible at the same time.",
    },
    {
      prop: "animation",
      type:
        '"none" | "fast" | "normal" | "slow" | "slower" | "verySlow"',
      default: '"normal"',
      description:
        "Controls the transition speed of the carousel.",
    },
    {
      prop: "children",
      type: "React.ReactNode",
      default: "—",
      description:
        "Content displayed inside the carousel.",
    },
    {
      prop: "className",
      type: "string",
      default: "—",
      description:
        "Additional classes applied to the carousel.",
    },
  ];

  const slide = (
    text: string,
    className: string
  ) => (
    <div
      className={`h-64 w-full flex items-center justify-center rounded-xl text-white text-2xl font-semibold ${className}`}
    >
      {text}
    </div>
  );

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-14">
      <header className="space-y-2">
        <h1
          className="text-4xl font-bold tracking-tight"
          style={{
            color: "var(--text-color)",
          }}
        >
          Carousel
        </h1>

        <p className="text-lg text-gray-600">
          A flexible carousel component for displaying
          and navigating through collections of content.
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">
          Usage
        </h2>

        <p className="text-gray-600">
          A basic carousel with previous and next
          navigation.
        </p>

        <ComponentDemo code={basicCode}>
          <Carousel className="max-w-xl mx-auto">
            <CarouselContent>
              <CarouselItem>
                {slide(
                  "Slide 1",
                  "bg-indigo-500"
                )}
              </CarouselItem>

              <CarouselItem>
                {slide(
                  "Slide 2",
                  "bg-purple-500"
                )}
              </CarouselItem>

              <CarouselItem>
                {slide(
                  "Slide 3",
                  "bg-pink-500"
                )}
              </CarouselItem>
            </CarouselContent>

            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </ComponentDemo>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">
          Navigation
        </h2>

        <p className="text-gray-600">
          Navigate through the carousel using the
          previous and next controls.
        </p>

        <ComponentDemo code={navigationCode}>
          <Carousel className="max-w-xl mx-auto">
            <CarouselContent>
              <CarouselItem>
                {slide(
                  "First",
                  "bg-indigo-500"
                )}
              </CarouselItem>

              <CarouselItem>
                {slide(
                  "Second",
                  "bg-purple-500"
                )}
              </CarouselItem>

              <CarouselItem>
                {slide(
                  "Third",
                  "bg-pink-500"
                )}
              </CarouselItem>
            </CarouselContent>

            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </ComponentDemo>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">
          Orientation
        </h2>

        <p className="text-gray-600">
          Carousel supports horizontal and vertical
          orientations.
        </p>

        <h3 className="text-lg font-medium">
          Horizontal
        </h3>

        <ComponentDemo code={horizontalCode}>
          <Carousel
            orientation="horizontal"
            className="max-w-xl mx-auto"
          >
            <CarouselContent>
              <CarouselItem>
                {slide(
                  "Horizontal 1",
                  "bg-indigo-500"
                )}
              </CarouselItem>

              <CarouselItem>
                {slide(
                  "Horizontal 2",
                  "bg-purple-500"
                )}
              </CarouselItem>

              <CarouselItem>
                {slide(
                  "Horizontal 3",
                  "bg-pink-500"
                )}
              </CarouselItem>
            </CarouselContent>

            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </ComponentDemo>

        <h3 className="text-lg font-medium">
          Vertical
        </h3>

        <ComponentDemo code={verticalCode}>
          <Carousel
            orientation="vertical"
            size="md"
            className="h-[400px] mx-auto"
          >
            <CarouselContent>
              <CarouselItem>
                <div className="h-full w-full flex items-center justify-center rounded-xl bg-indigo-500 text-white text-2xl font-semibold">
                  Vertical 1
                </div>
              </CarouselItem>

              <CarouselItem>
                <div className="h-full w-full flex items-center justify-center rounded-xl bg-purple-500 text-white text-2xl font-semibold">
                  Vertical 2
                </div>
              </CarouselItem>

              <CarouselItem>
                <div className="h-full w-full flex items-center justify-center rounded-xl bg-pink-500 text-white text-2xl font-semibold">
                  Vertical 3
                </div>
              </CarouselItem>
            </CarouselContent>

            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </ComponentDemo>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">
          Sizes
        </h2>

        <p className="text-gray-600">
          Choose from predefined carousel widths.
        </p>

        <ComponentDemo code={sizeCode}>
          <div className="w-full space-y-10">
            <div>
              <p className="mb-2 text-sm font-medium">
                Small
              </p>

              <Carousel size="sm">
                <CarouselContent>
                  <CarouselItem>
                    {slide(
                      "Small",
                      "bg-indigo-500"
                    )}
                  </CarouselItem>

                  <CarouselItem>
                    {slide(
                      "Small 2",
                      "bg-purple-500"
                    )}
                  </CarouselItem>
                </CarouselContent>

                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>

            <div>
              <p className="mb-2 text-sm font-medium">
                Medium
              </p>

              <Carousel size="md">
                <CarouselContent>
                  <CarouselItem>
                    {slide(
                      "Medium",
                      "bg-indigo-500"
                    )}
                  </CarouselItem>

                  <CarouselItem>
                    {slide(
                      "Medium 2",
                      "bg-purple-500"
                    )}
                  </CarouselItem>
                </CarouselContent>

                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>

            <div>
              <p className="mb-2 text-sm font-medium">
                Large
              </p>

              <Carousel size="lg">
                <CarouselContent>
                  <CarouselItem>
                    {slide(
                      "Large",
                      "bg-indigo-500"
                    )}
                  </CarouselItem>

                  <CarouselItem>
                    {slide(
                      "Large 2",
                      "bg-purple-500"
                    )}
                  </CarouselItem>
                </CarouselContent>

                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>

            <div>
              <p className="mb-2 text-sm font-medium">
                Extra Large
              </p>

              <Carousel size="xl">
                <CarouselContent>
                  <CarouselItem>
                    {slide(
                      "Extra Large",
                      "bg-indigo-500"
                    )}
                  </CarouselItem>

                  <CarouselItem>
                    {slide(
                      "Extra Large 2",
                      "bg-purple-500"
                    )}
                  </CarouselItem>
                </CarouselContent>

                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>

            <div>
              <p className="mb-2 text-sm font-medium">
                Full
              </p>

              <Carousel size="full">
                <CarouselContent>
                  <CarouselItem>
                    {slide(
                      "Full Width",
                      "bg-indigo-500"
                    )}
                  </CarouselItem>

                  <CarouselItem>
                    {slide(
                      "Full Width 2",
                      "bg-purple-500"
                    )}
                  </CarouselItem>
                </CarouselContent>

                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>
        </ComponentDemo>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">
          Multiple Items
        </h2>

        <p className="text-gray-600">
          Display multiple cards at the same time.
        </p>

        <ComponentDemo code={multipleItemsCode}>
          <Carousel className="max-w-4xl mx-auto">
            <CarouselContent itemsPerView={3}>
              <CarouselItem className="px-2">
                <div className="h-48 flex items-center justify-center rounded-xl bg-indigo-500 text-white font-semibold">
                  Card 1
                </div>
              </CarouselItem>

              <CarouselItem className="px-2">
                <div className="h-48 flex items-center justify-center rounded-xl bg-purple-500 text-white font-semibold">
                  Card 2
                </div>
              </CarouselItem>

              <CarouselItem className="px-2">
                <div className="h-48 flex items-center justify-center rounded-xl bg-pink-500 text-white font-semibold">
                  Card 3
                </div>
              </CarouselItem>

              <CarouselItem className="px-2">
                <div className="h-48 flex items-center justify-center rounded-xl bg-orange-500 text-white font-semibold">
                  Card 4
                </div>
              </CarouselItem>

              <CarouselItem className="px-2">
                <div className="h-48 flex items-center justify-center rounded-xl bg-green-500 text-white font-semibold">
                  Card 5
                </div>
              </CarouselItem>
            </CarouselContent>

            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </ComponentDemo>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">
          Animation
        </h2>

        <p className="text-gray-600">
          Control the transition speed of the carousel.
        </p>

        <ComponentDemo code={animationCode}>
          <div className="space-y-10">
            <div>
              <p className="mb-2 text-sm font-medium">
                Fast — 300ms
              </p>

              <Carousel className="max-w-xl">
                <CarouselContent animation="fast">
                  <CarouselItem>
                    {slide(
                      "Fast 1",
                      "bg-indigo-500"
                    )}
                  </CarouselItem>

                  <CarouselItem>
                    {slide(
                      "Fast 2",
                      "bg-purple-500"
                    )}
                  </CarouselItem>

                  <CarouselItem>
                    {slide(
                      "Fast 3",
                      "bg-pink-500"
                    )}
                  </CarouselItem>
                </CarouselContent>

                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>

            <div>
              <p className="mb-2 text-sm font-medium">
                Normal — 500ms
              </p>

              <Carousel className="max-w-xl">
                <CarouselContent animation="normal">
                  <CarouselItem>
                    {slide(
                      "Normal 1",
                      "bg-indigo-500"
                    )}
                  </CarouselItem>

                  <CarouselItem>
                    {slide(
                      "Normal 2",
                      "bg-purple-500"
                    )}
                  </CarouselItem>

                  <CarouselItem>
                    {slide(
                      "Normal 3",
                      "bg-pink-500"
                    )}
                  </CarouselItem>
                </CarouselContent>

                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>

            <div>
              <p className="mb-2 text-sm font-medium">
                Slow — 1000ms
              </p>

              <Carousel className="max-w-xl">
                <CarouselContent animation="slow">
                  <CarouselItem>
                    {slide(
                      "Slow 1",
                      "bg-indigo-500"
                    )}
                  </CarouselItem>

                  <CarouselItem>
                    {slide(
                      "Slow 2",
                      "bg-purple-500"
                    )}
                  </CarouselItem>

                  <CarouselItem>
                    {slide(
                      "Slow 3",
                      "bg-pink-500"
                    )}
                  </CarouselItem>
                </CarouselContent>

                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>

            <div>
              <p className="mb-2 text-sm font-medium">
                Slower — 1500ms
              </p>

              <Carousel className="max-w-xl">
                <CarouselContent animation="slower">
                  <CarouselItem>
                    {slide(
                      "Slower 1",
                      "bg-indigo-500"
                    )}
                  </CarouselItem>

                  <CarouselItem>
                    {slide(
                      "Slower 2",
                      "bg-purple-500"
                    )}
                  </CarouselItem>

                  <CarouselItem>
                    {slide(
                      "Slower 3",
                      "bg-pink-500"
                    )}
                  </CarouselItem>
                </CarouselContent>

                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>

            <div>
              <p className="mb-2 text-sm font-medium">
                Very Slow — 2500ms
              </p>

              <Carousel className="max-w-xl">
                <CarouselContent animation="verySlow">
                  <CarouselItem>
                    {slide(
                      "Very Slow 1",
                      "bg-indigo-500"
                    )}
                  </CarouselItem>

                  <CarouselItem>
                    {slide(
                      "Very Slow 2",
                      "bg-purple-500"
                    )}
                  </CarouselItem>

                  <CarouselItem>
                    {slide(
                      "Very Slow 3",
                      "bg-pink-500"
                    )}
                  </CarouselItem>
                </CarouselContent>

                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>
        </ComponentDemo>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">
          API Reference
        </h2>

        <PropsTable data={propsData} />
      </section>
    </div>
  );
};

export default CarouselPage;