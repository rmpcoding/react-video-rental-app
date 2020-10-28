import React, { Component } from 'react';
import './App.css';

class App extends Component {
    state = {
        count: 5,
        tags: ['tag1', 'tag2', 'tag3'],
    };

    style =
        this.state.count === 0
            ? {
                  backgroundColor: 'red',
              }
            : {
                  backgroundColor: 'blue',
              };

    render() {
        return (
            <>
                <div className={'div-count-wrapper'}>
                    <span className={'count'} style={this.style}>
                        {this.countFunction()}
                    </span>
                    <button>+</button>
                    <button>-</button>
                    <ul>
                        {this.state.tags.map((tag) => {
                            return <li className="text" key={tag}>{tag}</li>;
                        })}
                    </ul>
                </div>
            </>
        );
    }

    countFunction() {
        const { count } = this.state;
        return count === 10 ? 'ten ' : count;
    }
}

export default App;
