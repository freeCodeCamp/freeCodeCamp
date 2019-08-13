---
title: How to Use package.json, the Core of Any Node.js Project or npm Package
---
# How to Use package.json, the Core of Any Node.js Project or npm Package

---
## Problem Explanation
According to [this issue discussed on freeCodeCamp's git repo](https://github.com/freeCodeCamp/freeCodeCamp/issues/34798), the bootstrapped glitch project in the [introduction](https://learn.freecodecamp.org/apis-and-microservices/managing-packages-with-npm/) will NOT work if you're not logged in on glitch.

Here's how to set up a new node/express project anonymously:

1. In the glitch project you opened from the introduction page, go to the top left corner for "project options" and click on "New Project".

2. Click on "hello-express" to start a new node/express project

3. We're not done yet; go to `server.js` on __YOUR glitch project__, and replace everything in there with this `server.js` on [freeCodeCamo's repo](https://github.com/freeCodeCamp/boilerplate-npm/blob/gomix/server.js)

4. Then, go to `package.json` on __YOUR glitch project__, and again, replace everything in thEre with the `package.json` on [freeCodeCamp's repo](https://github.com/freeCodeCamp/boilerplate-npm/blob/gomix/package.json)

5. Finally, to submit your solution, go to "Share", click on the "App" tab and copy the link to your app. Submit this link when your solution is ready.

Now, you're ready to solve the challenges :sparkles:

Remember, you're writing JSON, so make sure you use
1. double quotes
2. `"key": value` format
3. the correct number of commas


---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

```json
 {
  "name": "fcc-learn-npm-package-json",
  "author": "foobar",
  "dependencies": {
    "express": "^4.14.0"
  },
  "main": "server.js",
  "scripts": {
    "start": "node server.js"
  },
  "engines": {
    "node": "8.11.2"
  },
  "repository": {
    "type": "git",
    "url": "https://idontknow/todo.git"
  }
}
```

</details>