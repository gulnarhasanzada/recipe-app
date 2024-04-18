import { createContext, useContext, useState } from "react"

export const UserContext = createContext()

export const useUserContext = ()=>{
    return useContext(UserContext)
}

const UserContextProvider = ({children}) => {
  const [user, setUser] = useState(null)

  const login = (email, password)=>{
    setUser({email, password});
  }

  const logout = ()=>{
    setUser(null)
  }

  const values = {
    user,
    login,
    logout
  }

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>
}

export default UserContextProvider
