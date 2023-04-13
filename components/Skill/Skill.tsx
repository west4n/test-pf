import { SkillProps } from './Skill.props'

import { motion } from 'framer-motion'

export const Skill = ({ name, x, y }: SkillProps): JSX.Element => {
	return (
		<motion.div
			whileHover={{ scale: 1.05 }}
			initial={{ x: 0, y: 0 }}
			whileInView={{ x: x, y: y }}
			transition={{ duration: 1.5 }}
			viewport={{ once: true }}
			className='absolute flex cursor-pointer items-center justify-center rounded-full bg-dark px-6 py-3 font-semibold text-light shadow-dark'
		>
			{name}
		</motion.div>
	)
}
