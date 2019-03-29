---
title: Add Document Elements with D3
---
## Add Document Elements with D3
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ":triangular_flag_on_post:") Remember to use <a>**`Read-Search-Ask`**</a> if you get stuck. Try to pair program ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ":busts_in_silhouette:") and write your own code ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":pencil:")

### Problem Explanation:

This challenge can be completed by referring to the example in the description and modifying the parameters to those that are in the instructions.

#### Relevant Links

From the official D3 Documentation:
*   [Select](https://github.com/d3/d3-selection/blob/master/README.md#select)
*   [Append](https://github.com/d3/d3-selection/blob/master/README.md#selection_append)
*   [Text](https://github.com/d3/d3-selection/blob/master/README.md#selection_text)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:") Hint: 1

*   You will need to use `d3` to reference the D3 object and chain your methods

> _try to solve the problem now_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:") Hint: 2

*   To chain methods together, simply start the next one directly after the previous one has ended. The example shows this on separate lines to improve readability. Make sure not to put a semicolon after any of the methods or the code will break.

> _try to solve the problem now_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:") Hint: 3

*   The example shows exactly what is needed, all that needs to be changed are the parameters. E.g. replace 'ul' in the `select` method with 'body'.

> _try to solve the problem now_

## Spoiler Alert!

**Solution ahead!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":beginner:") Basic Code Solution:
```javascript
<body>
  <script>

    d3.select('body')
      .append('h1')
      .text('Learning D3');   

  </script>
</body>
```

# Code Explanation:

*   `d3` targets the D3 object
*   `.select('body')` uses the D3 `select` method to target the `body` HTML node
*   `.append('h1')` uses the D3 `append` method to "append" or attach an `h1` element to the `body` element
*   `.text('Learning D3')` uses the D3 `text` method to change the text of the `h1` element to 'Learning D3'
*   The semicolon ends the method chain, but is not required
*   Note that the methods are on separate lines for improved readability, as d3 method chains can get quite lengthy


## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ":clipboard:") NOTES FOR CONTRIBUTIONS:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":warning:") **DO NOT** add solutions that are similar to any existing solutions. If you think it is **_similar but better_**, then try to merge (or replace) the existing similar solution.
*   Add an explanation of your solution.
*   Categorize the solution in one of the following categories — **Basic**, **Intermediate** and **Advanced**. ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ":traffic_light:")
