import React, { Component } from 'react'
import './Left.css'

export default class Left extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    return (
      <div className="left_wrap">
        {this.props.item.name}
      </div>
    )
  }
}
