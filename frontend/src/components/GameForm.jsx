import {useState} from 'react'

const GameForm = () => {

    const [title, setTitle] = useState('')
    const [publisher, setPublisher] = useState('')
    const [plataform, setPlataform] = useState('')
    const [error, setError] = useState(null)



    const handleSubmit = async (e) => {
        e.preventDefault()

        // game
        const game = {title, publisher, plataform}

        //fetch
        const res = await fetch('http://localhost:4000/api/games',{
            method: 'POST',
            body: JSON.stringify(game),
            headers:{
                'Content-type': 'application/json'
            }

        })

        const json = await res.json()

        if (!res.ok) {
            setError(json.error)
        }
        if (res.ok) {
            setTitle('')
            setPlataform('')
            setPublisher('')
            setError(null)
            console.log('New game added',json);
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
            />

            <label>Publisher:</label>
            <input
                type="text"
                onChange={(e) => setPublisher(e.target.value)}
                value={publisher}
            />

            <label>Platform:</label>
            <input
                type="text"
                onChange={(e) => setPlataform(e.target.value)}
                value={plataform}
            />

            <button>Add Game</button>
            {error &&  <div className="error">{error}</div>}
        </form>
    )
}

export default GameForm