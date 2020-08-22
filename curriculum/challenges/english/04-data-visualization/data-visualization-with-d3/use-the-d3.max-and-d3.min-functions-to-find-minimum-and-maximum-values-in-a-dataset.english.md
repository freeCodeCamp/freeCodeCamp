---
id: 587d7fac367417b2b2512bdc
title: Use the d3.max and d3.min Functions to Find Minimum and Maximum Values in a Dataset
challengeType: 6
isHidden: false
forumTopicId: 301496
---

## Description
<section id='description'>
The D3 methods <code>domain()</code> and <code>range()</code> set that information for your scale based on the data. There are a couple methods to make that easier.
Often when you set the domain, you'll want to use the minimum and maximum values within the data set. Trying to find these values manually, especially in a large data set, may cause errors.
D3 has two methods - <code>min()</code> and <code>max()</code> to return this information. Here's an example:

```js
const exampleData = [34, 234, 73, 90, 6, 52];
d3.min(exampleData) // Returns 6
d3.max(exampleData) // Returns 234
```

A dataset may have nested arrays, like the [x, y] coordinate pairs that were in the scatter plot example. In that case, you need to tell D3 how to calculate the maximum and minimum.
Fortunately, both the <code>min()</code> and <code>max()</code> methods take a callback function.
In this example, the callback function's argument <code>d</code> is for the current inner array. The callback needs to return the element from the inner array (the x or y value) over which you want to compute the maximum or minimum. Here's an example for how to find the min and max values with an array of arrays:

```js
const locationData = [[1, 7],[6, 3],[8, 3]];
// Returns the smallest number out of the first elements
const minX = d3.min(locationData, (d) => d[0]);
// minX compared 1, 6, and 8 and is set to 1
```

</section>

## Instructions
<section id='instructions'>
The <code>positionData</code> array holds sub arrays of x, y, and z coordinates. Use a D3 method to find the maximum value of the z coordinate (the third value) from the arrays and save it in the <code>output</code> variable.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The text in the <code>h2</code> should be 8.
    testString: assert(output == 8 && $('h2').text() == '8');
  - text: Your code should use the <code>max()</code> method.
    testString: assert(code.match(/\.max/g), 'Your code should use the <code>max()</code> method.')

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<body>
  <script>
    const positionData = [[1, 7, -4],[6, 3, 8],[2, 9, 3]]
    // Add your code below this line

    const output = undefined; // Change this line

    // Add your code above this line

    d3.select("body")
      .append("h2")
      .text(output)
  </script>
</body>
```

</div>



</section>

## Solution
<section id='solution'>

```html
<body>
  <script>
    const positionData = [[1, 7, -4],[6, 3, 8],[2, 9, 3]]

    const output = d3.max(positionData, (d) => d[2])

    d3.select("body")
      .append("h2")
      .text(output)
  </script>
</body>

```

</section>
