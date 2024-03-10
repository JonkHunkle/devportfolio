import React, { useEffect, useState } from 'react'
import emailjs from '@emailjs/browser'
let {VITE_APP_SERVICE,
    VITE_APP_TEMPLATE,
    VITE_APP_PASSWORD} =import.meta.env
    import { useMediaQuery } from 'react-responsive';
    
    export default function Contact() {
    const isMobile = useMediaQuery({ query: `(max-width: 768px)` });
    const [modalOpen, setModalOpen] = useState(false)
    const [formState, setForm] = useState({ name: '', email: '', message: '' })
    const [isActive, setIsActive] = useState(false);
    
    const handleSubmit =  async (e) => {
        e.preventDefault();
        const { name, email, message } = formState;

        if (name === '' || email === '' || message === '') {
            alert('You cannot send an empty form! If you used autofill, please try again.')
        } else {

            let params = {
                from_name:name,
                sender_email:email,
                message: message
            }
            let res = await emailjs.send(VITE_APP_SERVICE,VITE_APP_TEMPLATE, params, VITE_APP_PASSWORD)

            // window.location.reload(false)
            if(res){
                setModalOpen(true)
            }
        }
    }

    const validEmail = (email) => {
        const pattern = /^[\w\.-]+@[\w\.-]+\.\w+$/;
        return pattern.test(String(email).toLowerCase())
    }
    const handleChange = (e)=> {
        const { name, value } = e.target
        setForm({ ...formState, [name]: value })
    }

    const validateEmail = (e)=>{
        console.log(e.target.value)
        const valid = validEmail(e.target.value)
            if (!valid) {
                alert('that email is invalid! If you used autofill, please try again')
            }
    }
    useEffect(() => {
        setIsActive(true);
      }, []);
    return (
        <div  className={`page contact ${isActive ? 'active' : ''}`} >
            <h1 className='visually-hidden'>Contact Page</h1>
                <h2 className='animated-gradient' style={{fontSize:isMobile?'4rem':null, textAlign:'left', lineHeight:.9, padding:isMobile?0:null}}>Lets connect!</h2> 
            <div className='card' style={{gap:isMobile?'2rem':null}}>
                <p className='contact-header' style={{fontSize:isMobile?'1.25rem':null}}>Fill out the form below and I will get back to you as soon as possible!</p>

                        <form className='contact-form flex flex-col' style={{gap:'2.5rem'}}>
                            <div className={`form-group mb-6 flex-row mx-auto`} style={{width:'100%', gap:'1rem'}}>
                                <input type="text" onChange={handleChange} className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" name='name'
        value={formState.name}
                                    placeholder="Name" />
                            
                                <input type="email" onBlur={validateEmail} onChange={handleChange} className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" name='email'
        value={formState.email}
        placeholder="Email address" />
                            </div>
                            <div className="form-group mb-6 w-50">
                                <textarea onChange={handleChange}
                                    className="
                                    input
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
        value={formState.message}
        style={{resize:'none', placeSelf:'center', width:isMobile?'75svw':'50svw'}}
        name='message'
                                    rows="5"
                                    placeholder="Message"
                                />
                            </div>
                            <button type="button" onClick={handleSubmit}
                            data-bs-toggle="modal" 
                            data-bs-target="#exampleModalCenter"
                            style={{border:'none'}}
                            className="nav-button send-btn">Send</button>
                        </form>
                    </div >
           {modalOpen?(
               <div className='contact-modal'>
               <div className='modal-content'>
                <button className='close' onClick={()=>{
                    setForm({ name: '', email: '', message: '' })
                    setModalOpen(false)
                }}>&times;</button>
                <div className='modal-body'>
                <p>Thanks for reaching out! <br/>I will be in touch soon.
                </p>
                <button className='close-btn' onClick={()=>{
                    setModalOpen(false)
                    setForm({ name: '', email: '', message: '' })
                    }}>Close</button>
            </div>
            </div>
            </div>
            ):null}
        </div>)

}
