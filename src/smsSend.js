import React, { Component } from 'react';
const request = require('request');

export default class SmsSend extends Component {
    constructor() {
        super();
        this.sendSms.bind(this);
    }
    sendSms(e) {
        {console.log('inside send sms')};
        console.log(this.refs);
        let receiverNumber = this.refs.receiverNumbr.value;
        let message = this.refs.message.value;
        // message = "This is a test message being sent using Exotel with a (hello) and (hi). If this is being abused, report to 08088919888";
        let exophoneNumber = this.refs.exophoneNumber.value;
        // exophoneNumber = 08039513192;
        let dataString = `From=${exophoneNumber}&To=${receiverNumber}&Body=${message}`;

        let options = {
            url: 'https://exotel272:0fcfd91af95c606f2c9e4a671aaf700fb9a3e13e@api.exotel.com/v1/Accounts/exotel272/Sms/send',
            method: 'POST',
            body: dataString
        };

        function callback(error, response, body) {
            console.log('hello')
            if (!error && response.statusCode === 200) {
                console.log(body);
            }
        }
        request(options, callback);
    }
    render() {
        return (
            <div className="sms" 
            >
                <input type="text" placeholder="Enter the exophone number" ref="exophoneNumber"/>
                <input type="text" placeholder="Enter the number" ref="receiverNumber"/>
                <textarea type="text" placeholder="Enter the message" ref="message"/>
                <button onClick={()=>this.sendSms}>Send sms</button>
            </div>
        );
    }
}

{/* <Link to={this.props.match.url + '/' + item._id}>
                                    {item.title}
                                </Link> */}