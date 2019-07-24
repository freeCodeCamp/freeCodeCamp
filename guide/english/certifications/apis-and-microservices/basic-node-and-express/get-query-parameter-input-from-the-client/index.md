---
title: Get Query Parameter Input from the Client
---
# Get Query Parameter Input from the Client

---
## Problem Explanation

Given the endpoint URL, `/name?first=firstname&last=lastname`, we can extract the query parameters (`first` and `last`) and their corresponding values from the `req.query` object and send a custom JSON response containing values derived from the query parameters to the client.


---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

```javascript
app.get("/name", function(req, res) {
  var firstName = req.query.first;
  var lastName = req.query.last;
  // OR you can destructure and rename the keys
  var { first: firstName, last: lastName } = req.query;
  // Use template literals to form a formatted string
  res.json({
    name: `${firstName} ${lastName}`
  });
});
```
</details>
