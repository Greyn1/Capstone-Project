import { createContext, useState } from "react";

export const UserContext = createContext({
    curUser: null,
    setCurUser: () => null
});

export function UserProvider({ children }) {
    const [curUser, setCurUser] = useState(null);
    const value = { curUser, setCurUser };
    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}
