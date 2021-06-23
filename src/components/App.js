import './App.css';
import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Redirect } from 'react-router-dom';

import Landing from './landing/Landing';
import Nav from './shared/nav/nav';
import Footer from './shared/footer/footer';
import About from './about/About';
import Documetation from './documentation/Documentation'
import Marketplace from './marketplace/Marketplace'
import Profile  from './profile/Profile';
import Search from './search/Search';

import Error from './shared/error404/error404';




class App extends React.Component {


  render(){
    return(
    <div>
        <BrowserRouter >
              <Nav />
                  <Route path= "/" exact >
                  <Landing />
              </Route>
              <Route path= "/error" exact>
                  <Error/>
              </Route> 
              <Route path= "/about" exact>
                  <About/>
              </Route> 
              <Route path= "/documentation" exact>
                  <Documentation/>
              </Route> 
              <Route path= "/profile" exact>
                  <Profile/>
              </Route> 
              <Route path= "/search" exact>
                  <Search/>
              </Route> 
              <Route path= "/marketplace" exact>
                  <Marketplace/>
              </Route> 
              <Footer />
        </BrowserRouter>

    </div>
    )
  } 

}

export default App;