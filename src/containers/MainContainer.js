import React, { useState } from "react";
import UserContext from "../context/UserContext";
import HighScores from "./HighScores";

const MainContainer = () => {

    const [player, setPlayer] = useState({
        name: "Craig",
        score: 300
    })

    return (
        <>
            <h1>Main Container</h1>
            <UserContext.Provider value={{
                player: player,
                setPlayer: setPlayer
            }}>
                <HighScores />
            </UserContext.Provider>
        </>
    )
}


export default MainContainer;

