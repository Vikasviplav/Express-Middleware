const express = require('express')
const multer = require('multer');

const port = process.env.PORT || 8080

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'Files')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname + '-' + Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({ storage: storage })

const fs = require('fs');
const path = require('path');

const app = express()

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
})

app.post('/profile', upload.single('avatar'), function (req, res, next) {
    res.send("<h1>File uploaded sucessfully</h1>")
});

app.listen(port, () => {
    console.log(`Server is running at ${port}`)
})