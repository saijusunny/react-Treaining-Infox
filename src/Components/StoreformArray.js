import React, { useState, useRef, useEffect } from "react";
import { MdDelete } from 'react-icons/md';
// npm install react-icons --save for install
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

    const deleteData = (id) =>{
        console.log(id)
        display.filter((item) => item.id !==id)
    }
    return(
        <div style={{backgroundColor:'aqua'}}>
            <h1>This function used to add effect focus on a input field, and store data to array and displayt ickons </h1>
            
            <input type="text" value={input} ref={inputRef} onChange={(e)=>setInputs(e.target.value)} />
            <button onClick={AddData}>Add data</button>
            <ul>
               
                {
                    display.map((data)=>(
                        <li key={data.id}>{data.item}, id : {data.id}
                        <span><MdDelete onClick={() => deleteData(data.id)}/></span></li>
                        
                    ))
                }
            </ul>
        </div>
    );

}

export default StoreformArray;