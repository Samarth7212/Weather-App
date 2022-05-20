
const request = require('request');

const url = 'http://api.weatherstack.com/current?access_key=3bdf7ff4f86a9e6ce82f8f40630be981&query=37.8267,-122.4233&unit=s'
request({ url: url, json: true }, (error, response) => {
    const data = response.body.current
    // console.log(data)
    // const statement = "Currently it is " + data['temperature'] + " degrees " 
    const statement = data.weather_descriptions[0] + ". Currently it is " + data.temperature + " degrees "
    console.log(statement)
})




