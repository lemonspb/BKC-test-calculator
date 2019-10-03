import React, { useState } from 'react'
import './range.scss'
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
const  Range = ({valueChange})=> {

const [duration, setDuration ] =  useState(50)

valueChange(duration)

const marks = {
  50: <strong>50 т.</strong>,
  500: <strong>500 т.</strong>,
  1000: <strong>1000 т.</strong>,
  2000: <strong>2000 т.</strong>,
  3000: <strong>3000 т.</strong>
};

 const  handleChangeValue = (e) => setDuration(e)

    return (

    <div className='range'>
         <div className='range__sum'><span className='range__text'>Сумма для инвестирования</span> <div className='range__money'>
         {Number((duration)*1000).toLocaleString('ru-RU')}&ensp;&#8381;</div></div>

          <form className='range__form'>
            <Slider
              min={50}
              max={3000}
              marks={marks}
              onChange={handleChangeValue}
              step={1}
              defaultValue={duration}
              railStyle={{background:'grey',height: '10px'}}
              trackStyle={{height: '10px'}}
              handleStyle={{width: '25px',height: '25px'}}
              dotStyle={{width: '15px',height: '15px', marginBottom: '-6px'}}
            />
   

          </form>

          </div>
        
    )
  }

export default Range