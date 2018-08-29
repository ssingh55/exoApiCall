import React, { Component } from 'react';
const request = require('request');

export default class ConnectTwoPersonCall extends Component {
    connectCall = () => {
        console.log('inside send sms');
        console.log(this.refs);
        let receiverNumber = this.refs.receiverNumber.value;
        let callerNumber = this.refs.callerNumber.value;
        // message = "This is a test message being sent using Exotel with a (hello) and (hi). If this is being abused, report to 08088919888";
        let exophoneNumber = this.refs.exophoneNumber.value;
        // exophoneNumber = 08039513192;
        let body = {};
        body.receiverNumber = receiverNumber;
        body.callerNumber = callerNumber;
        body.exophoneNumber = exophoneNumber;
    }
    render() {
        return (
            <div className="connectCall" >
                <input type="text" placeholder="Enter the exophone number" ref="exophoneNumber" />
                <input type="text" placeholder="Enter the receiver number" ref="receiverNumber" />
                <input type="text" placeholder="Enter the caller number" ref="callerNumber" />
                <button onClick={this.connectCall.bind(this)}>Connect call</button>
            </div>
        );
    }
}