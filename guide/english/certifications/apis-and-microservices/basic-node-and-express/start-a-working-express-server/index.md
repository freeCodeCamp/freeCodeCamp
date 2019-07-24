---
title: Start a Working Express Server
---
# Start a Working Express Server


---
## Hints

### Hint 1

If you had a website at "example.com/" and wanted to serve a string such as "Hello Express" to whoever visits the root domain you could do so easily using Node and/or express:

```javascript
app.get("/", function(req, res) {
  res.send("Hello Express");
});
```

Also, with the modern ES6 syntax you can save a few keystrokes by using arrow functions:

```javascript
app.get("/", (req, res) => {
  res.send("Hello Express");
});
```
