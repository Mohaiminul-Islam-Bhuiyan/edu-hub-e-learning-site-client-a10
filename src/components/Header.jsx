import React from 'react';
import { HiAcademicCap } from "react-icons/hi";
import {Link , NavLink} from 'react-router-dom'

const Header = () => {
    return (
        
        <div className="navbar bg-base-100">
  <div className="flex-none">
    <>
        <HiAcademicCap></HiAcademicCap>
    </>
  </div>
  <div className="flex-1">
    <Link to = '/' className="btn btn-ghost normal-case text-xl">Edu Hub</Link>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal p-0">
      <li><NavLink to='/home'>Home</NavLink></li>
      <li><NavLink to='/FAQ'>FAQ</NavLink></li>
      <li><NavLink to='/blog'>Blog</NavLink></li>
      <li><NavLink to='/login'>Login</NavLink></li>
      <li><NavLink to='/register'>Register</NavLink></li>
    </ul>
  </div>
</div>
    );
};

export default Header;