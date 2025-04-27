import React, { useRef, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ContactUs = () => {
  const form = useRef();
  const [message, setMessage] = useState("");

  const { t, language } = useLanguage();
  const emailPath = {
    fr: {
      Name: "Votre Nom",
      Email: "Votre Email",
      Subject: "Objet", // Corrigé Email en double par Subject 
      Message: "Votre message",
      Send: "Envoyer le message",
      Success: "Votre message a été envoyé avec succès !",
      Error: "Une erreur s'est produite lors de l'envoi de votre message.",
    },
    en: {
      Name: "Your Name",  
      Email: "Your Email",
      Subject: "Subject",
      Message: "Your message",
      Send: "Send message",
      Success: "Your message has been sent successfully!",
      Error: "An error occurred while sending your message.",
    },
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_gihwzmm', 'template_ena34uq', form.current, 'NBX_MdZPfoh0FbtcW')
      .then((result) => {
          console.log(result.text);
          toast.success(emailPath[language].Success, {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
          });
          e.target.reset();
      }, (error) => {
          console.log(error.text);
          toast.error(emailPath[language].Error, {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
          });
      });
  };

  return (
    <>
        <form ref={form} onSubmit={sendEmail}>
        <div className="top">
            <input type="text" name="user_name" placeholder={emailPath[language].Name} required/>
            <input type="email" name="user_email" placeholder={emailPath[language].Email} required />
        </div>
            <div className="middle">
                <input type="text" name="from_name" placeholder={emailPath[language].Subject} required/>
            </div>
            <div className="bottom">
                <textarea name="message" placeholder={emailPath[language].Message} required></textarea>
            </div>
            <div className="button">
            <input type="submit" value={emailPath[language].Send} />
            </div>                                   
        </form>
        <ToastContainer />
    </>
  );
};