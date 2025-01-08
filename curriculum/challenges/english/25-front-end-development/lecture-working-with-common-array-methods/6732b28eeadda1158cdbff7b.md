---
id: 6732b28eeadda1158cdbff7b
title: How Can You Check if an Array Contains a Certain Value?
challengeType: 11
videoId: NjZI_TlIiXk
dashedName: how-can-you-check-if-an-array-contains-a-certain-value
---

# --description--

Watch the lecture video and answer the questions below.

# --questions--

## --text--

What will be the output of the following code?

```js
let arr = [1, 2, 3, 4, 5];
console.log(arr.includes(3, 3));
```

## --distractors--

`true`

### --feedback--

The second parameter of `includes()` specifies the starting position for the search.

---

`undefined`

### --feedback--

The second parameter of `includes()` specifies the starting position for the search.

---

This will throw an error.

### --feedback--

The second parameter of `includes()` specifies the starting position for the search.

## --answer--

`false`

## --text--

What will be the output of the following code?

```js
let arr = ['a', 'b', 'c', 'd', 'e'];
console.log(arr.includes('C'));
```

## --distractors--

`true`

### --feedback--

Remember that `includes()` is case-sensitive when dealing with strings.

---

`undefined`

### --feedback--

Remember that `includes()` is case-sensitive when dealing with strings.

---

This will throw an error.

### --feedback--

Remember that `includes()` is case-sensitive when dealing with strings.

## --answer--

`false`

## --text--

What will be the output of the following code?

```js
let arr = [1, '2', 3, '4', 5];
console.log(arr.includes('3'));
```

## --distractors--

`true`

### --feedback--

The `includes()` method uses strict equality (`===`) for comparison.

---

`undefined`

### --feedback--

The `includes()` method uses strict equality (`===`) for comparison.

---

This will throw an error.

### --feedback--

The `includes()` method uses strict equality (`===`) for comparison.

## --answer--

`false`

