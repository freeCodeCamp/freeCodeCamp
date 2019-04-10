---
title: Work with Data in D3
---
## Work with Data in D3
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ":triangular_flag_on_post:") Remember to use <a>**`Read-Search-Ask`**</a> if you get stuck. Try to pair program ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ":busts_in_silhouette:") and write your own code ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":pencil:")

### Problem Explanation:

This challenge uses the `select`, `selectAll`, `append`, and `text` methods seen in previous challenges. It adds 2 new D3 methods: `data` and `enter` to target the given data and display an element on the page for each datum

#### Relevant Links

From the official D3 documentation:
*   [data](https://github.com/d3/d3-selection/blob/master/README.md#selection_data)
*   [enter](https://github.com/d3/d3-selection/blob/master/README.md#selection_enter)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:") Hint: 1

*   After selecting the correct HTML nodes, use the `data` method with the `dataset` variable passed as an argument to make the D3 object aware of the data

> _try to solve the problem now_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:") Hint: 2

*   Use the `enter` method to ensure that your HTML document has enough elements of the type you specified in `selectAll` for each datum

> _try to solve the problem now_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:") Hint: 3

*   Now that the D3 object is aware of your data and has created enough elements for each datum, `append` the elements of the specified type and add the `text` required in the instructions

> _try to solve the problem now_

## Spoiler Alert!

**Solution ahead!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":beginner:") Basic Code Solution:
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

# Code Explanation:

*   `d3` targets the D3 object
*   `select('body')` is used to `select` the 'body' element of the HTML document
*   `selectAll('h2')` is used to `selectAll` of the 'h2' elements that are children to 'body'
*   `data(dataset)` calls the D3 `data` method and uses the given dataset as an argument
*   `enter()` uses the D3 `enter` method to check the current number of elements selected and create any missing ones according to the amount needed by the dataset
*   `append('h2')` takes these newly created elements from `enter` and ensures they are created as 'h2' elements
*   `text('New Title')` changes the text of every element selected to 'New Title'
*   The dataset contains 9 datum, so the final solution should show 9 'h2' elements with the text 'New Title'


## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ":clipboard:") NOTES FOR CONTRIBUTIONS:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":warning:") **DO NOT** add solutions that are similar to any existing solutions. If you think it is **_similar but better_**, then try to merge (or replace) the existing similar solution.
*   Add an explanation of your solution.
*   Categorize the solution in one of the following categories — **Basic**, **Intermediate** and **Advanced**. ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ":traffic_light:")
