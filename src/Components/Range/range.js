import React, { useState } from 'react'
import {  Form } from 'semantic-ui-react'
import './range.scss'


const  Range = ({valueChange})=> {

const [duration, setDuration ] =  useState(50)

valueChange(duration)

  

 const  handleChangeValue = (e, { value }) => setDuration(value)

    return (

    <div className='range'>
         <div className='range__sum'><span className='range__text'>Сумма для инвестирования</span> <div className='range__money'>
         {Number((duration)*1000).toLocaleString('ru-RU')}&ensp;&#8381;</div></div>

          <Form className='range__form'>
            <Form.Input
              min={50}
              max={3000}
              name='duration'
              onChange={handleChangeValue}
              step={1}
              type='range'
              value={duration}
            />
           
          </Form>

          </div>
        
    )
  }

export default Range