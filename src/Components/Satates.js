import { useState } from "react";

function States(){
    const[name , setState]=useState('john')
    return(
        <div style={{backgroundColor:'green'}}>
            <h1>its from State Function</h1>
            <h3>Name is : {name}</h3>
        </div>
    );
}

export default States;