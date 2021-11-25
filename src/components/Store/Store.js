import React, { Component } from 'react'
import './Store.css'

export default class Store extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    return (
      <div className="store">
        <div className="store-left">
          <img src="" />
        </div>
        <ul className="store-right">
          <li className="top">
            <div className="left">
              <mark>品牌</mark>
              <h3>效果演示</h3>
            </div>
            <div className="right">
              保 准 票
            </div>
          </li>
          <li className="middle">
            <div className="left">
              <div>4分</div>
              <div>月售233</div>
            </div>
            <div className="right">
              <span>蜂鸟转送</span>
              <span>准时达</span>
            </div>
          </li>
          <li className="bottom">
            <div className="left">
              ￥20起送/配送费约￥0
            </div>
            <div className="right">
              <span>1400公里</span>
              <span>/</span>
              <span>13小时45分钟</span>
            </div>
          </li>
        </ul>
      </div>
    )
  }
}
