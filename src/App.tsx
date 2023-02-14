import React, { useEffect, useState } from 'react';
import './App.css';
import HorizontalSquare from './Components/HorizontalSquare';
import VerticalSquare from './Components/VerticalSquare';
import AddWeave from './Components/AddWeave';
import axios from 'axios';


function App() {

  interface ReturnedPattern {
    colors: string[]
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
    axios.get('http://localhost:3000/getpatterns').then((response) => {
      setAllPatterns(response.data)
    })
  }

  useEffect(() => {
    getPatterns()
  }, [])

  return (
    <>
      <h1>QUILTR</h1>
      <h5>Fabric of the world.</h5>
      <div className='wrapper'>
        {allPatterns.map((pattern, index) => {
          if (index % 2 === 0) {
            return (<VerticalSquare colors={pattern.colors} />)
          } else {
            return (<HorizontalSquare colors={pattern.colors} />)
          }
        })}
      </div>
      <AddWeave></AddWeave>
      <p>© Greg Shoup 2023 -- ❤️ for Diane</p>
    </>
  );
}

export default App;
