import React, { Component } from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom';
import ReactDOM from 'react-dom'
import Header from './components/layout/Header';
import About from './components/pages/About';
import Search from './components/Search';
import Profile from './components/Profile';
import './style.css'

/*  GitCard v1.0.0
    Created by Daniel Palmieri
    Concept idea by Hamed Esmaili
*/

// API to get data
const API = 'https://api.github.com/users'


class App extends React.Component {
    constructor(props) {
    super(props)
    
    // state will hold the data we want to display
        this.state = {
        username: '',
        name: '',
        picture: '',
        followers: '',
        following: '',
        repos: '',
        location: '',
        pageUrl: '',
        bio: '',
        userDne: '' // in case username is invalid
        }
    }


    getProfile(username) {
        let url = `${API}/${username}`; // append username to link in order to fetch data
        fetch(url)  // retrieve data from specified user
            .then((res) => res.json() )
                .then((info) => {
        // populate state for each field
        this.setState({
            username: info.login,
            name: info.name,
            picture: info.avatar_url,
            followers: info.followers,
            following: info.following,
            repos: info.public_repos,
            location: info.location,
            pageUrl: info.html_url,
            bio: info.bio,
            userDne: info.message
        })
             })
        .catch((error) => console.log('user not found'))  // if name is not valid or is typed in wrong, catch error
    }


    // after component mounts, we want it to update if the username state is changed. We use componentDidMount to achieve this
    componentDidMount() {
        this.getProfile(this.state.username);
    }



    render() {
        return(
        <Router>
        <div className = "App">
            <Header />
            <Route exact path = "/" render = {props => (
                // insert components for the gitcard here
             <div className = "container">
                 <Search getProfile={this.getProfile.bind(this)} />
                    <Profile info ={this.state} />
                </div>  
            )}></Route>
        <Route path = "/about" component = {About}/>
        </div>
        </Router>
    );
    }
}



export default App;