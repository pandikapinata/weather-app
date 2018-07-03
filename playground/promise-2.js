const request = require('request');
const key = require('../key.js');
var geocodeAddress = (address) => {
    return new Promise((resolve, reject) => {
        var encodedAddress = encodeURIComponent(address);

        request({
            // url: 'https://maps.googleapis.com/maps/api/geocode/json?address=1301%20lombard%20street%20philadelphia%20key=AIzaSyBo8ZKUY9-WRn_FptuLS-hnm09rqSvoJFI',
            url: `https://maps.googleapis.com/maps/api/geocode/json?&address=${encodedAddress}%20key=${key.getKey()}`,
            json: true
        }, (error, response, body) => {
            if(error){
                reject('Unable to connect to Google serves.');
            }else if(body.status === 'ZERO_RESULTS'){
                reject('Unable to find that address.');
            }else if(body.status === 'OK'){
                resolve({
                    address: body.results[0].formatted_address,
                    latitude: body.results[0].geometry.location.lat,
                    longitude: body.results[0].geometry.location.lng
                });
            }
        });
    });
};

geocodeAddress('0000').then((location) => {
    console.log(JSON.stringify(location, undefined, 2));
}, (errorMessage) => {
    console.log(errorMessage);
})