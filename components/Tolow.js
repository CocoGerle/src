import React, {useEffect, useState} from 'react'

export const Tolow = () => {

    const [torol, setTorol] = useState("Users");
    // useEffect (effect) - component render hiigdeh tutam ajillana. 
    // useEffect(()=> {
    //     console.log("render")
    // })

    // useEffect (effect, []) - component hamgiin anh render hiigdeh tutam ajillana.
    // useEffect(()=> {
    //     console.log("render")
    // }, []) 

    // useEffect (effect, cause) - cause uurchlugduh uyd effect ajillana.
    useEffect(()=> {
    fetch(`https://jsonplaceholder.typicode.com/${torol}`)
      .then(response => response.json())
      .then(json => console.log(json))
    }, [torol]);
    
  return (
    <div>
        <div className='container'>
        <button onClick={() => setTorol("Users")} style={{margin:"5px"}}>Users</button>
        <button onClick={() => setTorol("Posts")} style={{margin:"5px"}}>Posts</button>
        <button onClick={() => setTorol("Comments")} style={{margin:"5px"}}>Comments</button>
        </div>
        <h1></h1>    
    </div>
  )
}
export default Tolow
