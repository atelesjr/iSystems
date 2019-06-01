import React from 'react';

import Card from './card';

export default props => {
    const lists = props.lists;
    return (
        <div className="list">
            <div className="list__head">
                <h2>{ lists.list_name }</h2>
                <i className="fas fa-caret-down" />
            </div>
           
            {
              lists.books.map( (books, index) => (
                <Card  books={ books } key={ index } />
              ))
            }

        </div>
    )
}