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
    let loca = this.state.location;
    this.props.handlerLocation(loca);

    let data = await superagent.get('https://calm-taiga-81023.herokuapp.com/location');
    // let formatted_query = data.body.formatted_query;
    // this.props.renderFormatted_query(formatted_query);
    // let latitude = data.body.latitude;
    // this.props.renderLatitude(latitude);
    // let longitude = data.body.longutude;
    // this.props.renderLongitude(longitude);

  }

  render(){
    return(
      <form >
        <label for="search">Search for a location</label>
        <input onChange = {this.handleData} placeholder="Enter a location here"></input>
        <button onClick = {this.renderFunction}>Explore!</button>
      </form>    
    );
  }
  }


  export default SearchForm;
  