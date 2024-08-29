const express = require('express');
const app = express();

const cookieParser = require('cookie-parser');
const path= require('path')

app.set('view engine','ejs')
app.use(express.json)
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname,'public')))

app.use(cookieParser());

app.get('/', async function (req, res) {
    res.cookie('demo', 'Athrudev');
    res.send('Hello World');
    console.log('Listening on the port localhost:3000');
});

app.get('/see', async function (req, res) {
    console.log(req.cookies);
    res.send('Check your console for cookies');
});

app.listen(3000, () => {
    console.log('Server started on http://localhost:3000');
});