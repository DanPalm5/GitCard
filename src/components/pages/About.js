import React from 'react'

export default function About() {
    return (
        <React.Fragment>
            <h1 style = {heading}>A B O U T</h1>
            <p style ={wordStyle}> GitCard is an interactive web application that allows the user
                to view snapshots of GitHub Profiles, called "GitCards". React uses
                Fetch to pull data using the GitHub API. Enter
                a username on the home page to begin searching!</p>


                <p style = {creatorTag}>Created by Daniel Palmieri
            </p>
        </React.Fragment>
        
    )

   

}
 const wordStyle = {
        textAlign: 'left',
        padding: '10px',
        fontSize: '34px',
        marginLeft: '20%',
        marginRight:'20%',
        color: 'white'
}


const heading = {
    fontSize: '40px',
    color: 'white',
    padding: '10px'
}

const creatorTag = {
    fontSize: '35px',
    color: 'white',
    paddingTop: '400px'
}