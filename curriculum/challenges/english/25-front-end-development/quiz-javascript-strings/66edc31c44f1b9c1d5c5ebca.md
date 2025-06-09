---
id: 66edc31c44f1b9c1d5c5ebca
title: JavaScript Strings Quiz
challengeType: 8
dashedName: quiz-javascript-strings
---

# --description--

To pass the quiz, you must correctly answer at least 18 of the 20 questions below.

# --quizzes--

## --quiz--

### --question--

#### --text--

What is the return value for the `includes()` method?

#### --distractors--

If the substring is found within the string, the method returns the string. Otherwise, it returns `undefined`.

---

If the substring is found within the string, the method returns `true`. Otherwise, it returns an empty string.

---

If the substring is found within the string, the method returns the string. Otherwise, it returns `null`.

#### --answer--

If the substring is found within the string, the method returns `true`. Otherwise, it returns `false`.

### --question--

#### --text--

Which option demonstrates string interpolation?

#### --distractors--

`"Hello, " + user + "!"`

---

`"Hello, $user!"`

---

`` `Hello, {user}!` ``

#### --answer--

`` `Hello, ${user}!` ``

### --question--

#### --text--

Which of the following options is the newline character?

#### --distractors--

`\newline`

---

`\new`

---

`\line`

#### --answer--

`\n`

### --question--

#### --text--

Which of the following statements is correct about strings?

#### --distractors--

Strings are mutable and can be changed after they are created.

---

Strings are non primitive data types.

---

Strings can only be created using single quotes.

#### --answer--

Strings are immutable.

### --question--

#### --text--

What does ASCII stand for?

#### --distractors--

American Standard Code for Internet Information

---

Advanced Systematic Code for Internal Interchange

---

Automatic Standard Code for Internal Information

#### --answer--

American Standard Code for Information Interchange

### --question--

#### --text--

Which of the following methods extracts a portion of a string and returns a new string?

#### --distractors--

`trim()`

---

`indexOf()`

---

`prompt()`

#### --answer--

`slice()`

### --question--

#### --text--

What is the purpose of the `prompt()` method?

#### --distractors--

It displays a message in the console.

---

It displays an alert box with a message.

---

It displays a confirmation box with a message.

#### --answer--

It displays a dialog box that waits for the user input.

### --question--

#### --text--

Which of the following is the correct way to access the third character of a string?

#### --distractors--

```js
const developer = "Jessica";
developer[3];
```

---

```js
const developer = "Jessica";
developer[-1];
```

---

```js
const developer = "Jessica";
developer[0];
```

#### --answer--

```js
const developer = "Jessica";
developer[2];
```

### --question--

#### --text--

How can you obtain the ASCII value of the first character in the string `"hello"`?

#### --distractors--

`"hello".charCode(0)`

---

`"hello".codeAt(0)`

---

`"hello".getCharIndex(0)`

#### --answer--

`"hello".charCodeAt(0)`

### --question--

#### --text--

Which method can you use to obtain the character corresponding to an ASCII value?

#### --distractors--

`toASCII()`

---

`toChar()`

---

`toCode()`

#### --answer--

`fromCharCode()`

### --question--

#### --text--

Which of the following `indexOf` examples will log `-1` to the console?

#### --distractors--

```js
const organization = "freeCodeCamp";
console.log(organization.indexOf("e"));
```

---

```js
const organization = "freeCodeCamp";
console.log(organization.indexOf("f"));
```

---

```js
const organization = "freeCodeCamp";
console.log(organization.indexOf("C"));
```

#### --answer--

```js
const organization = "freeCodeCamp";
console.log(organization.indexOf("c"));
```

### --question--

#### --text--

How can you check if the string `"JavaScript"` contains `"Script"`?

#### --distractors--

`"JavaScript".has("Script")`

---

`"JavaScript".contains("Script")`

---

`"JavaScript".exists("Script")`

#### --answer--

`"JavaScript".includes("Script")`

### --question--

#### --text--

Which of the following extracts the substring `"Script"` from the string `"JavaScript"`?

#### --distractors--

`"JavaScript".find(5)`

---

`"JavaScript".extract(4)`

---

`"JavaScript".cut(5)`

#### --answer--

`"JavaScript".slice(4)`

### --question--

#### --text--

How do you convert the string `"JavaScript"` to uppercase?

#### --distractors--

`"JavaScript".upper()`

---

`"JavaScript".toUpper()`

---

`"JavaScript".convertUpper()`

#### --answer--

`"JavaScript".toUpperCase()`

### --question--

#### --text--

How do you convert the string `"JavaScript"` to lowercase?

#### --distractors--

`"JavaScript".lower()`

---

`"JavaScript".toLower()`

---

`"JavaScript".convertLower()`

#### --answer--

`"JavaScript".toLowerCase()`

### --question--

#### --text--

Which of the following will replace `"dogs"` with `"cats"` in the string `"I love dogs"`.

#### --distractors--

`"I love dogs".slice("dogs", "cats")`

---

`"I love dogs".replaceWith("dogs", "cats")`

---

`"I love dogs".find("dogs", "cats")`

#### --answer--

`"I love dogs".replace("dogs", "cats")`

### --question--

#### --text--

Which method is used to repeat a string a specified number of times?

#### --distractors--

`times()`

---

`repeatTimes()`

---

`repeatNumber()`

#### --answer--

`repeat()`

### --question--

#### --text--

What will the following code return: `"abc".repeat(3)`?

#### --distractors--

`"abcabc"`

---

`"abcabcabcabc"`

---

It will throw an error.

#### --answer--

`"abcabcabc"`

### --question--

#### --text--

Which method will remove whitespace from the beginning and end of a string?

#### --distractors--

`strip()`

---

`removeWhitespace()`

---

`trimWhitespace()`

#### --answer--

`trim()`

### --question--

#### --text--

Which of the following is the correct syntax for escaping quotes?

#### --distractors--

```js
"She said, ?"Hello!?""
```

---

```js
"She said, ."Hello!.""
```

---

```js
"She said, //"Hello!//""
```

#### --answer--

```js
"She said, \"Hello!\""
```

