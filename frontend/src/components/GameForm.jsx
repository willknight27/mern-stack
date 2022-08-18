import { useState } from 'react'
import { useGamesContext } from "../hooks/useGamesContext";


const GameForm = () => {

    const { dispatch } = useGamesContext()

    const [title, setTitle] = useState('')
    const [publisher, setPublisher] = useState('')
    const [plataform, setPlataform] = useState('')
    const [error, setError] = useState(null)
    const [emptyFields, setEmptyFields] = useState([])



    const handleSubmit = async (e) => {
        e.preventDefault()

        // game
        const game = { title, publisher, plataform }

        //fetch
        const res = await fetch('http://localhost:4000/api/games', {
            method: 'POST',
            body: JSON.stringify(game),
            headers: {
                'Content-type': 'application/json'
            }

        })

        const json = await res.json()

        if (!res.ok) {
            setError(json.error)
            setEmptyFields(json.emptyFields)
        }
        if (res.ok) {
            setTitle('')
            setPlataform('')
            setPublisher('')
            setError(null)
            setEmptyFields([])
            console.log('New game added', json);

            // Update the games list
            // payload: json = Add a game return the new game = json
            dispatch({ type: 'CREATE_GAME', payload: json })
        }
    }

    return (
            <form className="create" onSubmit={handleSubmit}>

                <h3>Add a new Game</h3>

                <label>Game Title:</label>
                <input
                    type="text"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    className={emptyFields.includes('title') ? 'error' : ''}
                />

                <label>Publisher:</label>
                <input
                    type="text"
                    onChange={(e) => setPublisher(e.target.value)}
                    value={publisher}
                    className={emptyFields.includes('publisher') ? 'error' : ''}

                />

                <label>Platform:</label>
                <input
                    type="text"
                    onChange={(e) => setPlataform(e.target.value)}
                    value={plataform}
                    className={emptyFields.includes('plataform') ? 'error' : ''}

                />

                <button>Add Game</button>
                {error && <div className="error">{error}</div>}
            </form>
    )
}

export default GameForm