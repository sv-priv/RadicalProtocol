import './App.css';
import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Redirect } from 'react-router-dom';

import Landing from './landing/Landing';
import Nav from './shared/nav'
import Error from './shared/error404'



class App extends React.Component {


  render(){
    return(
    <div>
        <BrowserRouter >
              <Nav />
              {/* <Route path= "/" exact >
                  <Landing />
              </Route>
              <Route path= "/error" exact>
                  <Error/>
              </Route> */}
        </BrowserRouter>

    </div>
    )
  } 

}

export default App;