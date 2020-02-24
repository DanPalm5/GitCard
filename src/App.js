import React, { Component } from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom';
import ReactDOM from 'react-dom'
import Header from './components/layout/Header';
import About from './components/pages/About';
import './style.css'



// API to get data
const API = 'https://api.github.com/users'


class App extends React.Component {
    state = {
       
    }


    render() {
    return(
    <Router>
        <div className = "App">
            <Header />
            <Route exact path = "/" render = {props => (
                // insert components for the gitcard here
             <React.Fragment>
    
            </React.Fragment>
            )}></Route>
               
        <Route path = "/about" component = {About}/>
        </div>
        </Router>
    );
    }
}



export default App;