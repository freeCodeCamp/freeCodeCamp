---
title: Define an HTML Class in JSX
---
## Define an HTML Class in JSX

- HTML and JSX may seem that they are exactly the same but there are a few differences between them.
- One of these differences is the naming convention.
- HTML attributes and event references in JSX become camelCase(onclick => onClick).
- There may also be some words reserved in JavaScript.For instance the word "class" cant be use to define HTML classes
in JSX.Therefore instead of using "class" you can use "className".

## Hint 1:
- You may want to change "class" to "className".

## Solution
```javascript
const JSX = (
  <div className = "myDiv"> 
    <h1>Add a class to this div</h1>
  </div>
);
```
