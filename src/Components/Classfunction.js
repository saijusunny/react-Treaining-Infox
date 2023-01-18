import React, {Component} from "react";

class Classfunction extends Component{
  constructor(){
    super();
    this.state={
      name : 'Saibu',
      age : 44,

    }
  }
    render(){
      const user ="Saiju"
    return (
      <div style={{backgroundColor:'red'}}>
        <h1>Haiiis Class Function</h1>
        <h1>{this.state.name} {this.state.age}</h1>
        <button onClick={()=>this.setState({name : user})}>Click To Change</button>
      </div>
  
    );
    }
  }
  
  export default Classfunction;
  