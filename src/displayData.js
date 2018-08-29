import React, { Component } from 'react';

export default class DisplayData extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let dataDisplay = this.props.dataDisplay.Call;
        console.log('props data', this.props)
        console.log('display data', this.props.dataDisplay)
        // console.log('call data display', this.props.dataDisplay ? JSON.parse(this.props.dataDisplay).Call : {})
        if (dataDisplay === undefined) {
            return (
                <div className="getCallStatus">
                    {console.log('inside undefined block')}
                </div>
            )
        }
        else {
            return (
                <div className="getCallStatus">
                {/* <p>{this.props.dataDisplay}</p> */}
                    <p>Call details</p>
                    <p>SID: {dataDisplay.Sid}</p>
                    <p>DateCreated: {dataDisplay.DateCreated}</p>
                    <p>AccountSid: {dataDisplay.AccountSid}</p>
                    <p>To: {dataDisplay.To}</p>
                    <p>From: {dataDisplay.From}</p>
                    <p>PhoneNumberSid: {dataDisplay.PhoneNumberSid}</p>
                    <p>Status: {dataDisplay.Status}</p>
                    <p>StartTime: {dataDisplay.StartTime}</p>
                    <p>EndTime: {dataDisplay.EndTime}</p>
                    <p>Duration: {dataDisplay.Duration}</p>
                    <p>Price: {dataDisplay.Price}</p>
                </div>
            );
        }
    }
}