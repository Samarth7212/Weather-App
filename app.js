const geocode = require('./utils/geocode.js');
const forecast = require('./utils/forecast');
const request = require('request');

geocode.geocode('Boston', (error, response) => {
    if (error) console.log('error: ', error)
    else console.log('Data', response)
})

forecast.forecast(37.8267, -122.4233, (error, response) => {
    if (error) console.log('error: ', error)
    else console.log('Data: ', response)
})

