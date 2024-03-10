import { useState } from "react"
import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {

    const [showSidebar, setShowSidebar] = useState(false)

    const handleClick =async (e) =>{
        if(showSidebar){
            document.getElementById("burgerIcon").style.display = "initial"
            await new Promise((resolve, reject) => {
                setTimeout(()=>{
                    resolve()
                },100)
            })
            document.getElementById("nav").style.right = "-50%"
            document.getElementById("nav").style.transitionDuration = '1s'
            document.getElementById("burgerIcon").style.transitionDuration = '1s'
            document.getElementById("burgerIcon").style.opacity = 1
            

        }else{
            document.getElementById("nav").style.display ='inline-block'
            await new Promise((resolve, reject) => {
                setTimeout(()=>{
                    resolve()
                },100)
            })
            document.getElementById("burgerIcon").style.opacity = 0
            document.getElementById("burgerIcon").style.transitionDuration = '.5s'
            
            document.getElementById("nav").style.right = 0
            document.getElementById("nav").style.visibility = "visible"
            document.getElementById("nav").style.transitionDuration = '1s'
            
            document.getElementById("burgerIcon").style.opacity = 0
            document.getElementById("burgerIcon").style.transitionDuration = '.5s'
            await new Promise((resolve, reject) => {
                setTimeout(()=>{
                    resolve()
                },500)
            })
            document.getElementById("burgerIcon").style.display = "none"
        }
        setShowSidebar(!showSidebar)
        const {id, to} = e.target
        console.log(id)
    }

    return (
        <>
            <h1 className='visually-hidden'>Navbar</h1>
            <svg
            id='burgerIcon'
            style={{display:'flex', justifySelf:'end', placeSelf:'center'}}
            onClick={handleClick}
            className=""
            fill="#000000"
            viewBox="0 0 100 100"
            width="40"
            height="40">
                <rect width="100" height="10"></rect>
                <rect y="30" width="100" height="10"></rect>
                <rect y="60" width="100" height="10"></rect>
            </svg>
            <div className="nav-bar" id="nav" style={{display:'none',visibility:"hidden"}}>
                <div className="bg-transparent h-auto text-4xl text-white cursor-pointer"
                onClick={handleClick}
                style={{placeSelf:'end', fontSize:'2rem'}}>
                    x
                </div>
                <div className="link-container" style={{display:'flex', flexDirection:'column'}}>
                    <Link to='/' className='hover:bg-zinc-300 h-1/3 flex flex-col justify-around navBtn' id='homeLink'onClick={handleClick}>Home</Link>
                    <Link to='/contact' className='hover:bg-zinc-300 h-1/3 flex flex-col justify-around navBtn' id='contactLink'onClick={handleClick}>Contact</Link>
                    <Link to='/projects' className='hover:bg-zinc-300 h-1/3 flex flex-col justify-around navBtn' id='projectLink' onClick={handleClick}>Projects</Link>
                </div>
            </div>
        </>)
}
