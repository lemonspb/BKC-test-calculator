import React, { useState } from "react";
import Range from "../Range";
import Period from "../Period";
import Out from "../Out";
import ModalGet from "../Modal";
import "./app.scss";
function App() {
  const arrayInterest = getRandomItem([
    "4.8",
    "9.28",
    "13.72",
    "14.35",
    "25.69"
  ]);

  const [investment, setInvestment] = useState(0);
  const [interestRate, setInterestRate] = useState(arrayInterest);
  const [active, setActive] = useState(arrayInterest);
  const [modalOpen, setModalOpen] = useState(false);

  function getRandomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  const valueChange = val => {
    setInvestment(Number(val) * 1000);
  };

  const handleClickPeriod = e => {
    if (e.target.value) {
      setActive(e.target.value);
      setInterestRate(Number(e.target.value));
    }
  };
  const handleClickModal = bool => {
    setModalOpen(bool);
  };
  function closeModal(bool) {
    setModalOpen(bool);
  }

  return (
    <React.Fragment>
      <h3 className='title'> Калькулятор </h3>
      <div className="calculator">
        <section className="calculator__left">
          <Range valueChange={valueChange} />
          <Period handleClickPeriod={handleClickPeriod} active={active} />
        </section>
        <section className="calculator__right">
          <Out
            investment={investment}
            interestRate={Number(interestRate)}
            handleClickModal={handleClickModal}
          />
        </section>
        <ModalGet modalOpen={modalOpen} closeModal={closeModal} />
      </div>
    </React.Fragment>
  );
}

export default App;
