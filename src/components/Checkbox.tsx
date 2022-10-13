import { Slot } from '@radix-ui/react-slot'
import { clsx } from 'clsx'
import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { Check } from 'phosphor-react'
import { ReactNode } from "react";

export interface CheckboxProps {}

export function Checkbox({ }: CheckboxProps) {

    return (
        <label>
            <CheckboxPrimitive.Root className="w-6 h-6 bg-gray-800 rounded flex items-center justify-center">
                <CheckboxPrimitive.Indicator asChild>
                    <Check weight="bold" className="h-4 w-4 text-cyan-500" />
                </CheckboxPrimitive.Indicator>
            </CheckboxPrimitive.Root>
        </label>
    )
}