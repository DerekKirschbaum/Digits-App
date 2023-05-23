import React from 'react';
import Number from './Number';
import {nanoid} from 'nanoid';
//import {Slider} from 'rsuite';
import SliderComponent from './Slider';
import Operation from './Operation'


export default function App() {

const [sliderValue, setSliderValue] = React.useState(6)
const [numbers, setNumbers] = React.useState(createNumbers(6))
const [operations, setOperations] = React.useState(createOps())


//Slider change handler
const handleSliderChange = (value) => {
    setSliderValue(value);
    setNumbers(createNumbers(value))
    setOperations(createOps())
};


//Number state and helper functions
function createNumbers(value) {
    const newNums = []
    for(let i = 0; i < value; i++){
        newNums.push(generateNumber())
    }
    return newNums
}

function generateNumber() {
    return {
        value: Math.ceil(Math.random()*100),
        isSelected: false,
        id: nanoid()
    }
}

function selectNum(id) {
    setNumbers(oldNums => oldNums.map(num => {
        return num.id === id ? 
            {...num, isSelected: true} :
            {...num, isSelected: false}
    }))
}

const numElements = numbers.map(num => (
    <Number
        key = {num.id}
        value = {num.value}
        isSelected = {num.isSelected}
        selectNum = {() => selectNum(num.id)}
    />
))



//Operation state and helper functions
function createOps () {
    const ops=[]
    ops.push(generateOp("+"))
    ops.push(generateOp("-"))
    ops.push(generateOp("x"))
    ops.push(generateOp("/"))
    console.log("Here")
    
    return ops
}

function generateOp(op) {
    return {
        type: op,
        isSelected: false,
        id: nanoid()
    }
}

function selectOp(id) {
    setOperations(oldOps => oldOps.map(op => {
        return op.id === id ? 
            {...op, isSelected: true} :
            {...op, isSelected: false}
    }))
}

const mathButtons = operations.map(op => (
    
    <Operation
        key = {op.id}
        type = {op.type}
        isSelected = {op.isSelected}
        selectOp = {() => selectOp(op.id)}
        
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
            onChange={handleSliderChange}
            disable={false}
        />
        <h3>Value: {sliderValue}</h3>
    </div>
    <div className="number-container">
        {numElements}
    </div>
    <div className="math-buttons">
        {mathButtons}
    </div>
    <footer>
        <h3 className="subtitle">Created By: Derek Kirschbaum</h3>
    </footer>
    </main>
);
}
