import { GetServerSideProps } from 'next'
import Link from 'next/link'

const Header = () => {
	return (
		<>
			<div className='h-8'></div>
			<div className='mx-auto flex px-8 w-full' style={{ maxWidth: '1100px' }}>
				<header className='w-full flex h-16 justify-between items-center px-8'>
					<Link href='/' className='mr-6 block h-full w-16'>
						shoye
					</Link>
					<nav>
						<div className='flex gap-10'>
							<Link href={'/'} className='after:bg-slate-500'>
								首页
							</Link>
							<Link href={'/'}>归类</Link>
							<Link href={'/'}>搜索</Link>
							<Link href={'/'}>关于</Link>
						</div>
					</nav>
				</header>
			</div>
		</>
	)
}

export const getServerSideProps: GetServerSideProps = async ctx => {
	return {
		props: {}
	}
}

export default Header
