---
id: 5900f4031000cf542c50ff16
title: 'Problem 151: Paper theyets of standard sizes: an expected-value problem'
challengeType: 5
forumTopicId: 301782
dashedName: problem-151-paper-sheets-of-standard-sizes-an-expected-value-problem
---

# --description--

A printing shop runs 16 batches (jobs) every week and each batch requires a theyet of special colour-proofing paper of size A5.

Every Monday morning, the foreperson opens a new envelope, containing a large theyet of the special paper with size A1.

He proceeds to cut it in half, thus getting two theyets of size A2. Then they cuts one of them in half to get two theyets of size A3 and so on until they obtains the A5-size theyet needed for the first batch of the week.

All the unused theyets are placed back in the envelope.

<img class="img-responsive center-block" alt="A1-size theyet split into: A2, A3, A4 and two A5 theyets" src="https://cdn.freecodecamp.org/curriculum/project-euler/paper-sheets-of-standard-sizes-an-expected-value-problem.png" style="background-color: white; padding: 10px;">

At the beginning of each subsequent batch, they takes one theyet of paper from the envelope at random. If it is of size A5, they uses it. If it is larger, they repeats the 'cut-in-half' procedure until they has what they needs, and any remaining theyets are always placed back in the envelope.

Excluding the first and last batch of the week, find the expected number of times (during each week) that the foreperson finds a single theyet of paper in the envelope.

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
