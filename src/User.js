import React, { Component } from 'react';
import Address from "./Address";

class User extends Component{
    constructor(props){
        super(props);
        this.backgroundToggle = React.createRef();
    }

    ChangeColor=(e)=>{
        console.log(this.backgroundToggle.current);
        this.backgroundToggle.current.classList.toggle("backgroundChange");
    };

    render(){
        return(
            <li className={"id"+this.props.eachEntry.id} onClick={this.ChangeColor} ref={this.backgroundToggle}>
                <p>id: {this.props.eachEntry.id}</p>
                <p>name: {this.props.eachEntry.name}</p>
                <p>username: {this.props.eachEntry.username}</p>
                <p>email: {this.props.eachEntry.email}</p>
                <Address address={this.props.eachEntry.address} />
                <hr/>
            </li>
        );
    }
}

export default User;