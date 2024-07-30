import React, { useState } from 'react';

function Prevstate() {
    const [Count, setCount] = useState(0)

    const Increment=()=>{
        for(let i=0;i<5;i++)
            setCount(PrevState=>PrevState+1)
    }
  return (
    <div>Prevstate
         <button onClick={()=>Increment()}>Button of 5</button>
         <p> {Count}</p>
         
    </div>
   
    
  )
}

export default Prevstate