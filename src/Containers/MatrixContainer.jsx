
import React from 'react';
import { Previous } from '../components/Button.jsx';


const MatrixContainer = () => {
  return (
    <>
    <div className='buttonContainer'>
    <Previous to='/array' />
    </div>
    <div>
      <h1>Matrix Visualization</h1>
      {/* matrix visualization code goes here */}
    </div>
    </>
  );
};

export default MatrixContainer;
