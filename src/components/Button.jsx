import * as React from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import '../index.css'

export const Next = ({ to }) => {
  const navigate = useNavigate();

  return (
     <Button id='nextButton'  /*style={{minWidth: '50px', background: 'red'}}*/ variant="contained" onClick={() => navigate(to)}>Next</Button>
  )
}

export const Previous = ({ to }) => {
  const navigateBack = useNavigate();

  return (
    <Button id='previousButton' variant="contained" onClick={() => navigateBack(to)}>Previous</Button>
  )
}

// export default function ButtonUsage() {
//   return (
//   <div>
//   <Button variant="contained" onClick={() => navigate(to)}>Next</Button>
//   <Button variant="contained" onClick={() => navigateBack(to)}>Previous</Button>
//   </div>
// )
// };


