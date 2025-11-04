---
id: bd7168d8c242eddfaeb5bd13
title: Build a Bar Chart
challengeType: 25
dashedName: build-a-bar-chart
demoType: onClick
---

# --description--

In this project you will use the data from `https://cdn.freecodecamp.org/project-data/bar-chart/GDP-data.json` to build a bar chart.

The tests require axes to be generated using the D3 axis property, which automatically generates ticks along the axis. These ticks are required for passing the D3 tests because their positions are used to determine alignment of graphed elements.

**Objective:** Fulfill the user stories below and get all the tests to pass to complete the lab.

**User Stories:**

1. Your chart should have a title with a corresponding `id="title"`.
1. Your chart should have a `g` element x-axis with a corresponding `id="x-axis"`.
1. Your chart should have a `g` element y-axis with a corresponding `id="y-axis"`.
1. Both axes should contain multiple tick labels, each with a corresponding `class="tick"`.
1. Your chart should have a `rect` element for each data point with a corresponding `class="bar"` displaying the data.
1. Each `.bar` should have the properties `data-date` and `data-gdp` containing `date` and `GDP` values.
1. The `.bar` elements' `data-date` properties should match the order of the provided data.
1. The `.bar` elements' `data-gdp` properties should match the order of the provided data.
1. Each `.bar` element's height should accurately represent the data's corresponding `GDP`.
1. The `data-date` attribute and its corresponding `.bar` element should align with the corresponding value on the x-axis.
1. The `data-gdp` attribute and its corresponding `.bar` element should align with the corresponding value on the y-axis.
1. You should be able to mouse over an area and see a tooltip with a corresponding `id="tooltip"` which displays more information about the area.
1. Your tooltip should have a `data-date` property that corresponds to the `data-date` of the active area.

# --before-each--

