import { DetailedHTMLProps, HTMLAttributes } from 'react'

export interface AnimatedTextProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	text: string
}
