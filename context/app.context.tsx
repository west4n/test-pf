import { INavBarMenuItem } from '@/interfaces/navbarMenu.interface'
import { PropsWithChildren, createContext, useState } from 'react'

export interface IAppContext {
	menu: INavBarMenuItem[]
	setMenu?: (newMenu: INavBarMenuItem[]) => void
}

export const AppContext = createContext<IAppContext>({ menu: [] })

export const AppContextProvider = ({
	menu,
	children,
}: PropsWithChildren<IAppContext>): JSX.Element => {
	const [menuState, setMenuState] = useState<INavBarMenuItem[]>(menu)
	const setMenu = (newMenu: INavBarMenuItem[]) => setMenuState(newMenu)

	return (
		<AppContext.Provider value={{ menu: menuState, setMenu }}>
			{children}
		</AppContext.Provider>
	)
}
