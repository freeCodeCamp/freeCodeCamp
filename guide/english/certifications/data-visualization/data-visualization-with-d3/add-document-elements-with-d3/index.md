---
title: Add Document Elements with D3
---
# Add Document Elements with D3

---
## Problem Explanation

This challenge can be completed by referring to the example in the description and modifying the parameters to those that are in the instructions.

#### Relevant Links

From the official D3 Documentation:
*   [Select](https://github.com/d3/d3-selection/blob/master/README.md#select)
*   [Append](https://github.com/d3/d3-selection/blob/master/README.md#selection_append)
*   [Text](https://github.com/d3/d3-selection/blob/master/README.md#selection_text)


---
## Hints

### Hint 1

*   You will need to use `d3` to reference the D3 object and chain your methods


### Hint 2

*   To chain methods together, simply start the next one directly after the previous one has ended. The example shows this on separate lines to improve readability. Make sure not to put a semicolon after any of the methods or the code will break.


### Hint 3

*   The example shows exactly what is needed, all that needs to be changed are the parameters. E.g. replace 'ul' in the `select` method with 'body'.


<details><summary>Solution 1 (Click to Show/Hide)</summary>

```javascript
<body>
  <script>

    d3.select('body')
      .append('h1')
      .text('Learning D3');   

  </script>
</body>
```

#### Code Explanation

*   `d3` targets the D3 object
*   `.select('body')` uses the D3 `select` method to target the `body` HTML node
*   `.append('h1')` uses the D3 `append` method to "append" or attach an `h1` element to the `body` element
*   `.text('Learning D3')` uses the D3 `text` method to change the text of the `h1` element to 'Learning D3'
*   The semicolon ends the method chain, but is not required
*   Note that the methods are on separate lines for improved readability, as d3 method chains can get quite lengthy
</details>


