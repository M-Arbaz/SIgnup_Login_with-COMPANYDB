import React from 'react'
import {Link} from 'react-router-dom'
export default function Nav() {
  return (
    <div className='navbar'>
        <div className='lnk' >
      <Link to={'/'}>Home</Link>
      </div>
      <div className='lnk'>
      <Link to={'/signup'}>SignUp</Link>
      </div>
      <div className='lnk'><Link to={'/login'}>LogIn</Link>
    </div>
    <div className='lnk'><Link to={'/signout'}>Signout</Link>
   
    </div>
    <div className='lnk'><Link to={'/verified'}>verified</Link>
    </div>
   
    </div>
  )
}
