import React from 'react';

import List from './list'
import WeelkyList from './weeklyList';
import MonthlyList from './monthlyList';

export default props => {
  const lists = props.lists || [];

  //List codes to render list as NYTimes site.
  const fiveList = [ 1, 2, 4, 704, 708 ];

  //No content is showed while fetching for data
  if(props.hide) {
    return null
  } else {
    return (
      <div className="content">
        <div className="head">
          <h1>The New York Times Best Sellers</h1>
          <span>{props.published_date}</span>
        </div>
            
        <section>
          { //To select the five lists to render lists as NYTimes site
            lists.filter( lists => fiveList
              .includes(lists.list_id))
              .map((lists, index) => (
                <List  lists={ lists } key={ index } />
              )
            )
          }
        </section>
            
        <aside>
          {/* These components are only static */}
          <WeelkyList />
          <MonthlyList />
        </aside>

      </div>
  )};
};
