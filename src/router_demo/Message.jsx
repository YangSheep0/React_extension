import React, { useState } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'

export default function Message() {
  const nav = useNavigate()
  const [message] = useState([
    { id: '01', name: 'tom' },
    { id: '02', name: 'tom1' },
    { id: '03', name: 'tom2' },
  ])

  //编程式导航
  const goMessage = (v) => {
    nav('detail',{
      replace:false,
      state:{
        id:v.id,
        name:v.name
      }
    })
  }
  return (
    <div>
      <ul>
        {
          message.map(v => {
            return (
              <li key={v.id}>
                {/* 路由params参数传递 */}
                {/* <Link to={`detail/${v.id}/${v.name}`}>{v.name}</Link> */}

                {/* 路由search参数传递 */}
                {/* <Link to={`detail?id=${v.id}&name=${v.name}`}>{v.name}</Link> */}

                {/* 路由state参数传递 */}
                <Link to='detail' state={{ id: v.id, name: v.name }}>{v.name}</Link>
                <button onClick={()=>goMessage(v)}> go</button>

              </li>
            )
          })
        }
      </ul>
      <hr />
      <Outlet />
    </div>
  )
}
