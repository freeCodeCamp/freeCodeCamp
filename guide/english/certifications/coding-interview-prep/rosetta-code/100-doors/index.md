---
title: 100 doors
---
## 100 doors

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:") Hint: 1

Final output must be numbers in array and nothing else.
For view how looks result of `getFinalOpenedDoors()` is possible to use 
`console.log(JSON.stringify(getFinalOpenedDoors(100)));`.
`JSON.stringify` display clearly if output is string or number. However, there is no need to use `JSON.stringify` to accomplish this task.
Usage of `console.log()` also helps to show what happens with code during process.

#### Relevant Links
*   <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration' target='_blank' rel='nofollow'>JavaScript Loops</a>
*   <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify' target='_blank' rel='nofollow'>JSON.stringify()</a>
*   <a href='https://developer.mozilla.org/en-US/docs/Web/API/Console/log' target='_blank' rel='nofollow'>console.log()</a>

> _try to solve the problem now_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:") Hint: 2

#### Possible steps how to complete task:
* Create doors and assign them boolean false for close - using `for` loop.
* Build nested `for` loops to iterate through doors and toogle them by appropriate pattern.
* Loop through doors and if door is `true`(open) assign them to the result array.

> _try to solve the problem now_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:") Hint: 3

This should be just for check. Numbers of open doors are: `[1,4,9,16,25,36,49,64,81,100]`

## Spoiler Alert!

![warning sign](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**Solution ahead!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":beginner:") Basic Code Solution:

    function getFinalOpenedDoors (numDoors) {

      let doors = [];
      let numOpenDoors = [];

      //create doors
      for(let i = 0; i < numDoors; i++) {
        doors[i] = false} 

      for(let i = 1; i <= numDoors; i++) {
        for(let i2 = i-1; i2 < numDoors; i2 += i) {
        //toggle doors
        doors[i2] = !doors[i2]

      // non optimized variant //
      // if(doors[i2] === false) {
      // doors[i2] = true;
      // } else {
      // doors[i2] = false
      // }
        } 
      }

      //assignment open doors to result array
      for(let i=1; i <= numDoors; i++) { 
        if(doors[i-1]) {
        numOpenDoors.push(i)
        }
      }

      return numOpenDoors
      // Good luck!
    }

    console.log(JSON.stringify(getFinalOpenedDoors(100))); // return [1,4,9,16,25,36,49,64,81,100]


![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":rocket:") <a href='https://repl.it/CLnD/0' target='_blank' rel='nofollow'>Run Code</a>
`

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ":clipboard:") NOTES FOR CONTRIBUTIONS:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":warning:") **DO NOT** add solutions that are similar to any existing solutions. If you think it is **_similar but better_**, then try to merge (or replace) the existing similar solution.
*   Add an explanation of your solution.
*   Categorize the solution in one of the following categories — **Basic**, **Intermediate** and **Advanced**. ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ":traffic_light:")
*   Please add your username only if you have added any **relevant main contents**. (![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":warning:") **_DO NOT_** _remove any existing usernames_)

> See ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ":point_right:") <a href='http://forum.freecodecamp.com/t/algorithm-article-template/14272' target='_blank' rel='nofollow'>**`Wiki Challenge Solution Template`**</a> for reference.
