---
title: String FromCodePoint
---

# String.fromCodePoint

`String.fromCodePoint` returns a string from a list or sequence of code points.

## Description

You can use this static `String` method to create a string based on a sequence of code points. Basically, a code point is any value that exist in a **code-space**, such as **Unicode**.

## Syntax

```javascript
String.fromCodePoint(num1[, ...[, numN]])
```

### Parameters

>**num1, ..., numN**

A sequence of code points.

## Examples

```javascript
String.fromCodePoint(24);       // '\u0018'
String.fromCodePoint(42);       // '*'
String.fromCodePoint(45);       // '-'
String.fromCodePoint(10);       // '\n'
String.fromCodePoint(18);       // '\u0012'
String.fromCodePoint(18123);    // '䛋'
String.fromCodePoint(194564);   // '你'
String.fromCodePoint(0x0113);   // 'ē'
```

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->

[MDN Article](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCodePoint)

[Differences between fromCharCode and fromCodePoint](https://stackoverflow.com/questions/34680898/can-you-use-string-fromcodepoint-just-like-string-fromcharcode?noredirect=1&lq=1)


[Discussion in StackOverflow about the differences between Character, Code Points, Code Units](https://stackoverflow.com/questions/27331819/whats-the-difference-between-a-character-a-code-point-a-glyph-and-a-grapheme)

[Unicode Glossary: Code Point](https://www.unicode.org/glossary/#code_point)

Here is a very short video (< 4 min) explaining what [Unicode and character encoding is.](https://www.youtube.com/watch?v=JwWoVQXQ24k)