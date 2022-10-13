import { clsx } from 'clsx'
import { InputHTMLAttributes, ReactNode } from "react";
import { Slot } from "@radix-ui/react-slot";

export interface inputGroupProps {
    children: ReactNode
}

export interface InputGroupIconProps {
    children: ReactNode
}

export interface InputGroupInputProps extends InputHTMLAttributes<HTMLInputElement> {}

function InputGroup(props: inputGroupProps) {
    return (
        <label className='flex items-center gap-3 h-12 p-3 rounded bg-gray-800 transition-all ring-cyan-500 focus-within:ring-2'>
            { props.children }
        </label>
    )
}

function InputGroupIcon(props: InputGroupIconProps) {
    return (
        <Slot className="w-6 h-6 text-gray-500">
            { props.children }
        </Slot>
    )
}

function InputGroupInput(props: InputGroupInputProps) {
    return (
        <input
            className="bg-transparent flex-1 text-gray-200 text-sm transition-all placeholder:text-gray-500 outline-none"
            {...props}
        />
    )
}

export const Input = {
    Group: InputGroup,
    Icon: InputGroupIcon,
    Input: InputGroupInput,
}