```js
function areShapesAlignedWithTicks(
  // NodeList
  shapeCollection,
  // NodeList
  ticksCollection,
  // String: 'x', 'y', 'cx', or 'cy'
  dimension,
  // String: 'data-year', 'data-gdp', 'data-date', 'data-xvalue', 'data-yvalue'
  dataAttribute,
  // String: 'year', 'minute', 'thousand', 'month'
  dataType,
  // Shape vertex to compare to axis: String: 'topLeft' or 'center'
  positionType
) {
  // return early if no shapes
  if (shapeCollection.length === 0) {
    return false;
  }
  let aligned = 0;

  // get either 'x' or 'y' in case of 'cx' or 'cy'
  const coord = dimension.match(/c/g) ? dimension.split('c')[1] : dimension;

  let tickValues = [].map.call(ticksCollection, (tick) =>
    getTickValue(tick, dataType)
  );
  const normalValueOrder = tickValues[tickValues.length - 1] > tickValues[0];

  // increment may be positive or negative based on axis sort order
  const increment = tickValues[1] - tickValues[0];
  tickValues = [
    tickValues[0] - increment,
    ...tickValues,
    tickValues[tickValues.length - 1] + increment
  ];

  let tickPositions = [].map.call(
    ticksCollection,
    (tick) => getTickPosition(tick)[coord]
  );
  const normalPositionOrder = tickPositions[1] > tickPositions[0];
  // positionIncrement may be positive or negative based on axis sort order
  const positionIncrement = tickPositions[1] - tickPositions[0];
  tickPositions = [
    tickPositions[0] - positionIncrement,
    ...tickPositions,
    tickPositions[tickPositions.length - 1] + positionIncrement
  ];

  shapeCollection.forEach(function (shape) {
    let pos = getShapePosition(shape, dimension, positionType);
    let val = getShapeValue(shape, dataAttribute, dataType);
    // index is initially off (either -1 or ticksCollection.length), then
    // _getSurroundingTicks increments or decrements according to sort order

    let surroundingTicks = _getSurroundingTicks(
      val,
      tickValues,
      normalValueOrder
    );

    if (surroundingTicks.length > 0) {
      let prevTick, nextTick;
      if (normalPositionOrder) {
        [prevTick, nextTick] = surroundingTicks;
      } else {
        [nextTick, prevTick] = surroundingTicks;
      }

      let prevPos = tickPositions[prevTick];
      let nextPos = tickPositions[nextTick];

      // If shape is positioned between the two ticks plus or minus 3px
      // A leeway is necessary for this code to work on all chart types.
      if (prevPos - 3 <= pos && pos <= nextPos + 3) {
        aligned++;
      }
    }
  });
  return aligned === shapeCollection.length;
}

function isToolTipHidden(tooltip) {
  // Test for width or height of 0
  // code is taken from https://github.com/jquery/jquery/blob/main/src/css/hiddenVisibleSelectors.js
  // this code is a replacement for jquery .is(':hidden').
  // Test for opacity: 0, visibility: hidden, and display: none
  // z-index and potentially others are not tested
  const { display, opacity, visibility } = window.getComputedStyle(
    tooltip,
    null
  );
  return (
    !(
      tooltip.offsetWidth ||
      tooltip.offsetHeight ||
      tooltip.getClientRects().length
    ) ||
    opacity === '0' ||
    visibility === 'hidden' ||
    display === 'none'
  );
}

function getRandomIndex(max) {
  return Math.floor(Math.random() * max);
}

function getTickValue(item, dataType) {
  let val = item.querySelector('text').innerHTML;
  switch (dataType) {
    case 'minute':
      val =
        parseInt(val.split(':')[0], 10) + parseInt(val.split(':')[1], 10) / 60;
      break;
    case 'month':
      val = months.indexOf(val.toLowerCase());
      break;
    case 'thousand':
      val = val.split(',').join('');
      break;
    default:
      break;
  }
  return parseFloat(val);
}

function getTickPosition(tick) {
  let x, y;

  if (!tick.querySelector('line')) {
    throw new Error('Tick does not contain the required line element.');
  }

  y = tick.querySelector('line').getBoundingClientRect().top;
  x = tick.querySelector('line').getBoundingClientRect().left;

  return { x: x, y: y };
}

function getShapePosition(item, dimension, positionType) {
  let bounds = item.getBoundingClientRect(),
    pos = /y/g.test(dimension) ? bounds.top : bounds.left;
  if (positionType === 'center') {
    pos += (/y/g.test(dimension) ? bounds.height : bounds.width) / 2;
  }
  return pos;
}

function getShapeValue(item, attribute, dataType) {
  let val;
  switch (dataType) {
    case 'year':
      val = new Date(item.getAttribute(attribute)).getFullYear();
      break;
    case 'minute':
      val =
        new Date(item.getAttribute(attribute)).getMinutes() +
        new Date(item.getAttribute(attribute)).getSeconds() / 60;
      break;
    case 'month':
      val = isNaN(parseInt(item.getAttribute(attribute), 10))
        ? months.indexOf(item.getAttribute(attribute).toLowerCase())
        : item.getAttribute(attribute);
      break;
    default:
      val = item.getAttribute(attribute);
  }
  return parseFloat(val);
}

function _getSurroundingTicks(value, ticks, normalTickOrder) {
  let leftIndex = 0;
  let rightIndex = ticks.length;

  // Use binary search to find an index before which to insert the value
  while (leftIndex !== rightIndex) {
    let midIndex = Math.floor((leftIndex + rightIndex) / 2);
    if (ticks[midIndex] === value) {
      leftIndex = rightIndex = midIndex + 1;
    } else if (
      (normalTickOrder && ticks[midIndex] > value) ||
      (!normalTickOrder && ticks[midIndex] < value)
    ) {
      rightIndex = midIndex;
    } else {
      leftIndex = midIndex + 1;
    }
  }

  if (leftIndex === 0 || leftIndex === ticks.length) {
    return [];
  }
  return [leftIndex - 1, leftIndex];
}
```

# --hints--

The chart should have an element with the `id` of `title` to contain the title.

```js
assert.exists(document.getElementById('title'));
```

The chart should have a `g` element x-axis with a corresponging id `x-axis`.

```js
__helpers.retryingTest(() => document.querySelector('g#x-axis'), "g element with id x-axis not found");
```

The chart should have a `g` element y-axis with a corresponding id `y-axis`.

```js
__helpers.retryingTest(() => document.querySelector('g#y-axis'), 'element g#y-axis not found');
```

The x axe should contain multiple tick labels, eaxh with the corresponding `class="tick"`.

```js
__helpers.retryingTest(() => document.querySelectorAll('#x-axis .tick').length > 1, 'There are not enough tick labels on the x-axis');
```

