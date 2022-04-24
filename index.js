const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send('OK')
})

app.get('*', (req, res) => {
    res.status(404).send('Resource Not Found')
})

app.listen(3000, () => {
    console.log('Server is running on 3000')
})