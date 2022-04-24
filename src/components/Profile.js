import { useContext,useState } from "react";
import React from 'react'
import {useUser} from "../context/UserContext";

const Profile = () => {
    const [loading, setLoading] = useState(false)
    const {user,setUser} = useUser();
    console.log(user);
    const handleLogin = () =>{
      setLoading(true);
       setTimeout(()=>{
        setUser({
            id: 1,username: "oyrdgln",bio: "lorem ipsun doler"
        })
        setLoading(false)
       },1500)
    }

    const handleLogout = () =>{
      setUser(null);
    }
  return (
    <div>
      {
        !user &&
        <button 
        onClick={handleLogin} 
        disabled={loading ? true : false}>
          {loading ? "loading..." : 'Login'}
          </button>
      }
       {/* user yoksa buttonu gosteriririz.Kullanici giris yapmisa logout button'u yazsin.  */}
        <code>{JSON.stringify(user)}</code>
<br />
        {
          user && <button onClick={handleLogout}>Logout</button>
        }
    </div>
  )
}

export default Profile