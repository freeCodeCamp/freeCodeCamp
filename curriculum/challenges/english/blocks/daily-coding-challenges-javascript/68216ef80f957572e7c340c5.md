---
id: 68216ef80f957572e7c340c5
title: "JavaScript Challenge 12: Message Decoder"
challengeType: 28
dashedName: javascript-challenge-12
---

# --description--

Given a secret message string, and an integer representing the number of letters that were used to shift the message to encode it, return the decoded string.

- A positive number means the message was shifted forward in the alphabet.
- A negative number means the message was shifted backward in the alphabet.
- Case matters, decoded characters should retain the case of their encoded counterparts.
- Non-alphabetical characters should not get decoded.

# --hints--

`decode("Xlmw mw e wigvix qiwweki.", 4)` should return `"This is a secret message."`

```js
assert.equal(decode("Xlmw mw e wigvix qiwweki.", 4), "This is a secret message.");
```

`decode("Byffi Qilfx!", 20)` should return `"Hello World!"`

```js
assert.equal(decode("Byffi Qilfx!", 20), "Hello World!");
```

`decode("Zqd xnt njzx?", -1)` should return `"Are you okay?"`

```js
assert.equal(decode("Zqd xnt njzx?", -1), "Are you okay?");
```

`decode("oannLxmnLjvy", 9)` should return `"freeCodeCamp"`

```js
assert.equal(decode("oannLxmnLjvy", 9), "freeCodeCamp");
```

# --seed--

## --seed-contents--

```js
function decode(message, shift) {

  return message;
}
```

# --solutions--

```js
function decode(message, shift) {
  return message.split('').map(char => {
    if (/[a-zA-Z]/.test(char)) {
      const base = char === char.toLowerCase() ? 'a'.charCodeAt(0) : 'A'.charCodeAt(0);
      const charCode = char.charCodeAt(0);
      const offset = (charCode - base - shift + 26) % 26;
      return String.fromCharCode(base + offset);
    } else {
      return char;
    }
  }).join('');
}
```
