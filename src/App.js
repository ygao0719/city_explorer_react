import React from 'react';

class App extends React.Component {
  render(){
    return (
    <React.Fragment>
      <Header />
      <Main />
    </React.Fragment>
    );
  }
}

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

class Main extends React.Component{
  render(){
    return (
      <React.Fragment>
        <Search />
        <Map/>
        <Result/>
        <Result/>
        <Result/>
        <Result/>
        <Result/>
      </React.Fragment>
    );
  }

}

class Search extends React.Component{
render(){
  return(
    <React.Fragment>
      <input type = "text" name="search"></input>
      <button> search </button>
    </React.Fragment>
  );
  
}
  
}

class Map extends React.Component{
  render(){
    return(
      <React.Fragment>
        <div>map</div>
      </React.Fragment>
    );
  }
}

class Result extends React.Component{
  render(){
    return(
      <React.Fragment>
        <section>Result</section>
      </React.Fragment>
    );
  }
}

export default App;
