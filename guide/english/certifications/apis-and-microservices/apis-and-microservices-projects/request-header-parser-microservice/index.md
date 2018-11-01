---
title: Request Header Parser Microservice
---
## Request Header Parser Microservice
---

![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ':triangular_flag_on_post:') Remember to use <a>**`Read-Search-Ask`**</a> if you get stuck. Try to pair program ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ':busts_in_silhouette:') and write your own code ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ':pencil:')

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ':checkered_flag:') Problem Explanation:

- You need to write a microservice that will return a JSON with the ipaddress, the preferred language, and the browser software. The JSON format is like the example output, "{"ipaddress":"159.20.14.100","language":"en-US,en;q=0.5",
"software":"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:50.0) Gecko/20100101 Firefox/50.0"}".
- Everything will be provided in an HTTP request from a browser or other user agent (such as the Freecodecamp test which will grade your app) and your task is to read that data and provide it in the required JSON format.

- Note, the challenge requires a working solution deployed to the internet and a Github repo. You can copy your Glitch intance to your Github, instructions [here:](https://glitch.com/help/github/).

#### Relevant Links

- [Basics of HTTP at MDN:](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP)
- [Express API reference for get:](https://expressjs.com/en/api.html#req.get)


## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ':speech_balloon:') Hint: 1
The IP address is accesible as req.ip.

> _try to solve the problem now_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ':speech_balloon:') Hint: 2

The req object has an 'accept-language' and a 'user-agent' key, which will be helpful.

> _try to solve the problem now_

## Spoiler Alert!

![warning sign](https://discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**Solution ahead!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ':beginner:') Basic Code Solution:

```javascript
app.get('/api/whoami/', (req, res) => {
  let responseObject = {
    ipaddress: req.ip,
    language: req.get('accept-language'),
    software: req.get('user-agent'),
  };

  res.json(responseObject);
```

### Code Explanation:

- The IP adress is from req.ip.
- The required 'language' is from 'accept-language' and 'software' is from 'user-agent'. res.json automatically turns an object into a JSON for you.
- If you want shorter code, you can try replacing responseObject with the object assigned to it.

That's it. There is no intermediate or advanced solution yet. If you have a better, more elegant solution, help us all out and contribute them!

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ':clipboard:') NOTE TO CONTRIBUTORS:

- ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ':warning:') **DO NOT** add solutions that are similar to any existing solutions. If you think it is **_similar but better_**, then try to merge (or replace) the existing similar solution.
- Add an explanation of your solution.
- Categorize the solution in one of the following categories -- **Basic**, **Intermediate** and **Advanced**. ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ':traffic_light:')
- Please add your username only if you have added any **relevant main contents**. (![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ':warning:') **_DO NOT_** _remove any existing usernames_)

> See ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ':point_right:') <a href='http://forum.freecodecamp.com/t/algorithm-article-template/14272' target='_blank' rel='nofollow'>**`Wiki Challenge Solution Template`**</a> for reference.
