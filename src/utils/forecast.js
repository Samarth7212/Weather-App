const request = require('request');

const forecast = (lat, lon, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=3bdf7ff4f86a9e6ce82f8f40630be981&query=' + encodeURIComponent(lat) + ',' + encodeURIComponent(lon) + '&unit=s'
    request({ url: url, json: true }, (error, { body }) => {
        if (error) {
            callback('Error! Unable to connect', undefined)
        }
        else if (body.error) {
            callback('No place by this name', undefined)
        }
        else {
            const { name, lat, lon } = body.location
            const { temperature, wind_speed, humidity } = body.current
            callback(undefined, {
                latitude: lat,
                longitude: lon,
                location: name,
                temperature: temperature,
                windSpeed: wind_speed,
                humidity: humidity,
            })
        }
    })
}

module.exports = {
    forecast,
}
