import React from 'react';
import _ from 'lodash';

const Pagination = (props) => {
    const { itemCount, pageSize } = props;
    const pagesCount = Math.ceil(itemCount / pageSize);
    if (pagesCount === 1) return null;
    const pages = _.range(1, pagesCount + 1);

    return (
        <>
            <nav aria-label="Page navigation">
                <ul className="pagination justify-content-center">
                    {pages.map((page) => (
                        <li key={page} className="page-item">
                            <a className="page-link" href="target_blank">
                                {page}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    );
};

export default Pagination;
