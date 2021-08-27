import React from 'react';
import styles from './Pagination.module.css'

type PaginationPropsType = {
    rowPerPage: number
    totalRow: number
    currentPage: number
    paginate: (pageNumber: number) => void
}

export const Pagination: React.FC<PaginationPropsType> = ({rowPerPage, totalRow, currentPage, paginate}) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalRow / rowPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <nav className={styles.navigation}>
            <ul className={styles.list}>
                {pageNumbers.map(number => {
                        const activeClass = currentPage === number ? styles.current : '';
                        return (
                            <li key={number}
                                className={`${styles.item} ${activeClass}`}
                                onClick={() => paginate(number)}
                            >{number}</li>
                        );
                    }
                )}
            </ul>
        </nav>
    );
}