// libraries
import React, { Component } from 'react';
import ReacDOM from 'react-dom';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    // Define and initialzie the states of the component
    this.state = { term: '' };
  }
  render() {
    return (
      <div>
        <input
          value = {this.state.term} 
          onChange = {this.onInputChange} />
          Value of the input: {this.state.term}
      </div>
    )
  }

  onInputChange = (event) => {
    // console.log('Event triggered: ', event.target.value);
    // Change state of the component
    this.setState({ term: event.target.value });
  }
}

export default SearchBar;
