import React, { Component } from 'react'

export class Profile extends Component {
    render() {
        let info  = this.props.info;    // We are again taking the 'info' we pulled from the App component and passing it down
                                        // to the profile component via props.

        // Now we need to access the info we pulled in App.js that needs information appended to the link.
        // repos, followers, and following all
        //let followers = `${info.pageUrl}/followers`;
        //let following = `${info.pageUrl}/following`;
       // let repos = `${info.pageUrl}?tab=repositories`;
        
        if(info.userDne === 'Not Found') {       // if user does not exist, let user know
            return (
                <div className = "no-user">
                    <h2>Uh oh.</h2>
                    <p>React can't find that user. Did you double triple check your spelling?</p>
                </div>
            );
        }else{ // else user is valid, display data
        return (
            // section is used when the elements inside of it are grouped / related. A div doesn't indicate any relation or meaning
            // The <section> element is not a generic container element. When an element is needed only for styling purposes 
            //or as a convenience for scripting, authors are encouraged to use the <div> element instead. A general rule is that the 
            //<section> element is appropriate only if the element’s contents would be listed explicitly in the document’s outline.

            // I'll use section to group the elements together
            <section className = "profile-section">


            </section>
                
        
        )
         }
    }
}

export default Profile;
