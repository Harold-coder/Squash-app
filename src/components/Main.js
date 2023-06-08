import React from "react"
import Player from "./Player"
import data from "../data"
import dataweek1 from "../dataweek1"
import dataweek2 from "../dataweek2"
import dataweek3 from "../dataweek3"

export default function Main(props) {
    const player_general = data.map(item => {
        return (
            <Player
                key={item.id}
                {...item}
                
            />
        )
    })

    const player_week1 = dataweek1.map(item => {
        return (
            <Player
                key={item.id}
                {...item}
                
            />
        )
    })

    const player_week2 = dataweek2.map(item => {
        return (
            <Player
                key={item.id}
                {...item}
                
            />
        )
    })

    const player_week3 = dataweek3.map(item => {
        return (
            <Player
                key={item.id}
                {...item}
                
            />
        )
    })

    const [week, setWeek] = React.useState(3)
  
    const handleOpen = () => {
        let updated = (week + 1)%4
        if (updated === 0){
            updated = 1
        }
        setWeek(updated);
    };
    let description
    if (week === 1){
        description = "2k Run"
    } else if (week === 2){
        description = "10k Cycle"
    } else if (week === 3){
        description = "4 corners Ghost"
    }

    return (
        <div className="main-body-inside">
            {
                props.dropdown === "false" && <div className="main-header">
                <h1 className="h1-title">{props.title}</h1> </div>
            }
            {
                props.dropdown === "true" && <div className="main-header"> <button onClick={handleOpen} className="dd-btn">{description}</button></div>
            }
            <main>
            <div className="main-leaderboard">
                <table>
                    {props.dropdown === "false" && player_general}
                    {props.dropdown === "true" && week === 1 && player_week1}
                    {props.dropdown === "true" && week === 2 && player_week2}
                    {props.dropdown === "true" && week === 3 && player_week3}
                </table>
            </div>
            </main>
        </div>
    )
}