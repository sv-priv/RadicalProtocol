import './App.css';
import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Redirect } from 'react-router-dom';
import { ethers } from 'ethers';
import Landing from './landing/Landing';
import Nav from './shared/nav/nav';
import Footer from './shared/footer/footer';
import About from './about/About';
import Documentation from './documentation/Documentation'
import Error from './shared/error404/error404';
import actions from '../state/actions/index';



class App extends React.Component {


  render(){
    return(
    <div>
        <BrowserRouter >
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

        </BrowserRouter>

    </div>
    )
  } 

}

export default App;