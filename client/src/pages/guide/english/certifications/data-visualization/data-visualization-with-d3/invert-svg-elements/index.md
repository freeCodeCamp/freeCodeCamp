---
title: Invert SVG Elements
---
## Invert SVG Elements

### Hint

Use a callback function

### Solution

Since you need to shift the svg bar by the height of the svg minus the height of the bas to make it centered, add the following line of code in your ``` attr() ``` method's callback function.

```javascript
return h-d*3;
// Since h is the height of the <svg>
// and d*3 is the height of each bar.
```
