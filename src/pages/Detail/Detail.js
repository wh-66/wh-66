import React, { Component } from 'react'
import Left from '../../components/Left/Left'
import Right from '../../components/Right/Right'
import Top from '../../components/Top/Top'
import './Detail.css'

export default class Detail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      shops: []
    }
  }

  componentDidMount() {
    this.$axios([
      {
        url: '/shopping/v2/menu?restaurant_id=1'
      }
    ]).then(res => {
      console.log(res);
      this.setState(state => {
        return {
          shops: res[0]
        }
      })
    }).catch(err => console.log(err))
  }
  render() {
    return (
      <div className="detail_wrap">
        <Top />
        <div className="detail_content">
          <div className="detail_content_d1">
            {
              this.state.shops.map((item, index) => <Left item={item} key={index} />)
            }
          </div>
          <div className="detail_content_d2">
            {
              this.state.shops.map((item, index) => <Right item={item} key={index} />)
            }
          </div>
        </div>
      </div>
    )
  }
}
