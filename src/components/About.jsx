import React, { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive';
export default function About() {

    const isMobile = useMediaQuery({ query: `(max-width: 428px)` });
    const [showCard, setShowCard] = useState(false)
    const [isActive, setIsActive] = useState(false);
    const handleClick=()=>{
        setShowCard(!showCard)
            const aboutCard= document.getElementById('aboutCard')
            const landingElement = document.getElementById('landing');
            aboutCard.style.transitionDuration='.5s'
            landingElement.style.transitionDuration='.5s'
            if(showCard){
                aboutCard.style.opacity=0
                setTimeout(()=>{
                    aboutCard.style.display='none'
                    landingElement.style.opacity=1
                },500)
            } else {
                landingElement.style.opacity=0
                setTimeout(()=>{
                    landingElement.style.display='none'
                    aboutCard.style.display='inherit'
                    setTimeout(()=>{
                        aboutCard.style.opacity=1
                    },500)
                },500)
            }
        }

        useEffect(()=>{
            setIsActive(true)
            document.addEventListener('click', handleCardChange);
            return () => {
                setIsActive(false)
                document.removeEventListener('click', handleCardChange);
            }
        })

 const handleCardChange = (e)=>{
            if(e.target.href && isActive){
        const regex = /\/#\/$/;
        const isMatch = regex.test(e.target?.href);
        if(isMatch){
            setShowCard(false)
            const aboutCard= document.getElementById('aboutCard')
    const landingElement = document.getElementById('landing');
    aboutCard.style.opacity=0
        setTimeout(()=>{
            aboutCard.style.display='none'
            landingElement.style.display='initial'
            setTimeout(()=>{
                landingElement.style.opacity=1
            },500)
        },500)
        }
    }
};
    return (
        <div className={`page ${isActive ? 'active' : ''}`}>
            <h1 className='visually-hidden'>About page</h1>
            <div id='landing'>
            <p style={{fontSize:'1.75rem', color:'white'}}>Lets make some</p>
            <h2 className='animated-gradient' style={{fontSize:isMobile?'7rem':null}}onClick={handleClick}>Noise</h2>
            </div>
                <div className='card' id='aboutCard' style={{display:'none',opacity:0, fontSize:isMobile?'1.25rem':null}}>
                    <p className='info-text'>I am a middle-stack web developer leveraging a background in <a
                            href="https://aboyandhiscomputer.bandcamp.com/music"
                            target="_blank"
                            rel="noreferrer"
                            className='about-music-link'>
                                music
                        </a> production to exercise critical thinking, creativity and anticipation of user needs. My knowledge of HTML, CSS, Javascript, and  ensures both a smooth user experience and clean, concise code. Working on projects asynchronously with diverse teams has strengthened my skills in communication, collaboration and Git. Using these strengths, I strive to build accessible, intuitive, and responsive web apps for a far-reaching audience.
                    </p>
                    <a className='resume-link text-3xl text-center w-fit flex flex-col content-center justify-around self-center hover:bg-slate-500 rounded-box hover:bg-opacity-25 transition duration-700 bg-slate-300 bg-opacity-25 md:py-8 p-12 md:px-96' href="https://drive.google.com/file/d/1uxrLRjRBJ4kJ5gCcIJGjHane8erqp9FW/view?usp=drive_link" download='davidResume' target='_blank' rel="noreferrer" >Download my Resume!
            </a>
                </div>
                </div>
    )
}
