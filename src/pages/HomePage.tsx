import {
  ArrowRight,
  Check,
  Code2,
  Layers3,
  MousePointer2,
  Package,
  Sparkles,
  Terminal,
} from "lucide-react";
import { useNavigate } from "react-router";

type Props = {};

const HomePage = ({}: Props) => {
  const navigate = useNavigate();

  const components = [
    {
      name: "Button",
      description: "Flexible actions with variants and animations.",
      preview: (
        <div className="flex gap-2">
          <button className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm">
            Primary
          </button>
          <button className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700">
            Outline
          </button>
        </div>
      ),
    },
    {
      name: "Tooltip",
      description: "Contextual information without interrupting the interface.",
      preview: (
        <div className="relative flex items-center justify-center pt-5">
          <div className="absolute -top-1 rounded-md bg-gray-900 px-3 py-1.5 text-xs text-white shadow-lg">
            Save your changes
          </div>
          <button className="rounded-lg bg-indigo-600 px-5 py-2 text-sm font-medium text-white">
            Save
          </button>
        </div>
      ),
    },
    {
      name: "Carousel",
      description: "Navigate through content with flexible layouts.",
      preview: (
        <div className="flex w-full items-center gap-2">
          <button className="flex h-7 w-7 items-center justify-center rounded-full border bg-white text-gray-500">
            ←
          </button>
          <div className="flex flex-1 gap-2 overflow-hidden">
            <div className="h-16 min-w-[85px] rounded-lg bg-indigo-500" />
            <div className="h-16 min-w-[85px] rounded-lg bg-violet-500" />
            <div className="h-16 min-w-[85px] rounded-lg bg-gray-300" />
          </div>
          <button className="flex h-7 w-7 items-center justify-center rounded-full border bg-white text-gray-500">
            →
          </button>
        </div>
      ),
    },
    {
      name: "Card",
      description: "Simple surfaces for organizing interface content.",
      preview: (
        <div className="w-full rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
          <div className="mb-2 h-2.5 w-24 rounded bg-gray-800" />
          <div className="h-2 w-40 rounded bg-gray-200" />
          <div className="mt-3 h-2 w-28 rounded bg-gray-200" />
        </div>
      ),
    },
  ];

  return (
    <div className="mx-auto w-full max-w-7xl">
      <section className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white">
        <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-indigo-100 blur-3xl" />
        <div className="absolute -bottom-40 -left-32 h-80 w-80 rounded-full bg-violet-100 blur-3xl" />

        <div className="relative grid min-h-[620px] items-center gap-16 px-8 py-20 lg:grid-cols-2 lg:px-16">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1.5 text-sm text-gray-600 shadow-sm">
              <Sparkles size={14} className="text-indigo-600" />
              A growing React component library
            </div>

            <h1 className="max-w-3xl text-5xl font-bold tracking-tight text-gray-950 sm:text-6xl lg:text-7xl">
              Build interfaces with{" "}
              <span className="text-indigo-600">better building blocks.</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-gray-500">
              EaseUI is a collection of reusable React components built with
              TypeScript, Tailwind CSS and CVA — designed to be composable,
              customizable and easy to understand.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <button
                onClick={() => navigate("/components/button")}
                className="group inline-flex items-center gap-2 rounded-lg bg-gray-950 px-5 py-3 text-sm font-medium text-white transition hover:bg-gray-800"
              >
                Explore Components
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>

              <button
                onClick={() => navigate("/about")}
                className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-5 py-3 text-sm font-medium text-gray-700 transition hover:border-gray-400 hover:bg-gray-50"
              >
                About EaseUI
              </button>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-gray-400">
              <span className="flex items-center gap-2">
                <Check size={15} className="text-green-500" />
                TypeScript
              </span>
              <span className="flex items-center gap-2">
                <Check size={15} className="text-green-500" />
                Tailwind CSS
              </span>
              <span className="flex items-center gap-2">
                <Check size={15} className="text-green-500" />
                CVA
              </span>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-3 shadow-2xl shadow-gray-200/70">
              <div className="flex items-center gap-2 border-b border-gray-200 px-3 pb-3">
                <div className="h-2.5 w-2.5 rounded-full bg-gray-300" />
                <div className="h-2.5 w-2.5 rounded-full bg-gray-300" />
                <div className="h-2.5 w-2.5 rounded-full bg-gray-300" />
                <div className="ml-3 h-7 flex-1 rounded-md border border-gray-200 bg-white" />
              </div>

              <div className="relative flex min-h-[390px] items-center justify-center overflow-hidden rounded-xl bg-white p-8">
                <div className="absolute left-5 top-5 rounded-md border border-gray-200 bg-white px-3 py-2 text-xs font-medium text-gray-500 shadow-sm">
                  Carousel
                </div>

                <div className="w-full max-w-md">
                  <div className="mb-4 flex items-center justify-between">
                    <div>
                      <div className="mb-1 h-3 w-24 rounded bg-gray-900" />
                      <div className="h-2 w-36 rounded bg-gray-200" />
                    </div>
                    <div className="flex gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full border text-gray-400">
                        ←
                      </div>
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-900 text-white">
                        →
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3 overflow-hidden">
                    <div className="min-w-[150px] rounded-xl bg-indigo-600 p-5 text-white">
                      <Layers3 size={20} />
                      <div className="mt-12 text-sm font-semibold">
                        Components
                      </div>
                    </div>

                    <div className="min-w-[150px] rounded-xl bg-violet-500 p-5 text-white">
                      <Code2 size={20} />
                      <div className="mt-12 text-sm font-semibold">
                        Variants
                      </div>
                    </div>

                    <div className="min-w-[150px] rounded-xl bg-gray-900 p-5 text-white">
                      <Package size={20} />
                      <div className="mt-12 text-sm font-semibold">
                        Composition
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 flex justify-center gap-1.5">
                    <div className="h-1.5 w-5 rounded-full bg-gray-900" />
                    <div className="h-1.5 w-1.5 rounded-full bg-gray-300" />
                    <div className="h-1.5 w-1.5 rounded-full bg-gray-300" />
                  </div>
                </div>

                <div className="absolute bottom-5 right-5 flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-xs text-gray-500 shadow-sm">
                  <MousePointer2 size={13} />
                  Interactive components
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-indigo-600">
            Components
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-gray-950">
            Small pieces. Bigger interfaces.
          </h2>

          <p className="mt-4 text-lg leading-7 text-gray-500">
            Build interfaces from reusable pieces instead of solving the same
            UI problems again and again.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {components.map((component) => (
            <div
              key={component.name}
              className="group rounded-2xl border border-gray-200 bg-white p-6 transition hover:-translate-y-1 hover:border-gray-300 hover:shadow-lg"
            >
              <div className="mb-5 flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-950">
                    {component.name}
                  </h3>
                  <p className="mt-1 max-w-sm text-sm leading-6 text-gray-500">
                    {component.description}
                  </p>
                </div>

                <button
                  onClick={() =>
                    navigate(
                      `/components/${component.name.toLowerCase()}`
                    )
                  }
                  className="rounded-md p-2 text-gray-400 transition hover:bg-gray-100 hover:text-gray-900"
                >
                  <ArrowRight size={17} />
                </button>
              </div>

              <div className="flex min-h-[150px] items-center justify-center rounded-xl bg-gray-100 p-6">
                {component.preview}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="overflow-hidden rounded-3xl bg-gray-950 px-8 py-20 text-white lg:px-16">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-white/10">
              <Code2 size={22} />
            </div>

            <h2 className="text-4xl font-bold tracking-tight">
              One component.
              <br />
              Your way.
            </h2>

            <p className="mt-5 max-w-lg text-base leading-7 text-gray-400">
              Variants are built into the component system using CVA, giving
              you a clean API without sacrificing customization.
            </p>

            <button
              onClick={() => navigate("/components/carousel")}
              className="mt-7 inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-medium text-gray-950 transition hover:bg-gray-200"
            >
              See it in action
              <ArrowRight size={16} />
            </button>
          </div>

          <div className="overflow-hidden rounded-xl border border-white/10 bg-[#111] shadow-2xl">
            <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
              <Terminal size={15} className="text-gray-500" />
              <span className="text-xs text-gray-500">Carousel.tsx</span>
            </div>

            <pre className="overflow-x-auto p-6 text-sm leading-7 text-gray-300">
              <code>{`<Carousel
  size="lg"
  orientation="horizontal"
>
  <CarouselContent
    animation="slow"
    itemsPerView={3}
  >
    <CarouselItem>
      <Card />
    </CarouselItem>

    <CarouselItem>
      <Card />
    </CarouselItem>
  </CarouselContent>

  <CarouselPrevious />
  <CarouselNext />
</Carousel>`}</code>
            </pre>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
              <Layers3 size={20} />
            </div>
            <h3 className="text-xl font-semibold text-gray-950">
              Composable
            </h3>
            <p className="mt-3 leading-7 text-gray-500">
              Combine smaller components to create interfaces that fit your
              application instead of fighting against it.
            </p>
          </div>

          <div>
            <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
              <Code2 size={20} />
            </div>
            <h3 className="text-xl font-semibold text-gray-950">
              Customizable
            </h3>
            <p className="mt-3 leading-7 text-gray-500">
              Use variants and className overrides to adapt components to your
              own design system.
            </p>
          </div>

          <div>
            <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
              <Package size={20} />
            </div>
            <h3 className="text-xl font-semibold text-gray-950">
              Documented
            </h3>
            <p className="mt-3 leading-7 text-gray-500">
              Every component is presented with live examples, usage patterns
              and API references.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-gray-200 py-20 text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-indigo-600">
          Start building
        </p>

        <h2 className="text-4xl font-bold tracking-tight text-gray-950">
          Explore the component library.
        </h2>

        <p className="mx-auto mt-4 max-w-xl leading-7 text-gray-500">
          Discover reusable components, experiment with their variants and
          build your next interface with EaseUI.
        </p>

        <button
          onClick={() => navigate("/components/button")}
          className="mt-7 inline-flex items-center gap-2 rounded-lg bg-gray-950 px-6 py-3 text-sm font-medium text-white transition hover:bg-gray-800"
        >
          Explore Components
          <ArrowRight size={16} />
        </button>
      </section>
    </div>
  );
};

export default HomePage;