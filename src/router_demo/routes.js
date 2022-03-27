import About from "./About"
import Home from "./Home"
import News from "./News"
import Message from "./Message"
import Detail from "./Detail"
import { Navigate } from "react-router-dom"
export default [
    {
        path:'/about',
        element:<About/>
    },
    {
        path:'/home',
        element:<Home/>,
        children:[
            {
                path:'news',
                element:<News/>
            },
            {
                path:'message',
                element:<Message/>,
                children:[
                    {
                        // params参数传递
                        // path:'detail/:id/:name',

                        // search state参数传递
                        path:'detail',
                        element:<Detail/>
                    },
                ]
            },
        ]
    },
    {
        path:'/',
        element:<Navigate to="/about" />
    }
]