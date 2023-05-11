import React from 'react';
import Number from './Number';
import './App.css';
import {nanoid} from 'nanoid';


export default function App() {

  const [numbers, setNumbers] = React.useState((createNumbers()))



  function generateNumber() {
    return {
      value: Math.random()*100 + 1,
      isSelected: false,
      id: nanoid()

    }
  }
  function createNumbers() {
    const newNums = []
    for(let i = 0; i < 6; i++){
      newNums.push(generateNumber())
    }
    return newNums
  }


  const numElements = numbers.map(num => (
    <Number>
      value = {num.value}
      isSelected = {num.isSelected}
      key = {num.id}
    </Number>
  ))



  return (
    <main>
      <header>
        <h1 className="title">Digits App</h1>
        <h3 className="subtitle">Created By: Derek Kirschbaum</h3>
      </header>
      <div className="number-container">
        {numElements}
      </div>
      <footer>

      </footer>
    </main>
  );
}
