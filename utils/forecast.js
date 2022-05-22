const request = require('request');

const forecast = (lat, lon, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=3bdf7ff4f86a9e6ce82f8f40630be981&query=' + encodeURIComponent(lat) + ',' + encodeURIComponent(lon) + '&unit=s'
    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Error! Unable to connect', undefined)
        }
        else if (response.body.error) {
            callback('No place by this name', undefined)
        }
        else {
            const data = response.body.location
            callback(undefined, {
                latitude: data.lat,
                longitude: data.lon,
                location: data.name,
                temperature: response.body.current.temperature,
                windSpeed: response.body.current.wind_speed,
            })
        }
    })
}

module.exports = {
    forecast,
}
