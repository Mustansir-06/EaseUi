import { Navbar } from "@/components/navbar";
import ComponentDemo from "../ComponentsDemo";
import PropsTable from "@/components/Personal/PropsTable";

const NavbarPage = () => {
  const props = [
    {
      prop: "variant",
      type: '"light" | "dark" | "primary" | "glass"',
      default: '"light"',
      description:
        "Controls the visual appearance of the navbar.",
    },
    {
      prop: "size",
      type: '"sm" | "default" | "lg" | "xl"',
      default: '"default"',
      description:
        "Controls the height of the navbar.",
    },
    {
      prop: "animation",
      type: "keyof entranceAnimations",
      default: '"fadeIn"',
      description:
        "Controls the entrance animation applied when the navbar mounts.",
    },
    {
      prop: "hoverAnimation",
      type: "keyof hoverAnimations",
      default: '"none"',
      description:
        "Controls the animation triggered when hovering over the navbar.",
    },
    {
      prop: "asChild",
      type: "boolean",
      default: "false",
      description:
        "Uses Radix Slot to render the navbar as another element.",
    },
    {
      prop: "className",
      type: "string",
      default: "—",
      description:
        "Adds additional custom CSS or Tailwind classes.",
    },
  ];

  return (
    <div className="space-y-16">
      <div>
        <h1 className="text-4xl font-bold tracking-tight">
          Navbar
        </h1>

        <p className="mt-3 max-w-2xl text-lg text-gray-500">
          A flexible navigation component with multiple
          visual variants, responsive sizes, entrance
          animations, and interactive hover effects.
        </p>
      </div>

      <section>
        <h2 className="mb-5 text-2xl font-semibold">
          Usage
        </h2>

        <ComponentDemo
          code={`import { Navbar } from "@/components/navbar";

<Navbar />`}
        >
          <Navbar />
        </ComponentDemo>
      </section>

      <section>
        <h2 className="mb-5 text-2xl font-semibold">
          Variants
        </h2>

        <p className="mb-6 text-gray-500">
          Choose from different visual styles depending
          on the design of your application.
        </p>

        <div className="space-y-8">
          <div>
            <h3 className="mb-3 text-sm font-medium text-gray-500">
              Light
            </h3>

            <ComponentDemo
              code={`<Navbar variant="light" />`}
            >
              <Navbar variant="light" />
            </ComponentDemo>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-medium text-gray-500">
              Dark
            </h3>

            <ComponentDemo
              code={`<Navbar variant="dark" />`}
            >
              <Navbar variant="dark" />
            </ComponentDemo>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-medium text-gray-500">
              Primary
            </h3>

            <ComponentDemo
              code={`<Navbar variant="primary" />`}
            >
              <Navbar variant="primary" />
            </ComponentDemo>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-medium text-gray-500">
              Glass
            </h3>

            <div className="rounded-lg bg-slate-900 p-6">
              <ComponentDemo
                code={`<Navbar variant="glass" />`}
              >
                <Navbar variant="glass" />
              </ComponentDemo>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="mb-5 text-2xl font-semibold">
          Sizes
        </h2>

        <p className="mb-6 text-gray-500">
          Control the overall height of the navigation
          component.
        </p>

        <div className="space-y-8">
          <div>
            <h3 className="mb-3 text-sm font-medium text-gray-500">
              Small
            </h3>

            <ComponentDemo
              code={`<Navbar size="sm" />`}
            >
              <Navbar size="sm" />
            </ComponentDemo>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-medium text-gray-500">
              Default
            </h3>

            <ComponentDemo
              code={`<Navbar size="default" />`}
            >
              <Navbar size="default" />
            </ComponentDemo>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-medium text-gray-500">
              Large
            </h3>

            <ComponentDemo
              code={`<Navbar size="lg" />`}
            >
              <Navbar size="lg" />
            </ComponentDemo>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-medium text-gray-500">
              Extra Large
            </h3>

            <ComponentDemo
              code={`<Navbar size="xl" />`}
            >
              <Navbar size="xl" />
            </ComponentDemo>
          </div>
        </div>
      </section>

      <section>
        <h2 className="mb-5 text-2xl font-semibold">
          Entrance Animation
        </h2>

        <p className="mb-6 text-gray-500">
          Animate the navbar when it first appears on the
          page.
        </p>

        <ComponentDemo
          code={`<Navbar animation="fadeIn" />`}
        >
          <Navbar animation="fadeIn" />
        </ComponentDemo>
      </section>

      <section>
        <h2 className="mb-5 text-2xl font-semibold">
          Hover Animation
        </h2>

        <p className="mb-6 text-gray-500">
          Add an interactive GSAP animation when the user
          hovers over the navbar.
        </p>

        <ComponentDemo
          code={`<Navbar hoverAnimation="scale" />`}
        >
          <Navbar hoverAnimation="scale" />
        </ComponentDemo>
      </section>

      <section>
        <h2 className="mb-5 text-2xl font-semibold">
          Combined Example
        </h2>

        <p className="mb-6 text-gray-500">
          Combine variants, sizes, and animations to
          create a customized navbar.
        </p>

        <ComponentDemo
          code={`<Navbar
  variant="dark"
  size="lg"
  animation="fadeIn"
  hoverAnimation="scale"
/>`}
        >
          <Navbar
            variant="dark"
            size="lg"
            animation="fadeIn"
            hoverAnimation="scale"
          />
        </ComponentDemo>
      </section>

      <section className="pb-12">
        <h2 className="mb-5 text-2xl font-semibold">
          API Reference
        </h2>

        <PropsTable data={props} />
      </section>
    </div>
  );
};

export default NavbarPage;