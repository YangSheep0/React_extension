import React, { Component } from 'react'

//声明Context
const Context = React.createContext()
const { Provider , Consumer } = Context

export default class A extends Component {
    state = { name: 'tom', age: 16 }
    render() {
        const { name, age } = this.state
        return (
            <div>
                <h1>A</h1>
                <h2>{name}</h2>
                {/* Provider传递B */}
                <Provider value={{ ...this.state }}>
                    <B />
                </Provider>
            </div>
        )
    }
}

class B extends Component {
    render() {
        return (
            <div>
                <h1>B</h1>
                <C />
            </div>
        )
    }
}

/* class C extends Component {
    //类组件使用Context
    static contextType = Context
    render() {
        return (
            <div>
                <h1>C</h1>
                <div>name : {this.context.name}</div>
                <div>age : {this.context.age}</div>
            </div>
        )
    }
} */

//函数组件调用Consumer 获取 Context值
function C (){
    return (
        <div>
            <h1>C</h1>
            <Consumer>
                {
                    value => (
                        <div>{value.name}<div>{value.age}</div></div>
                    )
                }
            </Consumer>
            
        </div>
    )
}