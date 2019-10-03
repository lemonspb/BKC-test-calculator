import React, { useState } from 'react'
import {  Form } from 'semantic-ui-react'
import './range.scss'


const  Range = ({valueChange})=> {

const [duration, setDuration ] =  useState(50)

valueChange(duration)

  

 const  handleChangeValue = (e) => setDuration(e.target.value)

    return (

    <div className='range'>
         <div className='range__sum'><span className='range__text'>Сумма для инвестирования</span> <div className='range__money'>
         {Number((duration)*1000).toLocaleString('ru-RU')}&ensp;&#8381;</div></div>

          <form className='range__form'>
            <input
              min={50}
              max={3000}
              name='duration'
              onChange={handleChangeValue}
              step={1}
              type='range'
              value={duration}
              list="duration"
            />
      <datalist className="range__list" id="duration">
    <option className="range__opt opt0" value="50" label="50" /> 
    <option className="range__opt" value="500" label="500"/> 
    <option className="range__opt"value="1000" label="1000"/> 

    <option className="range__opt" value="2000" label="2000" /> 
    <option className="range__opt" value='3000' label='3000' />  
  </datalist>

          </form>

          </div>
        
    )
  }

export default Range