import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    // yha p data access krlia jo setUser method n set kia tha.
    const {user} = useContext(UserContext);
  
    if (!user) return <div>Please Login</div>;
    return <div>Welcome {user.username}</div>

}

export default Profile