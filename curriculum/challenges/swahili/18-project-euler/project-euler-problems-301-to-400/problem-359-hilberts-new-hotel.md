---
id: 5900f4d31000cf542c50ffe6
title: 'Problem 359: Hilbert''s New Hotel'
challengeType: 1
forumTopicId: 302019
dashedName: problem-359-hilberts-new-hotel
---

# --description--

An infinite number of people (numbered 1, 2, 3, etc.) are lined up to get a room at Hilbert's newest infinite hotel. The hotel contains an infinite number of floors (numbered 1, 2, 3, etc.), and each floor contains an infinite number of rooms (numbered 1, 2, 3, etc.).

Initially the hotel is empty. Hilbert declares a rule on how the $n^{\text{th}}$ person is assigned a room: person $n$ gets the first vacant room in the lowest numbered floor satisfying either of the following:

- the floor is empty
- the floor is not empty, and if the latest person taking a room in that floor is person $m$, then $m + n$ is a perfect square

Person 1 gets room 1 in floor 1 since floor 1 is empty.

Person 2 does not get room 2 in floor 1 since 1 + 2 = 3 is not a perfect square.

Person 2 instead gets room 1 in floor 2 since floor 2 is empty.

Person 3 gets room 2 in floor 1 since 1 + 3 = 4 is a perfect square.

Eventually, every person in the line gets a room in the hotel.

Define $P(f, r)$ to be $n$ if person $n$ occupies room $r$ in floor $f$, and 0 if no person occupies the room. Here are a few examples:

$$\begin{align}   & P(1, 1) = 1 \\\\
  & P(1, 2) = 3 \\\\   & P(2, 1) = 2 \\\\
  & P(10, 20) = 440 \\\\   & P(25, 75) = 4863 \\\\
  & P(99, 100) = 19454 \end{align}$$

Find the sum of all $P(f, r)$ for all positive $f$ and $r$ such that $f × r = 71\\,328\\,803\\,586\\,048$ and give the last 8 digits as your answer.

# --hints--

`hilbertsNewHotel()` should return `40632119`.

```js
assert.strictEqual(hilbertsNewHotel(), 40632119);
```

# --seed--

## --seed-contents--

```js
function hilbertsNewHotel() {

  return true;
}

hilbertsNewHotel();
```

# --solutions--

```js
// solution required
```
