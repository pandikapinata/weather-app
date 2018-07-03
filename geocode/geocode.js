const request = require('request');
const key = require('../key.js');

var geocodeAddress = (address, callback) => {
    var encodedAddress = encodeURIComponent(address);

    request({
        // url: 'https://maps.googleapis.com/maps/api/geocode/json?address=1301%20lombard%20street%20philadelphia%20key=AIzaSyBo8ZKUY9-WRn_FptuLS-hnm09rqSvoJFI',
        url: `https://maps.googleapis.com/maps/api/geocode/json?&address=${encodedAddress}%20key=${key.getKey()}`,
        json: true
    }, (error, response, body) => {
        if(error){
            callback('Unable to connect to Google serves.');
        }else if(body.status === 'ZERO_RESULTS'){
            callback('Unable to find that address.');
        }else if(body.status === 'OK'){
            callback(undefined, {
                address: body.results[0].formatted_address,
                latitude: body.results[0].geometry.location.lat,
                longitude: body.results[0].geometry.location.lng
            });
        }
    });

};

module.exports.geocodeAddress= geocodeAddress;