import React, { useState } from "react";
import "./range.scss";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
const Range = ({ valueChange }) => {
  const [duration, setDuration] = useState(50);

  valueChange(duration);

  const marks = {
    50: (
      <strong style={{ color: "#87A2BA", fontSize: "14px" }}>50&ensp;т.</strong>
    ),
    500: (
      <strong style={{ color: "#87A2BA", fontSize: "14px" }}>
        500 &ensp;т.
      </strong>
    ),
    1000: (
      <strong style={{ color: "#87A2BA", fontSize: "14px" }}>
        1000&ensp;т.
      </strong>
    ),
    2000: (
      <strong style={{ color: "#87A2BA", fontSize: "14px" }}>
        2000&ensp;т.
      </strong>
    ),
    3000: (
      <strong style={{ color: "#87A2BA", fontSize: "14px" }}>
        3000&ensp;т.
      </strong>
    )
  };

  const handleChangeValue = e => setDuration(e);
  const handleChangeInput = e => {
    console.log(Number(e.target.value));
    if (
      (e.target.value.length === 5 || e.target.value >= 50000) &&
      (e.target.value.length <= 6 || e.target.value <= 3000000)
    ) {
      setDuration(e.target.value / 1000);
    }
  };
  return (
    <div className="range">
      <div className="range__sum">
        <span className="range__text">Сумма для инвестирования</span>
        <div className="input-sum">
          <input
            type="number"
            className="input-sum__currency"
            min={50000}
            max={3000000}
            onChange={handleChangeInput}
            step={1000}
            value={Number(duration * 1000)}
          />
          <div className="input-sum__icon">&ensp;&#8381;</div>
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
