const request = require('request');

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1Ijoic2FtYXJ0aDcyMTIiLCJhIjoiY2wzZmV6dGxwMGEyMTNjbjBxMDd0dDN3eSJ9.OyzLAUEodowsZvXSu81XOw'
    request({ url: url, json: true }, (error, { body }) => {
        if (error) {
            callback('Error! Unable to connect', undefined)
        } else if (body.message) {
            console.log(body.message)
        } else if (body.features.length == 0) {
            callback('No place by this name', undefined)
        } else {
            const name = body.features[0].place_name
            const data = body.features[0].center
            callback(undefined, {
                latitude: data[1],
                longitude: data[0],
                location: name,
            })
        }
    })
}

module.exports = {
    geocode,
}
