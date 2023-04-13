import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'

import { withLayout } from '@/layout/LayoutComponent'

import { GetStaticProps } from 'next'

import Layout from '@/components/Layout/Layout'

import { AnimatedText } from '@/components/AnimatedText/AnimatedText'
import { IMainText } from '@/interfaces/mainText.interface'

import ArrowIcon from '../helpers/icons/arrow.svg'
import profilePic from '../helpers/images/developer-pic-1.png'

function Home({ mainText }: HomeProps) {
	return (
		<main className='flex min-h-screen w-full items-center text-dark'>
			<Layout className='pt-0'>
				<div className='flex w-full items-center justify-between'>
					<div className='w-1/2'>
						<Image src={profilePic} alt='CodeBucks' className='h-auto w-full' />
					</div>
					<div className='flex w-1/2 flex-col items-center self-center'>
						{mainText.map((t) => (
							<div key={t._id}>
								<AnimatedText text={t.title} className='!text-left !text-6xl' />

								<p className='my-4 text-base font-medium'>{t.description}</p>
							</div>
						))}

						<div className='mt-2 flex items-center self-start'>
							<Link
								href='/dummy.pdf'
								className='flex items-center rounded-lg border-2 border-solid border-transparent bg-dark p-2.5 px-6 text-lg font-semibold text-light transition-all ease-in hover:border-dark hover:bg-light hover:text-dark' > Resume <ArrowIcon className='ml-1 h-auto w-6' /> </Link> <Link className='ml-4 text-lg font-medium capitalize text-dark underline' href='mailto:iskurskiii@gmail.com' > Contact </Link> </div> </div> </div> </Layout>
		</main>
	)
}

export default withLayout(Home)

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
	const { data: mainText } = await axios.get<IMainText[]>(
		'https://64300061b289b1dec4bef995.mockapi.io/api/mainText'
	)

	return {
		props: {
			mainText,
		},
	}
}

interface HomeProps extends Record<string, unknown> {
	mainText: IMainText[]
}
