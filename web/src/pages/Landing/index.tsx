import React from "react";
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom'

import logoImg from '../../assets/images/logo.svg';

import './styles.css';

export default function Landing() {
  return (
    <div id="page-landing">
      <div className="content-wrapper">
        <img src={logoImg} alt="Happy" />

        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>
        </main>

        <div className="location">
          <Link to="/" className="botao">
            login
            <FaArrowRight size={10} color="white" />
          </Link>
        </div>

        <Link to="/app" className="enter-app">
          <FaArrowRight size={26} color="white" />
        </Link>
      </div>
    </div>
  );
}