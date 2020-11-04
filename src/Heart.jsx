import React, { Component } from 'react';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import Favorite from '@material-ui/icons/Favorite';

class Heart extends Component {
    state = {
        favorite: <FavoriteBorder />,
    };

    handleClick = () => {
        const favoriteBorderIcon = this.state.favorite.type.type.render.displayName

        favoriteBorderIcon === 'FavoriteBorderIcon'
            ? this.setState({ favorite: <Favorite /> })
            : this.setState({ favorite: <FavoriteBorder /> });
    };

    render() {
        return (
            <>
                <span onClick={this.handleClick}>{this.state.favorite}</span>
            </>
        );
    }
}

export default Heart;
