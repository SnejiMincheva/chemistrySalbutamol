import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './Components/NavigationBar/NavigationBar';
import Hero from './Components/Hero/Hero';
import Programms from './Components/Programms/Programms';
import Title from './Components/Title/Title';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import What from './Components/What/What';
import Chem from './Components/Chem/Chem';
import Physics from './Components/Physics/Physics';
import Use from './Components/Use/Use';
import Replace from './Components/Replace/Replace';

const App = () => {
  return (
    <Router>
      <NavigationBar />
      <div className="container">
        <Routes>
          <Route path="/" element ={[<Hero />,<Contact/>]} />
          <Route path="/programms" element={<Programms />} />
          <Route path="/title" element={<Title />} />
          <Route path="/physics" element={<Physics />} />
          <Route path="/chem" element={<Chem />} />
          <Route path="/what" element={<What />} />
          <Route path="/use" element={<Use />} />
          <Route path="/replace" element={<Replace/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;