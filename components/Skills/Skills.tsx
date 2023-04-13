import { motion } from 'framer-motion'

import { Skill } from '../Skill/Skill'
import { SkillsProps } from './Skills.props'

export const Skills = ({}: SkillsProps): JSX.Element => {
	return (
		<>
			<h2 className='mt-64 w-full text-center text-8xl font-bold'>Skills</h2>

			<div className='relative flex h-screen w-full items-center justify-center rounded-full bg-circularLight'>
				<motion.div
					whileHover={{ scale: 1.05 }}
					className='flex cursor-pointer items-center justify-center rounded-full bg-dark p-8 font-semibold text-light shadow-dark'
				>
					Web
				</motion.div>
				<Skill name='HTML' x='-25vw' y='-2vw' />
				<Skill name='CSS' x='-6vw' y='-11vw' />
				<Skill name='JavaScript' x='25vw' y='-6vw' />
				<Skill name='TypeScript' x='0vw' y='-18vw' />
				<Skill name='ReactJS' x='15vw' y='-12vw' />
				<Skill name='NextJS' x='-20vw' y='-15vw' />
				<Skill name='Vite' x='15vw' y='0vw' />
				<Skill name='Web Design' x='25vw' y='10vw' />
				<Skill name='Figma' x='-15vw' y='15vw' />
				<Skill name='Tailwind CSS' x='-5vw' y='8vw' />
			</div>
		</>
	)
}
