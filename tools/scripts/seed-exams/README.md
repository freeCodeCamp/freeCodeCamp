## WARNING: Never change any of the ID's or delete anything. Mark things as deprecated instead.

### How to create a new exam:

1. Add the exam file in the `exams` folder

2. Add the exam meta data:

- `_id`: This should match the `id` in the exam challenge markdown file,
- `title`: This should match the `title` in the exam challenge markdown file,
- `numberOfQuestionsInExam`: This is how many questions will be given to campers who take the exam. It must be less than or equal to the length of the `questions` array.
- `passingPercent`: Percent of questions needed to get correct to pass the exam
- `prerequisites`: Array of challenges that are required to complete before being able to take the exam. Each should have an `id` and `title` that match what's in their challenge markdown file
- `questions`: Array of exam questions

3. Add the exam questions to the `questions` array:

- `question`: The exam question
- `wrongAnswers`: Array of answers. There should be at least 4, but 6-7 would be ideal.
- `correctAnswers`: Array of answers. There should be at least 1, but 2 or more would be ideal when possible.

4. `wrongAnswers` and `correctAnswers` arrays:

- `answer`: This is one of the multiple choice options

5. Add the ID's:

- Change the `examPath` variable in the `add-nano-ids.js` file to the name of the new exam file
- Run it with `node add-nano-ids.js`. It will add an `id` to each `question`, and each `answer`.

Add a `deprecated: true` property to any of the `questions`, `wrongAnswers`, or `correctAnswers`. Any that include this will be omitted when generating an exam.

The exam files in this folder are not used in production. Never push real exam questions to GitHub or anywhere public. These exams are for local development and testing. To seed the real exams to staging/production databases, replace the example exams here with the real exams, connect to the desired database, and run the `create-exams.js` script.
