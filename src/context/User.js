import { createContext, useState } from "react"

   const UserContext = createContext({})

    const UserContextProvider = props => {
        const [isLogged, setIsLogged] = useState(false)
    //   ici on crée no valeur comme un state quon passera en props
        const value = {
            isLogged: isLogged,
            setIsLogged: setIsLogged
        }
        
        return (
            <UserContext.Provider value={value}>
               {props.children}
            </UserContext.Provider>
                    
        )
    }

export{
UserContextProvider,
UserContext
} 