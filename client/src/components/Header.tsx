import React from 'react'
import { MdNoteAlt, MdAddCircle } from 'react-icons/md'
const Header = () => {
	return (
		<div className='w-full flex flex-row justify-between items-center gap-3 p-3'>
			<div className='w-fit p-1'>
				<h1 className='text-3xl tracking-widest'><MdNoteAlt className="inline text-red-500" size={40} /> Simple <span className='text-red-500'>Note</span> App</h1>
			</div>
			<div className='w-[80%] md:w-[60%] p-1'>
				<input className='w-full rounded shadow outline-red-500 p-[10px]' type="text" placeholder='search for note tile' />
			</div>
			<div className='w-fit p-1'>
				<MdAddCircle className="text-red-500" size={35} />
			</div>
		</div>
	)
}

export default Header