import React, { useContext } from "react";
import UserContext from "../context/UserContext";


const UserScores = () => {

  const { player, setPlayer } = useContext(UserContext)

  const handleSubmit = (event) => {
    event.preventDefault()
    const newPlayer = {...player}
    newPlayer.name = event.target.name.value
    setPlayer(newPlayer)
  }

  return (
    <>
      <h3>User Scores</h3>
      <p>Hello {player.name}..</p>
      <form onSubmit={handleSubmit}>
      <input type="text" name="name" />
      <input type="submit" value="Save Name" />
      </form>
    </>
  )
}


export default UserScores;

