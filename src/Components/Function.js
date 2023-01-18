import '../Style/Style.css';

function Function({username}) {
    const myStyle={
      backgroundColor:'blue'
    }
    return (
      <div style={myStyle}>
        <h1 className='state'>Its from Function</h1>
        <h1 >{username}</h1>
      
      </div>
      
    );
  }
  export default Function