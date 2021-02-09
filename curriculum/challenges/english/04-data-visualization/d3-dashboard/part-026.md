---
id: 5d8a4cfbe6b6180ed9a1c9f7
title: Part 26
challengeType: 0
dashedName: part-26
---

# --description--

The range for this scale will go from the left of your graph to the right, with 2012 on the left and 2020 on the right. Add the `range` function to the `xScale` and pass it an array with the values: `svgMargin` and `svgWidth - svgMargin`. This will translate to `[70, 630]`. So 2012 will use 70 as is x-coordinate and 2020 will use 630 as its x-coordinate.

# --hints--

test-text

```js
const range = xScale.range();
assert(range.length === 2 && range[0] === 70 && range[1] === 630);
```

# --seed--

## --before-user-code--

```html
<!DOCTYPE html>
<html>
  <head>
    <title>D3 Dashboard</title>
    <style>
      body {
        background-color: #ccc;
        padding: 100px 10px;
      }

      .dashboard {
        width: 980px;
        height: 500px;
        background-color: white;
        box-shadow: 5px 5px 5px 5px #888;
        margin: auto;
        display: flex;
        align-items: center;
      }
    </style>
  </head>

  <body>
    <div class="dashboard"></div>
  </body>
</html>
```

## --seed-contents--

```html
<script>
  const data = [ 
    { year: 2012, followers: { twitter: 2594, tumblr:  401, instagram:   83 }},
    { year: 2013, followers: { twitter: 3049, tumblr:  440, instagram:  192 }},
    { year: 2014, followers: { twitter: 3511, tumblr:  415, instagram:  511 }},
    { year: 2015, followers: { twitter: 3619, tumblr:  492, instagram: 1014 }},
    { year: 2016, followers: { twitter: 4046, tumblr:  543, instagram: 2066 }},
    { year: 2017, followers: { twitter: 3991, tumblr:  701, instagram: 3032 }},
    { year: 2018, followers: { twitter: 3512, tumblr: 1522, instagram: 4512 }},
    { year: 2019, followers: { twitter: 3274, tumblr: 1989, instagram: 4715 }},
    { year: 2020, followers: { twitter: 2845, tumblr: 2040, instagram: 4801 }}
  ];
</script>
<script>
  const svgMargin = 70,
    svgWidth = 700,
    svgHeight = 500,
    twitterColor = '#7cd9d1',
    tumblrColor = '#f6dd71',
    instagramColor = '#fd9b98';

  const lineGraph = d3.select('.dashboard')
    .append('svg')
    .attr('width', svgWidth)
    .attr('height', svgHeight);

  const yScale = d3.scaleLinear()
    .domain([0, 5000])
    .range([svgHeight - svgMargin, svgMargin]);

  const xScale = d3.scaleLinear()
    .domain([2012, 2020])


</script>
```

# --solutions--

```html
<script>
  const data = [ 
    { year: 2012, followers: { twitter: 2594, tumblr:  401, instagram:   83 }},
    { year: 2013, followers: { twitter: 3049, tumblr:  440, instagram:  192 }},
    { year: 2014, followers: { twitter: 3511, tumblr:  415, instagram:  511 }},
    { year: 2015, followers: { twitter: 3619, tumblr:  492, instagram: 1014 }},
    { year: 2016, followers: { twitter: 4046, tumblr:  543, instagram: 2066 }},
    { year: 2017, followers: { twitter: 3991, tumblr:  701, instagram: 3032 }},
    { year: 2018, followers: { twitter: 3512, tumblr: 1522, instagram: 4512 }},
    { year: 2019, followers: { twitter: 3274, tumblr: 1989, instagram: 4715 }},
    { year: 2020, followers: { twitter: 2845, tumblr: 2040, instagram: 4801 }}
  ];
</script>
<script>
  const svgMargin = 70,
    svgWidth = 700,
    svgHeight = 500,
    twitterColor = '#7cd9d1',
    tumblrColor = '#f6dd71',
    instagramColor = '#fd9b98';

  const lineGraph = d3.select('.dashboard')
    .append('svg')
    .attr('width', svgWidth)
    .attr('height', svgHeight);

  const yScale = d3.scaleLinear()
    .domain([0, 5000])
    .range([svgHeight - svgMargin, svgMargin]);

  const xScale = d3.scaleLinear()
    .domain([2012, 2020])
    .range([svgMargin, svgWidth - svgMargin]);


</script>  
```
