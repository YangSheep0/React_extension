# Hooks 是什么 #
    1.Hook是React 16.8 增加的新特性和新语法
    2.可以在函数组件中使用state以及其他React特性
## 常用的Hook ##
    1.State Hook : React.useState()
    2.Effect Hook :React.useEffect()
    3.Ref Hook : React.useRef()

### State Hook ###
    1.State Hook 让函数组件也可以有state状态 并进行状态数据的读写操作
    2.语法： const[xxx,setXxx] = React.useState(initValue)
    3.useState()说明：
        - 参数：第一次初始化指定的值在内部作缓存
        - 返回值：包含2个元素的数组，第一个为内部当前状态值，第二个为更新状态值的函数
    4.setXXX()2种写法：
        setXxx(newValue) : 参数为非函数值，直接指定新的状态值，内部用其覆盖原来的值
        setXxx(value => newValue) : 参数为函数值，接受原来的值，返回新的状态值，内部用其覆盖原来的值

### Effect Hook ###
    1.Effect Hook 让函数组件执行副作用操作（模拟类组件的生命周期）
    2.React的副作用操作：
        发ajax请求数据获取
        设置订阅/启动定时器
        手动更改真实DOM
    3.语法和说明：
```
    useEffect(()=>{
        //在此可以执行任何带副作用操作
        return () => { //在组件卸载前执行
            //在此做收尾工作，如清除定时器、取消订阅
        }
    },[stateValue])//如果指定的是[],回调函数只会第一次render()后执行
```
    4.可以把useEffect Hook 看作三个函数的组合
        componentDidMount()
        componentDidUpdate()
        componentWillUnmount()
        
### Ref Hook ###
1.Ref Hook可以在函数组件中存储/查找组件内的标签或任意其他数据
2.语法： const refContainer = useRef()
3.作用： 保存标签对象，功能与React.createRef()一样