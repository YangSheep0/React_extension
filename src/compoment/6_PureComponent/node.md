# 组件优化 #
## Component 的2个问题 ##
    1. 只要执行setState() 即使不改变数据，组件也会重新render()
    2.只当组件重新render() 就会自动重新render子组件 => 效率低
## 效率高的做法 ##
    只有当组件的state或者props数据发生改变时才重新render()
## 原因 ## 
    Component中的shouldComponentUpdate()总是返回true
## 解决 ##
    1. 重写shouldComponentUpdate 
        比较新旧state或props数据，如果有变化才返回true 没有返回false
    2.使用PureComponent（重写了shouldComponentUpdate），当改变才会返回true
    
    注意： 只是进行state或props数据的浅比较，如果只是数据对象内部数据改变了，返回false
            不要直接修改state数据 而是生成新数据
    PureComponent 可用于优化
