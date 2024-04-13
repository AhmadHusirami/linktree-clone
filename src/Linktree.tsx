import React, { useState, useEffect } from 'react';
import './style.css';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { TbWorldWww } from "react-icons/tb";

const Linktree: React.FC = () => {
  const [text, setText] = useState('');

  useEffect(() => {
    const textToWrite = "#BeHappy❤";
    let index = 0;
    let intervalId: NodeJS.Timeout;

    const animateText = () => {
      intervalId = setInterval(() => {
        if (index <= textToWrite.length) {
          setText(textToWrite.slice(0, index));
          index++;
        } else {
          clearInterval(intervalId);
          setTimeout(() => {
            setText('');
            index = 0;
            animateText();
          }, 3000); 
        }
      }, 500); 
    };
    animateText(); 

    return () => clearInterval(intervalId); 
  }, []); 

  return (
    <div id='contents'>
      <section className="animated-background">
        <div id="stars1"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
      </section>

      <a id="profilePicture" href="#popup">
        <img src=".\src\assets\AH-logos-modified.png" alt="Profile Picture" />
      </a>

      <div className="overlay" id="popup">
        <div className="popup">
          <div className="popup-photo">
            <a href=".\src\assets\AH-logos-modified.png" target="_blank">
              <img src=".\src\assets\AH-logos-modified.png" alt="Profile Picture" />
            </a>
          </div>
          <div className="popup-quote">
          "How you think when you lose determines how long it will be until you win." 
          - Gilbert Keith Chesterton
          </div>
          <a className="popup-close" onClick={() => window.history.back()}>&times;</a>
        </div>
      </div>

      <div id="userName">
        @ahmadhusirami
      </div>

      <div id="links">
      <a className="link" href="https://ahmad-husirami.vercel.app/" target="_blank">
          <TbWorldWww className='icon' />
          <span className='text'>My Website</span>
        </a>
        <a className="link" href="https://github.com/AhmadHusirami" target="_blank">
          <FaGithub className='icon' />
          <span className='text'>Github</span>
        </a>
        <a className="link" href="https://www.linkedin.com/in/ahmad-husirami-ab438b272/" target="_blank">
          <FaLinkedin className='icon' />
          <span className='text'>Linkedin</span>
        </a>
        <a className="link" href="https://www.facebook.com/people/Ahmad-Husirami/pfbid025m6PiAee6KyN6vVpFTy32r8EVFGxnVKHLJmqVewi8ipQeLNEek4gSvyRpp6ZHpfSl/?mibextid=ZbWKwL" target="_blank">
          <FaFacebookSquare className='icon' />
          <span className='text'>FaceBook</span>
        </a>
        <a className="link" href="https://www.instagram.com/ahmadhusirami?igsh=YXI0N2hsMjAwc2Q4" target="_blank">
          <FaInstagram className='icon'/>
          <span className='text'>Instagram</span>
        </a>
      </div>

      <div id="hashtag">
        {text}
      </div>
    </div>
  );
};

export default Linktree;
