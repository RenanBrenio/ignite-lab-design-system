import { Meta, StoryObj } from "@storybook/react";
import { Heading, HeadingProps } from './Heading'

export default {
    title: 'Components/Heading',
    component: Heading,
    args: {
        content: 'Lorem Ipsum',
        size: 'md'
    },
    argTypes: {
        size: {
            options: ['sm', 'md', 'lg'],
            control: {
                type: 'inline-radio'
            }
        }
    }
} as Meta<HeadingProps>

export const Small: StoryObj<HeadingProps> = {
    args: {
        size: 'sm'
    }
}

export const Medium: StoryObj<HeadingProps> = {}

export const Large: StoryObj<HeadingProps> = {
    args: {
        size: 'lg'
    }
}

export const CustomComponent: StoryObj<HeadingProps> = {
    args: {
        asChild: true,
        content: (
            <h1>H1 Heading</h1>
        )
    },
    argTypes: {
        content: {
            table: {
                disable: true
            }
        },
        asChild: {
            table: {
                disable: true
            }
        }
    }
}
