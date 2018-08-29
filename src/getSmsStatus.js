import React, { Component } from 'react';
// const request = require('request');
import axios from 'axios';

export default class GetSmsStatus extends Component {
    getSmsStatus(e) {
        { console.log('inside sms status') };
        console.log(this.refs);
        let smsId = this.refs.smsId.value;
        smsId = 'd290902397dded13def088bd7331d433';
        // let options = {
        //     url: 'https://exotel272:0fcfd91af95c606f2c9e4a671aaf700fb9a3e13e@api.exotel.com/v1/Accounts/exotel272/SMS/Messages/' + smsId,
        //     method: 'GET',
        // };
        let username = 'exotel272';
        let sidToken = '0fcfd91af95c606f2c9e4a671aaf700fb9a3e13e';
        let url = 'https://api.exotel.com/v1/Accounts/exotel272/SMS/Messages/' + smsId;

        // var basicAuth = 'Basic ' + btoa(username + ':' + sidToken);

        var base64Credentials = username + ":" + sidToken;
        var xhttp = new XMLHttpRequest();
        xhttp.open("GET", url, true);
        xhttp.withCredentials = true;
        xhttp.setRequestHeader("content-type", "application/x-www-form-urlencoded");
        // xhttp.setRequestHeader("Authorization", "Basic " + base64Credentials);
        xhttp.onload = function () {
            console.log('SUCCESS!');
        }
        // var requestParams = XXXXXXXX;
        xhttp.send();
    }
    render() {
        return (
            <div className="getSmsStatus" >
                <button onClick={this.getSmsStatus.bind(this)}>Get status</button>
            </div>
        );
    }
}

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
        const thisGetSmsStatus = this; //to avoid fetch this
        let callId = this.refs.smsId.value;
        // callId = 'd290902397dded13def088bd7331d433';
        fetch('/api/getCallStatus/' + callId, {
            method: 'GET',
            headers: { 'Content-Type': 'application/x-www-urlencoded' }
        })
            .then(function (response) {
                return response.json();
            })
            .then(function (myJsonData) {
                console.log(JSON.stringify(myJsonData));
                thisGetSmsStatus.setState({
                    dataToBeDisplayed: myJsonData
                })
            });
    }

    render() {
        return (
            <div className="getCallStatus" >
                <input type="text" placeiholder="Enter the sms id" ref="smsId" />
                <button onClick={this.getCallStatus.bind(this)}>Get status</button>
                <DisplayData dataDisplay={this.state.dataToBeDisplayed} />
            </div>
        );
    }
}