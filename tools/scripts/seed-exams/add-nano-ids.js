/*
 * Script that will add `id` fields to the `questions`, `wrong_answers`, and
 * `correct_answers` of an exam file where the `id` doesn't exist.
 */
import { readFile, writeFile } from 'fs/promises';
import { customAlphabet } from 'nanoid';
import yaml from 'js-yaml';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const newId = customAlphabet('1234567890abcdefghijklmnopqrstuvwxyz', 10);

/**
 * Adds nano IDs to questions and answers in an exam file
 * @param {string} examPath - Path to the exam YAML file
 * @throws {Error} If file operations fail or exam structure is invalid
 */
async function addNanoIds(examPath) {
  // Validate exam path
  if (!examPath) {
    throw new Error('Exam path is required');
  }

  const resolvedPath = path.resolve(__dirname, examPath);

  // Read exam file
  let examFile;
  try {
    examFile = await readFile(resolvedPath, { encoding: 'utf-8' });
  } catch (error) {
    const err = error as NodeJS.ErrnoException;
    if (err.code === 'ENOENT') {
      throw new Error(`Exam file not found: ${resolvedPath}`);
    }
    throw new Error(`Failed to read exam file: ${err.message}`);
  }

  // Parse YAML
  let examJson;
  try {
    examJson = yaml.load(examFile);
  } catch (error) {
    const err = error as Error;
    throw new Error(`Failed to parse YAML file: ${err.message}`);
  }

  // Validate exam structure
  if (!examJson || typeof examJson !== 'object') {
    throw new Error('Invalid exam file: root must be an object');
  }

  if (!Array.isArray(examJson.questions)) {
    throw new Error('Invalid exam file: questions must be an array');
  }

  // The strangeness of how the id's are added below is to keep the id at the top
  // of each object when rewriting the YAML at the end
  const newQuestions = [];
  
  for (const question of examJson.questions) {
    if (!question || typeof question !== 'object') {
      console.warn('Skipping invalid question:', question);
      continue;
    }

    let newQuestion;

    if (!question.id) {
      newQuestion = { id: newId(), ...question };
    } else {
      newQuestion = { ...question };
    }

    let newWrongAnswers = [];
    if (Array.isArray(question.wrongAnswers)) {
      for (const answer of question.wrongAnswers) {
        if (!answer || typeof answer !== 'object') {
          console.warn('Skipping invalid wrong answer:', answer);
          continue;
        }
        if (!answer.id) {
          newWrongAnswers.push({ id: newId(), ...answer });
        } else {
          newWrongAnswers.push(answer);
        }
      }
    }

    let newCorrectAnswers = [];
    if (Array.isArray(question.correctAnswers)) {
      for (const answer of question.correctAnswers) {
        if (!answer || typeof answer !== 'object') {
          console.warn('Skipping invalid correct answer:', answer);
          continue;
        }
        if (!answer.id) {
          newCorrectAnswers.push({ id: newId(), ...answer });
        } else {
          newCorrectAnswers.push(answer);
        }
      }
    }

    newQuestion.wrongAnswers = newWrongAnswers;
    newQuestion.correctAnswers = newCorrectAnswers;
    newQuestions.push(newQuestion);
  }

  examJson.questions = newQuestions;

  // Write updated file
  let yamlStr;
  try {
    yamlStr = yaml.dump(examJson);
  } catch (error) {
    const err = error as Error;
    throw new Error(`Failed to convert exam to YAML: ${err.message}`);
  }

  try {
    await writeFile(resolvedPath, yamlStr, 'utf8');
    console.log(`Successfully added IDs to: ${resolvedPath}`);
  } catch (error) {
    const err = error as NodeJS.ErrnoException;
    throw new Error(`Failed to write exam file: ${err.message}`);
  }
}

/**
 * Main entry point
 * Usage: node add-nano-ids.js [exam-path]
 * Default: ./exams/example-certification-exam.yml
 */
const examPath = process.argv[2] || './exams/example-certification-exam.yml';

void (async () => {
  try {
    await addNanoIds(examPath);
    process.exit(0);
  } catch (error) {
    const err = error as Error;
    console.error('Error adding nano IDs:');
    console.error(err.message);
    if (err.stack) {
      console.error(err.stack);
    }
    process.exit(1);
  }
})();
