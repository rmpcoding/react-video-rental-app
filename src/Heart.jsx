import React, { Component } from 'react';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder'
import Favorite from '@material-ui/icons/Favorite'

class Heart extends Component {
    render() {
        return (
            <>
                <FavoriteBorder/>
                <Favorite/>
            </>
        );
    }
}

export default Heart;
