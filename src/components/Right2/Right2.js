import React, { Component } from 'react'
import './Right2.css'
import img from '../../static/1.jpg'

export default class Right2 extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    return (
      <div className="right2_wrap">
        <div className="right2_wrap_left">
          <img src={img} />
        </div>
        <div className="right2_wrap_right">
          <div className="t1">{this.props.food.name}</div>
          <div className="t2">{this.props.food.description}</div>
          <div className="t3">{this.props.food.tips}</div>
          <div className="t4">
            {this.props.food.activity ? <div>{this.props.food.activity.image_text}</div> : null}
          </div>
          <div className="tt">
            <div className="t5">￥20</div>
            <div className="t6">选规格</div>
          </div>
        </div>
      </div>
    )
  }
}
