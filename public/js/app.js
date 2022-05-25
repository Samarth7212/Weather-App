console.log('Client side js file ')

// fetch('http://puzzle.mead.io/puzzle').then((response) => {
//     response.json().then((data) => {
//         console.log(data)
//     })
// })

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
weatherForm.addEventListener('submit', (e) => {
    e.preventDefault() //Prevent default refreshing of page after submission
    const location = search.value
    console.log(location)
    fetch('http://localhost:3000/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if (data.msg) console.log('Plese provide some correct non-empty address')
            else console.log(data)
            console.log('Called')
        })
    })
})
