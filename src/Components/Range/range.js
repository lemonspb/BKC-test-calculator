import React, { useState } from "react";
import PropTypes from 'prop-types';

import "./range.scss";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
const Range = ({ valueChange }) => {
  
  Range.propTypes={
    valueChange: PropTypes.func

  }
  const inputSum = React.createRef();
  const [duration, setDuration] = useState(50);
  valueChange(duration);
  const marks = {
    50: <span className="range__mark">50&ensp;т.</span>,
    500: <span className="range__mark">500&ensp;т.</span>,
    1000: <span className="range__mark">1000&ensp;т.</span>,
    2000: <span className="range__mark">2000&ensp;т.</span>,
    3000: <span className="range__mark">3000&ensp;т.</span>
  };
  const handleChangeValue = e => {
    
  setDuration(Number(e))
};
const handleChangeInput = e => {
    const clamped = Math.max(50, Math.min(Number(e.target.value), 3000));
    setDuration(clamped);
  };





  return (
    <div className="range">
      <div className="range__sum">
        <span className="range__text">Сумма для инвестирования</span>
        <div className="input-sum">
          <input ref={inputSum}
            type='number'
            className="input-sum__currency"
            min={50}
            max={3000}
            onChange={handleChangeInput}
            step={10}
            value={duration}
          />
          <div className="input-sum__icon"  onClick={()=>{inputSum.current.focus()}}>000&ensp;<span>&#8381;</span></div>
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
          railStyle={{ background: "#6D7E92", height: "5px" }}
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
            marginLeft: "-1px",
            marginBottom: "-20px",
            background: "#87A2BA",
            border: "#4C9AFF"
          }}
        />
      </form>
    </div>
  );
};

export default Range;
