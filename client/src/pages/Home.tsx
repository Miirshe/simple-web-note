import React from 'react'

const Home = () => {
	return (
		<div className='w-full flex flex-row justify-between items-center gap-3 p-3'>
			<h1 className='flex flex-row justify-start items-center gap-5 p-1 text-3xl capitalize'>All <span> - </span> <span className='text-red-500'>Tasks</span></h1>
		</div>
	)
}

export default Home