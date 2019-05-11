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
      Event:[],
      Movie:[],
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

  eventHandler = (Event) => {
    this.setState({Event},() => console.log(this.state.Event));
  }
  movieHandler = (Movie) => {
    this.setState({Movie},() => console.log(this.state.Movie));
  }

  render(){
    return (
    <>
      <Header />
      <SearchForm handleForm={this.handleForm} weatherHandler={this.weatherHandler} yelpHandler={this.yelpHandler}  eventHandler={this.eventHandler} movieHandler={this.movieHandler}/>
      <Map city = {this.state.location.search_query}/>
      <SearchResults weatherList = {this.state.DarkSky} yelpList = {this.state.Yelp} eventList = {this.state.Event} movieList = {this.state.Movie}/>
    </>
    );
  }
}


export default App;
