import React, { Component } from 'react';
import Movies from './Movies'

class App extends Component {
    render() {
        return (
            <>
                <main className="container">
                    <Movies />
                </main>
            </>
        );
    }
}

export default App;
