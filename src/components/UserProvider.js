import { createContext, useContext, useState } from "react";

const userContext = createContext()

export const UserProvider = ({ children }) => {
    const [getUser, setUser] = useState(localStorage.getItem('token') ? { token: localStorage.getItem('token'), status: 'success' } : null)

    const singInUser = (input) => {
        setUser(input);
    }
    const obj = {
        singInUser,
        getUser
    }
    return (
        <>
            <userContext.Provider value={obj}>
                {children}
            </userContext.Provider>
        </>
    )
}

export const useUser = () => {
    return (
        useContext(userContext)
    )
}