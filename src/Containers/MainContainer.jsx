import React, { useState } from 'react';
import LeftMainContainer from './LeftMainContainer'; 
import RightMainContainer from './RightMainContainer'; 
import { Next, Previous } from '../components/Button.jsx';
import '../index.css';

function MainContainer() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentAlgo, setCurrentAlgo] = useState('flatArray');

  return (
    <>
      <div className='buttonContainer'>
        <Previous className='previousButton' to='/'/>
        <Next /*className='nextButton'*/ to='/matrix' />
      </div>

    <main className="column-wrapper">
      <LeftMainContainer 
        currentAlgo={currentAlgo}
        setCurrentAlgo={setCurrentAlgo} 
        setCurrentIndex={setCurrentIndex} 
        currentIndex={currentIndex}
      />
      <div className="line"></div>
      <RightMainContainer
        currentAlgo={currentAlgo}
        currentIndex={currentIndex}/>
    </main>
    </>
  );
}

export default MainContainer;
