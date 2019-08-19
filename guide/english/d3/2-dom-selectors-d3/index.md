---
title: Dom Selectors in D3
---

## Introduction

You can use D3 to select DOM elements inorder to perform some actions on them, like changing its attributes or perform data joins, for example:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>D3</title>
    <script src="https://d3js.org/d3.v5.min.js"></script>
  </head>

  <body>
    <h1>Welcome To D3</h1>
    <script>
      d3.select('h1').style('color', 'red');
    </script>
  </body>
</html>
```

Notice that the color of the h1 tag changing to `red`. There are two D3 functions for selecting DOM elements, `d3.select` and `d3.selectAll`. Both functions takes css selectors as its argument.

## d3.select

As the difference in names suggests, `d3.select` can be used to select the first element that matches the css selector provided as argument. `d3.select('#id')`, `d3.select('.classes')`, `d3.select('d3.select')` are all valid examples. The selected element can then be used to change its properties. These can be chained endlessly inorder to perform multiple modifications. For example:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>D3</title>
    <script src="https://d3js.org/d3.v5.min.js"></script>
    <style>
      html {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      }

      .light {
        font-weight: 400;
      }
    </style>
  </head>

  <body>
    <h1>Welcome To D3</h1>
    <script>
      d3.select('h1')
        .style('color', 'red')
        .attr('class', 'light')
        .html('D3 Rocks');
    </script>
  </body>
</html>
```

## d3.selectAll

This function can be used to select all occurences matched by a CSS selector provided as an argument. We can the use functions like `each` to perform actions on all of them. `d3.selectAll` is more powerful when used with data joins, which we will cover in a later chapter.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>D3</title>
    <script src="https://d3js.org/d3.v5.min.js"></script>
    <style>
      html {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      }

      div {
        background: #115a77;
        height: 20px;
        margin: 5px;
        padding: 10px;
      }

      div span {
        color: #fff;
      }
    </style>
  </head>

  <body>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <script>
      d3.selectAll('div').each(function(d, i) {
        d3.select(this)
          .style('width', (i + 1) * 20 + 'px')
          .append('span')
          .html(i + 1);
      });
    </script>
  </body>
</html>
```

Notice how we provided a function as the argument for `each` and it also takes two arguments. The first argument `d` is associated with one of the powerful aspects of **D3** namely data joins. If you had used data joins you'll be able to get that data as `d`. Next argument is `i` is the `0` based index of the selected items, we are using this argument to change the width of the divisions based on their occurence in the selection. For a detailed overview of functions like `append` and `html` refer the [official documentation](https://github.com/d3/d3-selection/blob/master/README.md#modifying-elements).

## Chaining

You can also use the select in a chained fashion. Inorder to select

## References

- https://github.com/d3/d3-selection/blob/master/README.md
- https://github.com/d3/d3-selection/blob/master/README.md#modifying-elements
