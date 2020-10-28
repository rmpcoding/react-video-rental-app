import React, { Component } from 'react';
import './App.css';

class App extends Component {
    state = {
        count: 0,
        tags: ['tag1', 'tag2', 'tag3'],
    };

    constructor() {
        super();
        this.handleIncrement = this.handleIncrement.bind(this)
    }

    style =
        this.state.count === 0
            ? {
                  backgroundColor: 'red',
              }
            : {
                  backgroundColor: 'blue',
              };

    countFunction() {
        const { count } = this.state;
        return count === 10 ? 'ten ' : count;
    }

    handleIncrement() {
        this.setState({count: this.state.count + 1})
    }


    render() {
        return (
            <>
                <div className={'div-count-wrapper'}>
                    <span className={'count'} style={this.style}>
                        {this.countFunction()}
                    </span>
                    <button onClick={this.handleIncrement}>+</button>
                    <button>-</button>
                    <ul>
                        {this.state.tags.map((tag) => {
                            return (
                                <li className="text" key={tag}>
                                    {tag}
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </>
        );
    }
}

export default App;
