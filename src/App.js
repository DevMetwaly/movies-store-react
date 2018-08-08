import React, { Component } from 'react';

import './App.css';
import Header from './Header/Header';
import Table from './Table/Table';
import * as fakeAPI from './services/fakeMovieService';
class App extends Component {
  state = {
    movies:[]
  };

  componentDidMount(){
    const movies = fakeAPI.getMovies();
    for(let i in movies){
      movies[i].liked=false;
    }
    this.setState({movies:movies});
  }

  handleDelete = (id) => (event) => {
    event.preventDefault();
    let movies = [...this.state.movies];
    movies = movies.filter(movie => movie._id !== id);
    this.setState({movies:movies});
  }

  handleLike = (id) => (event) => {
    event.preventDefault();
    let movies = [...this.state.movies];
    const index = movies.findIndex(movie => movie._id===id);
    movies[index].liked= !movies[index].liked;
    this.setState({movies:movies});
  }

  render() {

    return (
      <div className="App">
        <div className="container">
          <Header />
          <Table 
            movies={this.state.movies} 
            handleDelete={this.handleDelete}
            handleLike={this.handleLike}/>
        </div>
      </div>
    );
  }
}

export default App;
