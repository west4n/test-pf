import { DetailedHTMLProps, LiHTMLAttributes } from 'react'

export interface DetailsProps
	extends DetailedHTMLProps<LiHTMLAttributes<HTMLLIElement>, HTMLLIElement> {
	position: string
	company: string
	companyLink: string
	time: string
	address: string
	work: string
}
