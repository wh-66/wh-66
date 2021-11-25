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
          <div className="t1">阿斯顿</div>
          <div className="t2">的撒旦</div>
          <div className="t3">月售234份 好评率30%</div>
          <div className="t4">
            <div>大伟群岛</div>
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
