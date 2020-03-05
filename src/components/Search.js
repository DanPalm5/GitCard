import React, { Component } from 'react'

export class Search extends Component {

    render() {
        return (            // bind is used to "bind" functions to components, i.e allow another component to call them.
                            // in this case we are binding handleForm so that other components can use it
            <form onSubmit={this.handleForm.bind(this)} style = {{display: 'flex'}}>
                <input                                      // creating a searchbar via input and form
                type = "text"
                name = "username"
                style = {{flex: '10', padding: '5px'}}
                placeholder = "Enter a username...."
                value={this.username}
                />
                <input type = "submit"
                value = "Search"
                className="btn"
                />
            </form>
        )
    }

    handleForm(e) {
        e.preventDefault(); // prevents default behavior from occuring, i.e to prevent a browser reload
        let username = this.refs.username.getDOMNode().value;   // refs are a way to access DOM nodes or React elements created in the render method.
                                                                // since the username is not created until the user enters it, we have to use it here.

        this.props.getProfile(username);    // props is what is passed down, we need to call .props in order to access the getProfile method
                                            // because it is called in App.js

        this.refs.username.getDOMNode.value = '';    // after form is submitted, reset the value in the textbox by accessing the username ref and 
                                                     // and change its value  
    }

}



export default Search;
