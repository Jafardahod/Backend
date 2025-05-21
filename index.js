const express = require('express')

const app = express()

const port = 6969


app.get('/', (request, response) => {
    response.send('This is fucker')
})

app.get('/fuckmeharder', (request, response) => {
    response.send('<div style="background-color:red">some html</div>')
})


app.listen(port, () => {
    console.log(`listening on port ${port}`)
})