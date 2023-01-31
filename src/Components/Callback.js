import React, { useState, useCallback } from "react";
import Title from "./callback/Title";
import Count from "./callback/Count";
import Button from "./callback/Button";

function Callback() {
  const [age, setAge] = useState(21);
  const [salary, setSalary] = useState(50000);

  const IncrementAge = useCallback(() => {
    setAge((age) => age + 1);
  }, [age]);
  const IncrementSalary = useCallback(() => {
    setSalary((salary) => salary + 1000);
  }, [salary]);
  return (
    <div>
      <h3>Call back function for managing rendering</h3>
      <Title />
      <Count text="Age" count={age} />
      <Button handleClick={IncrementAge}>Increment Age</Button>
      <Count text="Salary" count={salary} />
      <Button handleClick={IncrementSalary}>Increment Salary</Button>
    </div>
  );
}

export default Callback;
