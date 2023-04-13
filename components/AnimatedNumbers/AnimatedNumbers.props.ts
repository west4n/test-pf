import { DetailedHTMLProps, HTMLAttributes } from 'react'

export interface AnimatedNumbersProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
	value: number
}
