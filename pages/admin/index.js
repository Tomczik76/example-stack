import React, { Component } from 'react'
import 'isomorphic-fetch';


export default class SignUp extends Component {
  constructor(props) {
    super(props)
  }  

  static async getInitialProps () {
    const res = await fetch('http://localhost:3030/users')
    const data = await res.json()
    return { users: data }
  }

  render() {
    return (
      <div>
        <h3>Users:</h3>
        {this.props.users.map(user => <div>{`${user.firstName} ${user.lastName}`}</div>)}
      </div>
    )
  }
}
