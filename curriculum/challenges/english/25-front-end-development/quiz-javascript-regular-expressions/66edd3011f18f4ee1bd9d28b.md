---
id: 66edd3011f18f4ee1bd9d28b
title: JavaScript Regular Expressions Quiz
challengeType: 8
dashedName: quiz-javascript-regular-expressions
---

# --description--

To pass the quiz, you must correctly answer at least 18 of the 20 questions below.

# --quizzes--

## --quiz--

### --question--

#### --text--

Which of the following is NOT a valid regular expression?

#### --distractors--

```js
/hello, world!/i
```

---

```js
new RegExp("hello, world!")
```

---

```js
/(?:^|\s)hello[,]?\sworld[!]?(?:$|\s)/i
```

#### --answer--

```js
"hello, world!"
```

### --question--

#### --text--

Which `RegExp` contains the same pattern as the regular expression `/f[o0]{2} b[a4@]r/i`?

#### --distractors--

```js
new RegExp("/f[o0]{2} b[a4@]r/", "i")
```

---

```js
new RegExp("f[o0]{2} b[a4@]r", "g")
```

---

```js
new RegExp("f[o0]{2} b[a4@]r")
```

#### --answer--

```js
new RegExp("f[o0]{2} b[a4@]r", "i")
```

### --question--

#### --text--

What is the return type for the regular expression method `test`?

#### --distractors--

An array of strings that matched the regular expression.

---

An object containing information about the (sub)string the regular expression matched.

---

`null`, the method `test` only validates if the given regular expression is valid.

#### --answer--

A boolean indicating whether the string matches the regular expression.

### --question--

#### --text--

What does the `match` method do when passed a regular expression without any flags?

#### --distractors--

It searches for any strings that match the given regular expression, and returns ALL matches as an array.

---

It searches for the first full match, and returns the starting index of that match.

---

It searches for the first full match, and returns a boolean indicating whether or not a match was found.

#### --answer--

It searches for the first full match, and returns an array containing that first match.

### --question--

#### --text--

Which is the best use case for `test`?

#### --distractors--

For verifying a given regular expression.

---

For getting detailed information about a string match, such as the length of the matched string.

---

To extract all matches from a given string.

#### --answer--

To check if a given string matches the regular expression.

### --question--

#### --text--

What is the purpose of using `replace`?

#### --distractors--

To replace the current regular expression with a new regular expression.

---

When given an index and a string, to replace the character at the specified index with the string provided.

---

To remove all instances of a matched substring from a string.

#### --answer--

To replace a matched string with a given replacement string.

### --question--

#### --text--

What is the difference between `match` and `matchAll`?

#### --distractors--

`match` always returns a string, while `matchAll` always returns an array of matches.

---

`match` returns a boolean indicating whether a match is found, while `matchAll` returns a number representing the amount of matches found.

---

`match` returns a number indicating the starting index of the first match found, while `matchAll` returns an array of numbers containing indices where a match was found.

#### --answer--

`match` returns an array of strings that match, while `matchAll` returns an iterator object of all matches found.

### --question--

#### --text--

Which of the following is the correct use of `replaceAll`?

#### --distractors--

```js
foo.replaceAll(/foobar/, "fizzbuzz")
```

---

```js
foo.replaceAll(/foobar/i, "fizzbuzz")
```

---

```js
foo.replaceAll(/foobar/gi, /fizzbuzz/)
```

#### --answer--

```js
foo.replaceAll(/foobar/g, "fizzbuzz")
```

### --question--

#### --text--

Which of the following character classes is equivalent to the regular expression `/[a-zA-Z0-9_]/`?

#### --distractors--

`\d`

---

`\s`

---

`\n`

#### --answer--

`\w`

### --question--

#### --text--

Which of the following character classes is most appropriate for extracting digits from a phone number?

#### --distractors--

`\w`

---

`\s`

---

`\D`

#### --answer--

`\d`

### --question--

#### --text--

What happens when a lookahead `(?=)` is used in a regular expression?

#### --distractors--

The lookahead will assert to the left of the string, verifying that the sub-pattern IS present.

---

A lookahead is an alternate regular expression pattern used when the main pattern fails to match.

---

The lookahead will assert to the right of the string, verifying that the sub-pattern IS NOT present.

#### --answer--

A lookahead asserts to the right of the string, verifying that the sub-pattern IS present.

### --question--

#### --text--

When making a regular expression, where should a lookbehind `(?<=)` be placed?

#### --distractors--

The lookbehind can be placed anywhere in the regular expression.

---

The lookbehind should be placed to the right of the main pattern of the regular expression.

---

The lookbehind should include the main pattern of the regular expression.

#### --answer--

The lookbehind should be placed to the left of the main pattern of the regular expression.

### --question--

#### --text--

Which quantifier matches the preceding element zero or one times?

#### --distractors--

`+`

---

`*`

---

`a{0,}`

#### --answer--

`?`

### --question--

#### --text--

Which of the following regular expressions only allows numbers between 0 and 999,999?

#### --distractors--

`/^\d{6}$/`

---

`/^\d{0, 999999}$/`

---

`/^\d+$/`

#### --answer--

`/^\d{1,6}$/`

### --question--

#### --text--

Which of the following statements is true about the custom character class (`[]`)?

#### --distractors--

It's a set of characters to be removed from the match.

---

It can define a set of characters to match without the need to escape any special characters.

---

It represents a set of characters in Unicode form.

#### --answer--

It can define a custom set of characters to match.

### --question--

#### --text--

Which of the following character classes correctly matches the uppercase alphabet?

#### --distractors--

`\w`

---

`[a-z]`

---

`[AZ]`

#### --answer--

`[A-Z]`

### --question--

#### --text--

What happens when a capturing group `(...)` is used in a regular expression?

#### --distractors--

The capturing group is immediately evaluated, regardless of where it is located in the regular expression.

---

The capturing group attempts to match using the given subpattern, and continues without memorizing the result.

---

The capturing group is a prioritized subpattern, which will immediately return when a match is found for the subpattern.

#### --answer--

The capturing group attempts to match using the given subpattern, and continues with the result in memory.

### --question--

#### --text--

What happens when a non-capturing group `(?:...)` is used in a regular expression?

#### --distractors--

The non-capturing group attempts to match using the given subpattern, and continues with the result in memory.

---

The non-capturing group immediately terminates when it finds a match for the given subpattern.

---

The non-capturing group is considered an optional match, so only a successful match is added on the result.

#### --answer--

The non-capturing group attempts to match using the given subpattern, and continues without keeping the result in memory.

### --question--

#### --text--

Given the following regular expression, which of these tests will return `true`?

```js
const regex = /(cat)\s+\1/i;
```

#### --distractors--

```js
regex.test("cat dog cat");
```

---

```js
regex.test("catcat");
```

---

```js
regex.test("cat\s+cat");
```

#### --answer--

```js
regex.test("cat   cat");
```

### --question--

#### --text--

What does the wildcard character class (`.`) do in a regular expression?

#### --distractors--

It matches only whitespace characters.

---

It matches the start of a string.

---

It matches a single digit.

#### --answer--

It matches any single character except a newline.
