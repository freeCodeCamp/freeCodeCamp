---
title: Managing Data Changes
---

## Managing Data Changes in D3

Almost always the data provided to us will change in values and number of data points. D3 handles the data changes using two functions `enter()` and `exit()`. Once data is joined to a selection, you can use these functions to create new or remove/update existing elements.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>D3</title>
    <script src="https://d3js.org/d3.v5.min.js"></script>
    <style>
      div {
        width: 50px;
        height: 50px;
        background: #2d8dcc;
        color: #fff;
        display: inline-block;
        margin-right: 5px;
      }
    </style>
  </head>

  <body>
    <script>
      var data = [10, 20, 30, 40, 50, 60, 70, 80, 90];
      function redrawDivisions() {
        d3.selectAll('div')
          .data(data)
          .enter()
          .append('div')
          .text(function(d) {
            return d;
          });
      }

      redrawDivisions();
    </script>
  </body>
</html>
```

In the above code we do not have any `div` elements already defined. We are joining the `data` array to the `div` selection and then appending `div` elements to the selection according to the data available. We are using `enter()` for this purpose, `enter()` identifies DOM elements that needs to be added according to the data provided. In this case since we have no elements matching the selection all of them will be added.

Notice how we are able to obtain the exact amount of divs as there are elements in the array. Now lets take a look at how we can add more to these, when an update occurs.

```javascript
var data = [10, 20, 30, 40, 50, 60, 70, 80, 90];

var body = d3.select('body');

// Add button for Adding More data
body
  .append('button')
  .text('Add More Data')
  .on('click', addData);

// Add button for updating existing data
body
  .append('button')
  .text('Update Data')
  .on('click', updateData);

function redrawDivisions() {
  var d = d3.selectAll('div').data(data);

  // update existing
  d.text(function(d) {
    return d;
  });

  // add new elements
  d.enter()
    .append('div')
    .text(function(d) {
      return d;
    });
}

function addData() {
  for (var i = 0; i < 4; i++) {
    data.push(Math.round(i * Math.random() * 10));
  }

  redrawDivisions();
}

function updateData() {
  for (var i = 0; i < data.length; i++) {
    data[i] = Math.round(i * Math.random() * 10);
  }

  redrawDivisions();
}

redrawDivisions();
```

Notice that we added two buttons for adding new data items in to our array and also for updating our existing array with new items. And we had to make changes to the `redrawDivisions()` function inorder for everything to work correctly.

We are taking the reference of the selection of divs. This needs to be used as the base for both the adding and updating of elements.

```javascript
var d = d3.selectAll('div').data(data);
```

This section will update the existing elements in dom.

```javascript
d.text(function(d) {
  return d;
});
```

This section will add new divs.

```javascript
d.enter()
  .append('div')
  .text(function(d) {
    return d;
  });
```

## Handling removals using exit()

As we pointed out earlier data can also be removed when a change occurs, our current code does not support removal of existing elements when data changes, lets confirm this by adding a new button for removing last 4 elements of the existing array.

```javascript
body
  .append('button')
  .text('Remove Data')
  .on('click', removeData);

function removeData() {
  for (var i = 0; i < 4; i++) {
    data.pop();
  }

  redrawDivisions();
}
```

As you may have noticed adding this code and changing the array doesn't change the view or remove existing elements. This is where `exit()` comes in to play, `exit()` can be used to exit after adding new elements, usually we can then obtain the selection of dom elements that needs to be removed. We can remove them using `remove()` function. Lets try adding exit to our existing function `redrawDivisions()`.

```javascript
d.exit().remove();
```

Adding this code to the end of our `redrawDivisions()` function enable us to remove old elements that are not needed anymore.

## References

- https://github.com/d3/d3-selection#joining-data
