import { createContext, useReducer } from 'react'

export const GamesContext = createContext()

export const gamesReducer = (state, action) => {
    switch (action.type) {
        case 'SET_GAMES':
            return {
                games: action.payload
            }
            
    
        case 'CREATE_GAME':
            return {
                games: [action.payload, ...state.games]
            }
        
            default:
                return state
            
    }
}

export const GamesContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(gamesReducer, {
        games: null
    })


    return (
        <GamesContext.Provider value={{ ...state, dispatch }}>
            {children}
        </GamesContext.Provider>
    )
}