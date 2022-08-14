const GameDetails = ({ game }) => {

    return (
      <div className="game-details">
        <h4>{game.title}</h4>
        <p><strong>Publisher: </strong>{game.publisher}</p>
        <p><strong>Platform: </strong>{game.plataform}</p>
        <p>{game.createdAt}</p>
      </div>
    )
  }
  
  export default GameDetails