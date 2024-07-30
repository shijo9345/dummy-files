import React, {useEffect,useRef} from "react"
const UseRef=()=>{
    const Color=useRef(null)
    const Colorselement=['blue','red','Green','white','grey','green','yellow']
    const selectedcolor=useRef(null)
    useEffect(()=>{
        console.log(Color)
        console.log(Color.current)
    })
    const Stylepara=()=>{
        const randomcolor =Math.floor(Math.random()*Colorselement.length)
        Color.current.style.color=Colorselement[randomcolor]

    selectedcolor.current=Colorselement[randomcolor]
        console.log(selectedcolor.current);
       }
    return(
        <div>
            <button onClick={()=>(Stylepara())}>Click Me</button>
            <p ref={Color}>There is a slight example of the work</p>
        </div>
    )
}
export default UseRef