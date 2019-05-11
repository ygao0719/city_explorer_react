import React from 'react';
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

          <ul>
            {this.props.eventList.map((key,idx) => {
              return(
                <li key={idx}>
                <a href={ key.link }>{ key.name }</a>
                <p>Event Date: {key.event_date }</p>
                <p>{ key.summary }</p>
              </li>
              );
            })}
            </ul>

            <ul>
            {this.props.movieList.map((key,idx) => {
              return(
                <li key={idx}>
                <p><span>{ key.title }</span> was relased on {key.released_on }. Out of { key.total_votes } total votes, {key.title} has an average vote of {key.average_votes } and a popularity score of {key.popularity }.</p>
                <img src={key.image_url }/>
                <p>{ key.overview }</p>
              </li>
              );
            })}
            </ul>

      </React.Fragment>
    );
  }
}

export default SearchResults;