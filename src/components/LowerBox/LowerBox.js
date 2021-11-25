import React, { Component } from 'react'
import './LowerBox.css'

export default class LowerBox extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <div className="pic_text">
        <div>
          <img src={this.props.url} />
        </div>
        <div className="pic_title">{this.props.text}</div>
      </div>
    )
  }
}
