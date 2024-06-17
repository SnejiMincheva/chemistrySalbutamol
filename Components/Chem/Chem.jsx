import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Chem.css';

const Chem = () => {
  const navigate = useNavigate();

  return (
    <div>
        <h1 className='h1'>
        Основни химични свойства на салбутамола
        </h1>
        <h2 className='h2'>
        Полярност и разтворимост:
        Салбутамолът е полярно съединение заради наличието на хидроксилни групи (-OH) и амино група (-NH2), които образуват водородни връзки.
        Той е добре разтворим във вода и етанол, което улеснява неговото използване в различни лекарствени форми като инхалационни разтвори, таблетки и сиропи. 
        <br/> <br/>
        Изомерия:
        Салбутамолът има два оптични изомера (енантиомери) – (R)-салбутамол и (S)-салбутамол. Обикновено се използва рацемичната смес (1:1 съотношение на двата изомера) в медицинската практика.
        </h2>
    </div>
  );
}

export default Chem;