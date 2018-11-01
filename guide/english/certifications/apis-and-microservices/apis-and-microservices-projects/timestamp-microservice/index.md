---
title: Timestamp Microservice
---
## Timestamp Microservice
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ":triangular_flag_on_post:") Remember to use <a>**`Read-Search-Ask`**</a> if you get stuck. Try to pair program ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ":busts_in_silhouette:") and write your own code ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":pencil:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ":checkered_flag:") Problem Explanation:

*   You need to write a microservice that will return a JSON with the date in Unix format and in a human-readable date format. The JSON format is like the example output, "{"unix":1451001600000, "utc":"Fri, 25 Dec 2015 00:00:00 GMT"}".
*   The response depends on the URL. If the API endpoint is hit with no additional information, it returns the JSON with the current time.
*   If the endpoint is hit with a date in unix format, it should calculate the human readable format, and vice versa.

*   Note, the challenge requires a working solution deployed to the internet and a Github repo. You can copy your Glitch intance to your Github, instructions [here:](https://glitch.com/help/github/).

#### Relevant Links

*   [Date at MDN:](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)


## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:") Hint: 1

You will need to create the '/api/timestamp/' endpoint separately from the endpoint that reads the date to be parsed from the URL. You won't need a conditional to deal with this endpoint.

> _try to solve the problem now_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:") Hint: 2

Date.valueOf() and Date.toUTCString() will generate the correct strings for unix: and utc:. No need to import the Moment library!

> _try to solve the problem now_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:") Hint: 3

The Javascript Date object checks for dates that are invalid dates under ISO-8601. Use a Javascript REPL or a short Node script to try it out. [Here is a free online service that lets you test some JS code.:]https://repl.it/site/languages/javascript

> _try to solve the problem now_

## Spoiler Alert!

![warning sign](https://discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**Solution ahead!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":beginner:") Basic Code Solution:
```javascript
app.get('/api/timestamp/', (req, res) => {
  res.json({ unix: Date.now(), utc: Date() });
});

app.get('/api/timestamp/:date_string', (req, res) => {
  let dateString = req.params.date_string;
  
  //A 4 digit number is a valid ISO-8601 for the beginning of that year
  //5 digits or more must be a unix time, until we reach a year 10,000 problem
  if (/\d{5,}/.test(dateString)) { 
    dateInt = parseInt(dateString); 
    //Date regards numbers as unix timestamps, strings are processed differently
    res.json({ unix: dateString, utc: new Date(dateInt).toUTCString() });
  }

  let dateObject = new Date(dateString);

  if (dateObject.toString() === 'Invalid Date') {
    res.json({ error: 'Invaid Date' });
  } else {
    res.json({ unix: dateObject.valueOf(), utc: dateObject.toUTCString() });
  }
});
```

### Code Explanation:

*   This is a pretty straightforward application of the lessons, Basic Node and Express - Serve JSON on a Specific Route
 and Basic Node and Express - Get Route Parameter Input from the Client. The added wrinkle is the use of Javascript's native Date object.
*   The route parameter is assigned to the variable dateString, and processed accordingly. If it is a 5-or more digit number, it is assumed to be a UNIX timestamp format, and cast into a number and passed to a Date object. Otherwise, it is passed to the Date object as a string.
*   This code has sequential if and if-else statements instead of a switch statement because it is easier to rely on the Date object's ability to reject invalid date formats.

That's it. There is no intermediate or advanced solution yet. If you have a better, more elegant solution, help us all out and contribute them!

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ":clipboard:") NOTE TO CONTRIBUTORS:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":warning:") **DO NOT** add solutions that are similar to any existing solutions. If you think it is **_similar but better_**, then try to merge (or replace) the existing similar solution.
*   Add an explanation of your solution.
*   Categorize the solution in one of the following categories -- **Basic**, **Intermediate** and **Advanced**. ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ":traffic_light:")
*   Please add your username only if you have added any **relevant main contents**. (![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":warning:") **_DO NOT_** _remove any existing usernames_)

> See ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ":point_right:") <a href='http://forum.freecodecamp.com/t/algorithm-article-template/14272' target='_blank' rel='nofollow'>**`Wiki Challenge Solution Template`**</a> for reference.
