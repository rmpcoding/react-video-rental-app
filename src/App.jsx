import React, { Component } from 'react';
import Movies from './Movies'

class App extends Component {
    render() {
        return (
            <>
                <main className="container">
                    <Movies />
                    <h1>Hello, World!</h1>
                </main>
            </>
        );
    }
}

export default App;
