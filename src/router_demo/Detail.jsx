import React from 'react'
import { useParams, useMatch, useSearchParams, useLocation } from 'react-router-dom'
export default function Detail() {

    /* 路由Params取参
     const {id ,name } = useParams();
     const x = useMatch('/home/message/detail/:id/:name');
     console.log(x); */

    /* 路由search取参  
     const [search ,setSearch] = useSearchParams()
     const id = search.get('id')
     const name = search.get('name')
     const x = useLocation()
     console.log(x); */

     //路由state取参
    const { state: { id, name } } = useLocation()



    return (
        <div>
            {id}|||{name}

            {/* setSearch使用 */}
            {/* <button onClick={()=>{setSearch('id=01&name=tt')}}>setSearch</button> */}

        </div>
    )
}
