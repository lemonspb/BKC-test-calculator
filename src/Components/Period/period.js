import React from "react";
import {  Button,Header }  from 'semantic-ui-react'
import './period.scss'

function Period({handleClickPeriod}) {



return(
 <div className='period'>
    <Header as='h3'color='blue' >срок инвестирования</Header> 
    <Button.Group  onClick={handleClickPeriod} className='srock' >
      <Button  value={4.8}    className='button-srock' >3 месяца</Button>
      <Button value={9.28}    className='button-srock'>6 месяцов</Button>
      <Button value={13.72}   className='button-srock'>1 год</Button>
      <Button value={14.35}   className='button-srock'>2 года</Button>
      <Button value={25.69}   className='button-srock'>3 года</Button>
    </Button.Group>
    </div>

)

}

export default Period;