import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Title from './components/Title'
import Tab from './components/Tab'
import './style.css'


// API to get data
const API = 'https://api.github.com/users'


class App extends React.Component {
    state = {
        title: 'G I T C A R D',
        tab: [
            {
                id: 1,
                title: 'S E A R C H'
            },
            {
                id: 2,
                title: 'A B O U T'
            }

        ]
    }


    render() {
    return(
        <div className = "App">
            <Title title = {this.state.title}/>
            <Tab tab = {this.state.tab}/>
        </div>

       
        
    )
    }
}



export default App;