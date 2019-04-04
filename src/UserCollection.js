import React, { Component } from 'react';
import User from './User'

class UserCollection extends Component{

    render(){
        let userMapping = this.props.allEntries.map((eachEntry)=>{
            return (<User key={eachEntry.id} eachEntry={eachEntry}/>);
        });
        return(
            <ul>
                {userMapping}
            </ul>
        );
    }
}

export default UserCollection;