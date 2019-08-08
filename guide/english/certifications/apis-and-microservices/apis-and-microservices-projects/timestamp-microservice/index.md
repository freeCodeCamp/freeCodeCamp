---
title: Timestamp Microservice
---

# Timestamp Microservice

---
## Problem Explanation

- You need to write a microservice that will return a JSON with the date in Unix format and in a human-readable date format. The JSON format is like the example output, "{"unix":1451001600000, "utc":"Fri, 25 Dec 2015 00:00:00 GMT"}".
- The response depends on the URL. If the API endpoint is hit with no additional information, it returns the JSON with the current time.
- If the endpoint is hit with a date in unix format, it should calculate the human readable format, and vice versa.

- Note, the challenge requires a working solution deployed to the internet and a Github repo. You can copy your Glitch intance to your Github, instructions [here:](https://glitch.com/help/github/).

#### Relevant Links

- [Date at MDN:](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)


---
## Hints

## Hint: 1

You will need to create the '/api/timestamp/' endpoint separately from the endpoint that reads the date to be parsed from the URL. You won't need a conditional to deal with this endpoint.


## Hint: 2

Date.valueOf() and Date.toUTCString() will generate the correct strings for unix: and utc:. No need to import the Moment library!


## Hint: 3

The Javascript Date object checks for dates that are invalid dates under ISO-8601. Use a Javascript REPL or a short Node script to try it out. [Here is a free online service that lets you test some JS code.:]https://repl.it/site/languages/javascript



---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

```javascript
app.get("/api/timestamp/", (req, res) => {
  res.json({ unix: Date.now(), utc: Date() });
});

app.get("/api/timestamp/:date_string", (req, res) => {
  let dateString = req.params.date_string;

  //A 4 digit number is a valid ISO-8601 for the beginning of that year
  //5 digits or more must be a unix time, until we reach a year 10,000 problem
  if (/\d{5,}/.test(dateString)) {
    dateInt = parseInt(dateString);
    //Date regards numbers as unix timestamps, strings are processed differently
    res.json({ unix: dateString, utc: new Date(dateInt).toUTCString() });
  }

  let dateObject = new Date(dateString);

  if (dateObject.toString() === "Invalid Date") {
    res.json({ error: "Invaid Date" });
  } else {
    res.json({ unix: dateObject.valueOf(), utc: dateObject.toUTCString() });
  }
});
```

#### Code Explanation

- This is a pretty straightforward application of the lessons, Basic Node and Express - Serve JSON on a Specific Route
  and Basic Node and Express - Get Route Parameter Input from the Client. The added wrinkle is the use of Javascript's native Date object.
- The route parameter is assigned to the variable dateString, and processed accordingly. If it is a 5-or more digit number, it is assumed to be a UNIX timestamp format, and cast into a number and passed to a Date object. Otherwise, it is passed to the Date object as a string.
- This code has sequential if and if-else statements instead of a switch statement because it is easier to rely on the Date object's ability to reject invalid date formats.

That's it. There is no intermediate or advanced solution yet. If you have a better, more elegant solution, help us all out and contribute them!

</details>