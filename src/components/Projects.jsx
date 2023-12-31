import synth from '../assets/synthBackground.svg'
import mernStore from '../assets/antiqueBackground.svg'
import littleLemon from '../assets/littleLemonBackground.svg'
import { useEffect, useState } from 'react';

export default function Projects() {
  const [isActive, setIsActive] = useState (false);

  useEffect(() => {
    setIsActive(true);
  }, []);
    return(
        <div className={`page ${isActive ? 'active' : ''}`}>
            <h1 className="animated-gradient">
            Projects
            </h1>
            <div className="card">
   <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2" className=""></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3" className="active" aria-current="true"></button>
      </div>
      <div className="carousel-inner d-flex flex-column">
      <div className="carousel-item active">
            <h5 className='visually-hidden'>Lyre Bird Synthesizer</h5>
          <img src={synth} alt='Lyre Bird Synthesizer'/>
          <div className="carousel-caption h-100 d-md-block">
                <a className='project-link' href="https://jonkhunkle.github.io/WebSynth/" target='_blank' rel="noreferrer">
                    Lyre Bird<br/>Synthesizer
                </a>
            <p>Open source drone additive synthesizer</p>
            <a className='project-link' href="https://github.com/JonkHunkle/WebSynth" target='_blank' rel="noreferrer">
              Repo
            </a>
            <p>
              Tone.js, MUI, React
            </p>
          </div> 
        </div>
      <div className="carousel-item">
            <h5 className='visually-hidden'>Anne's Antiques</h5>
          <img src={mernStore} alt="Anne's Antiques"/>
          <div className="carousel-caption h-100 d-md-block">
                <a className='project-link' href="https://antique-store-frontend.onrender.com" target='_blank' rel="noreferrer">
                Anne's<br/>Antiques
                </a>
            <p>Full-stack inventory management system.</p>
            <a className='project-link' href="https://github.com/JonkHunkle/WebSynth" target='_blank' rel="noreferrer">
              Repo
            </a>
            <p>
            MongoDB, Express.js, React.js, Node.js
            </p>
          </div> 
        </div>
      <div className="carousel-item">
            <h5 className='visually-hidden'>Little Lemon Restaurant</h5>
          <img src={littleLemon} alt="Little Lemon"/>
          <div className="carousel-caption h-100 d-md-block">
                <a className='project-link' href="https://littlelemon-pi.vercel.app/" target='_blank' rel="noreferrer">
                Little Lemon <br/>Restaurant
                </a>
            <p>Example restaurant site</p>
            <a className='project-link' href="https://github.com/JonkHunkle/littlelemon" target='_blank' rel="noreferrer">
              Repo
            </a>
            <p>
            React.js, Node.js, CSS, Jest
            </p>
          </div> 
        </div>
        
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
    </div>
    
        </div>
    )
}





<div id="carouselExampleCaptions" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
    <div className="carousel-item active">
            <h5 className='visually-hidden'>Lyrebird Synthesizer</h5>
          <img style={{height:'auto',width:'75%', placeSelf:'center'}} src={synth}/>
          <div className="carousel-caption h-100 d-md-block">
                <a className='project-link' href="https://jonkhunkle.github.io/WebSynth/" target='_blank' rel="noreferrer">
                    Lyrebird<br/> Synthesizer
                </a>
            <p>Open source drone synthesizer with effects</p>
            {/* <a className='project-link' style={{fontSize:'2rem'}} href="https://github.com/JonkHunkle/WebSynth" target='_blank'
                        rel="noreferrer">
                            Repo</a>
                        
                            <p>Tone.js,
                                MUI,
                                React</p> */}
          </div> 
        </div>
    </div>
    <div className="carousel-item">
      <img src="..." className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="..." className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>