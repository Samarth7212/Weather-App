const geocode = require('./utils/geocode.js');
const forecast = require('./utils/forecast');
const request = require('request');

try {
    const name = process.argv[2]
    if (name) {
        geocode.geocode(name, (error, response) => {
            if (error) return console.log('error: ', error)
            else if (response) {
                forecast.forecast(response.latitude, response.longitude, (error, forecastData) => {
                    if (error) console.log('error: ', error)
                    else {
                        console.log(response.location)
                        const statement = 'Temperature is ' + forecastData.temperature + ' degree celsius with a windspeed of ' + forecastData.windSpeed
                        console.log(statement)
                        console.log('Latitude: ', forecastData.latitude)
                        console.log('Longitude: ', forecastData.longitude)
                    }
                })
            } else console.log('Something went wrong')
        }
        )
    } else console.log('Please provide name of place')
} catch (error) {
    console.log('Please provide correct arguments')
}


