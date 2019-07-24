---
title: Chain Middleware to Create a Time Server
---
# Chain Middleware to Create a Time Server

---
## Problem Explanation

Similar to the last challenge, but now we are chaining 2 functions together. It seems complicated, but it's just JavaScript.


---
## Hints

### Hint 1

Instead of responding with the time we can also add any arbitrary property to the request object and pass it to the next function by calling the `next()` method. This is trivial, but it makes for a decent example. The code will looks like this:

```javascript
app.get(
  "/now",
  (req, res, next) => {
    // adding a new property to req object
    // in the middleware function
    req.string = "example";
    next();
  },
  (req, res) => {
    // accessing the newly added property
    // in the main function
    res.send(req.string);
  }
);
```


---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

```javascript
app.get(
  "/now",
  (req, res, next) => {
    req.time = new Date().toString();
    next();
  },
  (req, res) => {
    res.send({
      time: req.time
    });
  }
);
```
</details>

<details><summary>Solution 2 (Click to Show/Hide)</summary>

You can also declare the middleware beforehand to use in multiple routes as shown below:

```javascript
const middleware = (req, res, next) => {
  req.time = new Date().toString();
  next();
};

app.get("/now", middleware, (req, res) => {
  res.send({
    time: req.time
  });
});
```

</details>