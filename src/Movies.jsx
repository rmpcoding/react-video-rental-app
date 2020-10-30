import React, { Component } from 'react';
import { getMovies } from './services/fakeMovieService';

class Movies extends Component {
    state = {
        movies: getMovies(),
    };

    render() {
        return (
            <>
                <div className="row">
                    <div className="column">
                        {this.state.movies.map((movie) => {
                            console.log(movie);
                            return <p key={movie._id}>{movie._id}</p>;
                        })}
                    </div>
                    <div className="column">
                        {this.state.movies.map((movie) => {
                            console.log(movie);
                            return <p key={movie._id}>{movie.title}</p>;
                        })}
                    </div>
                    <div className="column">
                        {this.state.movies.map((movie) => {
                            console.log(movie);
                            return <p key={movie._id}>{movie.genre.name}</p>;
                        })}
                    </div>
                    <div className="column">
                        {this.state.movies.map((movie) => {
                            console.log(movie);
                            return <p key={movie._id}>{movie.numberInStock}</p>;
                        })}
                    </div>
                    <div className="column">
                        {this.state.movies.map((movie) => {
                            console.log(movie);
                            return <p key={movie._id}>{movie.dailyRentalRate}</p>;
                        })}
                    </div>
                    <div className="column">
                        {this.state.movies.map((movie) => {
                            console.log(movie);
                            return <p key={movie._id}>{movie.publishDate}</p>;
                        })}
                    </div>
                </div>
            </>
        );
    }
}

export default Movies;
