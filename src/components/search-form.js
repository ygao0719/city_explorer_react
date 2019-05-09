import React from 'react';

class SearchForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      location: '',
    };
  }
  handleData = e => {
    let location = e.target.value;
    this.setState({location});
  }
  renderFunction = async e => {
    e.preventDefault();
    let loca = this.state.location;
    this.props.handlerLocation(loca);

    let data = await superagent.get('https://city-explorer-backend.herokuapp.com/location');
    let 


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
  