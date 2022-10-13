import { Slot } from '@radix-ui/react-slot'
import { clsx } from 'clsx'
import { ReactNode } from "react";

export interface TextProps {
    size?: 'sm' | 'md' | 'lg';
    content?: ReactNode,
    asChild?: boolean
}

export function Text({ size = 'md', content, asChild }: TextProps) {
    const Comp = asChild ? Slot : 'span';

    return (
        <Comp className={
            clsx('text-gray-200 font-sans',
                {
                    'text-xs': size === 'sm',
                    'text-sm': size === 'md',
                    'text-md': size === 'lg',
                }
            )
        }>
            { content }
        </Comp>
    )
}