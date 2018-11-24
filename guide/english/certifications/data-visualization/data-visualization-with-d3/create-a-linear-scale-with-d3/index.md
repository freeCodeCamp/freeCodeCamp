---
title: Create a Linear Scale with D3
---
## Create a Linear Scale with D3

In this D3 challenge you are required to change the scale variable to create a linear scale. Then set the output variable to the scale called with an input argument of 50.

### Hint 1

The syntax for creating a scale is:
```javascript
const scale = d3.scaleLinear();
```

### Hint 2

The `const` scale is a method, which accepts a value.

### Hint 3

The scaling factor should be set to `50`.

### Hint 4

The scaling factor is set like this:
```javascript
const output = scale(scalingFactor);
```
Where `scalingFactor` is a number.

### Solution

To solve this challenge, the `scale` variable has to be re-initialized with a D3 scale ans the scaling factor in the output has to be set to `50`, to do this, change you code to look like this:
```javascript
<body>
  <script>
    const scale = d3.scaleLinear();
    const output = scale(50);
    d3.select("body")
      .append("h2")
      .text(output);
  </script>
</body>
```
