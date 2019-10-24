import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class Landing extends Component {
  constructor(){
    super()

    this.state = {
      email: '',
      password: ''
    } 
  }

  componentDidMount(){
    const body = {

    }

    axios.post('/auth/login', body)
    .then(res => {
      // Redux action here
    })
    .catch(err => console.log(err))
  }

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render(){
    return (
      <div>
        <h1>Login Here</h1>
        <input 
          value={this.state.email}
          name="email"
          onChange={e => this.handleInput(e)} />
        <input 
          value={this.state.password}
          name="password"
          onChange={e => this.handleInput(e)} />
        <button>Login</button>
        <Link to="/register">Register</Link>
        Landing
      </div>
    )
  }
}

export default Landing;