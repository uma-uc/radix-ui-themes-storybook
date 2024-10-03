import type { Meta, StoryObj } from "@storybook/react"
import { buttonPropDefs } from "@radix-ui/themes/props"
import { Button } from "@radix-ui/themes"

const {variant, size, loading, asChild, highContrast, radius, color} = buttonPropDefs
const variants = Object.fromEntries(
  variant.values.map(v => [v, v])
)
const sizes = Object.fromEntries(
  size.values.map(v => [v, v])
)

const radiuses = Object.fromEntries(
  radius.values.map(v => [v, v])
)
// @see https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Atoms/Button",
  component: Button,
  argTypes: {
    className: {
      description: "Example description",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "bar" },
      },
      control: "text",
    },
    variant: {
      description: "Defines the variant of the button",
      table: {
        type: { summary: variant.values.join("|") },
        defaultValue: { summary: variant.default },
      },
      control: "select",
      options: Object.values(variants),
    },
    size: {
      description: "Defines the size of the button",
      table: {
        type: { summary: size.type },
        defaultValue: { summary: size.default },
      },
      control: "select",
      options: Object.values(sizes),
    },
    radius :{
      description: "Override or extend the styles applied to the component",
      table: {
        category: "Override/extend",
        type: { summary: radius.type },
        defaultValue: { summary: radius.default },
      },
      control: "select",
      options: Object.values(radiuses),
    }
  }
}  satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

// @see https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    variant: variant.default,
    size: size.default,
    children: "My button",
  },
}

export const Soft: Story = {
  args: {
    ...Default.args,
    variant: variants['soft'],
  },
}

export const Outline: Story = {
  args: {
    ...Default.args,
    variant: variants['outline'],
  },
}

export const Ghost: Story = {
  args: {
    ...Default.args,
    variant: variants['ghost'],
  },
}
export const All: Story = {
  render: () => {
    return (
      <>
        {variant.values.map((variant) => (
          <div className="flex items-baseline space-x-2" key={variant}>
            <div className="w-[100px] text-sm text-slate-500">{variant}</div>
            <div className="mb-4 flex items-center space-x-2">
              {size.values.map((size) => (
                <Button
                  variant={variant}
                  size={size}
                  key={`${variant}-${size}`}
                >
                  {`${variant} (${size})`}
                </Button>
              ))}
            </div>
          </div>
        ))}
      </>
    )
  },
}
