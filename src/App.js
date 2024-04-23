import React, { useState } from "react";
import "./styles.css";
import Button from "./components/Button";
import Input from "./components/Input";
import EqualButton from "./components/EqualButton";
import Switch from "./components/Switch";
import Dropdown from "./components/Dropdown";

export default function App({ state, dispatch }) {

  const [selectedTheme, setSelectedTheme] = useState(null);
  const [isSwitchOn, setIsSwitchOn] = useState(false);

  const handleSwitchChange = (isChecked) => {
    setIsSwitchOn(isChecked);
  };

  const handleSelectTheme = (theme) => {
    setSelectedTheme(theme);
  };

  return (
    <div className={`App ${selectedTheme}`}>
      <h1>CalculadorApp</h1>
      <header className="App-header">
        <Switch onChange={handleSwitchChange} />
        <Dropdown onSelect={handleSelectTheme} />
      </header>
      <div className="calc-wrapper">
        <Input input={state}></Input>
        <div className={`row ${isSwitchOn ? 'cientific-mode' : 'basic-mode'}`}>
          <Button onClick={() => dispatch({ type: "handleRoot" })}>√</Button>
          <Button onClick={() => dispatch({ type: "handleInvers" })}>1/x</Button>
          <Button onClick={() => dispatch({ type: "addtoInputNum", param: "^" })}>x^n</Button>
          <Button onClick={() => dispatch({ type: "handleLog" })}>ln⁡x</Button>
        </div>
        <div className="row">
          <Button
            onClick={() => dispatch({ type: "addtoInputNum", param: "7" })}
          >
            7
          </Button>
          <Button
            onClick={() => dispatch({ type: "addtoInputNum", param: "8" })}
          >
            8
          </Button>
          <Button
            onClick={() => dispatch({ type: "addtoInputNum", param: "9" })}
          >
            9
          </Button>
          <Button
            onClick={() => dispatch({ type: "addtoInputOpr", param: "/" })}
          >
            /
          </Button>
        </div>
        <div className="row">
          <Button
            onClick={() => dispatch({ type: "addtoInputNum", param: "4" })}
          >
            4
          </Button>
          <Button
            onClick={() => dispatch({ type: "addtoInputNum", param: "5" })}
          >
            5
          </Button>
          <Button
            onClick={() => dispatch({ type: "addtoInputNum", param: "6" })}
          >
            6
          </Button>
          <Button
            onClick={() => dispatch({ type: "addtoInputOpr", param: "*" })}
          >
            X
          </Button>
        </div>
        <div className="row">
          <Button
            onClick={() => dispatch({ type: "addtoInputNum", param: "1" })}
          >
            1
          </Button>
          <Button
            onClick={() => dispatch({ type: "addtoInputNum", param: "2" })}
          >
            2
          </Button>
          <Button
            onClick={() => dispatch({ type: "addtoInputNum", param: "3" })}
          >
            3
          </Button>
          <Button
            onClick={() => dispatch({ type: "addtoInputOpr", param: "+" })}
          >
            +
          </Button>
        </div>
        <div className="row">
          <Button
            onClick={() => dispatch({ type: "addtoInputNum", param: "." })}
          >
            .
          </Button>
          <Button
            onClick={() => dispatch({ type: "addtoInputNum", param: "0" })}
          >
            0
          </Button>
          <Button
            onClick={() => dispatch({ type: "addtoInputNum", param: "00" })}
          >
            00
          </Button>
          <Button
            onClick={() => dispatch({ type: "addtoInputNum", param: "-" })}
          >
            -
          </Button>
        </div>
        <div className="row">
          <EqualButton onClick={() => dispatch({ type: "handleEqual" })}>
            =
          </EqualButton>
          <EqualButton onClick={() => dispatch({ type: "handleClear" })}>
            c
          </EqualButton>
          <EqualButton onClick={() => dispatch({ type: "handleBack" })}>
            back
          </EqualButton>
          <EqualButton onClick={() => dispatch({ type: "handleAns", param: "&" })}>
            ans
          </EqualButton>
        </div>
      </div>
    </div>
  );
}

