import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'
import RDemo from './router_demo/Demo'
export default class App extends Component {

  render() {
    return (
      <div >
        <BrowserRouter>
          <RDemo />
        </BrowserRouter>
      </div>
    )
  }
}
