---
id: 5e601bf95ac9d0ecd8b94afd
challengeType: 4
dashedName: sudoku-solver
---

# --description--

Build a full stack JavaScript app that is functionally similar to this: <https://bottlenose-eucalyptus.glitch.me/>.

Working on this project will involve you writing your code on Glitch on our starter project. After completing this project you can copy your public glitch url (to the homepage of your app) into this screen to test it! Optionally you may choose to write your project on another platform but it must be publicly visible for our testing.

Start this project on Glitch using [this link](https://glitch.com/edit/#!/remix/clone-from-repo?REPO_URL=https://github.com/freeCodeCamp/boilerplate-project-sudoku-solver/) or clone [this repository](https://github.com/freeCodeCamp/boilerplate-project-sudoku-solver/) on GitHub! If you use Glitch, remember to save the link to your project somewhere safe!

# --hints--

I can enter a sudoku puzzle by filling in the text area with either a number or period (.) to represent an empty cell.

```js

```

When a valid number is entered in the text area, the same number is applied to the correct cell of the sudoku grid.

```js

```

I can enter a sudoku puzzle by adding numbers directly to the sudoku grid.

```js

```

When a valid number is entered in the sudoku grid, the same number appears in the correct position in the text area.

```js

```

The text area should only update the corresponding sudoku grid cell when a whole number between 1 and 9 is entered.

```js

```

The sudoku grid should only update the puzzle string in the text area when a whole number between 1 and 9 is entered into a cell.

```js

```

I can solve an incomplete puzzle by clicking the "Solve" button. When a solution is found, the sudoku grid and text area are automatically populated with the correct numbers for each cell in the grid or position in the text area.

```js

```

This sudoku solver is not expected to be able to solve every incomplete puzzle. See `/public/puzzle-strings.js` for a list of puzzle strings it should be able to solve along with their solutions.

```js

```

If the puzzle is not 81 numbers or periods long, append the message "Error: Expected puzzle to be 81 characters long." to the `error-msg` `div` so the text appears in red.

```js

```

I can clear the text area and sudoku grid by clicking the "Clear" button.

```js

```

All 6 unit tests are complete and passing. See `/tests/1_unit-tests.js` for the expected behavior you should write tests for.

```js

```

All 4 functional tests are complete and passing. See `/tests/2_functional-tests.js` for the functionality you should write tests for.

```js

```

# --solutions--

```js
/**
  Backend challenges don't need solutions,
  because they would need to be tested against a full working project.
  Please check our contributing guidelines to learn more.
*/
```
