function validation(req, res, next) {
    if (req.method == "POST") {
        const movie = req.body;
        if (!movie.id || !movie.name || !movie.rating || !movie.description || !movie.genre || !movie.cast || typeof (movie.id) != 'number' || typeof (movie.rating) != 'number' || typeof (movie.name) != 'string' || typeof (movie.name) != 'string' || typeof (movie.description) != 'string' || typeof (movie.cast) != 'string' || typeof (movie.genre) != 'string') {
            res.send("bad request", 400)
        } else {
            next();
        }
    } else {
        next();
    }
}

module.exports = validation;