---
title: Get Data from POST Requests
---
# Get Data from POST Requests

---
## Problem Explanation
Just like using req.query we can do req.body to get our data. This challenge is very similar to "Get Query Parameter Input from the Client."

In order to get data from a post request a general format is:


---
## Hints

### Hint 1
```javascript
app.post(PATH, function(req, res) {
  // Handle the data in the request
});
```


---
## Solutions
<details><summary>Solution 1 (Click to Show/Hide)</summary>

```javascript
app.post("/name", function(req, res) {
  // Handle the data in the request
  var string = req.body.first + " " + req.body.last;
  res.json({ name: string });
});
```
</details>
