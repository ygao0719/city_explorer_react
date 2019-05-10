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
    // let loca = this.state.location;
    // this.props.handlerLocation(loca);

    let data = await superagent.get(`https://calm-taiga-81023.herokuapp.com/location/?data=${this.state.location}`);

    let locationData = {
      search_query: data.body.search_query,
      formatted_query: data.body.formatted_query,
      latitude:data.body.latitude,
      longitude:data.body.longitude,
    }
    this.props.handleForm(locationData);
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
  