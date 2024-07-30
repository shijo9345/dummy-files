import React from 'react'

const Myevent=()=>{
    
}
const Failevent=()=>{
    return <h2>Go and complete</h2>
}
function Conditional(props) {
   const target = props.name
   if (target)
  return (<h1><Myevent/></h1>
  )
  return (
    <h3><Failevent/></h3>
  )
}
export default Conditional