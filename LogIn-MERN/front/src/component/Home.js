import React from 'react'
import {Link} from 'react-router-dom'
export default function Home() {
  return (
    <div className='home'>
      <div className='Container'>
      <article>
            <h1 className="fade-in">Discover New Worlds</h1>
            <div id="content" className="fade-in-2">
                <ul type="none">
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/signup'}>SignUp</Link></li>
                    <li><Link to={'/login'}>Login</Link></li>
                    <li><Link to={'/verified'}>Auth</Link></li>
                    <li><Link to={'/signout'}>SignOut</Link></li>
                </ul>
            </div>
            <div className="footer">
                <p>Kyoto Industries © <span><script>document.write(/\d{4}/.exec(Date())[0])</script>
                </span></p>
            </div>
        </article>
      </div>
    </div>
  )
}
