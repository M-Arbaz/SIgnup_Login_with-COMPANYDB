import React from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

export default function Login() {
    const history = useHistory();
    const s_in = async (e) => {
        e.preventDefault();
        const data = {
            email: e.target.elements.email.value,
            pass: e.target.elements.pass.value
        }
            const res = await axios.post('http://localhost:3001/login', data);
            // console.log(res.data)
            const token = res.data.token;
            if (!token) {
                alert('email or password is wrong conot generate token');
                return;
            }
            localStorage.setItem("token",token);
            
           
            alert("Welcome");
            history.push('/verified');
    }
     const a=localStorage.getItem("token")
   if(a){
    history.push('/verified');
   }
    return (
        <div className="s_in">
            <div className="f_in">
                <h2>SignIn</h2>
                <form onSubmit={s_in} autoComplete='off'>
                    <input type="text" name='email' placeholder="Enter Your Email" />
                    <input type="password" name='pass' placeholder="Enter Your Password" />
                    <button type="submit" className="btn">LogIn</button>
                </form>
            </div>
        </div>
    )
}
