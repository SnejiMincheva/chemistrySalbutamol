// NavigationBar.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NavigationBar.css';
import logo from '../../assets/logo.png';

const NavigationBar = () => {
  const navigate = useNavigate();

  return (
    <nav>
      <img src={logo} alt="Logo" className="logo" align="left" />
      <div className="container">
        <ul>
          <li><button className="btn1" onClick={() => navigate('/what')}>Какво е салбутамол?</button></li>
          <li><button className="btn1" onClick={() => navigate('/chem')}>Химични свойства</button></li>
          <li><button className="btn1" onClick={() => navigate('/physics')}>Физични свойства</button></li>
          <li><button className="btn1" onClick={() => navigate('/use')}>Употреба</button></li>
          <li><button className="btn1" onClick={() => navigate('/replace')}>Потенциални заместители</button></li>
          <li><button className="btn" onClick={() => navigate('/contact')}>За нас</button></li>
        </ul>
      </div>
    </nav>
  );
}

export default NavigationBar;
