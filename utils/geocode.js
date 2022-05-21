const request = require('request');

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1Ijoic2FtYXJ0aDcyMTIiLCJhIjoiY2wzZmV6dGxwMGEyMTNjbjBxMDd0dDN3eSJ9.OyzLAUEodowsZvXSu81XOw'
    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Error! Unable to connect', undefined)
        } else if (response.statusCode != 200) {
            console.log(response.body.message)
        } else if (response.body.features.length == 0) {
            callback('No place by this name', undefined)
        } else {
            const data = response.body.features[0]
            callback(undefined, {
                latitude: data.center[1],
                longitude: data.center[0],
                location: data.place_name,
            })
        }
    })
}

module.exports = {
    geocode,
}
