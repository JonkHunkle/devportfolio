import { useState } from "react"
import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {

    const [showSidebar, setShowSidebar] = useState(false)

    return (
        <>
        <h1 className='visually-hidden'>Navbar</h1>
        {
            !showSidebar ?
                (
                    <div className=" fixed top-0 flex right-10 flex-col">
                        <div
                            className=" flex w-auto bg-transparent h-auto text-4xl text-white items-center cursor-pointer self-center"
                            onClick={() => setShowSidebar(!showSidebar)}> x                    </div>

                        <Link to='/' className='hover:bg-zinc-300 h-1/3 flex flex-col justify-around navBtn' onClick={() => setShowSidebar(!showSidebar)}>Home</Link>
                        <Link to='/contact' className='hover:bg-zinc-300 h-1/3 flex flex-col justify-around navBtn' onClick={() => setShowSidebar(!showSidebar)}>Contact</Link>
                        <Link to='/projects' className='hover:bg-zinc-300 h-1/3 flex flex-col justify-around navBtn' onClick={() => setShowSidebar(!showSidebar)}>Projects</Link>
                        <Link to='/resume' className='hover:bg-zinc-300 h-1/3 flex flex-col justify-around navBtn' onClick={() => setShowSidebar(!showSidebar)}>Resume</Link>

                    </div>
                ) : <svg
                    onClick={() => setShowSidebar(!showSidebar)}
                    className="fixed z-30 flex items-center cursor-pointer  right-10 top-6"
                    fill="#000000"
                    viewBox="0 0 100 80"
                    width="40"
                    height="40"
                >
                    <rect width="100" height="10"></rect>
                    <rect y="30" width="100" height="10"></rect>
                    <rect y="60" width="100" height="10"></rect>
                </svg>
        }


        </>)
}
