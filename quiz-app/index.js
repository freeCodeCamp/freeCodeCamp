const express = require('express');
const path = require('path');
const quizQuestions = require('./data/quizQuestions');

const app = express();
const port = 3000;


app.use(express.static(path.join(__dirname, 'public')));


app.get('/api/quiz', (req, res) => {
    res.json(quizQuestions);
});


app.listen(port, () => {
    console.log(`Quiz app listening at http://localhost:${port}`);
});
