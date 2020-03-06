import React, { Component } from 'react'

export class Profile extends Component {
    render() {
        let info  = this.props.info;    // We are again taking the 'info' we pulled from the App component and passing it down
                                        // to the profile component via props.

        // This would allow us to make the links clickable
        let followers = `${info.pageUrl}/followers`;
        let following = `${info.pageUrl}/following`;
       let repos = `${info.pageUrl}?tab=repositories`;
        
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
            <section className = "profile-info">
                <div className="usernameAndPic">
                    <a href ={info.pageUrl} target ="_blank" title={info.name || info.username}><img src={info.picture} alt ={info.username}/></a>
                    <h2><a href= {info.pageUrl} title={info.username} target="_blank">{info.name || info.username}</a></h2>
                </div>
                <div className = "location">
                    <u1>
                        <li> {info.location || 'Top Secret Location'} </li>
                        <li> {info.company || 'Not with a company'}</li>
                    <li>Developer since {info.memberSince.split("-",1)}</li>
                    </u1>
                </div>
                <div className = "code-info">
                    <u1>
                        <li>
                            {info.followers}<span> Followers</span>
                        </li>
                        <li>
                            {info.repos}<span> Repositories</span>
                        </li>
                        <li>
                            {info.following}<span> Following</span>
                        </li>
                    </u1>
                </div>
                <div className = "bio">
                    <li>
                        <p>{info.bio}</p>
                    </li>
                </div>
            </section>
                
        
        );
         }
    }
}

export default Profile;
