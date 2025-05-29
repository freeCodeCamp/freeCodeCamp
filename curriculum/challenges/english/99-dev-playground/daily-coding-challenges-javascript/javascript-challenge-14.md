---
id: 6821ebce237de8297eaee790
title: "JavaScript Challenge 14: Character Battle"
challengeType: 28
dashedName: javascript-challenge-14
---

# --description--

Given two strings representing your army and an opposing army, each character from your army battles the character at the same position from the opposing army using the following rules:

- Characters `a-z` have a strength of `1-26`, respectively.
- Characters `A-Z` have a strength of `27-52`, respectively.
- Digits `0-9` have a strength of their face value.
- All other characters have a value of zero.
- Each character can only fight one battle.

For each battle, the stronger character wins. The army with more victories, wins the war. Return the following values:

- `"Opponent retreated"` if your army has more characters than the opposing army.
- `"We retreated"` if the opposing army has more characters than yours.
- `"We won"` if your army won more battles.
- `"We lost"` if the opposing army won more battles.
- `"It was a tie"` if both armies won the same number of battles.

# --hints--

`battle("Hello", "World")` should return `"We lost"`.

```js
assert.equal(battle("Hello", "World"), "We lost");
```

`battle("pizza", "salad")` should return `"We won"`.

```js
assert.equal(battle("pizza", "salad"), "We won");
```

`battle("C@T5", "D0G$")` should return `"We won"`.

```js
assert.equal(battle("C@T5", "D0G$"), "We won");
```

`battle("kn!ght", "orc")` should return `"Opponent retreated"`.

```js
assert.equal(battle("kn!ght", "orc"), "Opponent retreated");
```

`battle("PC", "Mac")` should return `"We retreated"`.

```js
assert.equal(battle("PC", "Mac"), "We retreated");
```

`battle("Wizards", "Dragons")` should return `"It was a tie"`.

```js
assert.equal(battle("Wizards", "Dragons"), "It was a tie");
```

`battle("Mr. Smith", "Dr. Jones")` should return `"It was a tie"`.

```js
assert.equal(battle("Mr. Smith", "Dr. Jones"), "It was a tie");
```

# --seed--

## --seed-contents--

```js
function battle(myArmy, opposingArmy) {

  return myArmy;
}
```

# --solutions--

```js
function getStrength(soldier) {
  const soldiers = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let strength = 0;

  if (/\d/.test(soldier)) {
    strength = parseInt(soldier);
  } else if (soldiers.includes(soldier)) {
    strength = soldiers.indexOf(soldier) + 1;
  }

  return strength;
}

function battle(myArmy, opposingArmy) {
  if (myArmy.length > opposingArmy.length) return 'Opponent retreated';
  if (opposingArmy.length > myArmy.length) return 'We retreated';

  let myWins = 0;
  let theirWins = 0;

  for (let i = 0; i < myArmy.length; i++) {
    const mySoldier = myArmy[i];
    const theirSoldier = opposingArmy[i];

    const myStrength = getStrength(mySoldier);
    const theirStrength = getStrength(theirSoldier);

    if (myStrength > theirStrength) myWins++;
    if (theirStrength > myStrength) theirWins++;
  }

  return myWins > theirWins ? 'We won' : theirWins > myWins ? 'We lost' : 'It was a tie';
}
```
