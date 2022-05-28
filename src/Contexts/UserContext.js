import { createContext, useEffect, useState } from "react";
import { createUserDocumentFromAuth, onAuthStateChangedListener } from "../Utils/Firebase";

export const UserContext = createContext({
    curUser: null,
    setCurUser: () => null
});

export function UserProvider({ children }) {
    const [curUser, setCurUser] = useState(null);
    const value = { curUser, setCurUser };

    useEffect(()=>{
        const unsubscribe = onAuthStateChangedListener((user)=>{
            //console.log(user);
            if(user){
                createUserDocumentFromAuth(user);
            }
            setCurUser(user);
        });

        return unsubscribe;
    },[])

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}
