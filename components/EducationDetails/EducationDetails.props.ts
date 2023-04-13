import { DetailedHTMLProps, LiHTMLAttributes } from 'react'

export interface EducationDetailsProps
	extends DetailedHTMLProps<LiHTMLAttributes<HTMLLIElement>, HTMLLIElement> {
	type: string
	time: string
	place: string
	info: string
}
