import React from 'react';
import Header from './header.js';
import SearchForm from './search-form.js';
import Map from './map.js';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = { 
      location:{
        search_query: '',
        formatted_query: '',
        latitude:'',
        longitude:'',
      }
    };
  }

  handleForm = (location) => {
    this.setState({location}, ()=> console.log(this.state.location));
    
  }

  render(){
    return (
    <>
      <Header />
      <SearchForm handleForm={this.handleForm}   />
      <Map city = {this.state.location.search_query}/>
      {/* <SearchResults /> */}
    </>
    );
  }
}


export default App;
