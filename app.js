const geocode = require('./utils/geocode.js');
const forecast = require('./utils/forecast');
const request = require('request');

// const url = 'http://api.weatherstack.com/current?access_key=3bdf7ff4f86a9e6ce82f8f40630be981&query=37.8267,-122.4233&unit=s'
// // const url = 'http://api.weatherstack.com/current?access_key=3bdf7ff4f86a9e6ce82f8f40630be981&query='
// request({ url: url, json: true }, (error, response) => {
//     if (error) {
//         console.log(error)
//     } else if (response.body.error) {
//         console.log(response.body.error.info)
//     } else {
//         const data = response.body.current
//         console.log(data.name)
//         console.log("Latitude: " + data.lat)
//         console.log("Longitude: " + data.lon)
//     }
// })

// geocode.geocode('Boston', (error, response) => {
//     if (error) console.log('error: ', error)
//     else console.log('Data', response)
// })

forecast.forecast(37.8267, -122.4233, (error, response) => {
    if (error) console.log('error: ', error)
    else console.log('Data: ', response)
})

