---
title: Use the .env File
---
# Use the .env File

---
## Problem Explanation
We can use the .toUpperCase() method to make a string all caps, such as:

```javascript
var response = "Hello World".toUpperCase(); // now becomes "HELLO WORLD"
```

All we need to do now is check what the value of the environment variable is, which you can do like:

```javascript
if (process.env.VAR_NAME === "allCaps") {
  response = "Hello World".toUpperCase();
} else {
  response = "Hello World";
}
```
