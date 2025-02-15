import React from "react";

// creating context
const UserContext = React.createContext();

export default UserContext;

/* Steps 
1. create context nd export it.
2. we also need to create provider with context also that will provide data to components(it is in jsx context is in js).
    for eg: we will wrap all the components into userContext which will give access to the global variable to the components
    <UserContext>
    <Login />        
    <Card>
        <Data />
    </Card>        
    <UserContext/>
*/ 