import React from "react";
import { Button } from "semantic-ui-react";
import "./period.scss";

function Period({ handleClickPeriod, active }) {
  return (
    <div className="period">
      <h3>
        Срок инвестирования
      </h3>
      <Button.Group className="srock" onClick={handleClickPeriod}>
        <Button
          value={4.8}
          active={active === "4.8"}
          inverted
          color="blue"
          className="button-srock"
        >
          3 месяца
        </Button>
        <Button
          value={9.28}
          active={active === "9.28"}
          inverted
          color="blue"
          className="button-srock"
        >
          6 месяцев
        </Button>
        <Button
          value={13.72}
          active={active === "13.72"}
          inverted
          color="blue"
          className="button-srock"
        >
          1 год
        </Button>
        <Button
          value={14.35}
          active={active === "14.35"}
          inverted
          color="blue"
          className="button-srock"
        >
          2 года
        </Button>
        <Button
          value={25.69}
          active={active === "25.69"}
          inverted
          color="blue"
          className="button-srock"
        >
          3 года
        </Button>
      </Button.Group>
    </div>
  );
}

export default Period;
