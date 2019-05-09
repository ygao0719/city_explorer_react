import React from 'react';
import Header from './header.js';
import SearchForm from './search-form.js';
import Map from './map.js';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = { 
      location: '',
      
    };
  }

  // handleForm = e => {
  //   let location = e.target.value;
  //   this.setState({location});
  // }
  handleForm = (location) => {
    this.setState({location});
    console.log(location);
  }

  render(){
    return (
    <>
      <Header />
      <SearchForm handlerLocation={this.handleForm}/>
      <Map searchQuery = {this.state.location}/>
      {/* <SearchResults /> */}
    </>
    );
  }
}






export default App;
