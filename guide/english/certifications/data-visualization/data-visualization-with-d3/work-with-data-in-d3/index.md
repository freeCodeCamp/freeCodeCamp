---
title: Work with Data in D3
---
# Work with Data in D3

---
## Problem Explanation

This challenge uses the `select`, `selectAll`, `append`, and `text` methods seen in previous challenges. It adds 2 new D3 methods: `data` and `enter` to target the given data and display an element on the page for each datum

#### Relevant Links

From the official D3 documentation:
*   [data](https://github.com/d3/d3-selection/blob/master/README.md#selection_data)
*   [enter](https://github.com/d3/d3-selection/blob/master/README.md#selection_enter)


---
## Hints

### Hint 1

*   After selecting the correct HTML nodes, use the `data` method with the `dataset` variable passed as an argument to make the D3 object aware of the data


### Hint 2

*   Use the `enter` method to ensure that your HTML document has enough elements of the type you specified in `selectAll` for each datum


### Hint 3

*   Now that the D3 object is aware of your data and has created enough elements for each datum, `append` the elements of the specified type and add the `text` required in the instructions



---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

```javascript
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];
    
    d3.select('body').selectAll('h2')
      .data(dataset)
      .enter()
      .append('h2')
      .text('New Title');
    
  </script>
</body>    
```

#### Code Explanation

*   `d3` targets the D3 object
*   `select('body')` is used to `select` the 'body' element of the HTML document
*   `selectAll('h2')` is used to `selectAll` of the 'h2' elements that are children to 'body'
*   `data(dataset)` calls the D3 `data` method and uses the given dataset as an argument
*   `enter()` uses the D3 `enter` method to check the current number of elements selected and create any missing ones according to the amount needed by the dataset
*   `append('h2')` takes these newly created elements from `enter` and ensures they are created as 'h2' elements
*   `text('New Title')` changes the text of every element selected to 'New Title'
*   The dataset contains 9 datum, so the final solution should show 9 'h2' elements with the text 'New Title'
</details>


