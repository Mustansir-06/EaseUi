import {
  ArrowRight,
  Boxes,
  Check,
  Code2,
  Layers3,
  Package,
  Sparkles,
  Terminal,
} from "lucide-react";
import { useNavigate } from "react-router";

type Props = {};

const AboutPage = ({}: Props) => {
  const navigate = useNavigate();

  return (
    <div className="mx-auto w-full max-w-7xl">
      <section className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white">
        <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-indigo-100 blur-3xl" />

        <div className="relative px-8 py-24 lg:px-16 lg:py-32">
          <div className="max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1.5 text-sm text-gray-600 shadow-sm">
              <Sparkles size={14} className="text-indigo-600" />
              About EaseUI
            </div>

            <h1 className="text-5xl font-bold tracking-tight text-gray-950 sm:text-6xl lg:text-7xl">
              Built from the idea that good UI starts with{" "}
              <span className="text-indigo-600">good building blocks.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-gray-500">
              EaseUI is a growing collection of reusable React components
              focused on composition, predictable APIs, flexible variants and
              a developer-friendly experience.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <span className="rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-sm text-gray-600">
                React
              </span>
              <span className="rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-sm text-gray-600">
                TypeScript
              </span>
              <span className="rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-sm text-gray-600">
                Tailwind CSS
              </span>
              <span className="rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-sm text-gray-600">
                CVA
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-16 py-24 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600">
            Why EaseUI?
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-gray-950">
            Why build another component library?
          </h2>
        </div>

        <div className="space-y-6 text-lg leading-8 text-gray-500">
          <p>
            Because building interfaces often means solving the same problems
            repeatedly — buttons, tooltips, cards, navigation, layouts and
            interactive components.
          </p>

          <p>
            EaseUI focuses on turning those patterns into reusable components
            with APIs that are easy to understand and flexible enough to fit
            different interfaces.
          </p>

          <p>
            The goal isn't to hide how components work. The goal is to make
            them easier to compose, customize and reuse.
          </p>
        </div>
      </section>

      <section className="rounded-3xl bg-gray-950 px-8 py-20 text-white lg:px-16">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-indigo-400">
              Component philosophy
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight">
              A component isn't finished when it works.
            </h2>

            <p className="mt-5 max-w-lg text-gray-400 leading-7">
              It is finished when it can be reused, customized and understood
              without having to dig through the implementation.
            </p>
          </div>

          <div className="space-y-3">
            {[
              ["01", "API", "Keep component interfaces clear and predictable."],
              [
                "02",
                "Variants",
                "Support different visual and behavioral requirements.",
              ],
              [
                "03",
                "Composition",
                "Build complex interfaces from smaller pieces.",
              ],
              [
                "04",
                "Documentation",
                "Show developers how components actually work.",
              ],
            ].map(([number, title, description]) => (
              <div
                key={number}
                className="flex gap-5 rounded-xl border border-white/10 bg-white/[0.03] p-5 transition hover:bg-white/[0.06]"
              >
                <span className="font-mono text-sm text-gray-600">
                  {number}
                </span>

                <div>
                  <h3 className="font-semibold text-white">{title}</h3>
                  <p className="mt-1 text-sm leading-6 text-gray-500">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mb-12 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600">
            The system
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-gray-950">
            One component can become many interfaces.
          </h2>

          <p className="mt-4 leading-7 text-gray-500">
            EaseUI uses variants and composition to keep the component API
            simple while giving developers control over the final interface.
          </p>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-gray-50 p-8 lg:p-12">
          <div className="grid gap-5 md:grid-cols-4">
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                <Boxes size={20} />
              </div>

              <h3 className="font-semibold text-gray-950">Component</h3>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                A reusable building block.
              </p>
            </div>

            <div className="flex items-center justify-center text-gray-300 md:block md:pt-10">
              <ArrowRight className="hidden md:block" />
              <span className="md:hidden">↓</span>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                <Layers3 size={20} />
              </div>

              <h3 className="font-semibold text-gray-950">Variants</h3>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                Different visual and behavioral options.
              </p>
            </div>

            <div className="flex items-center justify-center text-gray-300 md:block md:pt-10">
              <ArrowRight className="hidden md:block" />
              <span className="md:hidden">↓</span>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                <Package size={20} />
              </div>

              <h3 className="font-semibold text-gray-950">Interface</h3>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                A component adapted to your application.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-12 py-12 lg:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600">
            CVA
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-gray-950">
            Variants without the mess.
          </h2>

          <p className="mt-5 max-w-lg leading-7 text-gray-500">
            Class Variance Authority helps keep visual variations explicit and
            predictable while allowing components to remain reusable.
          </p>

          <div className="mt-7 space-y-3">
            {[
              "Explicit component variants",
              "Reusable styling patterns",
              "Clean TypeScript APIs",
              "Easy customization",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 text-sm text-gray-600"
              >
                <Check size={16} className="text-green-500" />
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-[#111] shadow-xl">
          <div className="flex items-center gap-2 border-b border-white/10 px-5 py-4">
            <Terminal size={15} className="text-gray-500" />
            <span className="text-xs text-gray-500">component.tsx</span>
          </div>

          <pre className="overflow-x-auto p-6 text-sm leading-7 text-gray-300">
            <code>{`const componentVariant = cva(
  "relative w-full",
  {
    variants: {
      size: {
        sm: "...",
        md: "...",
        lg: "...",
        full: "..."
      },
      orientation: {
        horizontal: "...",
        vertical: "..."
      }
    }
  }
);`}</code>
          </pre>
        </div>
      </section>

      <section className="py-24">
        <div className="mb-12 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600">
            Current components
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-gray-950">
            Built to be explored.
          </h2>

          <p className="mt-4 leading-7 text-gray-500">
            Components are presented through live examples so you can see how
            they behave before using them.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["Button", "Actions and interactions"],
            ["Card", "Content surfaces"],
            ["Modal", "Focused interactions"],
            ["Input", "Form controls"],
            ["Navbar", "Navigation"],
            ["Carousel", "Content navigation"],
            ["Tooltip", "Contextual information"],
            ["Layout", "Page structure"],
          ].map(([name, description]) => (
            <button
              key={name}
              onClick={() => navigate(`/components/${name.toLowerCase()}`)}
              className="group rounded-xl border border-gray-200 bg-white p-5 text-left transition hover:-translate-y-1 hover:border-gray-300 hover:shadow-lg"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-gray-950">{name}</h3>

                <ArrowRight
                  size={16}
                  className="text-gray-300 transition group-hover:translate-x-1 group-hover:text-gray-900"
                />
              </div>

              <p className="mt-2 text-sm text-gray-500">{description}</p>
            </button>
          ))}
        </div>
      </section>

      <section className="border-t border-gray-200 py-24 text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
          <Code2 size={22} />
        </div>

        <h2 className="mt-6 text-4xl font-bold tracking-tight text-gray-950">
          Build something with EaseUI.
        </h2>

        <p className="mx-auto mt-4 max-w-xl leading-7 text-gray-500">
          Explore the components, experiment with the variants and find the
          building blocks for your next interface.
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

export default AboutPage;