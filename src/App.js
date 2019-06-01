import React, { Component } from 'react';
import axios from 'axios';

import Header from './components/header';
import Body from './components/body'
import Spinner from './components/spinner/spinner'

const bookAPI = 'https://api.nytimes.com/svc/books/v3/lists/overview.json?api-key=LcqtGjBOCnp04E1QEZjcSLGeLzDaHGgl'


class App extends Component {
  
  //To set initial state.
  state = { 
      data: [] , 
      hide: true,
      loading: false 
  };
    
 componentDidMount () {
    this.getData()
 };


getData() {
    //To load spinner while data is fetching
    this.setState({ loading: true });

    axios.get(bookAPI)
      .then(res => { 
        this.setState({ data: res.data.results, hide:false, loading:false })
      })
      .catch(error => console.log('Error while fetching data: ', error));
  };


  render() {
    const loading = this.state.loading;

    return (
      <div className="container">
        
        <Header />
        {/* If data is note loaded runs spinner, else content is rendered. */}
        { loading ? <Spinner /> : <Body {...this.state.data }  hide={ this.state.hide }/>}
      </div>
    );
  }
}

export default App;