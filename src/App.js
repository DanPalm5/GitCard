import React from 'react'
import ReactDOM from 'react-dom'
import Title from './components/Title'
import './style.css'

// API to get data
const API = 'https://api.github.com/users'


class App extends React.Component {
    state = {
        name: '',
        profilePicture: '',
        repos: '',
        followers: '',
        following: '',
        location: '',
    }













    render() {
    return(
        <div className = "App">
            <Title/>
        </div>

       
        
    )
    }
}



export default App;