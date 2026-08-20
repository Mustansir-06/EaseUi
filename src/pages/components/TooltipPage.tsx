import PropsTable from "@/components/Personal/PropsTable";
import ComponentDemo from "../ComponentsDemo";
import { Tooltip } from "@/components";

const TooltipPage = () => {
  

  const simple = `import { Tooltip } from "@/components/Tooltip/Tooltip";

<Tooltip content="Save your changes" position="top">
  <button className="px-4 py-2 bg-indigo-600 text-white rounded-md">
    Save
  </button>
</Tooltip>`;



  const positions = `import { Tooltip } from "@/components/Tooltip/Tooltip";

<div className="flex items-center justify-center gap-16 py-20">

  <Tooltip
    content="Tooltip on top"
    position="top"
    variant="dark"
  >
    <button className="px-4 py-2 bg-indigo-600 text-white rounded-md">
      Top
    </button>
  </Tooltip>

  <Tooltip
    content="Tooltip on bottom"
    position="bottom"
    variant="dark"
  >
    <button className="px-4 py-2 bg-indigo-600 text-white rounded-md">
      Bottom
    </button>
  </Tooltip>

  <Tooltip
    content="Tooltip on left"
    position="left"
    variant="dark"
  >
    <button className="px-4 py-2 bg-indigo-600 text-white rounded-md">
      Left
    </button>
  </Tooltip>

  <Tooltip
    content="Tooltip on right"
    position="right"
    variant="dark"
  >
    <button className="px-4 py-2 bg-indigo-600 text-white rounded-md">
      Right
    </button>
  </Tooltip>

</div>`;


  const variants = `import { Tooltip } from "@/components/Tooltip/Tooltip";

<div className="flex items-center justify-center gap-6 py-16">

  <Tooltip
    content="Light tooltip"
    variant="light"
  >
    <button className="px-4 py-2 bg-gray-800 text-white rounded-md">
      Light
    </button>
  </Tooltip>

  <Tooltip
    content="Dark tooltip"
    variant="dark"
  >
    <button className="px-4 py-2 bg-gray-800 text-white rounded-md">
      Dark
    </button>
  </Tooltip>

  <Tooltip
    content="Primary tooltip"
    variant="primary"
  >
    <button className="px-4 py-2 bg-gray-800 text-white rounded-md">
      Primary
    </button>
  </Tooltip>

  <Tooltip
    content="Secondary tooltip"
    variant="secondary"
  >
    <button className="px-4 py-2 bg-gray-800 text-white rounded-md">
      Secondary
    </button>
  </Tooltip>

</div>`;


  const sizes = `import { Tooltip } from "@/components/Tooltip/Tooltip";

<div className="flex items-center justify-center gap-8 py-16">

  <Tooltip
    content="Small tooltip"
    size="sm"
    variant="dark"
  >
    <button className="px-4 py-2 bg-indigo-600 text-white rounded-md">
      Small
    </button>
  </Tooltip>

  <Tooltip
    content="Medium tooltip"
    size="md"
    variant="dark"
  >
    <button className="px-4 py-2 bg-indigo-600 text-white rounded-md">
      Medium
    </button>
  </Tooltip>

  <Tooltip
    content="Large tooltip"
    size="lg"
    variant="dark"
  >
    <button className="px-4 py-2 bg-indigo-600 text-white rounded-md">
      Large
    </button>
  </Tooltip>

</div>`;


  const delay = `import { Tooltip } from "@/components/Tooltip/Tooltip";

<div className="flex items-center justify-center gap-8 py-16">

  <Tooltip
    content="Appears immediately"
    delay={0}
    variant="dark"
  >
    <button className="px-4 py-2 bg-indigo-600 text-white rounded-md">
      No Delay
    </button>
  </Tooltip>

  <Tooltip
    content="Appears after 500ms"
    delay={500}
    variant="dark"
  >
    <button className="px-4 py-2 bg-indigo-600 text-white rounded-md">
      500ms
    </button>
  </Tooltip>

  <Tooltip
    content="Appears after 1 second"
    delay={1000}
    variant="dark"
  >
    <button className="px-4 py-2 bg-indigo-600 text-white rounded-md">
      1 Second
    </button>
  </Tooltip>

</div>`;


  const animations = `import { Tooltip } from "@/components/Tooltip/Tooltip";

<div className="flex items-center justify-center gap-8 py-16">

  <Tooltip
    content="Fade in animation"
    animation="fadeIn"
    variant="dark"
  >
    <button className="px-4 py-2 bg-indigo-600 text-white rounded-md">
      Fade In
    </button>
  </Tooltip>

  <Tooltip
    content="Scale in animation"
    animation="scaleIn"
    variant="dark"
  >
    <button className="px-4 py-2 bg-indigo-600 text-white rounded-md">
      Scale In
    </button>
  </Tooltip>

  <Tooltip
    content="Slide up animation"
    animation="slideUp"
    variant="dark"
  >
    <button className="px-4 py-2 bg-indigo-600 text-white rounded-md">
      Slide Up
    </button>
  </Tooltip>

  <Tooltip
    content="No animation"
    animation="none"
    variant="dark"
  >
    <button className="px-4 py-2 bg-indigo-600 text-white rounded-md">
      None
    </button>
  </Tooltip>

</div>`;


  const disabled = `import { Tooltip } from "@/components/Tooltip/Tooltip";

<div className="flex items-center justify-center gap-8 py-16">

  <Tooltip
    content="This tooltip is enabled"
    disabled={false}
    variant="dark"
  >
    <button className="px-4 py-2 bg-indigo-600 text-white rounded-md">
      Enabled
    </button>
  </Tooltip>

  <Tooltip
    content="This tooltip is disabled"
    disabled={true}
    variant="dark"
  >
    <button className="px-4 py-2 bg-gray-500 text-white rounded-md">
      Disabled
    </button>
  </Tooltip>

</div>`;


  const propsData = [
    {
      prop: "content",
      type: "React.ReactNode",
      default: "—",
      description: "The content displayed inside the tooltip.",
    },
    {
      prop: "position",
      type: '"top" | "bottom" | "left" | "right"',
      default: '"top"',
      description:
        "Controls the position of the tooltip relative to the target element.",
    },
    {
      prop: "variant",
      type: '"light" | "dark" | "primary" | "secondary"',
      default: '"light"',
      description:
        "Controls the visual style and color scheme of the tooltip.",
    },
    {
      prop: "size",
      type: '"sm" | "md" | "lg"',
      default: '"sm"',
      description:
        "Controls the size, padding, and text size of the tooltip.",
    },
    {
      prop: "delay",
      type: "number",
      default: "0",
      description:
        "The delay in milliseconds before the tooltip appears after hovering.",
    },
    {
      prop: "animation",
      type: '"fadeIn" | "scaleIn" | "slideUp" | "bounceIn" | "none"',
      default: '"fadeIn"',
      description:
        "Controls the entrance animation played when the tooltip appears.",
    },
    {
      prop: "disabled",
      type: "boolean",
      default: "false",
      description:
        "Disables the tooltip and prevents it from appearing when the target is hovered.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-12">


      <header className="space-y-2">
        <p
          className="text-4xl font-bold tracking-tight"
          style={{ color: "var(--text-color)" }}
        >
          Tooltip
        </p>

        <p className="text-lg text-gray-600">
          Displays additional information when users hover over or focus on
          an element.
        </p>
      </header>


      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">
          Usage
        </h2>

        <ComponentDemo code={simple}>
          <div className="flex items-center justify-center py-16">

            <Tooltip
              content="Save your changes"
              position="top"
            >
              <button className="px-4 py-2 bg-indigo-600 text-white rounded-md">
                Save
              </button>
            </Tooltip>

          </div>
        </ComponentDemo>
      </section>


      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">
          Positions
        </h2>

        <p className="text-gray-600">
          Tooltips can be positioned around the target element using the
          position prop.
        </p>

        <ComponentDemo code={positions}>
          <div className="flex items-center justify-center gap-16 py-20">

            <Tooltip
              content="Tooltip on top"
              position="top"
              variant="dark"
            >
              <button className="px-4 py-2 bg-indigo-600 text-white rounded-md">
                Top
              </button>
            </Tooltip>

            <Tooltip
              content="Tooltip on bottom"
              position="bottom"
              variant="dark"
            >
              <button className="px-4 py-2 bg-indigo-600 text-white rounded-md">
                Bottom
              </button>
            </Tooltip>

            <Tooltip
              content="Tooltip on left"
              position="left"
              variant="dark"
            >
              <button className="px-4 py-2 bg-indigo-600 text-white rounded-md">
                Left
              </button>
            </Tooltip>

            <Tooltip
              content="Tooltip on right"
              position="right"
              variant="dark"
            >
              <button className="px-4 py-2 bg-indigo-600 text-white rounded-md">
                Right
              </button>
            </Tooltip>

          </div>
        </ComponentDemo>
      </section>


      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">
          Variants
        </h2>

        <p className="text-gray-600">
          Choose different visual styles to match the context of your
          interface.
        </p>

        <ComponentDemo code={variants}>
          <div className="flex items-center justify-center gap-6 py-16">

            <Tooltip
              content="Light tooltip"
              variant="light"
            >
              <button className="px-4 py-2 bg-gray-800 text-white rounded-md">
                Light
              </button>
            </Tooltip>

            <Tooltip
              content="Dark tooltip"
              variant="dark"
            >
              <button className="px-4 py-2 bg-gray-800 text-white rounded-md">
                Dark
              </button>
            </Tooltip>

            <Tooltip
              content="Primary tooltip"
              variant="primary"
            >
              <button className="px-4 py-2 bg-gray-800 text-white rounded-md">
                Primary
              </button>
            </Tooltip>

            <Tooltip
              content="Secondary tooltip"
              variant="secondary"
            >
              <button className="px-4 py-2 bg-gray-800 text-white rounded-md">
                Secondary
              </button>
            </Tooltip>

          </div>
        </ComponentDemo>
      </section>


      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">
          Sizes
        </h2>

        <p className="text-gray-600">
          Tooltips are available in small, medium, and large sizes.
        </p>

        <ComponentDemo code={sizes}>
          <div className="flex items-center justify-center gap-8 py-16">

            <Tooltip
              content="Small tooltip"
              size="sm"
              variant="dark"
            >
              <button className="px-4 py-2 bg-indigo-600 text-white rounded-md">
                Small
              </button>
            </Tooltip>

            <Tooltip
              content="Medium tooltip"
              size="md"
              variant="dark"
            >
              <button className="px-4 py-2 bg-indigo-600 text-white rounded-md">
                Medium
              </button>
            </Tooltip>

            <Tooltip
              content="Large tooltip"
              size="lg"
              variant="dark"
            >
              <button className="px-4 py-2 bg-indigo-600 text-white rounded-md">
                Large
              </button>
            </Tooltip>

          </div>
        </ComponentDemo>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">
          Delay
        </h2>

        <p className="text-gray-600">
          Control how long the user must hover over the element before the
          tooltip appears.
        </p>

        <ComponentDemo code={delay}>
          <div className="flex items-center justify-center gap-8 py-16">

            <Tooltip
              content="Appears immediately"
              delay={0}
              variant="dark"
            >
              <button className="px-4 py-2 bg-indigo-600 text-white rounded-md">
                No Delay
              </button>
            </Tooltip>

            <Tooltip
              content="Appears after 500ms"
              delay={500}
              variant="dark"
            >
              <button className="px-4 py-2 bg-indigo-600 text-white rounded-md">
                500ms
              </button>
            </Tooltip>

            <Tooltip
              content="Appears after 1 second"
              delay={1000}
              variant="dark"
            >
              <button className="px-4 py-2 bg-indigo-600 text-white rounded-md">
                1 Second
              </button>
            </Tooltip>

          </div>
        </ComponentDemo>
      </section>
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">
          Animation
        </h2>

        <p className="text-gray-600">
          Choose an entrance animation for the tooltip when it becomes
          visible.
        </p>

        <ComponentDemo code={animations}>
          <div className="flex items-center justify-center gap-8 py-16">

            <Tooltip
              content="Fade in animation"
              animation="fadeIn"
              variant="dark"
            >
              <button className="px-4 py-2 bg-indigo-600 text-white rounded-md">
                Fade In
              </button>
            </Tooltip>

            <Tooltip
              content="Scale in animation"
              animation="scaleIn"
              variant="dark"
            >
              <button className="px-4 py-2 bg-indigo-600 text-white rounded-md">
                Scale In
              </button>
            </Tooltip>

            <Tooltip
              content="Slide up animation"
              animation="slideUp"
              variant="dark"
            >
              <button className="px-4 py-2 bg-indigo-600 text-white rounded-md">
                Slide Up
              </button>
            </Tooltip>

            <Tooltip
              content="Bounce in animation"
              animation="bounceIn"
              variant="dark"
            >
              <button className="px-4 py-2 bg-indigo-600 text-white rounded-md">
                Bounce In
              </button>
            </Tooltip>

            <Tooltip
              content="No animation"
              animation="none"
              variant="dark"
            >
              <button className="px-4 py-2 bg-indigo-600 text-white rounded-md">
                None
              </button>
            </Tooltip>

          </div>
        </ComponentDemo>
      </section>


      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">
          Disabled
        </h2>

        <p className="text-gray-600">
          Disable the tooltip when additional information is not required or
          should not be displayed.
        </p>

        <ComponentDemo code={disabled}>
          <div className="flex items-center justify-center gap-8 py-16">

            <Tooltip
              content="This tooltip is enabled"
              disabled={false}
              variant="dark"
            >
              <button className="px-4 py-2 bg-indigo-600 text-white rounded-md">
                Enabled
              </button>
            </Tooltip>

            <Tooltip
              content="This tooltip is disabled"
              disabled={true}
              variant="dark"
            >
              <button className="px-4 py-2 bg-gray-500 text-white rounded-md">
                Disabled
              </button>
            </Tooltip>

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

export default TooltipPage;