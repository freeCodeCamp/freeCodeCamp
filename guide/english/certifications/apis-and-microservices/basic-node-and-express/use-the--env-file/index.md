---
title: Use the .env File
---
## Use the .env File


<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->

We can use the .toUpperCase() method to make a string all caps, such as:

```javascript
  var response = "Hello World".toUpperCase(); // now becomes "HELLO WORLD"
```

All we need to do now is check what the value of the environment variable is, which you can do like:

```javascript
   if (process.env.VAR_NAME === "allCaps") {
    response = "Hello World".toUpperCase();
   } else {
    response = "Hello World";
   }
  });
```





<a href='https://github.com/freecodecamp/guides/tree/master/src/pages/certifications/apis-and-microservices/basic-node-and-express/use-the-.env-file/index.md' target='_blank' rel='nofollow'>Help our community expand these hints and guides</a>.
