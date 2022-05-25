console.log('Client side js file ')

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')

const messageOne = document.querySelector('#message-1')
messageOne.textContent = ''

const messageTwo = document.querySelector('#message-2')
messageTwo.textContent = ''

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault() //Prevent default refreshing of page after submission
    const location = search.value
    console.log(location)
    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''

    fetch('/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if (data.msg) {
                messageOne.textContent = 'No location found'
                console.log('Plese provide some correct non-empty address')
            }
            else {
                console.log(data)
                messageOne.textContent = data.forecast
                messageTwo.textContent = 'Latitude: ' + data.latitude + ' Longitude: ' + data.longitude
            }
        })
    })
})
