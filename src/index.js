import React, { Profiler } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

// this is the API i will use to pull data 
const API = 'https://api.github.com/users'

// create overall gitcard class - this will hold each field of the card
class GitCard extends React.Component{
    constructor(props) {
        super(props)
        // these are the fields of the card
        this.state = {
            name: '',
            profilePicture: '',
            repos: '',
            followers: '',
            following: '',
            location: '',
            bio: ''

        }
    }
    



    render(
       





    )
}












//////////////////////////////////////////
ReactDOM.render(
    <GitCard />, 
    document.getElementById('root'));