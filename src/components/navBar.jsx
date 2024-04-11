import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { routeOrder } from '../routes/routes';

const NavBar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const currentPathIndex = routeOrder.indexOf(location.pathname);

    const navigateTo = (direction) => {
      let newIndex = direction === 'next' ? currentPathIndex + 1 : currentPathIndex - 1;

      //handle edge cases
      if (newIndex >= routeOrder.length) newIndex = routeOrder.length;
      if (newIndex < 0) newIndex = 0;

      navigate(routeOrder[newIndex]);

    }

    // if (newIndex >= routeOrder.length) newIndex = 0;
    // if (newIndex < 0) newIndex = routeOrder.length - 1;

    return (
      <div>
        <nav>
          <img src="src/assets/TLM-logo.png"></img>
          <button onClick={() => navigateTo('previous')}>Previous</button>
          <button onClick={() => navigateTo('next')}>Next</button>
          <div className="userId">
            <span className="userIdText">Goblin Sharks</span>
            <img className="circle userPfp" src="src/assets/goblin-shark-pfp.jpg"></img>

          </div>
        </nav>
      </div>
    );
  };
  
  export default NavBar;
  