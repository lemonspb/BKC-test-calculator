import React, { useState } from "react";
import "./range.scss";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
const Range = ({ valueChange }) => {
  const [duration, setDuration] = useState(50);

  valueChange(duration);

  const marks = {
    50: <strong>50&ensp;т.</strong>,
    500: <strong>500 &ensp;т.</strong>,
    1000: <strong>1000&ensp;т.</strong>,
    2000: <strong>2000&ensp;т.</strong>,
    3000: <strong>3000&ensp;т.</strong>
  };

  const handleChangeValue = e => setDuration(e);
 const handleChangeInput = e =>  {

if((e.target.value.length === 2 || e.target.value >= 50)  && e.target.value.length<=4){
  setDuration(e.target.value)
}
  
 }
  return (
    <div className="range">
      <div className="range__sum">
        <span className="range__text">Сумма для инвестирования</span>
        <div className='abc'>      
         <input type='number' 
        className="range__money"
        min={50}
          max={3000}
          onChange={handleChangeInput}
          step={10}
          value={Number(duration)}
         />
          <div className='dfd'>000&ensp;&#8381;</div>
         </div>
      </div>

      <form className="range__form">
        
        <Slider
          min={50}
          max={3000}
          marks={marks}
          onChange={handleChangeValue}
          step={10}
          value={Number(duration)}
          railStyle={{ background: "grey", height: "5px" }}
          trackStyle={{ height: "5px", background: "#4C9AFF" }}
          handleStyle={{
            width: "25px",
            height: "25px",
            border: "#4C9AFF",
            marginTop: "-10px"
          }}
          dotStyle={{
            width: "2px",
            height: "10px",
            marginBottom: "-20px",
            background: "#666",
            border: "#4C9AFF"
          }}
        />
      </form>
    </div>
  );
};

export default Range;
