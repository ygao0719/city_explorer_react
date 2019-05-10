import React from 'react';
import Header from './header.js';
import SearchForm from './search-form.js';
import Map from './map.js';
import SearchResults from './search-results.js';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = { 
      location:{
        search_query: '',
        formatted_query: '',
        latitude:'',
        longitude:'',
      },
      DarkSky:[],
      Yelp:[],
    };
  }

  handleForm = (location) => {
    this.setState({location}, ()=> console.log(this.state.location));
  }

  weatherHandler = (DarkSky) => {
    this.setState({DarkSky},()=> console.log(this.state.DarkSky));
  }

  yelpHandler = (Yelp) => {
    this.setState({Yelp},() => console.log(this.state.Yelp));
  }
  render(){
    return (
    <>
      <Header />
      <SearchForm handleForm={this.handleForm} weatherHandler={this.weatherHandler} yelpHandler={this.yelpHandler} />
      <Map city = {this.state.location.search_query}/>
      <SearchResults weatherList = {this.state.DarkSky} yelpList = {this.state.Yelp}/>
    </>
    );
  }
}


export default App;
