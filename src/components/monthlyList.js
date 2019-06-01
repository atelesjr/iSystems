import React from 'react';

export default props => {
    return (
        <div className="monthly">
            <h3>Monthly Best Sellers Lists</h3>
            <ul>
                <li>{/* eslint-disable-next-line */}
                    <a href="https://www.nytimes.com/books/best-sellers/audio-fiction/" target="_blank">Audio Fiction</a>
                </li>
                <li>{/* eslint-disable-next-line */}
                    <a href="https://www.nytimes.com/books/best-sellers/audio-nonfiction/" target="_blank">Audio Nonfiction</a>
                </li>
                <li>{/* eslint-disable-next-line */}
                    <a href="https://www.nytimes.com/books/best-sellers/business-books/">Business</a>
                </li>
                <li>{/* eslint-disable-next-line */} 
                    <a href="https://www.nytimes.com/books/best-sellers/science/" target="_blank">Science</a>
                </li>
                <li>{/* eslint-disable-next-line */}
                    <a href="https://www.nytimes.com/books/best-sellers/sports/" target="_blank">Sports And Fitness</a>
                </li>
            </ul>
        </div>
    )
}