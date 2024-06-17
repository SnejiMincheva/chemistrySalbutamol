import React from 'react'
import './Programms.css'
import fast from '../../assets/fast.png'
import inhalator from '../../assets/inhalator.jpg'
import earth from '../../assets/earth.jpg'
import pin from '../../assets/pin.png'
import atletic from '../../assets/atletic.jpg'
import sports from '../../assets/sports.png'
import ven from '../../assets/ven.jpg'

const Programms = () => {
  return (
    <div className='programms'>
        <div className="program">
            <img src={earth} alt="" />
            <div className="caption">
                <img src={pin} alt="" />
                <p>Използван често</p>
            </div>
        </div>
        <div className="program">
            <img src={inhalator} alt="" />
            <div className="caption">
                <img src={fast} alt="" />
                <p>Бързодействие</p>
            </div>
        </div>
        <div className="program">
            <img src={atletic} alt="" />
            <div className="caption">
                <img src={sports} alt="" />
                <p>Употребяван при трениращите</p>
            </div>
        </div>
    </div>
  )
}

export default Programms