const express = require('express');
const morgan = require('morgan');
const app = express();
const port = process.env.PORT || 3001;

app.use(
    morgan(function (tokens, req, res) {
        return [

            "method - ", tokens.method(req, res), "\n",
            "url - ", tokens.url(req, res), "\n",
            "Status - ", tokens.status(req, res), "\n",
            "Content length - ", tokens.res(req, res, 'content-length'), "\n",
            "response-time - ", tokens['response-time'](req, res), 'ms', "\n",
            "date - ", tokens['date'](req, res), "\n",
            "http version - ", tokens['http-version'](req, res), "\n",
        ].join(' ')
    })
)


app.get('/', (req, res) => {
    res.send("<h1>Welcome to my application</h1>");
});

app.post('/morgan', (req, res) => {
    
    res.send("POST Request success")
});

app.get('/morgan', (req, res) => {
    res.send('<h1>Welcome to morgan </h1>');
});


app.listen(port, () => {
    console.log(`server is started at port ${port}`);
})