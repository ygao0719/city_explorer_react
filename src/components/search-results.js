import React from 'react';
// import Result from './result';
class SearchResults extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      location: '',
    };
  }

  render(){
    return(
      <React.Fragment>
           <ul>
            {this.props.weatherList.map((key, idx) => {
            return (
              <li key={idx}>
                The forecast for {key.time}  is: {key.forecast}
              </li>
            );
            })}
          </ul>
          <ul>
            {this.props.yelpList.map((key,idx) => {
              return(
                <li key={idx}>
                <a href={key.url}>{key.name}</a>
                <p>The average rating is {key.rating} out of 5 and the average cost is {key.price} out of 4</p>
                <img src={key.image_url}/>
                </li>
              );
            })}

          </ul>
      </React.Fragment>
    );
  }
}

export default SearchResults;