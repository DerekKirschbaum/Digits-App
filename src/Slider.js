import React, { useEffect, useRef } from 'react';
import Slider from 'react-slider';


const SliderComponent = ({ min, max, step, defaultValue, onChange, disable }) => {
const handleChange = (event) => {
    if (!disable && onChange) {
      onChange(event.target.value);
    }
  };

return (
    <div className="slider-container">
    
        <input
            
            className="slider"
            thumbClassName='handle'
            min={min}
            max={max}
            step={step}
            defaultValue={defaultValue}
            onChange={handleChange}
            readOnly={disable}
        />
    
    </div>
);
};

export default SliderComponent;
