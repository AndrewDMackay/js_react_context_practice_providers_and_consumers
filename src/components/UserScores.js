import React from "react";
import UserContext from "../context/UserContext";


const UserScores = () => {

  return (
    <>
      <h3>User Scores</h3>
      <UserContext.Consumer>
        {({player, setPlayer}) => {
          return (

            <p>Player is {player.name}..</p>

          )
        }}
      </UserContext.Consumer>
    </>
  )
}


export default UserScores;

