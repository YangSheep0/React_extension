import React, { Component } from 'react'

export default class StateDemo extends Component {
    state = {
        count: 0
    }
    add = () => {
        // 对象式setState
        
        /* const { count } = this.state;
        this.setState({ count: count + 1 }) */

        //函数式setState
        this.setState(
            (state, props) => ({ count: state.count + 1 })
        )
    }
    render() {
        return (
            <div>
                num:{this.state.count} &nbsp;
                <button onClick={this.add}>addd</button>
            </div>
        )
    }
}
