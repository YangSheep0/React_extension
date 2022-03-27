# 1.<BrowserRouter> #
1.说明： <BrowserRouter>用于包裹整个应用
2.代码：
```
    import { BrowserRouter } from 'react-router-dom';
    <BrowserRouter>
        <App />
    </BrowserRouter>
```

# 2.<HashRouter> #
1.说明： <HashRouter> 作用与<BrowserRouter>一样，但<HashRouter>修改的是地址栏的hash值。
2.备注：6.x版本与5.x版本用法相同

# 3.<Routes> 与 <Route> #
1.v6版本中移除了<Switch> 引入了新的<Routes>
2.<Routes> 要与 <Route> 配合使用，且必须<Routes> 包裹 <Route>
3.<Route>相当于一个if语句，如果其路径与URL匹配 呈现对应的组件。
4.<Route caseSensitive> 属性用于指定： 匹配时是否区分大小写（默认false）
5.当URL发生变化时，<Routes>都会查看其所有子<Route>元素以找到最佳匹配并呈现组件
6.<Route>也可以嵌套使用，且可配合useRoutes()配置“路由表”，但需要<Outlet>组件来渲染其子路由
7.实例代码：
```
    <Routes>
        <!-- path属性用于定义路径,element属性用于定义当前路径对应的组件 -->
            <Route path="/about" element={<About/>} />

        <!-- 用于定义嵌套路由，home是一级路由 对应的路径是/home -->
             <Routes>
                <Route path="/home" element={<Home/>} >
                <!-- 二级路由 uyl是/home/t1   -->
                    <Route path="/t1" element={<T1/>} />
                    <Route path="/t2" element={<T2/>} />
                </Route>
                
            </Routes>
    </Routes>
```

# 4.<Link> #
1.作用：修改URL，且不发送网络请求（路由链接）
2.注意：外侧需要用<BrowserRouter>或<HashRouter>包裹
3.实例代码：
```
    import { Link } from "react-router-dom"
    function Test(){
        return (
            <div>
                <Link to="/URL">按钮</Link>
            </div>
        )
    }
```

# 5.<NavLink> #
1.作用：与<Link>组件类似，且可实现导航的”高亮“效果
2.实例：
```
    //注意：NavLink默认类名是active 下面是自定义的class
    //自定义样式
    <NavLink to="login" className={ ( {isActive} ) => { return isActive ? 'xx0' :'xx1'} } />

```

# 6.<Navigate> #
1.作用：只要 <Navigate>组件被渲染，就会修改路径切换视图。
2.replace 属性用于控制跳转模式(push或replace)
3.实例：
```
return (
    <div>
        {flag === true ? <h1>test</h1> : <Navigate to="/home" replace>}
    </div>
)
```

# 7.Outlet  #
当<Route>产生嵌套时，渲染其对应的后续子路由。  相当于vue的<router-view>


# HookS #
# 1.useRoutes() #
作用：根据路由表，动态创建<Routes>和<Route>

# 2.useNavigate() #
作用：返回一个函数用来实现编程式导航

# 3.useParams() #
作用：返回当前匹配路由的params参数  类似5.x中的match.params

# 4.useSearchParams() #
作用：用于读取和修改当前位置的URL中的查询字符串

# 5.useLocation() #
作用：获取当前location信息 对标5.x中的路由组件的location属性

# 6.useMatch() #
作用：返回当前匹配信息，对标5.x中路由组件的match属性

# 7.useInRouterContext #
作用：如果组件在<Router>的上下文中呈现，则useInRouterContext钩子返回true,否则false

# 8.useNavigationType #
作用：返回当前的导航类型(用户是如何来到当前页面的)
返回值：POP  PUSH  REPLACE
备注：POP是指在浏览器中直接打开这个路由组件（刷新页面）

# 9.useOutlet () #
作用：用来呈现当前组件中要渲染的嵌套路由
实例：
    const result =useOutlet()
    //如果嵌套路由没有挂载，则result为null
    //如果嵌套路由已经挂载，则展示嵌套的路由对象

# 10.useResolvedPath() #
作用：给定一个URL值，解析其中的path search hash 值
    