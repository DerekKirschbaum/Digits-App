import React, { useEffect, useRef } from 'react';
import Slider from 'react-slider';


const SliderComponent = ({ min, max, step, defaultValue, onChange, disable }) => {
const handleChange = (event) => {
    if (!disable && onChange) {
    onChange(event);
    }
};

return (
    <div className="slider-container">
        <h3 className="number-label">Choose how many numbers you want to play with:</h3>
        <Slider
            
            className="slider"
            thumbClassName='handle'
            min={min}
            max={max}
            step={step}
            defaultValue={defaultValue}
            onChange={handleChange}
            
        />
    
    </div>
);
};

export default SliderComponent;
