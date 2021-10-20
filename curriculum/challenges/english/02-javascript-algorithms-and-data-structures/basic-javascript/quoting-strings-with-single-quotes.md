---
id: 56533eb9ac21ba0edf2244b4
title: Quoting Strings with Single Quotes
challengeType: 1
videoUrl: 'https://scrimba.com/c/cbQmnhM'
forumTopicId: 18260
dashedName: quoting-strings-with-single-quotes
---

# --description--

<dfn>String</dfn> values in JavaScript may be written with single or double quotes, as long as you start and end with the same type of quote. Unlike some other programming languages, single and double quotes work the same in JavaScript.

```js
doubleQuoteStr = "This is a string"; 
singleQuoteStr = 'This is also a string';
```

The reason why you might want to use one type of quote over the other is if you want to use both in a string. This might happen if you want to save a conversation in a string and have the conversation in quotes. Another use for it would be saving an `<a>` tag with various attributes in quotes, all within a string.

```js
conversation = 'Finn exclaims to Jake, "Algebraic!"';
```

However, this becomes a problem if you need to use the outermost quotes within it. Remember, a string has the same kind of quote at the beginning and end. But if you have that same quote somewhere in the middle, the string will stop early and throw an error.

```js
goodStr = 'Jake asks Finn, "Hey, let\'s go on an adventure?"'; 
badStr = 'Finn responds, "Let's go!"';
```

Here `badStr` will throw an error.

In the <dfn>goodStr</dfn> above, you can use both quotes safely by using the backslash `\` as an escape character.

**Note:** The backslash `\` should not be confused with the forward slash `/`. They do not do the same thing.

# --instructions--

Change the provided string to a string with single quotes at the beginning and end and no escape characters.

Right now, the `<a>` tag in the string uses double quotes everywhere. You will need to change the outer quotes to single quotes so you can remove the escape characters.

# --hints--

You should remove all the backslashes (`\`).

```js
assert(
  !/\\/g.test(code) &&
    myStr.match(
      '\\s*<a href\\s*=\\s*"http://www.example.com"\\s*target\\s*=\\s*"_blank">\\s*Link\\s*</a>\\s*'
    )
);
```

You should have two single quotes `'` and four double quotes `"`.

```js
assert(code.match(/"/g).length === 4 && code.match(/'/g).length === 2);
```

# --seed--

## --after-user-code--

```js
(function() { return "myStr = " + myStr; })();
```

## --seed-contents--

```js
var myStr = "<a href=\"http://www.example.com\" target=\"_blank\">Link</a>";
```

# --solutions--

```js
var myStr = '<a href="http://www.example.com" target="_blank">Link</a>';
```
