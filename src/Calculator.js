import React, { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
  const [screen, setScreen] = useState("");

  const calculate = (string) => {
    let firstValue = "";
    let secondValue = "";
    let operator = "";
    var op = false;
    for (let i of string) {
      if (op === false) {
        if (i === "+" || i === "-" || i === "x" || i === "/" || i === "%") {
          op = true;
          operator = i;
        } else {
          firstValue += i;
        }
      } else {
        secondValue += i;
      }
    }
    firstValue = parseFloat(firstValue);
    secondValue = parseFloat(secondValue);

    if (operator === "+") {
      return firstValue + secondValue;
    } else if (operator === "-") {
      return firstValue - secondValue;
    } else if (operator === "x") {
      return firstValue * secondValue;
    } else if (operator === "/") {
      return firstValue / secondValue;
    } else if (operator === "%") {
      return firstValue % secondValue;
    }
  };

  const handleClick = (event) => {
    var key = event.target.value;
    if (key === "AC") {
      setScreen("");
    } else if (key === "C") {
      setScreen(screen.slice(0, screen.length - 1));
    } else if (key === "=") {
      var res = calculate(screen);
      setScreen(res);
    } else {
      setScreen(screen + key);
    }
  };

  return (
    <>
      <div className="container">
        <div className="screen">{screen}</div>
        <div className="all_buttons">
          <div className="rows">
            <button
              className="buttons AC_button"
              onClick={handleClick}
              value="AC"
            >
              AC
            </button>
            <button className="buttons" onClick={handleClick} value="C">
              C
            </button>
            <button className="buttons" onClick={handleClick} value="%">
              %
            </button>
            <button className="buttons" onClick={handleClick} value="/">
              /
            </button>
          </div>
          <div className="rows">
            <button className="buttons" onClick={handleClick} value="7">
              7
            </button>
            <button className="buttons" onClick={handleClick} value="8">
              8
            </button>
            <button className="buttons" onClick={handleClick} value="9">
              9
            </button>
            <button className="buttons" onClick={handleClick} value="x">
              x
            </button>
          </div>
          <div className="rows">
            <button className="buttons" onClick={handleClick} value="4">
              4
            </button>
            <button className="buttons" onClick={handleClick} value="5">
              5
            </button>
            <button className="buttons" onClick={handleClick} value="6">
              6
            </button>
            <button className="buttons" onClick={handleClick} value="-">
              -
            </button>
          </div>
          <div className="rows">
            <button className="buttons" onClick={handleClick} value="1">
              1
            </button>
            <button className="buttons" onClick={handleClick} value="2">
              2
            </button>
            <button className="buttons" onClick={handleClick} value="3">
              3
            </button>
            <button className="buttons" onClick={handleClick} value="+">
              +
            </button>
          </div>
          <div className="rows">
            <button className="buttons" onClick={handleClick} value="0">
              0
            </button>
            <button className="buttons" onClick={handleClick} value="00">
              00
            </button>
            <button className="buttons" onClick={handleClick} value=".">
              .
            </button>
            <button
              className="buttons equal_button"
              onClick={handleClick}
              value="="
            >
              =
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Calculator;
