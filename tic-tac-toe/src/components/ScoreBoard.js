import React from 'react'
import './ScoreBoard.css'

export const ScoreBoard = ({scores, xPlaying, gameOverMessage}) => {

const {xScore, oScore} = scores;
  return (
    <div>
      <div className='scoreboard'>
        <span className={`score x-score ${!xPlaying && "inactive"}`}>X - {xScore}</span>
        <span className={`score o-score ${xPlaying && "inactive"}`}>O - {oScore}</span>        
    </div>
    <div hidden={gameOverMessage !== "" ?? "hidden"} className='scoreboard winningMessage'>
        <span className='winningMessage'>{gameOverMessage}</span>
      </div>
    </div>    
  )
}
