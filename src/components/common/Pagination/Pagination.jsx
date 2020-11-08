import React, { Component } from 'react';

export class Pagination extends Component {
    render() {
        return (
            <>
                <nav aria-label="Page navigation">
                    <ul className="pagination justify-content-center">
                        <li className="page-item">
                            <a className="page-link" href="target_blank">
                                1
                            </a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="target_blank">
                                2
                            </a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="target_blank">
                                3
                            </a>
                        </li>
                    </ul>
                </nav>
            </>
        );
    }
}

export default Pagination;
