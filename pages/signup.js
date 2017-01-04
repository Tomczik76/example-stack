import React, { Component } from 'react'
import Router from 'next/router'
import 'isomorphic-fetch';


export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      username: '',
      password: ''
    };
  }  

  onChange(key, value) {
    this.setState({ [key]: value })
  }

  onClick() {
    fetch('http://localhost:3030/signup', {
      headers: new Headers({"Content-Type": "application/json"}),
      method: 'POST',
      body: JSON.stringify(this.state)
    }).then(() => Router.push('/'))
  }

  render() {
    return (
      <div>
        <h1>Sign Up</h1>
        <div>
          <label htmlFor="first-name">First Name:</label>
          <input type="text" name="first-name" value={this.state.firstName} onChange={e => this.onChange('firstName', e.target.value)}/>
        </div>
        <div>
          <label htmlFor="first-name">Last Name:</label>
          <input type="text" name="last-name" value={this.state.lastName} onChange={e => this.onChange('lastName', e.target.value)}/>
        </div>
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" name="username" value={this.state.username} onChange={e => this.onChange('username', e.target.value)}/>
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" value={this.state.password} onChange={e => this.onChange('password', e.target.value)}/>
        </div>
        <button name="sumbit" onClick={()=> this.onClick()}>Create</button>
      </div>
    )
  }
}
