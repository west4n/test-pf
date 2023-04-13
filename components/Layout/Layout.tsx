import { LayoutProps } from './Layout.props'

const Layout = ({
	children,
	className = '',
	...props
}: LayoutProps): JSX.Element => {
	return (
		<div
			className={`z-0 inline-block h-full w-full bg-light p-32 ${className}`}
			{...props}
		>
			{children}
		</div>
	)
}

export default Layout
