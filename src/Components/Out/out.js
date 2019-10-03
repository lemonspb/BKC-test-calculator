import React, { useEffect, useState } from "react";

import "./out.scss";
import { Button } from "semantic-ui-react";

function Out({ investment, interestRate }) {


    const [growthPercent, setGrowthPercent] = useState("");

    useEffect(() => {
      growingPercentage(investment, interestRate);
    }, [investment, interestRate]);
  
    function growingPercentage(val, precent) {
     
      setGrowthPercent((val / 100) * precent);
    }






const Placeholder = ()=>  {return (<div className='placeholder'> Выберите срок инвестирования </div> 
)}

    if(!interestRate){
        return <Placeholder/>
    }

  return (
    <React.Fragment>
      <div className="out">
        <div className="top">
          <div className="investments">
            <div className="investments__item">
              <div className="investments__title">Инвестиции</div>
              <div className="investments__count">
                {investment.toLocaleString("ru-RU")}&ensp;&#8381;
              </div>
              <div className="investments__column"></div>
            </div>
            <div className="investments__item">
              <div className="investments__title">Прирост стоймости паев</div>
              <div className="investments__count">
                {growthPercent.toLocaleString("ru-RU")}&ensp;&#8381;
              </div>
              <div className="investments__column"></div>
            </div>
          </div>
        </div>
        <div className="center">
          <div className="precent">
            <span className="precent__text">Прирост стоимости паев</span>
            <div className="precent__sum">{interestRate}&ensp;&#37;</div>
          </div>
        </div>
        <div className="buttom">
          <div className="ammount">

            <div className="ammount__title">Стоимость Паев</div>
            <div className="ammount__total">
              {(investment + growthPercent).toLocaleString("ru-RU")}&ensp;&#8381;
            </div>
            <Button size="massive" color='yellow' className='ammount__button circular'>Получить</Button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Out;
