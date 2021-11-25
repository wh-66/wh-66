import React, { Component } from 'react'
import './Top.css'

export default class Top extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    return (
      <div className="top">
        <div className="d1 active">商品</div>
        <div className="d1">评价</div>
      </div>
    )
  }
}
