import React, { Component } from 'react';
import axios from 'axios'
import './NextPost.css'

export default class NextPost extends Component {
  
  state = {
    postagens: {}, 
    id: 1
  }


  componentDidMount = () => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/` + this.state.id)
      .then(res => {
        this.setState({ postagens: res.data });
      });
  }

  componentDidUpdate = (prevProps, prevState) => {
    if (this.state.id !== prevState.id) {
      axios.get(`https://jsonplaceholder.typicode.com/posts/` + this.state.id)
      .then(res => {
        this.setState({ postagens: res.data });
      });
    }
  }


  nextPost = () => {
    this.setState({id: this.state.id + 1 })
    console.log(this.state.id)
  }

  returnPost = () => {
    this.setState({id: this.state.id - 1 })
    console.log(this.state.id)
  }

  


  render() {
    const { title, body } = this.state.postagens;
    return (
     <div className="caixa"> 
     <div className="box"> 
     <h1>{title} </h1>
     <p>{body} </p>
     <button className="button" onClick={this.returnPost}>Return Post</button>
     <button onClick={this.nextPost}>Next Post</button>
     </div>
     </div>
    );
  }
}
