---
id: 5900f4031000cf542c50ff16
title: 'Problem 151: Paper sheets of standard sizes: an expected-value problem'
challengeType: 1
forumTopicId: 301782
dashedName: problem-151-paper-sheets-of-standard-sizes-an-expected-value-problem
---

# --description--

A printing shop runs 16 batches (jobs) every week and each batch requires a sheet of special colour-proofing paper of size A5.

Every Monday morning, the foreman opens a new envelope, containing a large sheet of the special paper with size A1.

He proceeds to cut it in half, thus getting two sheets of size A2. Then he cuts one of them in half to get two sheets of size A3 and so on until he obtains the A5-size sheet needed for the first batch of the week.

All the unused sheets are placed back in the envelope.

<img alt="A1-size sheet split into: A2, A3, A4 and two A5 sheets" src="https://cdn.freecodecamp.org/curriculum/project-euler/paper-sheets-of-standard-sizes-an-expected-value-problem.png" style="background-color: white; padding: 10px; display: block; margin-right: auto; margin-left: auto; margin-bottom: 1.2rem;">

At the beginning of each subsequent batch, he takes one sheet of paper from the envelope at random. If it is of size A5, he uses it. If it is larger, he repeats the 'cut-in-half' procedure until he has what he needs, and any remaining sheets are always placed back in the envelope.

Excluding the first and last batch of the week, find the expected number of times (during each week) that the foreman finds a single sheet of paper in the envelope.

Give your answer rounded to six decimal places using the format `x.xxxxxx`.

# --hints--

`expectedValueProblem()` should return `0.464399`.

```js
assert.strictEqual(expectedValueProblem(), 0.464399);
```

# --seed--

## --seed-contents--

```js
function expectedValueProblem() {

  return true;
}

expectedValueProblem();
```

# --solutions--

```js
// solution required
```
