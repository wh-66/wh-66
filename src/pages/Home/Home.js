import React, { Component } from 'react'
import Store from '../../components/Store/Store'
import LowerBox from '../../components/LowerBox/LowerBox'
import './Home.css'

export default class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    return (
      <div>
        <LowerBox></LowerBox>
        <Store></Store>
      </div>
    )
  }
}


