import React, { useEffect, useState } from "react";

import "./out.scss";

function Out({ investment, interestRate ,handleClickModal}) {
  const [growthPercent, setGrowthPercent] = useState("");

  useEffect(() => {
    
    growingPercentage(investment, interestRate);
  }, [investment, interestRate]);

  function growingPercentage(val, precent) {
    setGrowthPercent((val / 100) * precent);
  }


   function  animationColumn(inv,num){

    return inv/70000+num

   }


  const Placeholder = () => {
    return <div className="placeholder"> Выберите срок инвестирования </div>;
  };

  if (!interestRate) {
    return <Placeholder />;
  }

  return (
    <React.Fragment>
      <div className="out">
        <div className="top">
          <div className="investments">
            <div className="investments__item">
           
              <div className="investments__column">
              
              <div className="investments__start" style={{height: animationColumn(+investment, 1)+'%'}} >
              <div className='investments__info--first'>

              <div className="investments__title">Инвестиции</div>
              <div className="investments__count">
                {investment.toLocaleString("ru-RU")}&ensp;&#8381;

              </div>
                </div>


              </div>
              </div>
            </div>
            <div className="investments__item">
             
             
              <div className="investments__column">
             
              <div className="investments__grow"  style={{height: animationColumn(+growthPercent, 1)+'%'}}>
                <div className='investments__info'>
                <div className="investments__title">Прирост стоймости паев</div>

              <div className="investments__count">
                {growthPercent.toLocaleString("ru-RU")}&ensp;&#x20bd;
              </div>

                </div>
            

              </div>
              <div className="investments__start" style={{height: animationColumn(+investment, 1)+'%'}}></div>
              </div>
            </div>
          </div>
        </div>
        <div className="center">
          <div className="precent">
            <span className="precent__text">Прирост стоимости паев</span>
            <div className="precent__sum">{interestRate}&#37;</div>
          </div>
        </div>
        <div className="buttom">
          <div className="ammount">
            <div className="ammount__title">Стоимость Паев</div>
            <div className="ammount__total">
              {(investment + growthPercent).toLocaleString("ru-RU")}
              &ensp;&#8381;
            </div>
            <button
               onClick = {()=>{handleClickModal(true)}}
            
              className="ammount__button"
            >
              Получить
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Out;
