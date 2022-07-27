import { useContext, useEffect } from "react";
import { createContext, useState } from "react";
import { userObserver } from "../auth/firebase.js";

export const AuthContext = createContext();

//! custom hook to read the authContext
// export const useAuthContext = () => useContext(AuthContext);

const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(false);

  useEffect(() => {
    // setCurrUser(JSON.parse(sessionStorage.getItem("user")));
    userObserver(setCurrentUser);
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
