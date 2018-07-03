const request = require('request');
const key = require('../key.js');

var getWeather = (lat, lng, callback) => {
    request({
        url: `https://api.darksky.net/forecast/${key.getKeyForecast()}/${lat},${lng}`,
        json: true
    },(error, response, body) => {
        if(!error && response.statusCode === 200 ){
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            });
        }else{
            callback('The given location (or time) is invalid.');
        }
    });
};

module.exports.getWeather = getWeather;