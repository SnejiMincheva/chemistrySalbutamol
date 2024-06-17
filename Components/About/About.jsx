import React from 'react'
import './About.css'
import sal from '../../assets/sal.png'

const About = () => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={sal} alt="" className='about-img' />
        </div>
        <div className="about-right">
            <h4>
                Видеоклип, които обобщава главните отличителни и интересни свойства на салбутамола, като го прави интересно дори и за хора, които не се интересуват от химичната страна на продуктите около нас.
            </h4>
        </div>
    </div>
  )
}

export default About