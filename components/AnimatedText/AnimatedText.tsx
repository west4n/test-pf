import { motion } from 'framer-motion'
import { AnimatedTextProps } from './AnimatedText.props'

const quote = {
	initial: {
		opacity: 1,
	},
	animate: {
		opacity: 1,
		transition: {
			delay: 0.5,
			staggerChildren: 0.08,
		},
	},
}

const singleWord = {
	initial: {
		opacity: 0,
		y: 50,
	},
	animate: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 1,
		},
	},
}

export const AnimatedText = ({
	text,
	className = '',
	...props
}: AnimatedTextProps): JSX.Element => {
	return (
		<div
			className='mx-auto flex w-full items-center justify-center overflow-hidden py-2 text-center'
			{...props}
		>
			<motion.h1
				className={`inline-block w-full text-8xl font-bold capitalize text-dark ${className}`}
				variants={quote}
				initial='initial'
				animate='animate'
			>
				{text.split(' ').map((w, i) => (
					<motion.span
						key={w + '-' + i}
						className='inline-block'
						variants={singleWord}
					>
						{w}&nbsp;
					</motion.span>
				))}
			</motion.h1>
		</div>
	)
}
