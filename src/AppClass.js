import { Component } from "react";
import "./App.css"

export default class AppClass extends Component{
  
  // code here
  render(){
    return(
      <>
      <h2>Kalvium Library</h2>
      <div className='flex'>
        <img src={this.props.data[0].img} alt="" />
        <img src={this.props.data[1].img} alt="" />
        <img src={this.props.data[2].img} alt="" />
        <img src={this.props.data[3].img} alt="" />
      </div>
      </>
    )
  }
}

