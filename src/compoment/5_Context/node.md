# Context #
    理解： 一种组件间通信方式，常用于[祖组件]与[后代组件]间通信

    使用： 
        1.创建Context容器对象：
            const xxContext = React.createContext()
        2.渲染子组件时，外面包裹xxxContext.Provider,通过value属性给后代组件传递数据：
            <xxxContext.Provider value={数据}>
                子组件
            </xxxContext.Provider>
        3.后代组件读取数据：
            //第一种方式：仅适用于类组件
            static contextType =xxxContext //声明接受context
            this.context //读取context中的value数据
            //第二种方式：函数组件跟类组件都可以
            <xxxContext.Consumer>
                {
                    value => ( //value是context中的value数据
                        要显示的内容
                    )
                }
            </xxxContext.Consumer>