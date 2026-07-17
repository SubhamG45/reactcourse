import React from 'react'
import { Button } from '../footer/Footer.css.jsx'
import { Link } from 'react-router-dom'

const navbar = () => {
    return (
        <>
            <nav className=' px-20 bg-pink-800 text-white flex justify-between items-center'>
                <div className=" text-6xl font-extrabold">
                    <h1>Logo</h1>
                </div>
                <ul className='flex items-center gap-4'>
                    <li className='px-2 py-6 hover:text-pink-800 hover:bg-white'>
                        <Link to={""}> Home</Link>
                    </li>
                    <li className='px-2 py-6 hover:text-pink-800 hover:bg-white'>
                        <Link to={"/about"}> About </Link>
                    </li>
                    <li className='px-2 py-6 hover:text-pink-800 hover:bg-white'>
                        <Link to={"/service"}>Service</Link>
                    </li>
                    <li className='px-2 py-6 hover:text-pink-800 hover:bg-white'>
                        <Link to={"/contact"}> Contact</Link>
                    </li>
                    <li className='px-2 py-6 hover:text-pink-800 hover:bg-white'>
                        <Link to={"/register"}> 
                           <Button bgColor="green"> Register </Button>
                        </Link>
                    </li>
                </ul>
                <div className="">
                    <Button bgColor="pink"> Login </Button>
                </div>
            </nav>
        </>
    )
}

export default navbar
