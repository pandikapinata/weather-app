// const geoCode = require('./geocode/geocode');
// const yargs = require('yargs');

// const argv = yargs
//     .options({
//         a:{
//             demand: true,
//             alias: 'address',
//             describe: 'Address to fetch weather for',
//             string: true
//         },
//     })
//     .help()
//     .alias('help','h')
//     .argv;

// geoCode.geocodeAddress(argv.a, (errorMessage, results) => {
//     if(errorMessage){
//         console.log(errorMessage);
//     }else{
//         console.log(JSON.stringify(results, undefined, 2))
//     }
// });
//aacc01d91cbc9427d5f4e4f3c45dc465
// https://api.darksky.net/forecast/aacc01d91cbc9427d5f4e4f3c45dc465/-8.670458199999999,115.2126293

const request = require('request');
const key = require('./key.js');

request({
    url: `https://api.darksky.net/forecast/${key.getKeyForecast()}/-8.670458199999999,115.2126293`,
    json: true
},(error, response, body) => {
    if(!error && response.statusCode === 200 ){
        console.log(body.currently.temperature);
    }else{
        console.log('The given location (or time) is invalid.');
    }
});