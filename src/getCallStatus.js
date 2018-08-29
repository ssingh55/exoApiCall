import React, { Component } from 'react';
const request = require('request');

export default class GetCallStatus extends Component {
    constructor() {
        super()
    }
    getCallStatus(e) {
        console.log('inside call status');
        console.log(this.refs);
        let callId = this.refs.callId.value;
        callId = 'd290902397dded13def088bd7331d433';
        fetch('/api/getCallStatus/' + callId), {
            method: 'GET',
            headers: { 'Content-Type': 'application/x-www-urlencoded' }
        }
    }

    render() {
        return (
            <div className="getCallStatus" >
                <input type="text" placeholder="Enter the call id" ref="callId" />
                <button onClick={this.getCallStatus.bind(this)}>Get status</button>
            </div>
        );
    }
}