import React from 'react';

export class LoginForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          bookTitle: '',
          author: '',
          publisher: '',
          gener:''
    };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleAuthorChange = this.handleAuthorChange.bind(this);
      this.handleTitleChange = this.handleTitleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleAuthorChange(event) {
        this.setState({author: event.target.value});
    }

    handleTitleChange(event) {
        this.setState({bookTitle: event.target.value});
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      // alert('A name was submitted: '+ 'Title:'+ this.state.bookTitle);
      if(!localStorage.getItem('books')){
          localStorage.setItem('books', []);
      }

      let books1 = localStorage.getItem('books');
      let books = JSON.parse(localStorage.getItem('books'));
      

      //localStorage.setItem('books', localStorage.getItem('books').push(this.state)) ;
      event.preventDefault();
    }
  
    render() {
      return (
        // <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Book Title:
            <input type="text" value={this.state.bookTitle} onChange={this.handleTitleChange} />
          </label>
          <label>
            Author:
            <input type="text" value={this.state.author} onChange={this.handleAuthorChange} />
          </label>
       
          <button onClick={this.handleSubmit}>Submit</button>
          </div>    
        // </form>
         //   <input type="submit" value="Submit" />
      );
    }
  }