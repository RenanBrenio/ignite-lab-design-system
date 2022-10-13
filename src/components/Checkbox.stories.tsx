import { Meta, StoryObj } from "@storybook/react";
import { Checkbox, CheckboxProps } from './Checkbox'
import { Text } from "./Text";

export default {
    title: 'Components/Checkbox',
    component: Checkbox,
    args: {},
    argTypes: {},
    decorators: [
        (Story) => {
            return (
                <label className="flex items-center gap-2">
                    {Story()}
                    <Text size="sm" content="Lembrar-se de mim por 30 dias" />
                </label>
            )
        }
    ]
} as Meta<CheckboxProps>

export const Default: StoryObj<CheckboxProps> = {}