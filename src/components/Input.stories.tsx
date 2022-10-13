import { Meta, StoryObj } from "@storybook/react";
import { Input, inputGroupProps } from './Input'
import { Envelope, Lock } from "phosphor-react";

export default {
    title: 'Components/Input',
    component: Input.Group,
    args: {
        children: (
            <>
                <Input.Input type="text" placeholder="Type your text" />
            </>
        )
    },
    argTypes: {
    }
} as Meta<inputGroupProps>

export const Text: StoryObj<inputGroupProps> = {}

export const Email: StoryObj<inputGroupProps> = {
    args: {
        children: (
            <>
                <Input.Icon>
                    <Envelope />
                </Input.Icon>
                <Input.Input type="email" placeholder="email@example.com" />
            </>
        )
    }
}

export const Password: StoryObj<inputGroupProps> = {
    args: {
        children: (
            <>
                <Input.Icon>
                    <Lock />
                </Input.Icon>
                <Input.Input type="password" placeholder="Type your password" />
            </>
        )
    }
}
