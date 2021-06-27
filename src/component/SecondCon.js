import { useState } from "react";
export default function SecondContent(props){
    //let name = "Ohio";
    console.log(props);
    const [name,setName] = useState('Ohio');
    const [num, setNum] = useState(props.num);

    // function changeState(){
    //    const newName = name === "Ohio"? "Florida" : "Ohio";
        // console.log(name);
        // document.getElementById("name").innerText = name;
        // setName(name === "Ohio"? "Florida" : "Ohio");
    // }
return(

<div>
  <h2>State,UseState</h2>
  <h3 id="name" style={{
    color:"dodgerBlue",
  }}>{name}({num})</h3>
  {/* <button onClick={changeState} style={{marginBottom:"10px",border:"none",
  padding:"7px",backgroundColor:"#786B78",
  color:"#fff",borderRadius:"5px",
  }}>Change</button> */}
  <button onClick={()=>{
    setName(name === "Ohio"? "Florida" : "Ohio");
    setNum(num+1);
  }}
 style={{marginBottom:"10px",border:"none",
  padding:"7px",backgroundColor:"#786B78",
  color:"#fff",borderRadius:"5px",
  }}>
    Change</button>
</div>


);
}