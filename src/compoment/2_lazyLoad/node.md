## lazyLoad ##
路由组件的lazyLoad
    - 通过React的lazy函数配合import()函数动态加载路由组件 ==》路由组件会被分开打包
    `const Login = lazy( ()=> import('@/pages/Login'))`
    - 通过<Suspense>指定在加载得到路由打包文件前显示一个自定义loading界面

    ```
        <Suspense fallback={<h1>loading...</h1>}>
            <Switch>
                <Route path="/xxx" component={xxx}>
                <Redirect to="/login">
            </Switch>
    ```