The y axe should contain multiple tick labels, eaxh with the corresponding `class="tick"`.

```js
__helpers.retryingTest(() => document.querySelectorAll('#y-axis .tick').length > 1, 'There are not enough tick labels on the y-axis');
```

My Chart should have a <rect> element for each data point with a corresponding class="bar" displaying the data

```js
__helpers.retryingTest(() => document.querySelectorAll('rect.bar').length === 275, "The number of bars is not equal to the number of data points");
```

Each bar should have the properties "data-date" and "data-gdp" containing date and GDP values

```js
__helpers.retryingTest(() => {
  const bars = document.querySelectorAll('rect.bar');
  if (!bars) return;

  return [...bars].every(bar => bar.hasAttribute('data-date') && bar.hasAttribute('data-gdp'));
}, "data-date or data-gdp attribute not found in all .bar elements");
```

The bar elements' "data-date" properties should match the order of the provided data

```js
const res = await fetch(
          'https://cdn.freecodecamp.org/project-data/bar-chart/GDP-data.json'
        );

if (res.ok) {
  const json = await res.json();
  __helpers.retryingTest(() => {
    const bars = document.querySelectorAll('rect.bar');
    if (!bars) return;

    return [...bars].every((bar, i) => bar.getAttribute('data-date') === json.data[i][0]);

  },  'Bars should have date data in the same order as the ' + 
                'provided data ');
} else {
  assert.fail('JSON data not available')
}
```

The bar elements' "data-gdp" properties should match the order of the provided data

```js
const res = await fetch(
          'https://cdn.freecodecamp.org/project-data/bar-chart/GDP-data.json'
        );

if (res.ok) {
  const json = await res.json();
  __helpers.retryingTest(() => {
    const bars = document.querySelectorAll('rect.bar');
    if (!bars) return;

    return [...bars].every((bar, i) => bar.getAttribute('data-gdp') === json.data[i][1]);

  },  'Bars should have gdp data in the same order as the ' + 
                'provided data ');
} else {
  assert.fail('JSON data not available')
}
```

Each bar element's height should accurately represent the data's corresponding GDP

```js
__helpers.retryingTest(() => {
  const bars = document.querySelectorAll('rect.bar');
  // get the ratio of the first data point to the height of the first bar
  const firstRatio =
    parseFloat(bars[0]?.getAttribute('data-gdp')) /
    parseFloat(bars[0]?.getAttribute('height'));

  return [...bars].every(function (bar) {
    const dataValue = bar.getAttribute('data-gdp');
    const barHeight = bar.getAttribute('height');
    const ratio = parseFloat(dataValue) / parseFloat(barHeight);
    return firstRatio.toFixed(3) === ratio.toFixed(3);
  })
}, 'The heights of the bars should correspond to the data values');
```

The data-date attribute and its corresponding bar element should align with the corresponding value on the x-axis.

```js
__helpers.retryingTest(function () {
        const axis = document.querySelector('#x-axis');
        const coordAttr = 'x';
        const barsCollection = document.querySelectorAll('.bar');
        const ticksCollection = axis.querySelectorAll('.tick');
        const shapeAttr = 'data-date';
        // options are 'minute', 'month', 'thousand', and 'year'
        const dataType = 'year' || Date;
        // what vertex of shape to measure against the axis
        // options are 'topLeft' and 'center'
        const shapeAlign = 'topLeft';

        if (!barsCollection) return;

        return areShapesAlignedWithTicks(
            barsCollection,
            ticksCollection,
            coordAttr,
            shapeAttr,
            dataType,
            shapeAlign
          )

      }, "");
```

The data-gdp attribute and its corresponding bar element should align with the corresponding value on the y-axis.

```js
__helpers.retryingTest(function () {
  const axis = document.querySelector('#y-axis');
  const coordAttr = 'y';
  const barsCollection = document.querySelectorAll('.bar');
  const ticksCollection = axis.querySelectorAll('.tick');
  const shapeAttr = 'data-gdp';
  const dataType = 'thousand';
  const shapeAlign = 'topLeft';

  if (!barsCollection) return;

  return areShapesAlignedWithTicks(
    barsCollection,
    ticksCollection,
    coordAttr,
    shapeAttr,
    dataType,
    shapeAlign
  )

}, "")
```

When hovering over an area your bar chart should have a tooptip with a corresponding `id="tooltip"` which displays more information about the area.

