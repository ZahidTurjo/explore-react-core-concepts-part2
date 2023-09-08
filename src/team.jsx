import { useState } from "react"

export default function Team(){
    const [team,setTeam]=useState(11)

    return(
        <div style={{border:'2px solid purple', margin:'20px'}}>
            <h3>Player:{team}</h3>
    <button onClick={()=>{
const newCount=team+1;
setTeam(newCount)
    }}>ADD</button>
    <button onClick={()=>{
        setTeam(team-1)
    }} >Reduce</button>
        </div>
    )
}