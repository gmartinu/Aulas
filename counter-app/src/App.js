// import './App.css';
import React, { useState } from 'react';
import Buttons from './buttons';
import { Typography } from '@material-ui/core';

const App = () => {
  const [value, setValue] = useState(0);

  const increment = () => {
    setValue(value + 1)
  }

  const decrement = () => {
    setValue(value - 1)
  }

  return (
    <>
      <Typography variant="h3">{value}</Typography>
      <Buttons increment={increment} decrement={decrement}/>
    </>
  );
}

export default App;

//haha marcos gay
//positivo capitao hahaha borges
//Haha ficar milhonario com programinha
//traveco 2 real