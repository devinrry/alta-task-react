import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const operators = [
  { value: "+", label: "+" },
  { value: "-", label: "-" },
  { value: "*", label: "*" },
  { value: "/", label: "/" },
];

const Hitung = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [operator, setOperator] = useState("+");
  const [hasil, setHasil] = useState(0);

  useEffect(() => {
    const getResult = () => {
      let res = 0;
      let a = parseInt(num1);
      let b = parseInt(num2);

      switch (operator) {
        default:
          res = a + b;
          break;
        case "-":
          res = a - b;
          break;
        case "*":
          res = a * b;
          break;
        case "/":
          res = a / b;
          break;
      }
      console.log(res);
      setHasil(res);
    };
    getResult();
  }, [num1, num2, operator]);

  console.log(hasil);

  const handleChange = (e) => {
    if (e.target) {
      setOperator(e.target.value);
    }
  };

  const handleUserInput = (e) => {
    if (e.target.id === "num1") {
      setNum1(e.target.value);
    } else if (e.target.id === "num2") {
      setNum2(e.target.value);
    }
  };

  return (
    <div>
      <input type="text" id="num1" className="m-2" onChange={handleUserInput} />
      <select onChange={handleChange}>
        {operators.map((e, i) => (
          <option key={i} value={e.value}>
            {e.label}
          </option>
        ))}
      </select>
      <input type="text" id="num2" className="m-2" onChange={handleUserInput} />
      <b>=</b>
      <input className="m-2" id="hasil" value={hasil} disabled />
    </div>
  );
};

function Calculator() {
  return (
    <div className="container pt-3">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/calculator">Calculator</Link>
        </li>
      </ul>
      <Hitung />
    </div>
  );
}

export default Calculator;
