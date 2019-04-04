import React, { Component } from 'react';

class Address extends Component{
    render(){
        return(
            <div>
                <p>street: {this.props.address.street}</p>
                <p>suite: {this.props.address.suite}</p>
                <p>city: {this.props.address.city}</p>
                <p>city: {this.props.address.zipcode}</p>
                <p>geo lat:{this.props.address.geo.lat} long:{this.props.address.geo.lng}</p>
            </div>
        );
    }
}

export default Address;