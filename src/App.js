import React from 'react';
import Number from './Number';
import {nanoid} from 'nanoid';
import {Slider} from 'rsuite';
import SliderComponent from './Slider';



export default function App() {

const [sliderValue, setSliderValue] = React.useState(6)
const [numbers, setNumbers] = React.useState((createNumbers(6)))

const handleChange = (value) => {
    setSliderValue(value);
    setNumbers(createNumbers(value))
};

function generateNumber() {
    return {
    value: Math.ceil(Math.random()*100),
    isSelected: false,
    id: nanoid()
    }
}
function createNumbers(value) {
    const newNums = []
    for(let i = 0; i < value; i++){
    newNums.push(generateNumber())
    console.log(newNums[i])
    console.log("i")
    }
    console.log("Here")
    return newNums
}


const numElements = numbers.map(num => (
    <Number
        value = {num.value}
        isSelected = {num.isSelected}
        key = {num.id}
    />
))



return (
    <main>
    <header>
        <h1 className="title">Digits App</h1>
    </header>
    <div className="num-slider">
        <SliderComponent
            key={nanoid}
            min={3}
            max={9}
            step={1}
            defaultValue={6}
            onChange={handleChange}
            disable={false}
        />
        <h3>Value: {sliderValue}</h3>
    </div>
    <div className="number-container">
        {numElements}
    </div>
    
    <footer>
        <h3 className="subtitle">Created By: Derek Kirschbaum</h3>
    </footer>
    </main>
);
}
