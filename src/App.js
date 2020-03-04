import React, { Component } from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom';
import ReactDOM from 'react-dom'
import Header from './components/layout/Header';
import About from './components/pages/About';
import Search from './components/Search';
import Profile from './components/Profile';
import './style.css'



// API to get data
const API = 'https://api.github.com/users'


class App extends React.Component {
    // state will hold the data we want to display
    state = {
       username: '',
       name: '',
       picture: '',
       followers: '',
       following: '',
       repos: '',
       location: '',
       pageUrl: '',
       userDne: '' // in case username is invalid
    }


    render() {
    return(
    <Router>
        <div className = "App">
            <Header />
            <div className = "container">
            <Route exact path = "/" render = {props => (
                // insert components for the gitcard here
             <React.Fragment>
                 <Search search/>
            </React.Fragment>
            )}></Route>
            </div>  
        <Route path = "/about" component = {About}/>
        </div>
        </Router>
    );
    }
}



export default App;