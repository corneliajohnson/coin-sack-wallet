import { useState } from "react/cjs/react.development";
import { Row, Col, Button } from "reactstrap";
import NextButton from "./NextButton";

export const NumberPad = () => {
  const [fullDigit, setFullDigit] = useState("");
  const digits = [];
  const createNumber = (num) => {
    if (num === "C") {
      setFullDigit("");
    } else {
      digits.push(num);
      setFullDigit((digits) => [...digits, num].join(""));
    }
  };

  const addMax = () => {
    setFullDigit("Max");
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
      digit: "C",
    },
  ];
  return (
    <div>
      <div className="mt-5 w-50">
        <h1>{fullDigit === "" ? "$0.00" : `$ ${fullDigit}`}</h1>
      </div>
      <Button onClick={addMax} className="w-25 m-4">
        MAX
      </Button>
      <Row className="row w-50">
        {keypadDigits.map((keypad) => (
          <Col
            tag="button"
            className="col-4 btn-light"
            onClick={(e) => createNumber(keypad.digit)}
            key={keypad.id}
          >
            {keypad.digit}
          </Col>
        ))}
      </Row>
      <div>
        <NextButton />
      </div>
    </div>
  );
};

export default NumberPad;
