import { useState } from "react";

const Mulstate =() => {
    const[name , setName] = useState('anu')
    const[Count , setCount] = useState(1)
    const changeName = () =>{
        setName('Arjun Reddy')
    }
    const[Stud , setStud] = useState({
        name:'Saiju',
        std:'4 th',
        age : 8
    })

    // change all function
    const changeAll=()=>{
        setCount(Count+2);
        setName('arjun');
        setStud({...Stud, age : 1000})
    }
    return(
        <div style={{backgroundColor:'yellow'}}>
            <h1>Its from Multiple State</h1>
            {/* change name working */}
            <div>
                <h4>{name}</h4>
                <button onClick={changeName}>Click Function</button>
            </div>

            {/* Count adding */}
            <div>
                <h4>Starting Value = {Count}</h4>
                <button onClick={()=>setCount(Count+1)}>Click To add One</button>
            </div>

            {/* Multiple Value Update */}
            <div>
                <h1>Update one methode</h1>
                <ul>
                    <li>{Stud.name}</li>
                    <li>{Stud.std}</li>
                    <li>{Stud.age}</li>

                </ul>
                <button onClick={()=>setStud({...Stud, age : 50})}>Click To add One</button>
            </div>

            <div>
                <h1>Update Second Method</h1>

                <h1>Update one methode</h1>
                <ul>
                    <li>{Stud.name}</li>
                    <li>{Stud.std}</li>
                    <li>{Stud.age}</li>

                </ul>
                {/* prevState is a veriable */}
                <button onClick={()=>setStud(prevState=>{
                    return{...prevState, age : 700}})}>Click To add One</button>
                <button onClick={changeAll}>Change all In single function</button>
            </div>

            
        </div>
    );
}

export default Mulstate