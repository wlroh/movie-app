import React from 'react';
import axios from 'axios';
import Movie from './component/Movie';


class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };
  getMovies = async () => {
    const { 
      data: { items }
    } = await axios.get("http://localhost:5000/api/search");   // data.items 에 영화데이터 있음.
    // console.log(items);
    this.setState({ movies: items, isLoading: false });
  }
  componentDidMount() {
    this.getMovies();
  };

  render() {
    const { isLoading, movies } = this.state;
    return (
      <div>
        {isLoading ? "Loading..." : movies.map((movie, idx) => (
          <Movie 
            key={idx}
            id={idx} 
            year={movie.pubDate} 
            title={movie.title} 
            cast={movie.actor} 
            poster={movie.image} 
          />
        ))}
      </div>
    );
  }
}

export default App;
