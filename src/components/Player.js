import React from "react"

export default function Player(props) {
    let showImage
    if (props.number == 1){
        showImage = 1;
    }
    return (
        <tr>
            <td className="number">{props.number}</td>
            <td><img className="picture" src={require("../images/"+props.picture)} alt="harold"></img></td>
            <td className="name">{props.name}</td>
            <td className="points">{props.points}
                {showImage && <img className="gold-medal" src="https://github.com/malunaridev/Challenges-iCodeThis/blob/master/4-leaderboard/assets/gold-medal.png?raw=true" alt="gold medal"/>}
            </td>
        </tr>
    )
}