import React, { useState } from "react";
import UserContext from "./UserContext";

// jo bhi prop are h use yhi use krlo.(children).
const UserContextProvider = ({children}) => {
    const [user, setUser] = useState(null)
    return(
        // we need to use property of userContext to wrap which is .Provider nd we need to pass data in value and as data we will pass objs, so we can give access to all var.
        <UserContext.Provider value={{user, setUser}}>
        {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider