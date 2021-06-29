import { useState } from "react";
import UserName from './UserName';
export default function SecondContent({num}){
    //let name = "Ohio";
    //console.log(props);
    const [name,setName] = useState('Ohio');
    //const [num, setNum] = useState(props.num);
    const msg = num > 19 ? "too dense" : "that's ok.";
    // function changeState(){
    //    const newName = name === "Ohio"? "Florida" : "Ohio";
        // console.log(name);
        // document.getElementById("name").innerText = name;
        // setName(name === "Ohio"? "Florida" : "Ohio");
    // }
return(

<div>
  <h2>State,UseState</h2>
  {/* <h3 id="name" style={{
    color:"dodgerBlue",
  }}>{name}({num})</h3> */}
  <h3 id="name" style={{
    color:"dodgerBlue",
  }}>{name}({num}):{msg}</h3>
  {/* <button onClick={changeState} style={{marginBottom:"10px",border:"none",
  padding:"7px",backgroundColor:"#786B78",
  color:"#fff",borderRadius:"5px",
  }}>Change</button> */}
  <UserName name={name}/>
  <button onClick={()=>{
    setName(name === "Ohio"? "Florida" : "Ohio");
    //setNum(num+1);
  }}
 style={{marginBottom:"10px",border:"none",
  padding:"7px",backgroundColor:"#786B78",
  color:"#fff",borderRadius:"5px",
  }}>
    Change</button>
</div>
//name은 SecondCon.js 내에서는 컴포넌트지만, UserName 의 name 은
//UserName 에서는 props다 

);
}