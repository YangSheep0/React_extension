import React from 'react'
import {NavLink,useRoutes} from 'react-router-dom'

import routes from './routes'

export default function Demo() {
const routeslist = useRoutes(routes)

  return (
    <div>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/home" end>Home</NavLink>

        <hr />
       {/*  <Routes>
            <Route path="/about" element={<About/>} />
            <Route path="/home" element={<Home/>} />
            <Route path="/" element={<Navigate to='home'/>} />
        </Routes> */}
        {routeslist}

    </div>
  )
}
