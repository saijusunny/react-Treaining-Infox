

import { useState } from "react";

function MulinpForm(){
    const[inputs , setinputs]=useState({
        dept:"ba",
        text:"enter"
    })//input starting value
    const handleChange = (e) =>{
        const name = e.target.name;//it can store all name in a form as array(input field name)
        const value=e.target.value;//it can store all values in a form as array(input values)
        setinputs(prevState =>({...prevState,[name]:value}))// it stor all name and its value from input field

    }
    // display the user input data to another field
    const display = () =>{
        document.getElementById('usname').innerHTML = `Name is ${inputs.username}`
        document.getElementById('ages').innerHTML = `Name is ${inputs.age}`
        document.getElementById('stds').innerHTML = `Name is ${inputs.dept}`
        document.getElementById('text').innerHTML = `Name is ${inputs.text}`
    }

    const handleSubmit= (e) =>{
        e.preventDefault();
    }
    return(
        <div style={{backgroundColor:'orange'}}>
            <form onSubmit={handleSubmit}>
                <h1>Form Multiple Input</h1>
                <label htmlFor="">Name:</label>
                <input type="text" name="username" value={inputs.username} onChange={handleChange} /><br/>

                <label htmlFor="">Age:</label>
                <input type="text" name="age" value={inputs.age} onChange={handleChange} /><br/>

                <select name="dept" value={inputs.dept} onChange={handleChange}>
                    <option value="bba">bba</option>
                    <option value="ba">ba</option>
                </select>
                <textarea name="text" id="" cols="30" rows="10" value={inputs.text} onChange={handleChange}></textarea>
                <button onClick={display}>Display Values</button>
            </form>
            {inputs.username}
            {inputs.age}
            <div>
                <p id='usname'></p><br />
                <p id='ages'></p><br />
                <p id='stds'></p><br />
                <p id='text'></p><br />
            </div>
        
        </div>
    );
}

export default MulinpForm;