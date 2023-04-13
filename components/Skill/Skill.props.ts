import { DetailedHTMLProps, HTMLAttributes } from 'react'

export interface SkillProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	name: string
	x: string
	y: string
}
