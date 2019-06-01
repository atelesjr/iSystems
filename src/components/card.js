import React from 'react';

export default props => {
    //console.log(props.books);
    const book = props.books;
    return (
        <div className="rank">
            <div className="rank__position">{book.rank}</div>

            <div className="rank__body">
                <span className="weeks">{book.weeks_on_list} weeks on the list</span>
                <h3>{book.title}</h3>
                <span className="author">by {book.author}</span>
                <p>{book.description}</p>
                
                
                <div className="shop">
                    <i className="fas fa-shopping-bag"></i>
                    <ul>
                        <li> {/*eslint-disable-next-line*/}
                            <a href={book.buy_links[0].url} target="_blank" >Amazon</a>
                        </li>
                        <li>{/*eslint-disable-next-line*/}
                            <a href={book.buy_links[1].url} target="_blank" >Local Booksellers</a>
                        </li>
                        <li>{/*eslint-disable-next-line*/}
                            <a href={book.buy_links[2].url} target="_blank" >Barnes and Noble</a>
                        </li>
                    </ul>
                </div> 

            </div>

            <div className="rank__img">
                <img src={book.book_image} alt={book.title} />
            </div>
        </div>
    )
}

/*
  book.rank
 
  
  
  

  

  book.buy_links[0].url
  book.buy_links[1].url
  book.buy_links[2].url */