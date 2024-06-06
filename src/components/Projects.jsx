import synth from "../assets/synthBackground.svg";
import mernStore from "../assets/antiqueBackground.svg";
import littleLemon from "../assets/littleLemonBackground.svg";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

export default function Projects() {
  const isMobile = useMediaQuery({ query: `(max-width: 428px)` });
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(true);
  }, []);



//   const handleFade = async(e)=>{
// let element = document.getElementsByClassName('carousel-item active')[0]
// element.style.animation = 'fadeOut 1s ease-out forwards'
// new Promise((resolve) => {
//   setTimeout(() => {
//       resolve();
//   }, 1000);
// });
// let elements = document.getElementsByClassName('carousel-item')
// for(let el of elements){
//   el.style.animation = 'fadeIn 1s ease-out forwards'
// }


//   }





  return (
    <div
      className={`page ${isActive ? "active" : ""}`}
      style={{ gap: "2.5rem" }}
    >
      <h1 className="visually-hidden">Projects Page</h1>
      <h2
        className="animated-gradient"
        style={{
          fontSize: isMobile ? "5rem" : null,
          padding: isMobile ? 0 : null,
        }}
      >
        Projects
      </h2>
      <div
        className="card"
        style={{ padding: isMobile ? 0 : null, color: "black" }}
      >
        <div
          id="carouselExampleCaptions"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-label="Slide 1"
              aria-current="true"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
              className=""
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
              className=""
            ></button>
          </div>
          <div className="carousel-inner d-flex flex-column">
            <div
              className="carousel-item active"
              style={{
                borderRadius: ".5rem",
                backgroundImage: `url(${synth})`,
                backgroundSize: "cover",
              }}
            >
              <h5 className="visually-hidden">Lyre Bird Synthesizer</h5>
              <div
                className="carousel-caption d-md-block"
                style={{ height: "inherit", placeContent: "center" }}
              >
                <h3>
                  <a
                    className="project-link"
                    href="https://jonkhunkle.github.io/WebSynth/"
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      fontSize: isMobile ? "2rem" : null,
                      lineHeight: 1.1,
                      paddingTop: "1.2rem",
                    }}
                  >
                    Lyre Bird
                    <br />
                    Synthesizer
                  </a>
                </h3>
                <br />
                <p style={{ fontSize: isMobile ? "1rem" : null }}>
                  Open source additive drone synthesizer
                </p>
                <h4
                  className="project-link"
                  href="https://github.com/JonkHunkle/WebSynth"
                  target="_blank"
                  rel="noreferrer"
                  style={{ fontSize: isMobile ? "2rem" : null }}
                >
                  Repo
                </h4>
                <p style={{ fontSize: isMobile ? "1rem" : null }}>
                  Tone.js, MUI, React
                </p>
              </div>
            </div>
            <div
              className="carousel-item"
              style={{
                borderRadius: ".5rem",
                backgroundImage: `url(${mernStore})`,
                backgroundSize: "cover",
              }}
            >
              <h5 className="visually-hidden">Anne's Antiques</h5>
              <div
                className="carousel-caption d-md-block"
                style={{ height: "inherit", placeContent: "center" }}
              >
                <h3>
                  <a
                    className="project-link"
                    href="https://antique-store-frontend.onrender.com"
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      fontSize: isMobile ? "2rem" : null,
                      lineHeight: 1.1,
                      paddingTop: "1.2rem",
                    }}
                  >
                    Anne's Antiques
                  </a>
                </h3>
                <br />
                <p style={{ fontSize: isMobile ? "1rem" : null }}>
                  Full-stack inventory management system.
                </p>
                <h4
                  className="project-link"
                  href="https://github.com/JonkHunkle/WebSynth"
                  target="_blank"
                  rel="noreferrer"
                  style={{ fontSize: isMobile ? "2rem" : null }}
                >
                  Repo
                </h4>
                <p style={{ fontSize: isMobile ? "1rem" : null }}>
                  MongoDB, Express.js, React.js, Node.js
                </p>
              </div>
            </div>
            <div
              className="carousel-item"
              style={{
                borderRadius: ".5rem",
                backgroundImage: `url(${littleLemon})`,
                backgroundSize: "cover",
              }}
            >
              <h5 className="visually-hidden">Little Lemon Restaurant</h5>
              <div
                className="carousel-caption d-md-block"
                style={{ height: "inherit", placeContent: "center" }}
              >
                <h3>
                  <a
                    className="project-link"
                    href="https://littlelemon-pi.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      fontSize: isMobile ? "1.8rem" : null,
                      lineHeight: 1.1,
                      paddingTop: "1.2rem",
                    }}
                  >
                    Little&nbsp;Lemon Restaurant
                  </a>
                </h3>
                <br />
                <p
                  style={{
                    fontSize: isMobile ? "1rem" : null,
                    fontWeight: 600,
                  }}
                >
                  Example restaurant site
                </p>
                <h4
                  className="project-link"
                  href="https://github.com/JonkHunkle/littlelemon"
                  target="_blank"
                  rel="noreferrer"
                  style={{ fontSize: isMobile ? "2rem" : null }}
                >
                  Repo
                </h4>
                <p style={{ fontSize: isMobile ? "1rem" : null }}>
                  React.js, Node.js, CSS, Jest
                </p>
              </div>
            </div>
          </div>
          <a
            style={{ color: "black" }}
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </a>
        </div>
      </div>
    </div>
  );
}

<div id="carouselExampleCaptions" className="carousel slide">
  <div className="carousel-indicators">
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to="0"
      className="active"
      aria-current="true"
      aria-label="Slide 1"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to="1"
      aria-label="Slide 2"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to="2"
      aria-label="Slide 3"
    ></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <div className="carousel-item active">
        <h5 className="visually-hidden">Lyrebird Synthesizer</h5>
        <img
          style={{ height: "auto", width: "75%", placeSelf: "center" }}
          src={synth}
        />
        <div className="carousel-caption h-100 d-md-block">
          <a
            className="project-link"
            href="https://jonkhunkle.github.io/WebSynth/"
            target="_blank"
            rel="noreferrer"
          >
            Lyrebird
            <br /> Synthesizer
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
      <img src="..." className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="..." className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExampleCaptions"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#carouselExampleCaptions"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>;
