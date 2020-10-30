import React, { Component } from 'react';
import { getMovies } from './services/fakeMovieService';

class Movies extends Component {
    state = {
        movies: getMovies(),
    };

    deleteHandler = () => {
        console.log('deleted')
        
    }

    render() {
        return (
            <>
                <p>Showing {} movies in the database</p>
                <table className="table ">
                    <thead>
                        <tr>
                            <th scope="col">Title</th>
                            <th scope="col">Genre</th>
                            <th scope="col">Stock</th>
                            <th scope="col">Rate</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.movies.map((movie) => {
                            return (
                                <tr>
                                    <td key={movie._id}>{movie.title}</td>
                                    <td key={movie._id+1}>{movie.genre.name}</td>
                                    <td key={movie._id+2}>
                                        {movie.numberInStock}
                                    </td>
                                    <td key={movie._id+3}>
                                        {movie.dailyRentalRate}
                                    </td>
                                    <td>
                                        <button
                                            type="button"
                                            className="btn btn-danger"
                                            onClick={this.deleteHandler}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </>
        );
    }
}

export default Movies;
