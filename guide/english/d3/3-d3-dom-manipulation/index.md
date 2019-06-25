---
title: Modifying elements in D3
---

## Introduction

We took a detailed look at various functions used to select DOM elements in D3 in the **D3 DOM Selectors** section. There we used many functions such as `style`, `attr` and `html` to perform changes on the selected items, in this section we shall take a detailed look at these functions used for Modifying elements. Any of these functions can be chained together to perform any number of changes.

## style()

The `style` function is used to change the style of an element, it will add the style to the elements existing styles.

```javascript
d3.select('h1')
  .style('text-decoration', 'overline')
  .style('color', 'red');
```

Notice how we changed the text-decoration and color of an `<h1>` element selected using `d3.select`. As we discussed earlier notice how we were able to chain two style calls together.

## attr()

`attr` function can be used to change or add any attribute to a selected element.

```javascript
d3.select('div')
  .attr('background', '#1547e2')
  .attr('class', 'big');
```

Here we are setting the background color of a selected division to be `#1547e2` and its class to `big`.

## classed()

Notice how we added a class to a `div` in the previous example using `attr()`, consider a case where we only want to add or remove a class from an existing list of classes. This is where `classed()` comes into action. You can use classed to add/remove a class from the existing class attribute.

```html
<div class="classone classtwo classthree"></div>
<script>
    d3.select('div')
        .classed('classtwo', false)
        .classed('classfour', true);
</script>
```

The above example will remove the class named `classtwo` from the list of classes we provided for the `div` element in the html, and add a new class named `classfour`.

## text() and html()

`text()` can be used to change the text content inside an element. On the other hand `html()` can be used to add any html content into element.

```javascript
// text()
d3.select('div').text('New Text');

// html()
d3.select('div').html('<span>Awesome</span>');
```

## property()

`property()` can be used to change a property of an element like `checked`. The same can be done with attribute too.

```html
<input type="checkbox">
<script>
    d3.select('input[type=checkbox]')
        .attr('checked', true);
</script>
```

## Using functions for updations

In all of the above examples we have used the second argument directly, but you could also use a function to return your required values.

```html
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<script>
    d3.selectAll('div')
        .style('background', function (d, i) {
            if (i % 2 == 0) {
                // even
                return 'red';
            }
            return 'green';
        })
        .style('height', '20px');
</script>
```
The function can have two arguments supplied to it, the first one named `d` in the above example will be given if you have any data joined to your selection, checkout D3 data joins section for more information. The second argument is the index `i` of the selected items. We are actually using this information to determine whether the div is even or odd and return the color red when it is even and green color when odd.

Normally we use anonymous functions as the arguments but you can also use named functions. For example :
```html
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<script>
    function evenColor(d, i) {
        if (i % 2 == 0) {
            // even
            return 'red';
        }
        return 'green';
    }

    d3.selectAll('div')
        .style('background', evenColor)
        .style('height', '20px');
</script>
```
Both of the above examples gives the same result. So if you have some reusable logic, then it is always better to use a named function.

## Adding Event Handlers
D3 is very much known for interactable data visualizations. Having to handle events is a huge part of supporting interactions. You can add event handlers to your selection by using the `on()` function.

```html
<button>Click me to change my color</button>
<script>
    d3.selectAll('button')
        .on('click', function (d, i) {
            d3.select(this)
                .style('background', 'red');
        });
</script>
```
One thing you may notice here is that we are using the arguments `d` and `i` as mentioned before, these work the same way. One thing that is additional here is the context `this`, it refers to the element that triggered the event, but since it is a DOM element we have to select it using `d3.select()` inorder for it to be used as a d3 element selection.

## References
- https://github.com/d3/d3-selection/blob/master/README.md#modifying-elements
