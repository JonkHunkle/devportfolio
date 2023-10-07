import { useState } from "react"
import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {

    const [showSidebar, setShowSidebar] = useState(false)

    return (
        <>
        <h1 className='visually-hidden'>Navbar</h1>
        {
            showSidebar ?
                (
                    <div className="nav-bar">
                        <div className="bg-transparent h-auto text-4xl text-white cursor-pointer"
                        onClick={() => setShowSidebar(!showSidebar)}>
                            x
                        </div>
                        <div className="link-container" style={{display:'flex', flexDirection:'column'}}>
                        <Link to='/' className='hover:bg-zinc-300 h-1/3 flex flex-col justify-around navBtn' onClick={() => setShowSidebar(!showSidebar)}>Home</Link>
                        <Link to='/contact' className='hover:bg-zinc-300 h-1/3 flex flex-col justify-around navBtn' onClick={() => setShowSidebar(!showSidebar)}>Contact</Link>
                        <Link to='/projects' className='hover:bg-zinc-300 h-1/3 flex flex-col justify-around navBtn' onClick={() => setShowSidebar(!showSidebar)}>Projects</Link>
                        </div>
                    </div>
                ) : <svg
                    style={{display:'flex', justifySelf:'end', placeSelf:'center'}}
                    onClick={() => setShowSidebar(!showSidebar)}
                    className="fixed z-30 flex items-center cursor-pointer  right-10 top-6"
                    fill="#000000"
                    viewBox="0 0 100 100"
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
