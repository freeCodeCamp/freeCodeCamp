---
title: Use Destructuring Assignment to Assign Variables from Nested Objects
---
## Use Destructuring Assignment to Assign Variables from Nested Objects

Tip to pass final test: *nested destructuring was used*

The test wants you to obtain `max` and `max` only. If you destructure your constant to contain both `max` and `min`, the test will fail.

## Spoiler! 

Here is the code solution:

```javascript
const { tomorrow: { max: maxOfTomorrow } } = forecast;
```
