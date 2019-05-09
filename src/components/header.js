import React from 'react';


class Header extends React.Component{
  render(){
    return (
      <React.Fragment>
        <h1> city explorer</h1>
        <p>Enter a location below to learn about the weather, events, restaurants, movies filmed there, and more!</p>
      </React.Fragment>
    );
  }
}

export default Header;