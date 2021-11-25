import React, { Component } from 'react'
//导入插件
import Swiper from 'swiper';
//导入样式
import "swiper/dist/css/swiper.min.css";

import Store from '../../components/Store/Store'
import LowerBox from '../../components/LowerBox/LowerBox'
import './Home.css'

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      store: [],
      kinds: []
    }
  }

  componentDidMount() {
    this.$axios([{
      url: '/v2/index_entry',
    }, {
      url: '/shopping/restaurants',
      params: {
        latitude: '31.22967',
        longitude: '121.4762'
      }
    }]).then(res => {
      // console.log(res);
      this.setState(state => {
        return {
          kinds: [res[0].slice(0, 8), res[0].slice(8)],
          store: res[1]
        }
      })
      //完成轮播图的初始化
      this.initSwiper()
    }).catch(err => console.log(err))
  }
  //初始化轮播图
  initSwiper() {
    new Swiper('.swiper-container', {
      autoplay: true,
      loop: true,//设置轮播
      //开启分页器
      pagination: {
        el: '.swiper-pagination'
      }
    })
  }

  render() {
    return (
      <div>
        <div className="home">
          <div className="swiper">
            <div className="swiper-container">
              <div className="swiper-wrapper">
                {
                  this.state.kinds.map((items, index) => {
                    return (<div className="swiper-slide" key={index}>
                      <div className="kinds">
                        {items.map((item, i) => <LowerBox text={item.title} url={'https://fuss10.elemecdn.com/' + item.image_url} key={i} />)}
                      </div>
                    </div>);
                  })
                }
              </div>
              <div className="swiper-pagination"></div>
            </div>
          </div>
        </div>
        <div className="stores">
            {this.state.store.map((store,index)=><Store item={store} key={index} />)}
        </div>
      </div>
    )
  }
}


