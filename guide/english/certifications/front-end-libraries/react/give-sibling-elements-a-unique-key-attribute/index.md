---
title: Give Sibling Elements a Unique Key Attribute
---
## Give Sibling Elements a Unique Key Attribute
## Hint
It is just almost same as previous [challenge](https://learn.freecodecamp.org/front-end-libraries/react/use-array-map-to-dynamically-render-elements). Just you need to add `key` attribute.

## Solution
Just add `key` attribute to the `<li>` tag to make unique 

```jsx
const renderFrameworks = frontEndFrameworks.map((item) =>
  <li key={item+1}>{item}</li>
);
```
