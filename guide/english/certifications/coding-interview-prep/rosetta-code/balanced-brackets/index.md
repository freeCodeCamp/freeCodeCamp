---
title: Balanced brackets
---
## Balanced brackets

This is a stub. <a href='https://github.com/freecodecamp/guides/tree/master/src/pages/certifications/coding-interview-prep/rosetta-code/balanced-brackets/index.md' target='_blank' rel='nofollow'>Help our community expand it</a>.

<a href='https://github.com/freecodecamp/guides/blob/master/README.md' target='_blank' rel='nofollow'>This quick style guide will help ensure your pull request gets accepted</a>.

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->

### Basic Solution
```js
function isBalanced(str) {
  if (str === '') return true;

  str = str.split('');
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '[') {
      stack.push('[');
    } else if (str[i] === ']' && stack[stack.length - 1] === '[') {
      stack.pop();
    }
  }
  return stack.length === 0;
}
```

#### Code Explanation
- Split the input string into individual characters & loop over them.
- Push every `[` into a stack.
- Check if the item stored on the stack is `[` when a `]` occurs. This makes it a pair & `[` can be removed from the stack.
- The brackets are balanced if there is no item present in the stack.
