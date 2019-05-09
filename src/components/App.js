import React from 'react';
import Header from './header.js';
import SearchForm from './search-form.js';
import Map from './map.js';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = { 
      location: '',
      formatted_query: '',
      latitude:'',
      longitude:'',
    };
  }

  handleForm = (location) => {
    this.setState({location});

  }

  render(){
    return (
    <>
      <Header />
      <SearchForm handlerLocation={this.handleForm} renderFormatted_query={this.state.formatted_query}/>
      <Map searchQuery = {this.state.location}/>
      {/* <SearchResults /> */}
    </>
    );
  }
}






export default App;
