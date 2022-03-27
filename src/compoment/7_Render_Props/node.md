# render props #
## 如何向组件内部动态传入带内容的结构 ##
```
    vue： 使用slot技术，通过组件标签体传入结构 <A><B/></A>
    react: 使用children props：通过组件标签体传入结构
            使用render props：通过组件标签属性传入结构，一般用render函数属性
```
## children props ##
```
    
    <A>
        <B />
    </A>
    {this.props.children}
    弊端：B组件不能获取A组件内的数据 
```
## render props ##
```
   <A render={ (data) => <B data={data} /> } >
   A组件：{this.props.render(内部state数据)}
   B组件：读取A组件传入的数据显示 {this.props.data}
```