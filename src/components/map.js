import React from 'react';

class Map extends React.Component{
  // constructor(props){
  //   super(props);
  // }
  render(){
    return(
      <>
      <img alt='map' src = {`https://maps.googleapis.com/maps/api/staticmap?center=${this.props.city}&zoom=13&size=600x300&maptype=roadmap&key=${process.env.REACT_APP_GEOCODE_API_KEY}`}/>
        <h2>Here is the result of {this.props.city}</h2>
      </>
    );
  }
}

export default Map;
