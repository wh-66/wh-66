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
          <img src={'https://elm.cangdu.org/img/' + this.props.item.image_path} />
        </div>
        <ul className="store-right">
          <li className="top">
            <div className="left">
              <mark>品牌</mark>
              <h3>{this.props.item.name}</h3>
            </div>
            <div className="right">
              保 准 票
            </div>
          </li>
          <li className="middle">
            <div className="left">
              <div>{this.props.item.rating}分</div>
              <div>月售{this.props.item.recent_order_num}</div>
            </div>
            <div className="right">
              <span>蜂鸟转送</span>
              <span>准时达</span>
            </div>
          </li>
          <li className="bottom">
            <div className="left">
              ￥{this.props.item.float_minimum_order_amount}起送/配送费约￥{this.props.item.float_delivery_fee}
            </div>
            <div className="right">
              <span>{this.props.item.distance}公里</span>
              <span>/</span>
              <span>{this.props.item.order_lead_time}</span>
            </div>
          </li>
        </ul>
      </div>
    )
  }
}
