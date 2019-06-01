import React from 'react';

export default props => {
    return (
        <div className="weekly">
            <h3>Weekly Best Sellers Lists</h3>
            <h4>Fiction</h4>
            <ul>
                <li>{/* eslint-disable-next-line */}
                    <a href="https://www.nytimes.com/books/best-sellers/combined-print-and-e-book-fiction/" target="_blank">Combined Print & E-Book Fiction</a>
                </li>
                <li>{/* eslint-disable-next-line */}
                    <a href="https://www.nytimes.com/books/best-sellers/hardcover-fiction/" target="_blank">Hardcover Fiction</a>
                </li>
                <li>{/* eslint-disable-next-line */}
                    <a href="https://www.nytimes.com/books/best-sellers/trade-fiction-paperback/" target="_blank">Paperback Trade Fiction</a>
                </li>
            </ul>
            <h4>NonFiction</h4>
            <ul>
                <li>{/* eslint-disable-next-line */}
                    <a href="https://www.nytimes.com/books/best-sellers/combined-print-and-e-book-nonfiction/" target="_blank">Combined Print & E-Book Nonfiction</a>
                    </li>
                <li>{/* eslint-disable-next-line */}
                    <a href="https://www.nytimes.com/books/best-sellers/hardcover-nonfiction/" target="_blank">Hardcover Nonfiction</a>
                </li>
                <li>{/* eslint-disable-next-line */}
                    <a href="https://www.nytimes.com/books/best-sellers/paperback-nonfiction/" target="_blank">Paperback Nonfiction</a>
                    </li>
                <li>{/* eslint-disable-next-line */}
                    <a href="https://www.nytimes.com/books/best-sellers/advice-how-to-and-miscellaneous/" target="_blank">Advice, How-To & Miscellaneous</a>
                </li>
            </ul>
            <h4>Children's</h4>
            <ul>
                <li>{/* eslint-disable-next-line */}
                    <a href="https://www.nytimes.com/books/best-sellers/childrens-middle-grade-hardcover/" target="_blank">Children’s Middle Grade Hardcover</a>
                </li>
                <li>{/* eslint-disable-next-line */}
                    <a href="https://www.nytimes.com/books/best-sellers/picture-books/" target="_blank">Children’s Picture Books</a>
                </li>
                <li>{/* eslint-disable-next-line */}
                    <a href="https://www.nytimes.com/books/best-sellers/series-books/" target="_blank">Children’s Series</a>
                </li>
                <li>{/* eslint-disable-next-line */}
                    <a href="https://www.nytimes.com/books/best-sellers/young-adult-hardcover/" target="_blank">Young Adult Hardcover</a>
                </li>
            </ul>
        </div>
    )
}

