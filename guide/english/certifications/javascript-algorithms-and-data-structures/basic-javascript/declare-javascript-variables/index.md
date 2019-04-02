---
title: Declare JavaScript Variables
---
# Declare JavaScript Variables

When we store data in a data structure, we call it a variable. JavaScript variables are written in camel case. An example of camel case is: `camelCase`.

You can declare a variable this way

```js

    var myName = "Rafael";

```

ES6 introduced two other ways to declare variables. __let__ and __const__. _Let_ is pretty similar to var and for the most part is interchangeable:

```js

    let myAge = 36;

```
Where _let_ differs, is in its scope. When we declare using _var_, it's global in scope. When we declare using _let_, the scope is limited to that function. If you want to use a _let_ variable outside a function, you have to make it global in scope or redeclare it in the next function. 


__const__, on the other hand, can only be declared once. Its value can never change. 

```js
    const myName = "Christina";

```
<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->
