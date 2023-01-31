import React, { useMemo, useState } from "react";

function Counter() {
  const [CounterOne, setCounterOne] = useState(0);
  const [CounterTwo, setCountertwo] = useState(0);

  const IncrementOne = () => {
    setCounterOne((counterOne) => counterOne + 1);
  };
  const IncrementTwo = () => {
    setCountertwo((CounterTwo) => CounterTwo + 1);
  };
  // usememo upayogichal aa oru functionu mathram delay varu backi functione athu badhikkulla
  const isEven = useMemo(() =>{
    let i =0
    while(i < 2000000000) i++ 
    return CounterOne % 2 === 0
  },[CounterOne])
  return (
    <div>
      <div>
        <h3>Use memo Function For Manage rendering</h3>
        <button onClick={IncrementOne}>Count One - {CounterOne}</button>
        <span>{isEven ? 'Even' : 'Odd'}</span>
      </div>
      <div>
        <button onClick={IncrementTwo}>Count Two - {CounterTwo}</button>
      </div>
    </div>
  );
}

export default Counter;