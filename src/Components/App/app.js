import React, { useEffect, useState } from "react";
import Range from "../Range";
import Period from "../Period";
import Out from '../Out'
import './app.scss'
function App() {
  const [value, setValue] = useState("");
  const [percentPeriod, setPercentPeriod] = useState("");
  const [growthPercent, setGrowthPercent] = useState("");

  useEffect(() => {
    growingPercentage(value, percentPeriod);
  }, [value, percentPeriod]);

  function growingPercentage(val, precent) {
   
    setGrowthPercent((val / 100) * precent);
  }

  const valueChange = val => {
    setValue(Number(val)*1000);
  };

  const handleClickPeriod = e => {
    setPercentPeriod(Number(e.target.value));
  };


  return (
    <React.Fragment>
      
      <div className='calculater'>
       <div className='calculater__left'>
      <Range valueChange={valueChange} />
      <Period handleClickPeriod={handleClickPeriod} />
      </div>
      <div className='calculater__right'>
     <Out value={value} percentPeriod={percentPeriod} growthPercent={Number(growthPercent)} />
     </div>
     </div>
    
    </React.Fragment>
  );
}

export default App;
