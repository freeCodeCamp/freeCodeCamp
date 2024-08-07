/*
 * Script that will add `id` fields to the `questions`, `wrong_answers`, and
 * `correct_answers` of an exam file where the `id` doesn't exist.
 */
import { readFileSync, writeFileSync } from 'fs';
import { customAlphabet } from 'nanoid';
import yaml from 'js-yaml';

const newId = customAlphabet('1234567890abcdefghijklmnopqrstuvwxyz', 10);

// Change this to the path of the file you want to add id's to
const examPath = './exams/example-certification-exam.yml';
const examFile = readFileSync(examPath, { encoding: 'utf-8' });
const examJson = yaml.load(examFile);

// The strangeness of how the id's are added below is to keep the id at the top
// of each object when rewriting the YAML at the end
const newQuestions = [];
examJson.questions?.forEach(question => {
  let newQuestion;

  if (!question.id) {
    newQuestion = { id: newId(), ...question };
  } else {
    newQuestion = { ...question };
  }

  let newWrongAnswers = [];
  question.wrongAnswers?.forEach(answer => {
    if (!answer.id) {
      newWrongAnswers.push({ id: newId(), ...answer });
    } else {
      newWrongAnswers.push(answer);
    }
  });

  let newCorrectAnswers = [];
  question.correctAnswers?.forEach(answer => {
    if (!answer.id) {
      newCorrectAnswers.push({ id: newId(), ...answer });
    } else {
      newCorrectAnswers.push(answer);
    }
  });

  newQuestion.wrongAnswers = newWrongAnswers;
  newQuestion.correctAnswers = newCorrectAnswers;
  newQuestions.push(newQuestion);
});

examJson.questions = newQuestions;

const yamlStr = yaml.dump(examJson);
writeFileSync(examPath, yamlStr, 'utf8');
