import Link from 'next/link'

import Layout from '@/components/Layout/Layout'

import { FooterProps } from './Footer.props'

const Footer = ({ ...props }: FooterProps): JSX.Element => {
	return (
		<footer
			className='w-full border-t-2 border-solid border-dark text-lg font-medium'
			{...props}
		>
			<Layout className='flex items-center justify-between py-8'>
				<span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
				<div className='flex items-center'>
					Build with <span className='px-1 text-2xl text-primary'>&#9825;</span>{' '}
					by&nbsp;
					<Link href='/' className='underline underline-offset-2'>
						Ivan Kurski
					</Link>
				</div>
				<Link href='/' className='underline underline-offset-2'>
					Say Hello👋
				</Link>
			</Layout>
		</footer>
	)
}

export default Footer
