import React, {useEffect, useState} from 'react';


const Useeffect=()=>{
    const [Count, setCount]=useState(0);
    const [Message, setMessage] = useState("The text message");

// useEffect(()=>{
//     console.log("The message of console");
//     console.log(Message);
//     console.log("Count value",Count);
// })

// useEffect(()=>{
//     console.log("The message of console");
//     console.log(Message);
//     console.log("Count value",Count);
// },[])
useEffect(()=>{
    console.log("The message of console");
    console.log(Message);
    console.log("Count value",Count);
},[Count])
// useEffect(()=>{
//     console.log("The message of console");
//     console.log(Message);
//     console.log("Count value",Count);
// },[Count, Message])

return(
    <div>
        <button onClick={()=>setCount(Count+1)}>Click Me</button>
        <p>{Count}</p>
        <button onClick={()=>setMessage("Youu have initiated the message")}>Message bar</button>
        <p>{Message}</p>
    </div>
)
}
export default Useeffect