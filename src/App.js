import React, { Component } from 'react';

class App extends Component {
    state = {
      initial: 0
    };

    render() {
      return (
        <div className="App">
          <span>{this.state.initial}</span>
          <button>+</button>
          <button>-</button>
        </div>
      );
    }
}

export default App;
