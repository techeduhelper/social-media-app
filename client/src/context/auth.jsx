import axios from "axios";
import { createContext, useState, useContext, useEffect } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    user: null,
    token: " ",
  });

  axios.defaults.headers.common["Authorization"] = auth?.token;

  // use User data from localStorage
  useEffect(() => {
    const data = localStorage.getItem("auth");
    if (data) {
      const localData = JSON.parse(data);
      setAuth({
        ...localData,
        user: localData?.user || null,
        token: localData?.token,
      });
    }
    //eslint-disable-next-line
  }, []);
  return (
    <UserContext.Provider value={[auth, setAuth]}>
      {children}
    </UserContext.Provider>
  );
};

const useAuth = () => useContext(UserContext);

export { useAuth, UserProvider };
