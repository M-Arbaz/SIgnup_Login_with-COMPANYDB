import React from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

export default function Signout() {
    const history = useHistory();
    const s_out = ()=>{
       localStorage.removeItem("token")
       history.push("/login")
    }
    const a = localStorage.getItem("token")
    if(!a){
      history.push('/login')
    }
  return (
    <div>
        <br/><br/><br/><br/>
        <button onClick={s_out}>signout</button></div>
  )
}
