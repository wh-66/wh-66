import React, { Component } from 'react'
import './Right.css'
import Right1 from '../Right1/Right1'
import Right2 from '../Right2/Right2'

export default class Right extends Component {
  constructor(props) {
    super(props)
    this.state = {
      shop: []
    }
  }

  /* componentWillMount() {
    this.setState(state => {
      return {
        shop: this.props.item
      }
    })
    console.log(this.state.shop);
  } */
  render() {
    return (
      <div className="right_wrap">
        <Right1 item={this.props.item} />
        {/* {
          <Right2 />
        } */}
      </div>
    )
  }
}
