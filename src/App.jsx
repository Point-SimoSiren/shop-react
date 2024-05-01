import React from 'react';
import './App.css'
import Header from './Header'
import Footer from './Footer'
import Items from './Items'

const App = () => {

    return (
      <div class='wrapper'>
        <Header/>
        <Items />
        <Footer/>
      </div>
      
    );
  }

export default App;
