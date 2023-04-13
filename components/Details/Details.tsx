import { motion } from 'framer-motion'
import { useRef } from 'react'
import LiIcon from '../LiIcon/LiIcon'
import { DetailsProps } from './Details.props'

const Details = ({
	address,
	company,
	companyLink,
	position,
	time,
	work,
	...props
}: DetailsProps): JSX.Element => {
	const ref = useRef<HTMLLIElement>(null)

	return (
		<li
			ref={ref}
			className='mx-auto my-8 flex w-[60%] flex-col items-center justify-between first:mt-0 last:mb-0'
			{...props}
		>
			<LiIcon reference={ref} />
			<motion.div
				initial={{ y: 50 }}
				whileInView={{ y: 0 }}
				transition={{ duration: 0.5, type: 'spring' }}
			>
				<h3 className='text-2xl font-bold capitalize'>
					{position}&nbsp;
					<a
						href={companyLink}
						target='_blank'
						className='capitalize text-primary'
					>
						@{company}
					</a>
				</h3>
				<span className='font-medium capitalize text-dark/75'>
					{time} | {address}
				</span>
				<p className='w-full font-medium'>{work}</p>
			</motion.div>
		</li>
	)
}

export default Details
