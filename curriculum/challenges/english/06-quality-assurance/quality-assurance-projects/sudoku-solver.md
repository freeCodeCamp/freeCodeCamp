---
id: 5e601bf95ac9d0ecd8b94afd
title: Sudoku Solver
challengeType: 4
---

## Description
<section id='description'>
Build a full stack JavaScript app that is functionally similar to this: <a href="https://sudoku-solver.freecodecamp.rocks/" target="_blank">https://sudoku-solver.freecodecamp.rocks/</a>.

Working on this project will involve you writing your code on Repl.it on our starter project. After completing this project you can copy your public Repl.it URL (to the homepage of your app) into this screen to test it! Optionally you may choose to write your project on another platform but it must be publicly visible for our testing.

Start this project on Repl.it using <a href="https://repl.it/github/freeCodeCamp/boilerplate-project-sudoku-solver">this link</a> or clone <a href='https://github.com/freeCodeCamp/boilerplate-project-sudoku-solver/'>this repository</a> on GitHub! If you use Repl.it, remember to save the link to your project somewhere safe!
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: I can provide my own project, not the example URL.
    testString: |
      getUserInput => {
        const url = getUserInput('url');
        assert(!/.*\/sudoku-solver\.freecodecamp\.rocks/.test(getUserInput('url')));
      }
  - text: I can <code>POST</code> <code>/api/solve</code> with form data containing <code>puzzle</code> which will be a string containing a combination of numbers (1-9) and periods <code>.</code> to represent empty spaces. The returned object will contain <code>solution</code> with the solved puzzle.
    testString: "async getUserInput => {
      const input = '..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..';
      const output = '769235418851496372432178956174569283395842761628713549283657194516924837947381625';
      const data = await fetch(getUserInput('url') + '/api/solve', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({puzzle: input})
      });
      const parsed = await data.json();
      assert.property(parsed, 'solution');
      assert.equal(parsed.solution, output);
      }"
  - text: If the object submitted to <code>/api/solve</code> is missing <code>puzzle</code>, the returned value will be <code>{ error&#58; 'Required field missing' }</code>
    testString: "async getUserInput => {
      const input = '..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..';
      const output = 'Required field missing';
      const data = await fetch(getUserInput('url') + '/api/solve', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({notpuzzle: input})
      });
      const parsed = await data.json();
      assert.property(parsed, 'error');
      assert.equal(parsed.error, output);
      }"
  - text: If the puzzle submitted to <code>/api/solve</code> contains values which are not numbers or periods, the returned value will be <code>{ error&#58; 'Invalid characters in puzzle' }</code>
    testString: "async getUserInput => {
      const input = 'AA9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..';
      const output = 'Invalid characters in puzzle';
      const data = await fetch(getUserInput('url') + '/api/solve', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({puzzle: input})
      });
      const parsed = await data.json();
      assert.property(parsed, 'error');
      assert.equal(parsed.error, output);
      }"
  - text: If the puzzle submitted to <code>/api/solve</code> is greater or less than 81 characters, the returned value will be <code>{ error&#58; 'Expected puzzle to be 81 characters long' }</code>
    testString: "async getUserInput => {
      const input = '9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..';
      const output = 'Expected puzzle to be 81 characters long';
      const data = await fetch(getUserInput('url') + '/api/solve', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({puzzle: input})
      });
      const parsed = await data.json();
      assert.property(parsed, 'error');
      assert.equal(parsed.error, output);
      }"
  - text: If the puzzle submitted to <code>/api/solve</code> is invalid or cannot be solved, the returned value will be <code>{ error&#58; 'Puzzle cannot be solved' }</code>
    testString: "async getUserInput => {
      const input = '9.9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..';
      const output = 'Puzzle cannot be solved';
      const data = await fetch(getUserInput('url') + '/api/solve', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({puzzle: input})
      });
      const parsed = await data.json();
      assert.property(parsed, 'error');
      assert.equal(parsed.error, output);
      }"
  - text: I can <code>POST</code> to <code>/api/check</code> an object containing <code>puzzle</code>, <code>coordinate</code>, and <code>value</code> where the <code>coordinate</code> is the letter A-I indicating the row, followed by a number 1-9 indicating the column, and <code>value</code> is a number from 1-9.
    testString: "async getUserInput => {
      const input = '..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..';
      const coordinate = 'A1';
      const value = '7';
      const data = await fetch(getUserInput('url') + '/api/check', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({puzzle: input, coordinate, value})
      });
      const parsed = await data.json();
      assert.property(parsed, 'valid');
      assert.isTrue(parsed.valid);
      }"
  - text: The return value will be an object containing <code>valid</code>, which is <code>true</code> if the number may be placed at the provided coordinate and <code>false</code> if the number may not. If false, the returned object will also contain <code>conflict</code> which is an array containing the strings <code>"row"</code>, <code>"column"</code>, and/or <code>"region"</code> depending on which makes the placement invalid.
    testString: "async getUserInput => {
      const input = '..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..';
      const coordinate = 'A1';
      const value = '1';
      const conflict = ['row', 'column'];
      const data = await fetch(getUserInput('url') + '/api/check', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({puzzle: input, coordinate, value})
      });
      const parsed = await data.json();
      assert.property(parsed, 'valid');
      assert.isFalse(parsed.valid);
      assert.property(parsed, 'conflict');
      assert.include(parsed.conflict, 'row');
      assert.include(parsed.conflict, 'column');
      }"
  - text: If the submitted puzzle contains values which are not numbers or periods, the returned value will be <code>{ error&#58; 'Invalid characters in puzzle' }</code>
    testString: "async getUserInput => {
      const input = 'AA9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..';
      const coordinate = 'A1';
      const value = '1';
      const output = 'Invalid characters in puzzle';
      const data = await fetch(getUserInput('url') + '/api/check', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({puzzle: input, coordinate, value})
      });
      const parsed = await data.json();
      assert.property(parsed, 'error');
      assert.equal(parsed.error, output);
      }"
  - text: If the puzzle submitted to <code>/api/check</code> is greater or less than 81 characters, the returned value will be <code>{ error&#58; 'Expected puzzle to be 81 characters long' }</code>
    testString: "async getUserInput => {
      const input = '9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..';
      const coordinate = 'A1';
      const value = '1';
      const output = 'Expected puzzle to be 81 characters long';
      const data = await fetch(getUserInput('url') + '/api/check', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({puzzle: input, coordinate, value})
      });
      const parsed = await data.json();
      assert.property(parsed, 'error');
      assert.equal(parsed.error, output);
      }"
  - text: If the object submitted to <code>/api/check</code> is missing <code>puzzle</code>, <code>coordinate</code> or <code>value</code>, the returned value will be <code>{ error&#58; 'Required field(s) missing' }</code>
    testString: "async getUserInput => {
      const input = '..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..';
      const output = 'Required field(s) missing';
      const data = await fetch(getUserInput('url') + '/api/check', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({puzzle: input})
      });
      const parsed = await data.json();
      assert.property(parsed, 'error');
      assert.equal(parsed.error, output);
      }"
  - text: If the coordinate does not point to an existing grid cell, the returned value will be <code>{ error&#58; 'Invalid coordinate'}</code>
    testString: "async getUserInput => {
      const input = '..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..';
      const output = 'Invalid coordinate';
      const coordinate = 'XZ18';
      const value = '7';
      const data = await fetch(getUserInput('url') + '/api/check', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({puzzle: input, coordinate, value})
      });
      const parsed = await data.json();
      assert.property(parsed, 'error');
      assert.equal(parsed.error, output);
      }"
  - text: If the <code>value</code> is not a number between 1 and 9, the returned values will be <code>{ error&#58; 'Invalid value' }</code>
    testString: "async getUserInput => {
      const input = '..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..';
      const output = 'Invalid value';
      const coordinate = 'A1';
      const value = 'X';
      const data = await fetch(getUserInput('url') + '/api/check', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({puzzle: input, coordinate, value})
      });
      const parsed = await data.json();
      assert.property(parsed, 'error');
      assert.equal(parsed.error, output);
      }"
  - text: All 12 unit tests are complete and passing. See <code>/tests/1_unit-tests.js</code> for the expected behavior you should write tests for.
    testString: "async getUserInput => {
       try {
          const getTests = await $.get(getUserInput('url') + '/_api/get-tests' );
          assert.isArray(getTests);
          const units = getTests.filter(el => el.context.includes('UnitTests'));
          assert.isAtLeast(units.length, 12, 'At least 12 tests passed');
          units.forEach(test => {
            assert.equal(test.state, 'passed', 'Test in Passed State');
            assert.isAtLeast(test.assertions.length, 1, 'At least one assertion per test');
          });
       } catch(err) {
        throw new Error(err.responseText || err.message);
      }
    }"
  - text: All 14 functional tests are complete and passing. See <code>/tests/2_functional-tests.js</code> for the functionality you should write tests for.
    testString: "async getUserInput => {
       try {
          const getTests = await $.get(getUserInput('url') + '/_api/get-tests' );
          assert.isArray(getTests);
          const funcs = getTests.filter(el => el.context.includes('Functional Tests'));
          assert.isAtLeast(funcs.length, 14, 'At least 14 tests passed');
          funcs.forEach(test => {
            assert.equal(test.state, 'passed', 'Test in Passed State');
            assert.isAtLeast(test.assertions.length, 1, 'At least one assertion per test');
          });
       } catch(err) {
        throw new Error(err.responseText || err.message);
      }
    }"


```

</section>

## Challenge Seed
<section id='challengeSeed'>

</section>

## Solution
<section id='solution'>

```js
/**
  Backend challenges don't need solutions,
  because they would need to be tested against a full working project.
  Please check our contributing guidelines to learn more.
*/
```

</section>
