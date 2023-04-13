import { INavBarMenuSocial } from '@/interfaces/navbarMenu.interface'

import { INavBarMenuItem } from '@/interfaces/navbarMenu.interface'
import DribbbleIcon from './icons/social/dribbble.svg'
import GithubIcon from './icons/social/github.svg'
import LinkendinIcon from './icons/social/linkedin.svg'
import PinterestIcon from './icons/social/pinterest.svg'
import TwitterIcon from './icons/social/twitter.svg'

export const menuItems: INavBarMenuItem[] = [
	{ name: 'Home', href: '/', _id: '1' },
	{ name: 'About', href: '/about', _id: '2' },
	{ name: 'Projects', href: '/projects', _id: '3' },
	{ name: 'Articles', href: '/articles', _id: '4' },
]

export const menuIcons: INavBarMenuSocial[] = [
	{ _id: 1, href: 'https://twitter.com', icon: <TwitterIcon /> },
	{ _id: 2, href: 'https://github.com', icon: <GithubIcon /> },
	{ _id: 3, href: 'https://linkedin.com', icon: <LinkendinIcon /> },
	{ _id: 4, href: 'https://pinterest.com', icon: <PinterestIcon /> },
	{ _id: 5, href: 'https://dribbble.com', icon: <DribbbleIcon /> },
]
