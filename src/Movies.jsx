import React, { Component } from 'react';
import { getMovies } from './services/fakeMovieService';

class Movies extends Component {
    state = {
        movies: getMovies(),
    };

    // handleGetMovies() {
    //     return this.setState({
    //         movies: getMovies()
    //     })
    // }

    render() {
        return (
            <>
                <div>
                    {this.state.movies.map((movie) => {
                        console.log(movie);
                        return <p key={movie._id}>{movie._id}</p>
                    })}
                </div>
                <div>
                    {this.state.movies.map((movie) => {
                        console.log(movie);
                        return <p key={movie._id}>{movie.title}</p>
                    })}
                </div>
            </>
        );
    }
}

export default Movies;
