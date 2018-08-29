import React, { Component } from 'react';
import DisplayData from './displayData';

export default class GetCallStatus extends Component {
    constructor() {
        super();
        this.state = {
            dataToBeDisplayed: {}
        }
    }
    getCallStatus(e) {
        console.log('inside call status');
        console.log(this.refs);
        console.log(this.state);
        const thisGetCallStatus = this; //to avoid fetch this
        let callId = this.refs.callId.value;
        // callId = 'd290902397dded13def088bd7331d433';
        fetch('/api/getCallStatus/' + callId, {
            method: 'GET',
            headers: { 'Content-Type': 'application/x-www-urlencoded' }
        })
            .then(function (response) {
                return response.json();
            })
            .then(function (myJson) {
                console.log(JSON.stringify(myJson));
                thisGetCallStatus.setState({
                    dataToBeDisplayed: myJson
                })
            });
    }

    render() {
        return (
            <div className="getCallStatus" >
                <input type="text" placeholder="Enter the call id" ref="callId" />
                <button onClick={this.getCallStatus.bind(this)}>Get status</button>
                <DisplayData dataDisplay={this.state.dataToBeDisplayed} />
            </div>
        );
    }
}