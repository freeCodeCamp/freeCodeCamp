---
id: 587d7db8367417b2b2512ba2
title: Restrict Possible Usernames
challengeType: 1
forumTopicId: 301363
---

# --description--

Usernames are used everywhere on the internet. They are what give users a unique identity on their favorite sites.

You need to check all the usernames in a database. Here are some simple rules that users have to follow when creating their username.

1) Usernames can only use alpha-numeric characters.

2) The only numbers in the username have to be at the end. There can be zero or more of them at the end. Username cannot start with the number.

3) Username letters can be lowercase and uppercase.

4) Usernames have to be at least two characters long. A two-character username can only use alphabet letters as characters.

# --instructions--

Change the regex `userCheck` to fit the constraints listed above.

# --hints--

Your regex should match `JACK`

```js
assert(userCheck.test('JACK'));
```

Your regex should not match `J`

```js
assert(!userCheck.test('J'));
```

Your regex should match `Jo`

```js
assert(userCheck.test('Jo'));
```

Your regex should match `Oceans11`

```js
assert(userCheck.test('Oceans11'));
```

Your regex should match `RegexGuru`

```js
assert(userCheck.test('RegexGuru'));
```

Your regex should not match `007`

```js
assert(!userCheck.test('007'));
```

Your regex should not match `9`

```js
assert(!userCheck.test('9'));
```

Your regex should not match `A1`

```js
assert(!userCheck.test('A1'));
```

Your regex should not match `BadUs3rnam3`

```js
assert(!userCheck.test('BadUs3rnam3'));
```

Your regex should match `Z97`

```js
assert(userCheck.test('Z97'));
```

Your regex should not match `c57bT3`

```js
assert(!userCheck.test('c57bT3'));
```

Your regex should match `AB1`

```js
assert(userCheck.test('AB1'));
```

# --seed--

## --seed-contents--

```js
let username = "JackOfAllTrades";
let userCheck = /change/; // Change this line
let result = userCheck.test(username);
```

# --solutions--

```js
let username = "JackOfAllTrades";
const userCheck = /^[a-z]([0-9]{2,}|[a-z]+\d*)$/i;
let result = userCheck.test(username);
```
