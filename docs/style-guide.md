# Project-Base Challenge Style Guide

This guide aims to explain our overall approach to how project-based challenges (e.g. Step 1) are structured and written.

## Instructional Content

The instructions for a step challenge should be as concise as possible to inform the camper what to do, with the exception of steps that introduce a new concept. When introducing a new concept, you'll generally use the following format:

```md
Definition

Explanation

Instructions
```

Here is an example:

```md
The <dfn>`alt`</dfn> attribute provides alternative text to display if the image fails to load, or to be read to assistive technology.

The `alt` attribute should provide the same information in text form that a user would get if they visually saw the image.

Add an `alt` attribute to your image with the value `An orange cat playing with a string`.
```

Breaking the text up like this prevents a wall of text, and increases the chance the camper will read.

## Tests

The tests for each step should be as granular as possible.

Rather than a test that says `You should create a new div element with an id set to main and a class set to container`, you should have smaller separate tests. For this example, you might use three tests like so:

- You should create a new div element.
- Your new div element should have an `id` attribute set to `main`.
- Your new div element should have a `class` attribute set to `container`.

This provides clarity for where a camper should look at their code to correct the issue.

Or, for a more complicated example, consider the following tests for a JavaScript `for` loop:

- You should have a `for` loop.
- Your `for` loop should initialize `i` to `0`.
- Your `for` loop should iterate through every element in `groceryList`.
- Your `for` loop should increment `i` by `1` on each iteration.
- Your `for` loop block should be empty.

### How to Test Code

If you are testing HTML, most likely you will want to query the `document` directly. The `document` object in the test runner refers specifically to the embedded preview of the camper's code, so you can query the DOM as you would in a browser.

If you are testing CSS, you will typically want to use the CSS Helper. The CSS Helper is a module that allows you to query the CSS that the camper has written. It is available in the tests by calling `new __helpers.CSSHelp(document)`. <!-- TODO: separate docs for curriculum helper-->.

If you are testing JavaScript, there are a few approaches you can take.

First, global variables can be referenced directly in the tests. For example, if the camper writes the following:

```js
const myName = "Naomi";
```

You can directly assert the value:

```js
assert.strictEqual(myName, "Naomi");
```

Top-level functions can also be called directly in this way. If a function modifies the DOM, you can call the function and then query the DOM to assert the changes.

For testing specific syntax (such as whether a variable was declared with `const`), you can run regular expressions against the `code` variable. This represents the user's written code.

```js
assert.match(code, /const\s+myName\s*)
```

A few caveats when running regular expressions against code:

- Use capture groups to match quote pairs. `/const\s+myName\s*=\s*('|"|`)Naomi\1`
- Calling `.toString()` on a function returns the Babel-ified code, which may not match the original code the camper wrote.
- Be lenient on allowing valid syntax, such as spacing requirements. This is **especially** true for end-of-line semicolons in JavaScript code.

## General Practises

- Keep instructions short and to the point. They do not need to be formal, but they should be clear.
- When referring to specific things in the code (e.g. "Set the id attribute to main"), use backticks around all the values that campers must use in their code (e.g. "Set the `id` attribute to `main`"). This prevents them from being translated.
- Variables should be declared with `const` unless they are being reassigned. Never use `var` (with the exception of the first project which briefly introduces `var`) or allow `var` to pass tests.
- Tests should be incremental. That is, if a camper starts with no code, the first test should tell them where to start. The second should build on the first. These should essentially serve as a step-by-step walkthrough to solving the challenge.