---
title: D3 Data Joins
---

## Data Joins

Being able to relate data elements to the actual graphical representations is very helpful when you are creating a data driven document. **D3 Data Joins** enables you to attach data to each element of your selection. For example:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>D3</title>
    <script src="https://d3js.org/d3.v5.min.js"></script>
  </head>

  <body>
    <svg>
      <rect></rect>
      <rect></rect>
      <rect></rect>
      <rect></rect>
      <rect></rect>
    </svg>
    <script>
      var marks = [90, 10, 30, 80, 30];
      var width = 700;
      var height = 400;
      var barHeight = height / marks.length;
      var barGap = 3;

      var svg = d3
        .select('svg')
        .attr('width', width)
        .attr('height', height);

      svg
        .selectAll('rect')
        .data(marks)
        .attr('height', function(d, i) {
          return barHeight - barGap;
        })
        .attr('width', function(d) {
          return width * (d / 100);
        })
        .attr('fill', '#1547e2')
        .attr('transform', function(d, i) {
          return 'translate(' + [0, i * barHeight] + ')';
        });
    </script>
  </body>
</html>
```

In the above example we are using a function `data()` on the selection of rectangles we are making from the `svg`. What the `data(marks)` does is it joins each element of the array marks with each elements in the selection obtained by the `selectAll('rect')` call we are performing on the `svg`. Notice that the number of rectangles inside the svg is equal to the number of items in our marks array.

The DOM modification code we chain after the `data()` call is executed for each of the selection, this enables us to change the attributes of each of the rectangle to represent our data. While setting the width of the rectangle we are finding the percentage of the total width assuming the maximum marks that can be obtained is out of hundred. Notice how each of the chained functions obtain the data as an argument. Which will change for each of the selection, first selection will get the value `90` which is the first element in the array.

## Under the hood

Wondering what D3 does when a data is joined with an element ? It assign the data as a attribute named `__data__`. This can be a useful piece of information as it enables us to obtain the data attached to a DOM element by referring to the `__data__` property.

## datum()

`datum()` is another data join function that can be useful in some cases as sometimes we obtain the data from the source not as an array but a complex object. Lets assume the data was provided as below:

```javascript
var studentMark = {
  Name: 'John Datum',
  Class: 'S3 CS',
  Marks: [
    {
      Subject: 'Data Structures',
      Marks: 90
    },
    {
      Subject: 'Theory of Computation',
      Marks: 70
    },
    {
      Subject: 'Mathematics',
      Marks: 80
    },
    {
      Subject: 'Web Programming',
      Marks: 95
    },
    {
      Subject: 'Software Architecture',
      Marks: 100
    }
  ]
};
```

As you may have noticed, we need to join the marks array, but the data we obtained is not an immediate array. And we may also have to represent other elements. We can use datum in such cases, as shown below:

```javascript
var width = 700;
var height = 400;
var barHeight = height / studentMarks.Marks.length;
var barGap = 3;

var svg = d3
  .select('svg')
  .attr('width', width)
  .attr('height', height)
  .datum(studentMarks);

svg
  .append('text')
  .text(function(d) {
    return d.Name + '(' + d.Class + ')';
  })
  .attr('dy', 20)
  .attr('dx', 5)
  .attr('fill', '#fff');

svg
  .selectAll('rect')
  .data(function(d) {
    return d.Marks;
  })
  .attr('height', function(d, i) {
    return barHeight - barGap;
  })
  .attr('width', function(d) {
    return width * (d.Marks / 100);
  })
  .attr('fill', '#1547e2')
  .attr('transform', function(d, i) {
    return 'translate(' + [0, i * barHeight] + ')';
  });
```

## References

- https://github.com/d3/d3-selection#joining-data
