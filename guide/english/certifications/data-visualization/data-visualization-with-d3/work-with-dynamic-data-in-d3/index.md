---
title: Work with Dynamic Data in D3
---
## Work with Dynamic Data in D3

![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ":triangular_flag_on_post:") Remember to use <a>**`Read-Search-Ask`**</a> if you get stuck. Try to pair program ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ":busts_in_silhouette:") and write your own code ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":pencil:")

### Problem Explanation:

This challenge introduces using JavaScript callback functions as arguments to D3 methods. Since D3 is a JavaScript object, it has no problem following the same syntax rules

#### Relevant Links

*   [JavaScript Callback Function](https://developer.mozilla.org/en-US/docs/Glossary/Callback_function)
*   [JavaScript Arrow Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:") Hint: 1

*   As in the example, your callback function should target each datum, `d` is used for brevity and as convention for each datum

> _try to solve the problem now_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:") Hint: 2

*   All of the methods are chained together. Since `data()` and `enter()` precede the `text()` method, the following method calls will be for each datum and executed separately

> _try to solve the problem now_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:") Hint: 3

*   As in the example, use an arrow function to target each `d` as a parameter and insert that parameter as a variable into the `text()` method

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
      
      .text((d) => d + ' USD');
      
  </script>
</body>    
```
# Code Explanation:

*   `d3` is used to target the D3 object
*   `select('body')` targets the 'body' element of the HTML document
*   `selectAll('h2')` targets the existing 'h2' nodes that are children to the 'body' element
*   `data(dataset)` tells D3 that the data to be used is held within the variable `dataset`
*   `enter()` returns placeholder nodes for each datum that has no corresponding DOM element in the selection
*   `append('h2')` turns these placesholders in to 'h2' elements
*   `text((d) => d + ' USD')` uses JavaScripts callback functionality to insert each datum, `d`, as the text for each 'h2' node created previously and concatenates the required ' USD'


#### Relevant Links

*   [JavaScript Callback Function](https://developer.mozilla.org/en-US/docs/Glossary/Callback_function)
*   [JavaScript Arrow Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 ":sunflower:") Intermediate Code Solution:
```javascript
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];
    
    d3.select("body").selectAll("h2")
      .data(dataset)
      .enter()
      .append("h2")
      
      .text((d) => `${d} USD`);
      
  </script>
</body>    
```

# Code Explanation:

*   `d3` is used to target the D3 object
*   `select('body')` targets the 'body' element of the HTML document
*   `selectAll('h2')` targets the existing 'h2' nodes that are children to the 'body' element
*   `data(dataset)` tells D3 that the data to be used is held within the variable `dataset`
*   `enter()` returns placeholder nodes for each datum that has no corresponding DOM element in the selection
*   `append('h2')` turns these placesholders in to 'h2' elements
*   `text((d) => ```${d} USD```)` uses JavaScripts callback functionality to insert each datum, `d`, as the text for each 'h2' node created previously. It also makes use of JavaScript template literals to avoid string concatenation


#### Relevant Links

*   [JavaScript Callback Function](https://developer.mozilla.org/en-US/docs/Glossary/Callback_function)
*   [JavaScript Arrow Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
*   [JavaScript Template Literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ":clipboard:") NOTES FOR CONTRIBUTIONS:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":warning:") **DO NOT** add solutions that are similar to any existing solutions. If you think it is **_similar but better_**, then try to merge (or replace) the existing similar solution.
*   Add an explanation of your solution.
*   Categorize the solution in one of the following categories — **Basic**, **Intermediate** and **Advanced**. ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ":traffic_light:")
