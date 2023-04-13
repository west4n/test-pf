import { FunctionComponent } from 'react'
import { LayoutComponentProps } from './LayoutComponent.props'

import Footer from './Footer/Footer'
import { NavBar } from './NavBar/NavBar'

import { Montserrat } from 'next/font/google'

const montsserat = Montserrat({
	subsets: ['latin'],
	variable: '--font-mont',
})

const LayoutComponent = ({ children }: LayoutComponentProps): JSX.Element => {
	return (
		<>
			<main
				className={`${montsserat.variable} min-h-screen w-full bg-light font-mont`}
			>
				<NavBar />
				{children}
				<Footer />
			</main>
		</>
	)
}

export const withLayout = <T extends Record<string, unknown>>(
	Component: FunctionComponent<T>
) => {
	return function withLayoutComponent(props: T): JSX.Element {
		return (
			<LayoutComponent>
				<Component {...props} />
			</LayoutComponent>
		)
	}
}
