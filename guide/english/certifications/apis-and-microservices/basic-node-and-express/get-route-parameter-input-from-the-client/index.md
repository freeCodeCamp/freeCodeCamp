---
title: Get Route Parameter Input from the Client
---
## Get Route Parameter Input from the Client

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->

If someone tells you to build a GET or POST endpoint you would achieve the same using `app.get(...)` or `app.post(...)` accordingly.

## Hint

In order to get route parameters from a POST request, the general format is as follows:

```javascript
app.post("/:param1/:param2", (req, res) => {
  // Access the corresponding key in the req.params
  // object as defined in the endpoint
  var param1 = req.params.parameter1;
  // OR use destructuring to get multiple paramters
  var { param1, param2 } = req.params;
  // Send the req.params object as a JSON Response
  res.json(req.params);
});
```

## Solution

```javascript
app.get("/:word/echo", (req, res) => {
  const { word } = req.params;
  res.json({
    echo: word
  });
});
```
