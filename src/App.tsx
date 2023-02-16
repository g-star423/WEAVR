import React, { useEffect, useState } from 'react';
import './App.css';
import HorizontalSquare from './Components/HorizontalSquare';
import VerticalSquare from './Components/VerticalSquare';
import AddWeave from './Components/AddWeave';
import axios from 'axios';


function App() {

  interface ReturnedPattern {
    colors: string[],
    country: string,
    region: string,
    city: string,
    createdAt: string
  }


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

  const [allPatterns, setAllPatterns] = useState<ReturnedPattern[]>([])

  // take in the object returned from mongodb
  // "multiply" so there is the correct number of items to map over??

  function getPatterns() {
    axios.get('https://quiltr-api.herokuapp.com/getpatterns').then((response) => {
      setAllPatterns(response.data)
    })
  }

  // function getPatterns() { // for local testing
  //   axios.get('http://localhost:3000/getpatterns').then((response) => {
  //     setAllPatterns(response.data)
  //   })
  // }

  useEffect(() => {
    getPatterns()
  }, [])

  return (
    <>
      <h1>Quiltr</h1>
      <div className='wrapper'>
        {allPatterns.map((pattern, index) => {
          if (index % 2 === 0) {
            return (<VerticalSquare key={index} pattern={pattern} colors={pattern.colors} />)
          } else {
            return (<HorizontalSquare key={index} pattern={pattern} colors={pattern.colors} />)
          }
        })}
      </div>
      <AddWeave getPatterns={getPatterns}></AddWeave>
      <p id='footer'>© Greg Shoup 2023 -- ❤️❤️❤️ <span>for Diane</span></p>
    </>
  );
}

export default App;
