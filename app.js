// import request from 'request';
const request = require('request');
const key = require('./key.js');
const yargs = require('yargs');

const argv = yargs
    .options({
        a:{
            demand: true,
            alias: 'address',
            describe: 'Address to fetch weather for',
            string: true
        },
    })
    .help()
    .alias('help','h')
    .argv;

var encodedAddress = encodeURIComponent(argv.a);

request({
    // url: 'https://maps.googleapis.com/maps/api/geocode/json?address=1301%20lombard%20street%20philadelphia%20key=AIzaSyBo8ZKUY9-WRn_FptuLS-hnm09rqSvoJFI',
    url: `https://maps.googleapis.com/maps/api/geocode/json?&address=${encodedAddress}%20key=${key.getKey()}`,
    json: true
}, (error, response, body) => {
    if(error){
        console.log('Unable to connect to Google serves.');
    }else if(body.status === 'ZERO_RESULTS'){
        console.log('Unable to find that address.');
    }else if(body.status === 'OK'){
        console.log(`Address: ${body.results[0].formatted_address}`);
        console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
        console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
    }
});