import { motion, useScroll } from 'framer-motion'

import { useRef } from 'react'
import EducationDetails from '../EducationDetails/EducationDetails'
import { EducationProps } from './Education.props'

const Education = ({}: EducationProps): JSX.Element => {
	const ref = useRef<HTMLDivElement>(null)

	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['start end', 'center start'],
	})

	return (
		<div className='my-64'>
			<h2 className='mb-32 w-full text-center text-8xl font-bold'>Education</h2>

			<div ref={ref} className='relative mx-auto w-[75%]'>
				<motion.div
					style={{ scaleY: scrollYProgress }}
					className='absolute left-9 top-0 h-full w-[4px] origin-top bg-dark'
				/>

				<ul className='ml-4 flex w-full flex-col items-start justify-between'>
					<EducationDetails
						type='Bachelor Of Science In Computer Science'
						time='2016-2020'
						place='Massachusetts Institute Of Technology (MIT)'
						info={`Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial 
						Intelligence.`}
					/>
					<EducationDetails
						type='Master Of Computer Science'
						time='2020-2022'
						place='Stanford University'
						info={`Completed a master's project on deep learning, developing a new neural network architecture for natural 
						language understanding.`}
					/>
					<EducationDetails
						type='Online Coursework'
						time='2016-2020'
						place='Coursera And EdX'
						info={`Completed coursework in advanced topics such as Reinforcement Learning, Computer Vision, and Machine 
						Learning Engineering.`}
					/>
				</ul>
			</div>
		</div>
	)
}

export default Education
