import React, { useState } from "react";
import style from './style.css'

function Function() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const Click = (value) => {
    setInput(input+value)
  };

  const clearInput = () => {
    setInput("");
    setResult("");
  };

  const removeLast = () => {
    setInput(input.slice(0, -1));
  };

  const calculateResult = () => { 
    try {
      const evaluate = eval(input);
      setResult(evaluate); 
    } catch(error)
    {
      setResult("")
    }
  };

  return (
    <div>
      <h1 style={{textAlign:"center"}}>Calculator App</h1>
    <div className="calculator">
      <div className="display">
        <h2>{input || "0"}</h2>
        <h2>{result}</h2>
      </div>
      <div className="buttons">
        <button onClick={clearInput} className="math">AC</button>
        <button onClick={removeLast} className="math">Del</button>
        <button onClick={() => Click("+/-")} className="math">+/-</button>
        <button onClick={() => Click("-")} className="math">-</button>
        <button onClick={() => Click("7")}>7</button>
        <button onClick={() => Click("8")}>8</button>
        <button onClick={() => Click("9")}>9</button>
        <button onClick={() => Click("/")} className="math">/</button>
        <button onClick={() => Click("4")}>4</button>
        <button onClick={() => Click("5")}>5</button>
        <button onClick={() => Click("6")}>6</button>
        <button onClick={() => Click("*")} className="math">X</button>
        <button onClick={() => Click("1")}>1</button>
        <button onClick={() => Click("2")}>2</button>
        <button onClick={() => Click("3")}>3</button>
        <button onClick={() => Click("+")} className="math">+</button>
        <button onClick={() => Click("0")} className="Wid">0</button>
        <button onClick={() => Click(".")} className="widt">.</button>
        <button onClick={() => Click("%")} className="widt">%</button>
        
        <button onClick={calculateResult} className="math width">=</button>
      </div>
    </div>
    </div>
  );
};

export default Function;