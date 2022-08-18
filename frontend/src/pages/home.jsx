import { useEffect } from "react"
import { useGamesContext } from "../hooks/useGamesContext";
import axios from 'axios';
// components
import GameDetails from "../components/GameDetails"
import GameForm from "../components/GameForm";

const Home = () => {
    
    const { games, dispatch } = useGamesContext()

    useEffect(() => {
        
        axios.get('http://localhost:4000/api/games')
            .then(res =>{
                const games = res.data
                console.log(games);
                dispatch({type: 'SET_GAMES', payload: games})
            })
        

    }, [])

    return (
        <div className="home">
            
            <GameForm/>

            <div className="games">
                {games && games.map(game => (
                    <GameDetails game={game} key={game._id} />
                ))}
            </div>
        </div>


    )
}

export default Home
