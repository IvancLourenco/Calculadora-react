import React, { useState } from "react";
import "./Calculator.css";
import Container from "@mui/material/Container";
import { Box } from "@mui/material";


export const Calculator = () => {
  const [num, setNum] = useState(0);
  const [oldnum, setOldNum] = useState(0);
  const [operator, setOperator] = useState(null);



  const inputNum = (e) => {
    let input = e.target.value;
    {num === 0? setNum(input): setNum(num + input)};
    
    
  };

  const clear = (e) => setNum(0);

  const porcentage = () => {
    setNum(num/100);
  }

  const changeSing = () => {num > 0? setNum(-num): setNum(num *-1)}

  const calculate = () => {
    if(operator ==="/"){
    setNum(parseFloat(oldnum) / parseFloat(num));
  } else if (operator ==="X"){
    setNum(parseFloat(oldnum) * parseFloat(num));
  } else if (operator ==="-"){
    setNum(parseFloat(oldnum) - parseFloat(num));
  } else if (operator ==="+"){
    setNum(parseFloat(oldnum) + parseFloat(num));
  }
  
  }
   const operatorHandler = (e) => {
    let operatorInput = e.target.value
    setOperator(operatorInput)
    setOldNum(num);
    setNum(0);
   }

  return (
    <div>
      <Box m={5} />

      <Container maxWidth="xs">
        <div className="wrapper">
          <Box m={12} />
          <h1 className="result">{num}</h1>

          <button onClick={clear}>AC</button>
          <button onClick={changeSing}>+/-</button>
          <button onClick={porcentage}>%</button>
          <button className="greenn" onClick={operatorHandler} value = {"/"}>/</button>
          <button className="graay" onClick={inputNum} value={7}>
            7
          </button>
          <button className="graay" onClick={inputNum} value={8}>
            8
          </button>
          <button className="graay" onClick={inputNum} value={9}>
            9
          </button>
          <button className="greenn" onClick={operatorHandler} value = {"X"} >X</button>
          <button className="graay" onClick={inputNum} value={4}>
            4
          </button>
          <button className="graay" onClick={inputNum} value={5}>
            5
          </button>
          <button className="graay" onClick={inputNum} value={6}>
            6
          </button>
          <button className="greenn" onClick={operatorHandler} value = {"-"} >-</button>
          <button className="graay" onClick={inputNum} value={1}>
            1
          </button>
          <button className="graay" onClick={inputNum} value={2}>
            2
          </button>
          <button className="graay" onClick={inputNum} value={3}>
            3
          </button>
          <button className="greenn" onClick={operatorHandler} value = {"+"}>+</button>
          <button className="graay" onClick={inputNum} value={0}>
            0
          </button>
          <button className="graay" onClick={inputNum} value={"."}>.</button>
          <button className="graay" style = { {visibility: "hidden"}}>,</button>
          <button className="greenn" onClick={calculate}>=</button>
        </div>
      </Container>
    </div>
  );
};
