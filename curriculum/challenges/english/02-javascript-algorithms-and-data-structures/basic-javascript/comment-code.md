---
id: 661260d77fe6b7f6af628f7b
title: Comment Your JavaScript Code
challengeType: 1
removeComments: false
videoUrl: 'https://scrimba.com/c/c7ynnTp'
challengeType: 1
dashedName: comment-code
---

# --description--

Comments are lines of code that JavaScript will intentionally ignore. Comments are a great way to leave notes to yourself and to other people who will later need to figure out what that code does.

There are two ways to write comments in JavaScript:

Using `//` will tell JavaScript to ignore the remainder of the text on the current line. This is an in-line comment:

```js
// This is an in-line comment.
```

You can make a multi-line comment beginning with `/*` and ending with `*/`. This is a multi-line comment:

```js
/* This is a
multi-line comment */
```

**NOTE:** As you write code, you should regularly add comments to clarify the function of parts of your code. Good commenting can help communicate the intent of your code—both for others *and* for your future self.

<h3>Hinglish</h3>
Comments yaane ki code ki lines jo JavaScript ko jaanboojhkar ignore karni hai. Comments khud ke liye aur dusre logon ke liye notes chhodne ka ek achha tareeka hai jo baad mein uss code ka kya kaam hai woh samajhne ke liye upyogi hota hai.

JavaScript mein comments likhne ke do tareeke hote hain:

`//` ka istemal karke aap JavaScript ko current line par baki text ko ignore karne ke liye keh sakte hain. Ye ek in-line comment hai:

```js
// Ye ek in-line comment hai.
```

Aap `/*` se shuru karke aur `*/` se samapt karke multi-line comment bana sakte hain. Ye ek multi-line comment hai:

```js
/* Ye ek
multi-line comment hai */
```

**NOTE:** Jab aap code likhte hain, aapko apne code ke hisson ke function ko spasht karne ke liye regular roop se comments add karte rahna chahiye. Achhi commenting aapke code ke maksad ko samjhaane mein madad kar sakti hai—dusron ke liye *aur* aapke liye bhi.

# --instructions--

Try creating one of each type of comment.

# --hints--

You should create a `//` style comment that contains at least five letters.

```js
assert(code.match(/(\/\/)...../g));
```

You should create a `/* */` style comment that contains at least five letters.

```js
assert(code.match(/(\/\*)([^\/]{5,})(?=\*\/)/gm));
```

# --seed--

## --seed-contents--

```js

```

# --solutions--

```js
// Fake Comment
/* Another Comment */
```
