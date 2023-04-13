import { DetailedHTMLProps, HTMLAttributes, RefObject } from 'react'

export interface LiIconProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
	reference: RefObject<HTMLLIElement>
}