```js
__helpers.retryingTest(async function () {
  const areas = document.querySelectorAll('.bar');
  let pass = true;
  const firstRequestTimeout = 500;
  const secondRequestTimeout = 2000;

  this.timeout(firstRequestTimeout + secondRequestTimeout + 1000);

  // Place mouse on random bar and check if tooltip is visible.
  const randomIndex = getRandomIndex(areas.length);
  const randomArea = areas[randomIndex];
  triggerMouseEvent(randomArea, 'mouseover');
  triggerMouseEvent(randomArea, 'mousemove');
  triggerMouseEvent(randomArea, 'mouseenter');

  // Timeout is used to accommodate tooltip transitions.
  await timeout(firstRequestTimeout);

  const tooltip = document.getElementById('tooltip');

  if (!tooltip) pass = false; // should exists

  if (tooltip) { // can't do the following if it does not exist
    const hidden = isToolTipHidden(tooltip);
    if (hidden) pass = false; // should not be hidden
  }
       
  // Remove mouse from cell and check if tooltip is hidden again.
  triggerMouseEvent(randomArea, 'mouseout');
  triggerMouseEvent(randomArea, 'mouseleave');
  
  await timeout(secondRequestTimeout);

  if (tooltip) {
    const hidden = isToolTipHidden(tooltip);
    if (!hidden) pass = false; // should be hidden
  }
    

  return pass;

}, "The tooltip should appear when mousing over a bar");
```

The tooltip should have a `"data-date"` property that corresponds to the `"date-data"` of the active area.

```js
__helpers.retryingTest(async function () {
  let pass = true;
  const areas = document.querySelectorAll('.bar');
  const randomIndex = getRandomIndex(areas.length);
  const randomArea = areas[randomIndex];

  triggerMouseEvent(randomArea, 'mouseover');
  triggerMouseEvent(randomArea, 'mousemove');
  triggerMouseEvent(randomArea, 'mouseenter');

  // Timeout is used to accommodate tooltip transitions.
  await timeout(500);
        
  const tooltip = document.getElementById('tooltip');

  if (!tooltip) pass = false;

  if (tooltip) {
    const hasAttribute = tooltip.hasAttribute('data-date');

    if (!hasAttribute) pass = false;

    const tooltipAttr = tooltip.getAttribute('data-date');
    const randomAreaAttr = randomArea.getAttribute('data-date');
  }

  triggerMouseEvent(randomArea, 'mouseout');
  triggerMouseEvent(randomArea, 'mouseleave')

  return pass;
}, "The tooltip does not have the correct `data-date` value.");
```

# --seed--

## --seed-contents--

```html

```

```css

```

```js

```

# --solutions--

```html
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="styles.css" />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/d3/7.9.0/d3.min.js"></script>
  </head>
  <body>
    <div class="main">
      <div class="container">
        <div id="title">United States GDP</div>
        <div class="visHolder"></div>
      </div>
    </div>
    <script src="script.js"></script>
  </body>
</html>
```

```css
* {
  margin: 0;
  padding: 0;
}

.main {
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Roboto';
  background-color: #708090;
  background-size: 64px 128px;
}
.main .container {
  height: 560px;
  width: 900px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  padding: 20px 20px 20px 20px;
  align-self: center;
  position: relative;
}
@media (min-width: 1000px) {
  .main .container {
    box-shadow: 2px 2px 20px;
  }
}
.main .container #title {
  text-align: center;
  font-size: 2.5em;
}
.main .container .visHolder {
  position: absolute;
  top: 6em;
}

#tooltip {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  text-align: center;
  width: 150px;
  height: 50px;
  padding: 2px;
  font: 12px;
  background: lightsteelblue;
  box-shadow: 1px 1px 10px;
  border-radius: 2px;
  pointer-events: none;
}

.overlay {
  position: absolute;
  background: #fff;
  pointer-events: none;
}

#y-axis path {
  stroke: black;
  stroke-width: 1;
  fill: none;
}

#x-axis path {
  stroke: black;
  stroke-width: 1;
  fill: none;
}

.info {
  font-size: 0.8em;
}
```

