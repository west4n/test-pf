import { motion } from 'framer-motion'
import Link from 'next/link'
import { LogoProps } from './Logo.props'

const MotionLink = motion(Link)

const Logo = ({}: LogoProps): JSX.Element => {
	return (
		<div className='mt-2 flex items-center justify-center'>
			<MotionLink
				whileHover={{
					backgroundColor: [
						'#121212',
						'rgba(131,58,180,1)',
						'rgba(253,29,29,1)',
						'rgba(252,176,69,1)',
						'rgba(131,58,180,1)',
						'#121212',
					],
					transition: { duration: 1, repeat: Infinity },
				}}
				href='/'
				className='flex h-16 w-16 items-center justify-center rounded-full bg-dark text-2xl font-bold text-light'
			>
				IK
			</MotionLink>
		</div>
	)
}

export default Logo
