import React from 'react';
import superagent from 'superagent';

class SearchForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      location: '',
    };
  }

  handleData = async e => {
    let location = e.target.value;
    this.setState({location});
  }

  renderFunction = async e => {
    e.preventDefault();
    //get location
    let data = await superagent.get(`https://calm-taiga-81023.herokuapp.com/location/?data=${this.state.location}`);

    let locationData = {
      search_query: data.body.search_query,
      formatted_query: data.body.formatted_query,
      latitude:data.body.latitude,
      longitude:data.body.longitude,
    }
    this.props.handleForm(locationData);
    //get weather
    let responseWeather = await superagent.get(`https://calm-taiga-81023.herokuapp.com/weather`,{method:'GET', data:locationData});
    this.props.weatherHandler(responseWeather.body);

    //get yelp
    let responseYelp = await superagent.get(`https://calm-taiga-81023.herokuapp.com/yelp`,{method:'GET', data:locationData});
    this.props.yelpHandler(responseYelp.body);
    //get event
    let responseEvent = await superagent.get(`https://calm-taiga-81023.herokuapp.com/events`,{method:'GET', data:locationData});
    this.props.eventHandler(responseEvent.body);
    //get movies
    let responseMovie = await superagent.get(`https://calm-taiga-81023.herokuapp.com/movies`,{method:'GET', data:locationData});
    this.props.movieHandler(responseMovie.body);

  }

  render(){
    return(
      <form >
        <label>Search for a location</label>
        <input onChange = {this.handleData} placeholder="Enter a location here"></input>
        <button onClick = {this.renderFunction}>Explore!</button>
      </form>    
    );
  }
  }


  export default SearchForm;
  