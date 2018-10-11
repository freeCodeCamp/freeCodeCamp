---
title: Free Code Camp Style Guide for Algorithms
---
Writing Algorithm challenges is a great way to exercise your own problem solving and testing abilities. Follow this process closely to maximize the chances of us accepting your Algorithm.

*   Fork the Free Code Camp repository and open `seed_data/Algorithms.json` to become familiar with the format of our Algorithms.
*   Regardless of your Algorithm's difficulty, put it as the last Algorithm in the JSON file. Change one of the numbers in the ID to ensure that your Algorithm has a unique ID.
*   In the terminal, run `node seed_data/seed.js`. Run `gulp`. You should be able to navigate to your new Algorithm in the challenge map. Whenever you make a change to Algorithm.json, you'll need to reseed in order to see these changes in the browser.
*   Solve your own Algorithm. Confirm that your tests work as expected and that your instructions are sufficiently clear.
*   Submit a pull request to Free Code Camp's Staging branch and in the pull request body, link to a gist that has your algorithmic solution.

Here is a description of each of the Algorithms' fields.

*   Name - The name of your challenge. It's OK for this to be humorous but it must be brief and relevant to the task.
*   Difficulty - Attempt to rate difficulty compared against existing Algorithm challenges. A good proxy for the difficulty of a Algorithm is how long it takes you to solve it. For every 15 minutes it takes, increase the difficulty. For example, a one-hour Algorithm should probably be a 4.
*   Description- Separate paragraphs with a line break. Only the first paragraph is visible prior to a user before they click the the 'More information' button. All necessary information must be included in the first paragraph. Write this first paragraph as succinctly as possible. Subsequent paragraphs should offer hints or details if needed. If your subject matter warrants deeper understanding, you may link to Wikipedia.
*   Challenge Seed - This is where you set up what will be in the editor when the camper starts the Algorithm.
*   Tests - These tests are what bring your challenge to life. Without them, we cannot confirm the accuracy of a user's submitted answer. Choose your tests wisely. Algorithm tests are written using the Chai.js assertion library. Please use the should and expect syntax for end user readability. As an example of what not do to, many of the original Algorithm challenges are written with assert syntax and many of the test cases are difficult to read. If your Algorithm question has a lot of edge cases, you will need to write many tests for full coverage. If you find yourself writing more tests than you desire, you may consider simplifying the requirements of your Algorithm challenge. For difficulty level 1 through 3, you will generally only need 2 to 4 tests.
*   MDNlinks- Take a look at `seed_data/bonfireMDNlinks.js`. If any of these concepts are relevant to your Algorithm, be sure to include them. If you know of an MDN article that isn't linked here, you can add it to the bonfireMDNlinks.js file before adding it to your Algorithm.