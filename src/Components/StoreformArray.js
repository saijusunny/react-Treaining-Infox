import React, { useState, useRef, useEffect } from "react";

function StoreformArray(){
    const[input , setInputs]=useState('')
    const[display , setDisplay]=useState([])
    const AddData = () =>{
        if(input!==''){
            setDisplay([...display,{item : input, id : Date.now()}])
        console.log(display)
        setInputs('')
        }
    }
    const inputRef = useRef('null')
    useEffect(()=>{
        inputRef.current.focus();
    },[])// it is used to focus the top input field
    return(
        <div style={{backgroundColor:'aqua'}}>
            <h1>This function used to add effect focus on a input field, and store data to array </h1>
            
            <input type="text" value={input} ref={inputRef} onChange={(e)=>setInputs(e.target.value)} />
            <button onClick={AddData}>Add data</button>
            <ul>
               
                {
                    display.map((data)=>(
                        <li key={data.id}>{data.item}, id : {data.id}</li>
                    ))
                }
            </ul>
        </div>
    );
}

export default StoreformArray;