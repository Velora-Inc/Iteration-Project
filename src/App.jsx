// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import NavBar from './components/navBar';
import MainContainer from './Containers/MainContainer';
import MatrixContainer from './Containers/MatrixContainer'; // Make sure to import your new component
// import Button from './components/Button.jsx';
import { Next, Previous } from './components/Button.jsx';
//src/components/Button.jsx

const HomePage = () => {
  return (
    <div className="quickFix2">
      <div className='buttonContainer'>
        <Next id='nextButton' to="/array"/>
        {/* < */}
        {/* <Link to="/array">
          <button>Go to Array Visualization</button>
        </Link>
        <Link to="/matrix">
          <button>Go to Matrix Visualization</button>
        </Link> */}
        {/* <Button/> */}
      </div>
      <h1>Welcome to the Data Structure Tutor</h1>
      <div id="pageLink"></div>
      <div id="pageLink"></div>
      <div id="pageLink"></div>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/array" element={<MainContainer />} />
        <Route path="/matrix" element={<MatrixContainer />} />
      </Routes>
    </Router>
  );
}

export default App;
