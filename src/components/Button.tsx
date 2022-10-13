import { Slot } from '@radix-ui/react-slot'
import { clsx } from 'clsx'
import { ReactNode } from "react";

export interface ButtonProps {
    content: ReactNode,
    asChild: boolean
}

export function Button({ content, asChild }: ButtonProps) {
    const Comp = asChild ? Slot : 'button';

    return (
        <Comp className={
            clsx('px-6 py-3 bg-cyan-500 text-gray-900 rounded font-bold text-sm w-full transition-all hover:bg-cyan-400 focus:ring-2 focus:ring-white',
                {
                }
            )
        }>
            { content }
        </Comp>
    )
}