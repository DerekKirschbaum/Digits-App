import React from 'react';
import Number from './Number';
import {nanoid} from 'nanoid';
import {Slider} from 'rsuite';
import SliderComponent from './Slider';



export default function App() {

const [numbers, setNumbers] = React.useState((createNumbers()))
const [sliderValue, setSliderValue] = React.useState(6)

const handleChange = (value) => {
    setSliderValue(value);
};

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
        <h2>Slider Value: {sliderValue}</h2>
        
    </header>
    <div className="number-container">
        {numElements}
    </div>
    <footer>
        <h3>Choose how many numbers you want to play with</h3>
        <SliderComponent
            key={nanoid}
            min={3}
            max={9}
            step={1}
            defaultValue={6}
            onChange={handleChange}
            disable={false}
        />
        <h2>Value: {sliderValue}</h2>
        
    </footer>
    </main>
);
}
