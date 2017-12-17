import React from 'react'

export default class App extends React.Component {
  constructor(){
    super()

    this.state = {
      welcome: 'World'
    }

    setTimeout(()=>{
      this.setState({
        welcome: 'Client'
      })
    }, 2000)
  }

  render(){
    return (
      <h1>Hello {this.state.welcome}!</h1>
    )
  }
}
