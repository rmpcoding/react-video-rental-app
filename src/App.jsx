import React, { Component } from 'react';
import Movies from './Movies';
import Heart from './Heart';

class App extends Component {
    render() {
        return (
            <>
                <main className="container">
                    <Heart />
                    <Movies />
                </main>
            </>
        );
    }
}

export default App;
