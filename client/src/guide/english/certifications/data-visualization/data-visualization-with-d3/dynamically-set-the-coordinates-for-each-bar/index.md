---
title: Dynamically Set the Coordinates for Each Bar
---
## Dynamically Set the Coordinates for Each Bar

The last challenge created and appended a rectangle to the ``` svg ``` element for each point in dataset to represent a bar. Unfortunately, they were all stacked on top of each other.

The placement of a rectangle is handled by the x and y attributes. They tell D3 where to start drawing the shape in the svg area. The last challenge set them each to ``` 0 ```, so every bar was placed in the upper-left corner.

For moving the bars, we need to change the x attribute for each element to move them along the x-axis.

Remember that larger x values push items farther to the right. As you go through the array elements in dataset, the x value should increase.

The ``` attr() ``` method in D3 accepts a callback function to dynamically set that attribute. The callback function takes two arguments, one for the data point itself (usually d) and one for the index of the data point in the array. The second argument for the index is optional. Here's the syntax:

```javascript
selection.attr("property", (d, i) => {
  /* 
  * d is the data point value
  * i is the index of the data point in the array
  */
})
```
### Note

It's important to note that you do NOT need to write a ``` for ``` loop or use ``` forEach() ``` to iterate over the items in the data set. Recall that the ``` data() ``` method parses the data set, and any method that's chained after ``` data() ``` is run once for each item in the data set.

### Solution

Change the ``` .attr() ``` method with the callback to:

```javascript
.attr("x", (d, i) => {
    return i*30;
})
```

##### Note
Each bar has a width of 25, so increasing each x value by 30 adds some space between the bars. Any value greater than 25 would work in this example.