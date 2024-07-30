import React from 'react'
const handleClick=()=>{
    console.log("gerald");
}
function Home() {
  return (
    <div className='home'><h1>Home Page</h1>
    <button onClick={handleClick}>Click</button>
    </div>
  )
}

export default Home