```js
const projectName = 'bar-chart';

// coded by @Christian-Paul

var width = 800,
  height = 400,
  barWidth = width / 275;

var tooltip = d3
  .select('.visHolder')
  .append('div')
  .attr('id', 'tooltip')
  .style('opacity', 0);

var overlay = d3
  .select('.visHolder')
  .append('div')
  .attr('class', 'overlay')
  .style('opacity', 0);

var svgContainer = d3
  .select('.visHolder')
  .append('svg')
  .attr('width', width + 100)
  .attr('height', height + 60);

d3.json(
  'https://cdn.freecodecamp.org/project-data/bar-chart/GDP-data.json'
)
  .then(data => {
    svgContainer
      .append('text')
      .attr('transform', 'rotate(-90)')
      .attr('x', -200)
      .attr('y', 80)
      .text('Gross Domestic Product');

    svgContainer
      .append('text')
      .attr('x', width / 2 + 120)
      .attr('y', height + 50)
      .text('More Information: http://www.bea.gov/national/pdf/nipaguid.pdf')
      .attr('class', 'info');

    var years = data.data.map(function (item) {
      var quarter;
      var temp = item[0].substring(5, 7);

      if (temp === '01') {
        quarter = 'Q1';
      } else if (temp === '04') {
        quarter = 'Q2';
      } else if (temp === '07') {
        quarter = 'Q3';
      } else if (temp === '10') {
        quarter = 'Q4';
      }

      return item[0].substring(0, 4) + ' ' + quarter;
    });

    var yearsDate = data.data.map(function (item) {
      return new Date(item[0]);
    });

    var xMax = new Date(d3.max(yearsDate));
    xMax.setMonth(xMax.getMonth() + 3);
    var xScale = d3
      .scaleTime()
      .domain([d3.min(yearsDate), xMax])
      .range([0, width]);

    var xAxis = d3.axisBottom().scale(xScale);

    svgContainer
      .append('g')
      .call(xAxis)
      .attr('id', 'x-axis')
      .attr('transform', 'translate(60, 400)');

    var GDP = data.data.map(function (item) {
      return item[1];
    });

    var scaledGDP = [];

    var gdpMax = d3.max(GDP);

    var linearScale = d3.scaleLinear().domain([0, gdpMax]).range([0, height]);

    scaledGDP = GDP.map(function (item) {
      return linearScale(item);
    });

    var yAxisScale = d3.scaleLinear().domain([0, gdpMax]).range([height, 0]);

    var yAxis = d3.axisLeft(yAxisScale);

    svgContainer
      .append('g')
      .call(yAxis)
      .attr('id', 'y-axis')
      .attr('transform', 'translate(60, 0)');

    d3.select('svg')
      .selectAll('rect')
      .data(scaledGDP)
      .enter()
      .append('rect')
      .attr('data-date', function (d, i) {
        return data.data[i][0];
      })
      .attr('data-gdp', function (d, i) {
        return data.data[i][1];
      })
      .attr('class', 'bar')
      .attr('x', function (d, i) {
        return xScale(yearsDate[i]);
      })
      .attr('y', function (d) {
        return height - d;
      })
      .attr('width', barWidth)
      .attr('height', function (d) {
        return d;
      })
      .attr('index', (d, i) => i)
      .style('fill', '#33adff')
      .attr('transform', 'translate(60, 0)')
      .on('mouseover', function (event, d) {
        // d or datum is the height of the
        // current rect
        var i = this.getAttribute('index');

        overlay
          .transition()
          .duration(0)
          .style('height', d + 'px')
          .style('width', barWidth + 'px')
          .style('opacity', 0.9)
          .style('left', i * barWidth + 0 + 'px')
          .style('top', height - d + 'px')
          .style('transform', 'translateX(60px)');
        tooltip.transition().duration(200).style('opacity', 0.9);
        tooltip
          .html(
            years[i] +
              '<br>' +
              '$' +
              GDP[i].toFixed(1).replace(/(\d)(?=(\d{3})+\.)/g, '$1,') +
              ' Billion'
          )
          .attr('data-date', data.data[i][0])
          .style('left', i * barWidth + 30 + 'px')
          .style('top', height - 100 + 'px')
          .style('transform', 'translateX(60px)');
      })
      .on('mouseout', function () {
        tooltip.transition().duration(200).style('opacity', 0);
        overlay.transition().duration(200).style('opacity', 0);
      });
  })
  .catch(e => console.log(e));
  ```
