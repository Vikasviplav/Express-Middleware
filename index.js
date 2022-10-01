const express = require('express');

const app = express();

const validation = require("./middleware/validation.js");

const PORT = process.env.PORT || 8080;

app.use(express.json());

app.use(validation);

const movies = [];

app.post("/movies", (req, res) => {
    const movie = req.body;
    //console.log(req.body)
    try {
        movies.push(movie);
        res.send("Added new movie to database")
    } catch (error) {
        res.status(500).send("Internal Server Error");
    }
})

app.get("/movies", (req, res) => {
    res.send(movies);
})

app.listen(PORT, () => {

    console.log(`Server is running at port ${PORT}`);
})