---
title: Add Inline Styling to Elements
---
## Add Inline Styling to Elements

![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ":triangular_flag_on_post:") Remember to use <a>**`Read-Search-Ask`**</a> if you get stuck. Try to pair program ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ":busts_in_silhouette:") and write your own code ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":pencil:")

### Problem Explanation:

This challenge introduces the D3 `style` method, which takes 2 arguments: (key, value).

#### Relevant Links

*   [style](https://github.com/d3/d3-selection/blob/master/README.md#selection_style)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:") Hint: 1

*   Make sure both of your arguments are in quotations, single or double quotes will work

> _try to solve the problem now_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:") Hint: 2

*   In the example, `selection.style` refers to an arbitrary selected element, chain your `style` method to the existing method chain

> _try to solve the problem now_

## Spoiler Alert!

**Solution ahead!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":beginner:") Basic Code Solution:
```javascript
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];
    
    d3.select("body").selectAll("h2")
      .data(dataset)
      .enter()
      .append("h2")
      .text((d) => (d + " USD"))
      
      .style('font-family', 'verdana')
      
  </script>
</body>    
```

# Code Explanation:

*   the `style` method takes 2 arguments, the first is the key and the second the value
*   key in the `style` method is the property name that you would use in a CSS declaration
*   value is used just as a value would be used in a CSS declaration
*   Since we are in JavaScript and `style` is a method we are calling, quotes must be used for the arguments. Otherwise, the function would try to use the value of the **variables** `font-family` and `verdana`, which do not exist and would each throw a ReferenceError

#### Relevant Links

*   [style](https://github.com/d3/d3-selection/blob/master/README.md#selection_style)
*   [ReferenceError](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Not_defined)


## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ":clipboard:") NOTES FOR CONTRIBUTIONS:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":warning:") **DO NOT** add solutions that are similar to any existing solutions. If you think it is **_similar but better_**, then try to merge (or replace) the existing similar solution.
*   Add an explanation of your solution.
*   Categorize the solution in one of the following categories — **Basic**, **Intermediate** and **Advanced**. ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ":traffic_light:")
