import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./contacts.css";

export default function Contacts () {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('contact_service', 'contact_form', form.current, 'SHlSTKGlaEOf0p1Zq')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form className="form col-sm-3 mx-auto" ref={form} onSubmit={sendEmail}>
      <div className="formElement">
        <label className="element"><h4>Name:</h4></label>
        <input type="text" className="input element" name="user_name" required/>
      </div>
      <div className="formElement">
        <label className="element"><h4>Email:</h4></label>
        <input type="email" className="input element" name="user_email" required/>
      </div>
      <div className="formElement">
        <label className="element"><h4>Message:</h4></label>
        <textarea name="message" className="input element" required/>
      </div>
      <div className="formElement">
        <input className="button element" type="submit" value="SEND"/>
      </div>     
    </form>
  );
};