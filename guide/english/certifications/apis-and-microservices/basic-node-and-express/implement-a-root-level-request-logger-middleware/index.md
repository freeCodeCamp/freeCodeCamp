---
title: Implement a Root-Level Request Logger Middleware
---
# Implement a Root-Level Request Logger Middleware

---
## Problem Explanation

It is easier to write this challenge all at the top (there is already a stub for it). This is because middleware must be placed the function calls you want it to be used for.


---
## Hints

### Hint 1

To set up your own middleware you can do it like so:

```javascript
app.use(function middleware(req, res, next) {
  // Do something
  // Call the next function in line:
  next();
});
```

If you have trouble formatting the string correctly, one way to do it looks like:

```javascript
var string = req.method + " " + req.path + " - " + req.ip;
```

#### Relevant Links
- [Express Middleware](https://expressjs.com/en/guide/using-middleware.html)
