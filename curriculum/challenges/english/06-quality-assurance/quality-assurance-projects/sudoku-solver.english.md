---
id: 5e601bf95ac9d0ecd8b94afd
title: Sudoku Solver
challengeType: 4
isHidden: false
isRequired: true
---

## Description
<section id='description'>
Build a full stack JavaScript app that is functionally similar to this: <a href='https://bottlenose-eucalyptus.glitch.me/' target='_blank'>https://bottlenose-eucalyptus.glitch.me/</a>.

Working on this project will involve you writing your code on Glitch on our starter project. After completing this project you can copy your public glitch url (to the homepage of your app) into this screen to test it! Optionally you may choose to write your project on another platform but it must be publicly visible for our testing.

Start this project on Glitch using <a href='https://glitch.com/edit/#!/remix/clone-from-repo?REPO_URL=https://github.com/freeCodeCamp/boilerplate-project-sudoku-solver/'>this link</a> or clone <a href='https://github.com/freeCodeCamp/boilerplate-project-sudoku-solver/'>this repository</a> on GitHub! If you use Glitch, remember to save the link to your project somewhere safe!
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: I can enter a sudoku puzzle by filling in the text area with either a number or period (.) to represent an empty cell.
    testString: ''
  - text: When a valid number is entered in the text area, the same number is applied to the correct cell of the sudoku grid.
    testString: ''
  - text: I can enter a sudoku puzzle by adding numbers directly to the sudoku grid.
    testString: ''
  - text: When a valid number is entered in the sudoku grid, the same number appears in the correct position in the text area.
    testString: ''
  - text: The text area should only update the corresponding sudoku grid cell when a whole number between 1 and 9 is entered.
    testString: ''
  - text: The sudoku grid should only update the puzzle string in the text area when a whole number between 1 and 9 is entered into a cell.
    testString: ''
  - text: I can solve an incomplete puzzle by clicking the "Solve" button. When a solution is found, the sudoku grid and text area are automatically populated with the correct numbers for each cell in the grid or position in the text area.
    testString: ''
  - text: This sudoku solver is not expected to be able to solve every incomplete puzzle. See <code>/public/puzzle-strings.js</code> for a list of puzzle strings it should be able to solve along with their solutions.
    testString: ''
  - text: |
      If the puzzle is not 81 numbers or periods long, append the message "Error: Expected puzzle to be 81 characters long." to the <code>error-msg</code> <code>div</code> so the text appears in red.
    testString: ''
  - text: I can clear the text area and sudoku grid by clicking the "Clear" button.
    testString: ''
  - text: All 6 unit tests are complete and passing. See <code>/tests/1_unit-tests.js</code> for the expected behavior you should write tests for.
    testString: ''
  - text: All 4 functional tests are complete and passing. See <code>/tests/2_functional-tests.js</code> for the functionality you should write tests for.
    testString: ''

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
