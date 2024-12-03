const express = require('express');

const app = express();

app.use('/', () => {
    console.log('Hello World from Middleware');
})

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/api', (req, res) => {
    res.send('API');
});

app.listen(3002);
