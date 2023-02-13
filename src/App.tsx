import React from 'react';
import './App.css';
import HorizontalSquare from './Components/HorizontalSquare';
import VerticalSquare from './Components/VerticalSquare';
import AddWeave from './Components/AddWeave';

function App() {

  const testColors = [ //fifteen colors
    "#32a852",
    "#1885c9",
    "#1824c9",
    "#32a852",
    "#1885c9",
    "#1824c9",
    "#32a852",
    "#1885c9",
    "#1824c9",
    "#32a852",
    "#1885c9",
    "#1824c9",
    "#32a852",
    "#1885c9",
    "#1824c9",
  ]

  // take in the object returned from mongodb
  // "multiply" so there is the correct number of items to map over??

  return (
    <>
      <AddWeave></AddWeave>
      <div className='wrapper'>
        <VerticalSquare colors={testColors}></VerticalSquare>
        <HorizontalSquare colors={testColors}></HorizontalSquare>
        <VerticalSquare colors={testColors}></VerticalSquare>
        <HorizontalSquare colors={testColors}></HorizontalSquare>
        <VerticalSquare colors={testColors}></VerticalSquare>
        <HorizontalSquare colors={testColors}></HorizontalSquare>
      </div>
    </>
  );
}

export default App;
