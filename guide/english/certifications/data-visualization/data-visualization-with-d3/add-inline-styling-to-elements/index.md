---
title: Add Inline Styling to Elements
---
# Add Inline Styling to Elements


---
## Problem Explanation

This challenge introduces the D3 `style` method, which takes 2 arguments: (key, value).

#### Relevant Links

*   [style](https://github.com/d3/d3-selection/blob/master/README.md#selection_style)


---
## Hints

### Hint 1

*   Make sure both of your arguments are in quotations, single or double quotes will work

### Hint 2

*   In the example, `selection.style` refers to an arbitrary selected element, chain your `style` method to the existing method chain

<details><summary>Solution 1 (Click to Show/Hide)</summary>

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

#### Code Explanation

*   the `style` method takes 2 arguments, the first is the key and the second the value
*   key in the `style` method is the property name that you would use in a CSS declaration
*   value is used just as a value would be used in a CSS declaration
*   Since we are in JavaScript and `style` is a method we are calling, quotes must be used for the arguments. Otherwise, the function would try to use the value of the **variables** `font-family` and `verdana`, which do not exist and would each throw a ReferenceError

#### Relevant Links

*   [style](https://github.com/d3/d3-selection/blob/master/README.md#selection_style)
*   [ReferenceError](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Not_defined)

</details>

