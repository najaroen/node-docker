const express = require('express');
const app = express();

app.get('/', (req, res, next) => {
    res.send("Hello Express")
})
app.get('/test', (req, res, next) => {
    res.send("Hello Express")
})

app.listen(3000, () => { console.log('running...')})