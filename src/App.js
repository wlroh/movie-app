import React from 'react';
import axios from 'axios';
import Movie from './component/Movie';
import './App.css';

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
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            { movies.map((movie, idx) => (
              <Movie 
                key={idx}
                year={movie.pubDate} 
                title={movie.title} 
                cast={movie.actor} 
                poster={movie.image} 
              />
            ))}
          </div>
        )}
      </section>
    );
  }
}

export default App;
