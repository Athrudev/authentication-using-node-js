<<<<<<< HEAD
const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();

app.use(cookieParser());

app.get('/', async function (req, res) {
    res.cookie('demo', 'Athrudev');
    res.send('Hello World');
});

app.get('/see', async function (req, res) {
    console.log(req.cookies);
    res.send('Check your console for cookies');
});

app.listen(3000, () => {
    console.log('Server started on http://localhost:3000');
});
=======
const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)
>>>>>>> main
