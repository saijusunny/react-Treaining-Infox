import { useState } from "react";

function SingleForm(){
    const[dsname, setName]=useState('')
    // display the user input data to another field
    const display = () =>{
        document.getElementById('fname').innerHTML = 'Name is ${dsname}'
    }
    const onhandleSubmit = (e) =>{
        e.preventDefault(); //default function for display details premenently
    }
    return(
        <div style={{backgroundColor:'aqua'}}>
            <form onSubmit={onhandleSubmit}>
                <h1>Form Function</h1>
                <label>Name</label>
                <input type="text" value={dsname} onChange={(e)=>setName(e.target.value)} />
                
                <button onClick={display}>Display User Input</button>
            </form>
            <div>
                direct display:::{dsname}{/*display tha value directly when update input field*/}
                <div id='fname'></div>
            </div>
            
         
        </div>
    );
}

export default SingleForm;