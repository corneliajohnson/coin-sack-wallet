import { Row, Col } from "reactstrap";
import { useState } from "react";

const NumberPad = () => {
  //const [digit, setDigit] = useState([]);
  const digits = [];
  const createNumber = (num) => {
    if (num !== "<") {
      digits.push(num);
    } else {
      digits.pop();
    }
    return digits.join("");
  };

  const keypadDigits = [
    {
      id: 1,
      digit: "1",
    },
    {
      id: 2,
      digit: "2",
    },
    {
      id: 3,
      digit: "3",
    },
    {
      id: 4,
      digit: "4",
    },
    {
      id: 5,
      digit: "5",
    },
    {
      id: 6,
      digit: "6",
    },
    {
      id: 7,
      digit: "7",
    },
    {
      id: 8,
      digit: "8",
    },
    {
      id: 9,
      digit: "9",
    },
    {
      id: 10,
      digit: ".",
    },
    {
      id: 0,
      digit: "0",
    },
    {
      id: "11",
      digit: "<",
    },
  ];
  return (
    <Row className="row w-50">
      {keypadDigits.map((keypad) => (
        <Col
          action
          tag="button"
          className="col-4"
          onClick={(e) => createNumber(keypad.digit)}
          key={keypad.id}
        >
          {keypad.digit}
        </Col>
      ))}
    </Row>
  );
};

export default NumberPad;
