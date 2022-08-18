import { useGamesContext } from "../hooks/useGamesContext"

const GameDetails = ({ game }) => {

    const { dispatch } = useGamesContext()

    const handleClick = async () => {
      const res = await fetch(`http://localhost:4000/api/games/${game._id}`,{
        method: 'DELETE'
      })

      const json = await res.json()

      if (res.ok) {
        dispatch({type: 'DELETE_GAME', payload:json})
      }
    }

    return (
      <div className="game-details">
        <h4>{game.title}</h4>
        <p><strong>Publisher: </strong>{game.publisher}</p>
        <p><strong>Platform: </strong>{game.plataform}</p>
        <p>{game.createdAt}</p>
        <span onClick={handleClick}><i class="fa-solid fa-trash-can"></i></span>
      </div>
    )
  }
  
  export default GameDetails