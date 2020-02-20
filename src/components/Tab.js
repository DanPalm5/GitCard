import React from 'react'

class Tab extends React.Component {
    render() {
        return this.props.tab.map((tab) => (
        <h2>{tab.title}</h2>
        ));
    }
}





export default Tab;