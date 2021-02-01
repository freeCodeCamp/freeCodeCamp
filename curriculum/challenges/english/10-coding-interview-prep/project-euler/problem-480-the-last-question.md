---
id: 5900f54c1000cf542c51005f
title: 'Problem 480: The Last Question'
challengeType: 5
forumTopicId: 302158
dashedName: problem-480-the-last-question
---

# --description--

Consider all the words which can be formed by selecting letters, in any order, from the phrase:

thereisasyetinsufficientdataforameaningfulanswer

Suppose those with 15 letters or less are listed in alphabetical order and numbered sequentially starting at 1.

The list would include:

1 : a

2 : aa

3 : aaa

4 : aaaa

5 : aaaaa

6 : aaaaaa

7 : aaaaaac

8 : aaaaaacd

9 : aaaaaacde

10 : aaaaaacdee

11 : aaaaaacdeee

12 : aaaaaacdeeee

13 : aaaaaacdeeeee

14 : aaaaaacdeeeeee

15 : aaaaaacdeeeeeef

16 : aaaaaacdeeeeeeg

17 : aaaaaacdeeeeeeh

...

28 : aaaaaacdeeeeeey

29 : aaaaaacdeeeeef

30 : aaaaaacdeeeeefe

...

115246685191495242: euleoywuttttsss

115246685191495243: euler

115246685191495244: eulera

...

525069350231428029: ywuuttttssssrrrDefine P(w) as the position of the word w.

Define W(p) as the word in position p.

We can see that P(w) and W(p) are inverses: P(W(p)) = p and W(P(w)) = w.

Examples:

W(10) = aaaaaacdee

P(aaaaaacdee) = 10

W(115246685191495243) = euler

P(euler) = 115246685191495243Find W(P(legionary) + P(calorimeters) - P(annihilate) + P(orchestrated) - P(fluttering)).

Give your answer using lowercase characters (no punctuation or space).

# --hints--

`euler480()` should return turnthestarson.

```js
assert.strictEqual(euler480(), turnthestarson);
```

# --seed--

## --seed-contents--

```js
function euler480() {

  return true;
}

euler480();
```

# --solutions--

```js
// solution required
```
