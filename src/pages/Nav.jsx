import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const Nav = () => {
    const location = useLocation()
    // const navigate = useNavigate()
  return (
    <div className='flex justify-center items-center'>
        <ul className='flex justify-center px-32 items-center text-lg text-white gap-3'>
            <li className={location.pathname === "/destination/moon" ? "border-b-2" : ""}>
                <Link to="/destination/moon">Moon</Link>
            </li>
            <li className={location.pathname === "/destination/mars" ? "border-b-2" : ""}>
                <Link to="/destination/mars">Mars</Link>
            </li>
            <li className={location.pathname === "/destination/europa" ? "border-b-2" : ""}>
                <Link to="/destination/europa">Europa</Link>
            </li>
            <li className={location.pathname === "/destination/titan" ? "border-b-2" : ""}>
                <Link to="/destination/titan">Titan</Link>
            </li>
        </ul>
    </div>
  )
}

export default Nav