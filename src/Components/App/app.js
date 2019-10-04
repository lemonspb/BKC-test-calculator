import React, { useState } from "react";
import Range from "../Range";
import Period from "../Period";
import Out from "../Out";
import ModalGet from "../Modal";
import "./app.scss";
function App() {
  const [investment, setInvestment] = useState(0);
  const [interestRate, setInterestRate] = useState(0);
  const [active, setActive] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

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
      <div className="calculator">
        <section className="calculator__left">
          <Range valueChange={valueChange} />
          <Period handleClickPeriod={handleClickPeriod} active={active} />
        </section>
        <section className="calculator__right">
          <Out
            investment={investment}
            interestRate={interestRate}
            handleClickModal={handleClickModal}
          />
        </section>
        <ModalGet modalOpen={modalOpen} closeModal={closeModal} />
      </div>
    </React.Fragment>
  );
}

export default App;
