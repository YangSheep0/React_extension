import React, { Component } from 'react'

export default class Parent extends Component {
    render() {
        return (
            <div>
                <h1>Parent</h1>
                {/* 第一种 */}
                {/* <A>
            <B/>
          </A> */}

                {/* 第二种 */}
                <A render={(data) => <B value={data} />}></A>

            </div>
        )
    }
}

class A extends Component {
    state = {
        value: 'aaaaa'
    }
    render() {
        const { value } = this.state
        return (
            <div>
                <h1>A</h1>
                {/* 显示B组件 */}
                {this.props.render(value)}
            </div>
        )
    }
}

class B extends Component {
    render() {
        return (
            <div>
                <h1>B</h1>
                <div>拿到值：{this.props.value}</div>
            </div>
        )
    }
}