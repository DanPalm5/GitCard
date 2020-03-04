import React, { Component } from 'react'

export class Search extends Component {
 
    onSubmit = (e) => {
        e.preventDefault();
        this.props.search(this.state.username);
    }

    onChange = (e) => this.setState({[e.target.name]: e.target.value} );


    render() {
        return (
            <form onSubmit={this.onSubmit} style = {{display: 'flex'}}>
                <input 
                type = "text"
                name = "username"
                style = {{flex: '10', padding: '5px'}}
                placeholder = "Enter a username...."
                value={this.state.username}
                onChange={this.onChange}
                />
                <input type = "submit"
                value = "Search"
                className="btn"
                />
            </form>
        )
    }
}


const searchBoxStyle = {
    flex: '10', 
    padding: '5px',
   
}

export default Search;
