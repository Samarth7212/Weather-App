const geocode = require('./utils/geocode.js');
const forecast = require('./utils/forecast');
const request = require('request');

try {
    const name = process.argv[2]
    if (name) {
        geocode.geocode(name, (error, { latitude, longitude, location }) => {
            if (error) return console.log('error: ', error)

            forecast.forecast(latitude, longitude, (error, { latitude, longitude, temperature,  windSpeed }) => {
                // console.log('Forecast data: ', forecastData)
                if (error) console.log('error: ', error)
                else {
                    console.log(location)
                    const statement = 'Temperature is ' + temperature + ' degree celsius with a windspeed of ' + windSpeed
                    console.log(statement)
                    console.log('Latitude: ', latitude)
                    console.log('Longitude: ', longitude)
                }
            })

        }
        )
    } else console.log('Please provide name of place')
} catch (error) {
    console.log('Please provide correct arguments')
}


