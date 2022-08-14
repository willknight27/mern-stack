import { useEffect, useState } from "react"
import axios from 'axios';
// components
import GameDetails from "../components/GameDetails"

const Home = () => {
    const [games, setGames] = useState(null)

    useEffect(() => {
        
        axios.get('http://localhost:4000/api/games')
            .then(res =>{
                const games = res.data
                console.log(games);
                setGames(games)
            })
        

    }, [])

    return (
        <div className="home">
            <div className="workouts">
                {games && games.map(game => (
                    <GameDetails game={game} key={game._id} />
                ))}
            </div>
        </div>
    )
}

export default Home
