import React, { Component } from 'react'
import './Right1.css'

export default class Right1 extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    return (
      <div className="right1_wrap">
        <h3>{this.props.item.name}</h3>
        <span>{this.props.item.description}</span>
      </div>
    )
  }
}
