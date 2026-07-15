import React from 'react'
import { Button } from './Footer.css.jsx'

const navbar = () => {
    return (
        <>
            <nav className=' px-20 bg-pink-800 text-white flex justify-between items-center'>
                <div className=" text-6xl font-extrabold">
                    <h1>Logo</h1>
                </div>
                <ul className='flex items-center gap-4'>
                    <li className='px-2 py-6 hover:text-pink-800 hover:bg-white'><a href="">Home</a></li>
                    <li className='px-2 py-6 hover:text-pink-800 hover:bg-white'><a href="">About</a></li>
                    <li className='px-2 py-6 hover:text-pink-800 hover:bg-white'><a href="">Service</a></li>
                    <li className='px-2 py-6 hover:text-pink-800 hover:bg-white'><a href="">Contact</a></li>
                    <li className='px-2 py-6 hover:text-pink-800 hover:bg-white'><a href="">Blog</a></li>
                </ul>
                <div className="">
                    <Button bgColor="pink"> Login </Button>
                </div>
            </nav>
        </>
    )
}

export default navbar;
