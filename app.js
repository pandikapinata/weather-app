// import request from 'request';
const request = require('request');
const key = require('./key.js');

request({
    // url: 'https://maps.googleapis.com/maps/api/geocode/json?address=1301%20lombard%20street%20philadelphia%20key=AIzaSyBo8ZKUY9-WRn_FptuLS-hnm09rqSvoJFI',
    url: `https://maps.googleapis.com/maps/api/geocode/json?&address=Denpasar%20key=${key.getKey()}`,
    json: true
}, (error, response, body) => {
    console.log(`Address: ${body.results[0].formatted_address}`);
    console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
    console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
});