import React, { Component } from 'react';
import { getMovies } from './services/fakeMovieService';
import Heart from './components/common/Heart/Heart';

class Movies extends Component {
    state = {
        movies: getMovies(),
        count: getMovies().length,
    };

    handleDelete = (movie) => {
        const { count, movies } = this.state;
        const id = movie._id;

        const resultsList = movies.filter((mov) => {
            return mov._id !== id;
        });

        return this.setState({
            count: count - 1,
            movies: resultsList,
        });
    };

    render() {
        const { count } = this.state;
        const table = (
            <>
                <p>Showing {count} movies in the database</p>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Title</th>
                            <th scope="col">Genre</th>
                            <th scope="col">Stock</th>
                            <th scope="col">Rate</th>
                            <th/>
                            <th/>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.movies.map((movie) => {
                            return (
                                <tr key={movie._id}>
                                    <td>{movie.title}</td>
                                    <td>{movie.genre.name}</td>
                                    <td>{movie.numberInStock}</td>
                                    <td>{movie.dailyRentalRate}</td>
                                    <td>{<Heart />}</td>
                                    <td>
                                        <button
                                            type="button"
                                            className="btn btn-danger btn-sm"
                                            onClick={() =>
                                                this.handleDelete(movie)
                                            }
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
        return (
            <>
                {count ? (
                    table
                ) : (
                    <p className="p-4">
                        We have no movies to show you right now
                    </p>
                )}
            </>
        );
    }
}

export default Movies;
