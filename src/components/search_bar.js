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
      <div className = "search-bar">
        <input
          value = { this.state.term } 
          onChange = { event => this.onInputChange(event.target.value) } />
      </div>
    )
  }
  // Change state when input is passed
  onInputChange = (term) => {
    this.setState({ term });
    this.props.onSearchTerm(term);
  }
}

export default SearchBar;
