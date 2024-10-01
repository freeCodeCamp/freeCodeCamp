// app.js
const express = require('express');
const bodyParser = require('body-parser');
const questions = require('./questions');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index', { questions });
});

app.post('/result', (req, res) => {
  const userAnswers = req.body;
  let score = 0;

  questions.forEach((q, index) => {
    if (userAnswers[`question${index}`] === q.answer) {
      score++;
    }
  });

  res.render('result', { score, total: questions.length });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
