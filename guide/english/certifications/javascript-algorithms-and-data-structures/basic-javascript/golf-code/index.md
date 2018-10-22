---
title: Golf Code
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ":triangular_flag_on_post:") Remember to use <a>**`Read-Search-Ask`**</a> if you get stuck. Try to pair program ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ":busts_in_silhouette:") and write your own code ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":pencil:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ":checkered_flag:") Problem Explanation:

In the game of golf each hole has a **par** meaning the average number of **strokes** a golfer is expected to make in order to sink the ball in a hole to complete the play. Depending on how far above or below **par** your **strokes** are, there is a different nickname.

Your function will be passed **par** and **strokes** arguments. You've to return the correct string according to this table which lists the strokes in order of priority; top (highest) to bottom (lowest):

Strokes | Return  
:--------- | :-------------  
1 | "Hole-in-one!"  
<= par - 2 | "Eagle"  
par - 1 | "Birdie"  
par | "Par"  
par + 1 | "Bogey"  
par + 2 | "Double Bogey"
&gt;= par + 3 | "Go Home!"

**par** and **strokes** will always be numeric and positive.

*   Change the code below `// Only change code below this line` and above `// Only change code above this line`.
*   Ensure that you're editing the inside of the `golfScore` function.
*   You will have to make the function return exactly the same string as shown shown in the table, depending on the value of the parameters **par** and **strokes** that are passed to your function.


## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:") Hint: 1

`+number -number` can be used to increase or decrease a parameter in your condition.

> _try to solve the problem now_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:") Hint: 2

You use `if / else if` chains to return different values in different scenarios.

> _try to solve the problem now_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:") Hint: 3

Control the flow of your function based on the tables order of priority - top (highest) to bottom (lowest) to return matching string values.

> _try to solve the problem now_

## Spoiler Alert!

![warning sign](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**Solution ahead!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":beginner:") Basic Code Solution:

    function golfScore(par, strokes) {
      // Only change code below this line
      if (strokes == 1){
        return "Hole-in-one!";
      } else if (strokes <= par -2){
        return "Eagle";
      } else if (strokes == par -1) {
        return "Birdie";
      } else if (strokes == par) {
        return "Par";
      } else if (strokes == par +1) {
        return "Bogey";
      } else if (strokes == par +2) {
        return "Double Bogey";
      } else {
        return "Go Home!";
      }
      // Only change code above this line
    }
    // Change these values to test
    golfScore(5, 4);

### Code Explanation:

*   Compare the parameters **par** and **strokes** to return appropriate string values.
*   `if / else if` chain is used for flow control.
*   String "Go Home!" is returned for every condition where **strokes** is greater than or equal to **par + 3**.

## Alternative code solution:
```javascript
var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes) {
  // Only change code below this line
  if (strokes == 1){
    return names[0];
  }
  else if (strokes <= par-2){
    return names[1];
  }
  else if (strokes == par -1){
    return names[2];
  }
  else if (strokes == par){
    return names[3];
  }
  else if (strokes == par +1){
    return names[4];
  }
  else if (strokes == par +2){
    return names[5];
  }
  else {return names[6];}
  // Only change code above this line
}

// Change these values to test
golfScore(5, 4);
```
·Run at [repl.it](https://repl.it/@AdrianSkar/Basic-JS-Golf-code)

 ## Code explanation
Since we already have an array defined in the variable `names` we can take advantage of it and use it for our return statements using indexes (eg: `names[0] is the first one`). That way, if you ever need to change a specific result you wouldn't need to look for it inside the function, it'd be at the beginning, in your array.

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 ":sunflower:") Intermediate Code Solution:
(Using Multiple Conditional (Ternary) Operators)
```js
    function golfScore(par, strokes) {
      return (strokes == 1) ? names[0] : 
      (strokes <= par - 2) ? names[1] : 
      (strokes == par - 1) ? names[2] : 
      (strokes == par) ? names[3] : 
      (strokes == par + 1) ? names[4] : 
      (strokes == par + 2) ? names[5] : 
      (strokes >= par + 3) ? names[6] : 
      "Change Me";
    }
```
![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":rocket:") <a href='https://repl.it/@greggubarev/Basic-JS-Golf-code1' target='_blank' rel='nofollow'>Run Code</a>

### Resources

*   <a href='https://en.wikipedia.org/wiki/Golf' target='_blank' rel='nofollow'>Golf</a>
*   <a href='http://www.freecodecamp.com/challenges/chaining-if-else-statements' target='_blank' rel='nofollow'>Challenge: Chaining If Else Statements</a>
*   <a href='http://www.freecodecamp.com/challenges/comparison-with-the-greater-than-equal-to-operator' target='_blank' rel='nofollow'>Challenge: Comparison with the Greater Than Equal To Operator</a>
*   <a href='http://www.freecodecamp.com/challenges/comparison-with-the-less-than-equal-to-operator' target='_blank' rel='nofollow'>Challenge: Comparison with the Less Than Equal To Operator</a>
* ["Array" - *MDN JavaScript reference*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
* <a href='https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/use-multiple-conditional-ternary-operators/' target='_blank' rel='nofollow'>Use Multiple Conditional (Ternary) Operators</a>
