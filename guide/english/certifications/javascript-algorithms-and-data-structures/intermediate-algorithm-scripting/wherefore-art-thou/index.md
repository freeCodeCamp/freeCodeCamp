---
title: Wherefore Art Thou
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ":triangular_flag_on_post:") Remember to use <a>**`Read-Search-Ask`**</a> if you get stuck. Try to pair program ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ":busts_in_silhouette:") and write your own code ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":pencil:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ":checkered_flag:") Problem Explanation:

Write an algorithm that will take an `array` for the first argument and return an `array` with all the `object`s that matches all the properties and values in the `Object` passed as second parameter.

#### Relevant Links

*   <a href= 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for' target='_blank' rel='nofollow'>For Loops</a>
*   <a href= 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter' target='_blank' rel='nofollow'>Array.prototype.filter()</a>
*   <a href='https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty' target='_blank' rel='nofollow'>Object.hasOwnProperty()</a>
<a href= 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys' target='_blank' rel='nofollow'>Object.keys()</a>

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:") Hint: 1

You may use `for` loop or the `Array.prototype.filter` method.

> _try to solve the problem now_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:") Hint: 2

Try to use the `Object.prototype.hasOwnProperty` method to know if the property name exists in an object (as its own property).

> _try to solve the problem now_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:") Hint: 3

Check equivalence of `Object` in `collection` with `Object` passed as second parameter to `whatIsInAName` function.

> _try to solve the problem now_

## Spoiler Alert!

![warning sign](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**Solution ahead!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":beginner:") Basic Code Solution:

    function whatIsInAName(collection, source) {
      // "What's in a name? that which we call a rose
      // By any other name would smell as sweet.”
      // -- by William Shakespeare, Romeo and Juliet
      var srcKeys = Object.keys(source);

      // filter the collection
      return collection.filter(function (obj) {
        for(var i = 0; i < srcKeys.length; i++) {
          if(!obj.hasOwnProperty(srcKeys[i]) || obj[srcKeys[i]] !== source[srcKeys[i]]) {
            return false;
          }
        }
        return true;
      });
    }

    // test here
    whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":rocket:") <a href='https://repl.it/CLmh/0' target='_blank' rel='nofollow'>Run Code</a>

### Code Explanation:

*   We filter through the array using `.filter()`.
*   Using a `for loop` we loop through each item in the object.
*   We use a `if statement` to check if the object in the collection doesn't have the key and the property value doesn't match the value in source.
*   We return `false` if the above `if statement` is correct. Otherwise, we return `true`;

#### Relevant Links

*   <a>For Loops</a>
*   <a>Array.prototype.filter()</a>
*   <a href='https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty' target='_blank' rel='nofollow'>Object.hasOwnProperty()</a>

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 ":sunflower:") Intermediate Code Solution:

    function whatIsInAName(collection, source) {
      // "What's in a name? that which we call a rose
      // By any other name would smell as sweet.”
      // -- by William Shakespeare, Romeo and Juliet
      var srcKeys = Object.keys(source);

      return collection.filter(function (obj) {
        return srcKeys.every(function (key) {
          return obj.hasOwnProperty(key) && obj[key] === source[key];
        });
      });
    }

    // test here
    whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":rocket:") <a href='https://repl.it/CLmi/0' target='_blank' rel='nofollow'>Run Code</a>

### Code Explanation:

*   We filter through the collection using `.filter()`.
*   Next, we return a `Boolean` value for the `.filter()` method.
*   Finally, we reduce to `Boolean` value to be returned for the `.every()` method.

#### Relevant Links

*   <a>Array.prototype.filter()</a>
*   <a>Array.prototype.every()</a>
*   <a href='https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty' target='_blank' rel='nofollow'>Object.hasOwnProperty()</a>

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ":rotating_light:") Advanced Code Solution:

    function whatIsInAName(collection, source) {
      // "What's in a name? that which we call a rose
      // By any other name would smell as sweet.”
      // -- by William Shakespeare, Romeo and Juliet
      var srcKeys = Object.keys(source);

      // filter the collection
      return collection.filter(function (obj) {
        return srcKeys
          .map(function(key) {
            return obj.hasOwnProperty(key) && obj[key] === source[key];
          })
          .reduce(function(a, b) {
            return a && b;
          });
      });
    }

    // test here
    whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":rocket:") <a href='https://repl.it/CLmj/0' target='_blank' rel='nofollow'>Run Code</a>

### Code Explanation:

*   We start by filtering through `collection` using `Array.filter()`.
*   Next, we map through all keys and return Boolean values based on the check conditions: both the key and its corresponding value must exist within the object we are filtering through.
*   Then we reduce the mapped Boolean values to a single Boolean that indicates whether all srcKeys pass the conditions checked above.
*   This single Boolean will be used to filter through the collection.

#### Relevant Links

*   <a>Array.prototype.filter()</a>
*   <a>Array.prototype.reduce()</a>
*   <a href='https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty' target='_blank' rel='nofollow'>Object.hasOwnProperty()</a>

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ":clipboard:") NOTES FOR CONTRIBUTIONS:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":warning:") **DO NOT** add solutions that are similar to any existing solutions. If you think it is **_similar but better_**, then try to merge (or replace) the existing similar solution.
*   Add an explanation of your solution.
*   Categorize the solution in one of the following categories — **Basic**, **Intermediate** and **Advanced**. ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ":traffic_light:")
*   Please add your username only if you have added any **relevant main contents**. (![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":warning:") **_DO NOT_** _remove any existing usernames_)

> See ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ":point_right:") <a href='http://forum.freecodecamp.com/t/algorithm-article-template/14272' target='_blank' rel='nofollow'>**`Wiki Challenge Solution Template`**</a> for reference.
