import React, { useState } from 'react';
import './Contact.css';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const [done, setDone] = useState(false)

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_h4f9dl7', 'template_h4cmjne', form.current, 'YmbgAu2M_3T47URsF')
            .then((result) => {
                console.log(result.text);
                setDone(true)
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className="mx-auto pt-5" id="contact">
            <span>Get in Touch</span>
            <form ref={form} onSubmit={sendEmail}>
                <div class="mb-3 form-input">
                    <label for="exampleFormControlInput1" class="form-label">Name</label>
                    <input class="form-control" type="text" placeholder="" aria-label="default input example" />
                </div>
                <div class="mb-3 form-input">
                    <label for="exampleFormControlInput1" class="form-label">Email</label>
                    <input type="email" class="form-control" id="email" placeholder="" />
                </div>
                <div class="mb-3 form-input">
                    <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                    <textarea class="form-control" id="message" rows="3"></textarea>
                </div>
                <input type="submit" value="Send" className="button" />
                <span>{done && "Thanks for contacting me!"}</span>
            </form>
            
        </div>
    );
};

export default Contact;