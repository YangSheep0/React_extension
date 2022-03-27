# 错误边界 #
理解：
    错误边界(Error boundary) 用来捕获后代组件错误，渲染出备用页面
特点：
    只能捕获后代组件生命周期产生的错误，不能捕获自己组件的错误和其他组件在合成事件/定时器产生的错误
使用方式：
    getDerivedStateFromError 配合 componentDidCatch

```
    //生命周期函数 一旦后台组件报错就会触发
    static getDerivedStateFromError(error){
        console.log(error);
        //在render之前触发
        //返回新的state
        return {
            hasError : true
        }
    }

    componentDidCatch(error,info){
        //统计页面的错误，发送请求到后台
        console.log(error,info)
    }
```