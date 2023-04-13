import Link from 'next/link'

import { useRouter } from 'next/router'

import { motion } from 'framer-motion'

import { menuIcons, menuItems } from '@/helpers/helpers'
import { NavBarProps } from './NavBar.props'

import Logo from '@/components/Logo/Logo'

export const NavBar = ({ ...props }: NavBarProps): JSX.Element => {
	const router = useRouter()
	const MotionLink = motion(Link)

	return (
		<header
			className='flex w-full items-center justify-between px-32 py-8 font-medium'
			{...props}
		>
			<nav className='flex gap-8'>
				{menuItems.map((m) => (
					<Link className='group relative' key={m._id} href={m.href}>
						{m.name}
						<span
							className={`ease absolute -bottom-0.5 left-0 inline-block h-[1px] bg-dark transition-[width] duration-300 group-hover:w-full ${
								router.asPath === m.href ? 'w-full' : 'w-0'
							}`}
						>
							&nbsp;
						</span>
					</Link>
				))}
			</nav>

			<nav className='flex flex-wrap items-center justify-center gap-5'>
				{menuIcons.map((i) => (
					<MotionLink
						whileHover={{
							y: -2,
						}}
						whileTap={{ scale: 0.9 }}
						key={i._id}
						href={i.href}
						target={'_blank'}
						className='text-2xl'
					>
						{i.icon}
					</MotionLink>
				))}
			</nav>

			<div className='absolute left-[50%] top-2 translate-x-[-50%]'>
				<Logo />
			</div>
		</header>
	)
}
