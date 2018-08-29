const express = require('express'),
    app = express(),
    PORT = process.env.PORT || 8080,
    path = require('path'),
    request = require('request'),
    bodyParser = require('body-parser');

app.use(express.static(path.resolve('build')));
app.use(bodyParser.urlencoded({ extended: true }))
app.get('/', (req, res) => {
    res.sendFile(path.resolve('build/index.html'));
})

let getCallStatus = async (req, res, next) => {
    callId = req.params.callId;

    console.log('inside call status express');
    console.log(callId);
    let options = {
        url: 'https://exotel272:0fcfd91af95c606f2c9e4a671aaf700fb9a3e13e@api.exotel.com/v1/Accounts/exotel272/Calls/' + callId + '.json',
        method: 'GET',
        headers: {
            'content-type': 'application/x-www-form-urlencoded'
        },
        // body: dataString
    };

    function callback(error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log('inside getcallstatus callback');
            // console.log('beforebody', body);
            res.send(body)
            // console.log('afterbody', body);
        }
    }
    request(options, callback)
    // console.log('after request');
}

app.get('/api/getCallStatus/:callId', getCallStatus)

app.listen(PORT, () => {
    console.log('succeessfully listening on port', PORT)
})


