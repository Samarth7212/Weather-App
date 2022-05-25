const path = require('path');
const hbs = require('hbs');
const express = require('express');
const exp = require('constants');

const geocode = require('./utils/geocode.js');
const forecast = require('./utils/forecast.js');

// console.log(__dirname)
// console.log(path.join(__dirname, '../public'))

const app = express()

//Defining paths for express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

//Setting up handlebar engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

//Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Samarth',
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About me',
        name: 'Samarth',
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help',
        name: 'Samarth',
        errorMessage: "This is a sample msg Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, ex in officiis maxime deleniti ipsum."
    })
})

app.get('/weather', (req, res) => {
    // if (!req.query.address) { return res.render('404', { errorMessage: 'Address missing!', title: '404', name: 'Samarth' }) }
    if (!req.query.address) { return res.send({ msg: 'Please provide some address' }) }
    const name = req.query.address
    geocode.geocode(name, (error, { latitude, longitude, location } = {}) => {
        // if (error) return res.render('404', { errorMessage: 'ERROR', title: '404', name: 'Samarth' })
        if (error) return res.send({ msg: 'Error occurred' })
        forecast.forecast(latitude, longitude, (error, { latitude, longitude, temperature, windSpeed }) => {
            const forecast = 'Temperature is ' + temperature + ' degree celsius in ' + name + ' with a windspeed of ' + windSpeed
            // if (error) res.render('404', { errorMessage: 'ERROR', title: '404', name: 'Samarth' })
            if (error) res.send({ msg: 'Error occurred' })
            else {
                res.send({
                    forecast,
                    latitude,
                    longitude,
                })
            }
        })
    }
    )
})

//Request query example
// app.get('/products', (req, res) => {
//     if (!req.query.search) { return res.send({ error: 'Must provide a search term' }) }
//     console.log(req.query)
//     res.send({
//         products: [],
//     })
// })

app.get('/help/*', (req, res) => {
    res.render('helpnf', {
        title: 'Help',
        name: 'Samarth',
        errorMessage: 'Help article not found',
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: 'Help',
        name: 'Samarth',
        errorMessage: 'Page not found'
    })
})

app.listen(3000, () => {
    console.log('Server started on port 3000')
})


