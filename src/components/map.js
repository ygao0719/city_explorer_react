import React from 'react';

class Map extends React.Component{
  // constructor(props){
  //   super(props);
  // }
  render(){
    return(
      <>
      <img src = {`https://maps.googleapis.com/maps/api/staticmap?center=${this.props.city}&zoom=13&size=600x300&maptype=roadmap&key=${process.env.REACT_APP_GEOCODE_API_KEY}`}/>
        <div>{this.props.city}</div>
      </>
    );
  }
}

export default Map;
