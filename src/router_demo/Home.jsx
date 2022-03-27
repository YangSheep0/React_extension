import React from 'react'
import {NavLink ,Outlet} from 'react-router-dom'

export default function Home() {
  return (
    <div>
        <h1>Home</h1>
        <NavLink to="news">news</NavLink>
        <NavLink to="message">message</NavLink>
        <hr />
        {/* 二级路由呈现 */}
        <Outlet/>
    </div>
  )
}
