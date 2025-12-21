---
id: 672d49e65a1c855fe7bb3fdb
title: What Are Comments in JavaScript, and When Should You Use Them?
challengeType: 19
dashedName: what-are-comments-in-javascript
---

# --description--

Comments in programming are used to provide additional context for the code or leave notes for yourself and others.

Comments are lines or blocks of text that are ignored by the JavaScript engine when your code is executed. They are there solely for the benefit of people reading the code, whether that's you or someone else.

JavaScript provides two ways to add comments to your code: single-line comments and multi-line comments.

Single-line comments are created using two forward slashes (`//`). Here is an example:

```js
// I am a single line comment in JavaScript
```

This type of comment is great for brief explanations or clarifications.

Here is a real world example from the freeCodeCamp curriculum project files:

```js
// This is to allow English to build without having to download the i18n files.
// It fails when trying to resolve the i18n-curriculum path if they don't exist.
const curriculumLocale = process.env.CURRICULUM_LOCALE ?? 'english';
const I18N_CURRICULUM_DIR = path.resolve(
  __dirname,
  curriculumLocale === 'english' ? '.' : 'i18n-curriculum/curriculum'
);
```

Do not worry about trying to understand what the code is actually doing because it is more advanced than what you have learned so far. Instead, focus on the comment left by the developer. This comment provides important context for why this code exists.

Comments like this are important for those working on teams for two reasons:

1. Other developers working on the project will understand the purpose of this code.

1. It helps prevent unnecessary changes or deletions without consulting the team, which could lead to bugs or issues.

Another type of comment is multi-line comments. Here is the basic syntax:

```js
/*
 I am a multiline comment.
 This is helpful for longer explanations.
*/
```

Multi-line comments are useful when you need to write longer descriptions, explanations, or notes in your code.

Let's take another look at the freeCodeCamp curriculum project files to see how multiline comments can be used in the real world.

```js
/* Since there can be more than one way to complete a certification (using the
legacy curriculum or the new one, for instance), we need a certification
field to track which certification this belongs to. */
const dupeCertifications = [
  {
    certification: 'responsive-web-design',
    dupe: '2022/responsive-web-design'
  }
];
const hasDupe = dupeCertifications.find(
  cert => cert.dupe === meta.superBlock
);
```

Just like before, ignore all of the JavaScript code because it uses concepts that haven't been taught yet. Instead, focus on the comment left by the developer.

A developer on the team, or even a new contributor working on the project, can understand why this piece of code is here and have the full context before working on this area of the project.

While comments are useful in programming, it is important to avoid over-commenting. You don't need to comment on every single line of code, especially if the code is straightforward and self-explanatory.

Here is an example of using comments to explain the obvious:

```js
// This code uses the const keyword to create a new variable called price.
// We are assigning the number 10 to the price variable.
const price = 10;
```

In this situation, there is no need to add any comments here because the code is self-explanatory. The goal is to enhance readability, not clutter the code with unnecessary explanations.

If you want to add comments to your personal projects as you are learning to code, that is fine. But once you start working on real world projects with other developers, it is important not to use comments for code that is self-explanatory.

It is also important not to use comments to help explain away confusing, overly complicated, or poorly written code. In those situations, it is best to refactor, or change, your code so other developers will better understand what is going on.

Comments are powerful tools for documenting your code and making it easier to understand. You should use comments to provide context or leave notes for yourself and others.

# --questions--

## --text--

Which of the following correctly creates a single-line comment in JavaScript?

## --answers--

`<!-- This is a comment -->`

### --feedback--

Remember which symbol JavaScript uses for single-line comments.

---

`/* This is a comment */`

### --feedback--

Remember which symbol JavaScript uses for single-line comments.

---

`// This is a comment`

---

`# This is a comment`

### --feedback--

Remember which symbol JavaScript uses for single-line comments.

## --video-solution--

3

## --text--

When would you use a multi-line comment instead of a single-line comment?

## --answers--

When you need to disable a line of code temporarily.

### --feedback--

Multi-line comments are useful when you have more than a brief note.

---

When you want to write a brief explanation about a variable.

### --feedback--

Multi-line comments are useful when you have more than a brief note.

---

When you need to explain a large section of code or provide detailed information.

---

When you're writing HTML comments.

### --feedback--

Multi-line comments are useful when you have more than a brief note.

## --video-solution--

3

## --text--

Which of the following is a good practice when using comments in your code?

## --answers--

Comment every single line of code.

### --feedback--

Think about how comments help clarify but should not clutter the code.

---

Use comments to provide context and leave notes for yourself and other developers.

---

Use comments to explain even the simplest code.

### --feedback--

Think about how comments help clarify but should not clutter the code.

---

Avoid comments altogether to keep the code clean.

### --feedback--

Think about how comments help clarify but should not clutter the code.

## --video-solution--

2
