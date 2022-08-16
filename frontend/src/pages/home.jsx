import { useEffect, useState } from "react"
import axios from 'axios';
// components
import GameDetails from "../components/GameDetails"
import GameForm from "../components/GameForm";

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
            <div className="games">
                {games && games.map(game => (
                    <GameDetails game={game} key={game._id} />
                ))}
            </div>
            <GameForm/>
        </div>


    )
}

export default Home
