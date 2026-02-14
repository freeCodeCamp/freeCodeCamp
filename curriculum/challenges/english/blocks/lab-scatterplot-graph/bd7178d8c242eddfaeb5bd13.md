---
id: bd7178d8c242eddfaeb5bd13
title: Build a Scatterplot Graph
challengeType: 25
dashedName: build-a-scatterplot-graph
demoType: onClick
---

# --description--

In this project you will use the data from `https://cdn.freecodecamp.org/curriculum/labs/data/scatterplot/cyclist-data.json` to build a scatterplot graph.

The tests require axes to be generated using the D3 axis property, which automatically generates ticks along the axis. These ticks are required for passing the D3 tests because their positions are used to determine alignment of graphed elements.

**Objective:** Fulfill the user stories below and get all the tests to pass to complete the lab.

**User Stories:**

1. Your chart should have a title with a corresponding `id="title"`.
1. Your chart should have a `g` element x-axis with a corresponding `id="x-axis"`.
1. Your chart should have a `g` element y-axis with a corresponding `id="y-axis"`.
1. Both axes should contain multiple tick labels, each with a corresponding `class="tick"`.
1. Your chart should have a `circle` element for each data point with a corresponding `class="dot"` displaying the data.
1. Each `.dot` should have the attributes `data-xvalue` and `data-yvalue` containing `year` and `time` values.
1. The `.dot` elements' `data-xvalue` attributes should match the order of the provided data.
1. The `.dot` elements' `data-yvalue` attributes should match the order of the provided data.
1. Each `.dot` element should align with the corresponding value on the x-axis.
1. Each `.dot` element should align with the corresponding value on the y-axis.
1. You can see multiple tick labels on the y-axis with `%M:%S` time format.
1. You can see multiple tick labels on the x-axis that show the year.
1. The range of the x-axis labels are within the range of the actual x-axis data.
1. The range of the y-axis labels are within the range of the actual y-axis data.
1. You can see a legend containing descriptive text that has `id="legend"`.
1. You should be able to mouse over an area and see a tooltip with a corresponding `id="tooltip"` which displays more information about the area.
1. Your tooltip should have a `data-year` attribute that corresponds to the `data-xvalue` of the active area.

# --before-all--

```js
const cyclistDataJson = [
  {
    "Time": "36:50",
    "Place": 1,
    "Seconds": 2210,
    "Name": "Marco Pantani",
    "Year": 1995,
    "Nationality": "ITA",
    "Doping": "Alleged drug use during 1995 due to high hematocrit levels",
    "URL": "https://en.wikipedia.org/wiki/Marco_Pantani#Alleged_drug_use"
  },
  {
    "Time": "36:55",
    "Place": 2,
    "Seconds": 2215,
    "Name": "Marco Pantani",
    "Year": 1997,
    "Nationality": "ITA",
    "Doping": "Alleged drug use during 1997 due to high hermatocrit levels",
    "URL": "https://en.wikipedia.org/wiki/Marco_Pantani#Alleged_drug_use"
  },
  {
    "Time": "37:15",
    "Place": 3,
    "Seconds": 2235,
    "Name": "Marco Pantani",
    "Year": 1994,
    "Nationality": "ITA",
    "Doping": "Alleged drug use during 1994 due to high hermatocrit levels",
    "URL": "https://en.wikipedia.org/wiki/Marco_Pantani#Alleged_drug_use"
  },
  {
    "Time": "37:36",
    "Place": 4,
    "Seconds": 2256,
    "Name": "Lance Armstrong",
    "Year": 2004,
    "Nationality": "USA",
    "Doping": "2004 Tour de France title stripped by UCI in 2012",
    "URL": "https://en.wikipedia.org/wiki/History_of_Lance_Armstrong_doping_allegations"
  },
  {
    "Time": "37:42",
    "Place": 5,
    "Seconds": 2262,
    "Name": "Jan Ullrich",
    "Year": 1997,
    "Nationality": "GER",
    "Doping": "Confessed later in his career to doping",
    "URL": "https://en.wikipedia.org/wiki/Jan_Ullrich#Operaci.C3.B3n_Puerto_doping_case"
  },
  {
    "Time": "38:05",
    "Place": 6,
    "Seconds": 2285,
    "Name": "Lance Armstrong",
    "Year": 2001,
    "Nationality": "USA",
    "Doping": "2001 Tour de France title stripped by UCI in 2012",
    "URL": "https://en.wikipedia.org/wiki/History_of_Lance_Armstrong_doping_allegations"
  },
  {
    "Time": "38:14",
    "Place": 7,
    "Seconds": 2294,
    "Name": "Miguel Indurain",
    "Year": 1995,
    "Nationality": "ESP",
    "Doping": "1994 Failed test for salbutemol, not a banned drug at that time",
    "URL": "http://www.independent.co.uk/sport/drugs-in-sport-indurain-allowed-to-use-banned-drug-1379584.html"
  },
  {
    "Time": "38:14",
    "Place": 8,
    "Seconds": 2294,
    "Name": "Alex Zülle",
    "Year": 1995,
    "Nationality": "SUI",
    "Doping": "Confessed in 1998 to taking EPO",
    "URL": "https://en.wikipedia.org/wiki/Alex_Z%C3%BClle#Festina_affair"
  },
  {
    "Time": "38:16",
    "Place": 9,
    "Seconds": 2296,
    "Name": "Bjarne Riis",
    "Year": 1995,
    "Nationality": "DEN",
    "Doping": "Alleged drug use during 1995 due to high hermatrocite levels",
    "URL": "https://en.wikipedia.org/wiki/Bjarne_Riis#Doping_allegations"
  },
  {
    "Time": "38:22",
    "Place": 10,
    "Seconds": 2302,
    "Name": "Richard Virenque",
    "Year": 1997,
    "Nationality": "FRA",
    "Doping": "In 2000 confessed to doping during his career",
    "URL": "https://en.wikipedia.org/wiki/Richard_Virenque#Festina_affair"
  },
  {
    "Time": "38:36",
    "Place": 11,
    "Seconds": 2316,
    "Name": "Floyd Landis",
    "Year": 2006,
    "Nationality": "USA",
    "Doping": "Stripped of 2006 Tour de France title",
    "URL": "https://en.wikipedia.org/wiki/Floyd_Landis_doping_case"
  },
  {
    "Time": "38:36",
    "Place": 12,
    "Seconds": 2316,
    "Name": "Andreas Klöden",
    "Year": 2006,
    "Nationality": "GER",
    "Doping": "Alleged use of illegal blood transfusions in 2006",
    "URL": "https://en.wikipedia.org/wiki/Andreas_Kl%C3%B6den#2009_Doping_allegations"
  },
  {
    "Time": "38:40",
    "Place": 13,
    "Seconds": 2320,
    "Name": "Jan Ullrich",
    "Year": 2004,
    "Nationality": "GER",
    "Doping": "Confessed later in his career to doping",
    "URL": "https://en.wikipedia.org/wiki/Jan_Ullrich#Operaci.C3.B3n_Puerto_doping_case"
  },
  {
    "Time": "38:44",
    "Place": 14,
    "Seconds": 2324,
    "Name": "Laurent Madouas",
    "Year": 1995,
    "Nationality": "FRA",
    "Doping": "Tested positive for Salbutemol in 1994, suspended for 1 month",
    "URL": "http://www.dopeology.org/incidents/Madouas-positive/"
  },
  {
    "Time": "38:55",
    "Place": 15,
    "Seconds": 2335,
    "Name": "Richard Virenque",
    "Year": 1994,
    "Nationality": "FRA",
    "Doping": "In 2000 confessed to doping during his career",
    "URL": "https://en.wikipedia.org/wiki/Richard_Virenque#Festina_affair"
  },
  {
    "Time": "39:01",
    "Place": 16,
    "Seconds": 2341,
    "Name": "Carlos Sastre",
    "Year": 2006,
    "Nationality": "ESP",
    "Doping": "",
    "URL": ""
  },
  {
    "Time": "39:09",
    "Place": 17,
    "Seconds": 2349,
    "Name": "Iban Mayo",
    "Year": 2003,
    "Nationality": "ESP",
    "Doping": "Failed doping test in 2007 Tour de France",
    "URL": "https://en.wikipedia.org/wiki/Iban_Mayo"
  },
  {
    "Time": "39:12",
    "Place": 18,
    "Seconds": 2352,
    "Name": "Andreas Klöden",
    "Year": 2004,
    "Nationality": "GER",
    "Doping": "Alleged doping during 2006 Tour de France",
    "URL": "https://en.wikipedia.org/wiki/Operaci%C3%B3n_Puerto_doping_case"
  },
  {
    "Time": "39:14",
    "Place": 19,
    "Seconds": 2354,
    "Name": "Jose Azevedo",
    "Year": 2004,
    "Nationality": "POR",
    "Doping": "Implicated in the Operación Puerto doping case",
    "URL": "https://en.wikipedia.org/wiki/Operaci%C3%B3n_Puerto_doping_case"
  },
  {
    "Time": "39:15",
    "Place": 20,
    "Seconds": 2355,
    "Name": "Levi Leipheimer",
    "Year": 2006,
    "Nationality": "USA",
    "Doping": "Testified in 2012 to doping during his time with US Postal Service ",
    "URL": "http://www.wsj.com/articles/SB10000872396390444799904578048352672452328"
  },
  {
    "Time": "39:22",
    "Place": 21,
    "Seconds": 2362,
    "Name": "Francesco Casagrande",
    "Year": 1997,
    "Nationality": "ITA",
    "Doping": "Positive testosterone test in 1998",
    "URL": "http://autobus.cyclingnews.com/results/1998/sep98/sep2.shtml"
  },
  {
    "Time": "39:23",
    "Place": 22,
    "Seconds": 2363,
    "Name": "Nairo Quintana",
    "Year": 2015,
    "Nationality": "COL",
    "Doping": "",
    "URL": ""
  },
  {
    "Time": "39:23",
    "Place": 23,
    "Seconds": 2363,
    "Name": "Bjarne Riis",
    "Year": 1997,
    "Nationality": "DEN",
    "Doping": "Alleged drug use during 1995 due to high hermatrocite levels",
    "URL": "https://en.wikipedia.org/wiki/Bjarne_Riis#Doping_allegations"
  },
  {
    "Time": "39:30",
    "Place": 24,
    "Seconds": 2370,
    "Name": "Miguel Indurain",
    "Year": 1994,
    "Nationality": "ESP",
    "Doping": "1994 Failed test for salbutemol, not a banned drug at that time",
    "URL": "http://www.independent.co.uk/sport/drugs-in-sport-indurain-allowed-to-use-banned-drug-1379584.html"
  },
  {
    "Time": "39:30",
    "Place": 25,
    "Seconds": 2370,
    "Name": "Luc Leblanc",
    "Year": 1994,
    "Nationality": "FRA",
    "Doping": "Admitted to using epo and amphetimines throughout 1994 ",
    "URL": "http://www.dopeology.org/people/Luc_Leblanc/"
  },
  {
    "Time": "39:32",
    "Place": 26,
    "Seconds": 2372,
    "Name": "Carlos Sastre",
    "Year": 2008,
    "Nationality": "ESP",
    "Doping": "",
    "URL": ""
  },
  {
    "Time": "39:37",
    "Place": 27,
    "Seconds": 2377,
    "Name": "Vladimir Poulnikov",
    "Year": 1994,
    "Nationality": "UKR",
    "Doping": "",
    "URL": ""
  },
  {
    "Time": "39:40",
    "Place": 28,
    "Seconds": 2380,
    "Name": "Giuseppe Guerini",
    "Year": 2004,
    "Nationality": "ITA",
    "Doping": "",
    "URL": ""
  },
  {
    "Time": "39:41",
    "Place": 29,
    "Seconds": 2381,
    "Name": "Santos Gonzalez",
    "Year": 2004,
    "Nationality": "ESP",
    "Doping": "High Hematocrit during 2005 season, removed by team management",
    "URL": "http://www.cyclingnews.com/news/santos-gonzalez-sacked-by-phonak/"
  },
  {
    "Time": "39:41",
    "Place": 30,
    "Seconds": 2381,
    "Name": "Vladimir Karpets",
    "Year": 2004,
    "Nationality": "RUS",
    "Doping": "Made payments to Ferrari, but no charges filed",
    "URL": "http://www.dopeology.org/incidents/Ferrari-investigation/"
  },
  {
    "Time": "39:45",
    "Place": 31,
    "Seconds": 2385,
    "Name": "Fernando Escartin",
    "Year": 1995,
    "Nationality": "ESP",
    "Doping": "Implicated in Giardini Margherita Raid in 1998 as a 'victim' ",
    "URL": "http://www.dopeology.org/incidents/Giardini-Margherita-raid-%5bBologna%5d/"
  },
  {
    "Time": "39:47",
    "Place": 32,
    "Seconds": 2387,
    "Name": "Denis Menchov",
    "Year": 2006,
    "Nationality": "RUS",
    "Doping": "",
    "URL": ""
  },
  {
    "Time": "39:47",
    "Place": 33,
    "Seconds": 2387,
    "Name": "Michael Rasmussen",
    "Year": 2006,
    "Nationality": "DEN",
    "Doping": "Admitted to doping with multiple substances 1998-2010",
    "URL": "http://www.dopeology.org/people/Michael_Rasmussen/"
  },
  {
    "Time": "39:47",
    "Place": 34,
    "Seconds": 2387,
    "Name": "Pietro Caucchioli",
    "Year": 2006,
    "Nationality": "ITA",
    "Doping": "Associated with Mantova investigation, charges dropped",
    "URL": "http://www.cyclingnews.com/news/italian-judge-set-to-decide-if-32-named-in-mantova-doping-investigation-should-go-on-trial/"
  },
  {
    "Time": "39:50",
    "Place": 35,
    "Seconds": 2390,
    "Name": "Nairo Quintana",
    "Year": 2013,
    "Nationality": "COL",
    "Doping": "",
    "URL": ""
  }
]

window.fetch = async () => 
 ({ ok: true, status: 200, json: () => JSON.parse(JSON.stringify(cyclistDataJson))})


const clock = __FakeTimers.install();
```

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

function triggerMouseEvent(area, mouseEvent) {
  let event;
  if (document.createEvent) {
    // Internet Explorer.
    event = document.createEvent('MouseEvent');
    // TODO: Provide a link where all the parameters for initMouseEvent are
    // documented.
    event.initMouseEvent(
      mouseEvent,
      true,
      true,
      window,
      0,
      0,
      0,
      0,
      0,
      false,
      false,
      false,
      false,
      0,
      null
    );
  } else {
    // Non IE browser
    event = new MouseEvent(mouseEvent);
  }
  area.dispatchEvent(event);
}

const timeout = (milliseconds) =>
  new Promise((resolve) => setTimeout(resolve, milliseconds));
```

# --hints--

The chart should have an element with the `id` of `title` to contain the title.

```js
assert.exists(document.getElementById('title'));
```

The chart should have an `x-axis` with a corresponding `id="x-axis"`.

```js
assert.isNotNull(
  document.getElementById('x-axis'),
  'There should be an element with id="x-axis"'
);
assert.isNotEmpty(document.querySelectorAll('g#x-axis'));
```

The chart should have a `y-axis` with a corresponding `id="y-axis"`.

```js
assert.isNotNull(
  document.getElementById('y-axis'),
  'There should be an element with id="y-axis"'
);
assert.isNotEmpty(document.querySelectorAll('g#y-axis'));
```

The x axis should contain multiple tick labels, each with the corresponding `class="tick"`.

```js
assert.isNotEmpty(document.querySelectorAll('#x-axis .tick'));
```

The y axis should contain multiple tick labels, each with the corresponding `class="tick"`.

```js
assert.isNotEmpty(document.querySelectorAll('#y-axis .tick'));
```

Your chart should have dots, that each have a class of `dot`, which represent the data being plotted.

```js
assert.isNotEmpty(document.querySelectorAll('circle.dot'));
```

Each dot should have the properties `data-xvalue` and `data-yvalue` containing their corresponding x and y values.

```js
const dots = document.getElementsByClassName('dot');
assert.isNotEmpty(dots);

for (let i = 0; i < dots.length; i++) {
  let dot = dots[i];
  assert.isNotNull(
    dot.getAttribute('data-xvalue'),
    'Could not find property "data-xvalue" in dot'
  );
  assert.isNotNull(
    dot.getAttribute('data-yvalue'),
    'Could not find property "data-yvalue" in dot'
  );
}
```

The `data-xvalue` and `data-yvalue` of each dot should be within the range of the actual data and in the correct data format. For `data-xvalue`, integers (full years) or Date objects are acceptable for test evaluation. For `data-yvalue` (minutes), use Date objects.

```js
const years = cyclistDataJson.map(d => d.Year);
const MIN_YEAR = Math.floor(Math.min(...years) / 10) * 10;
const MAX_YEAR = Math.ceil(Math.max(...years) / 10) * 10;
const times = cyclistDataJson.map(d => {
  const [min, sec] = d.Time.split(':').map(Number);
  return min + sec / 60;
});
const MIN_MINUTES = Math.floor(Math.min(...times));
const MAX_MINUTES = Math.ceil(Math.max(...times));

const dotsCollection = document.getElementsByClassName('dot');
const dots = [].slice.call(dotsCollection);
assert.isNotEmpty(dots);

dots.forEach((dot) => {
  let xYear = new Date(dot.getAttribute('data-xvalue'));
  assert.isAtLeast(
    xYear.getFullYear(),
    MIN_YEAR,
    'The data-xvalue of a dot is below the range of the actual data'
  );
  assert.isAtMost(
    xYear.getFullYear(),
    MAX_YEAR,
    'The data-xvalue of a dot is above the range of the actual data'
  );

  let yDate = new Date(dot.getAttribute('data-yvalue'));
  assert.isAtLeast(
    yDate.getMinutes(),
    MIN_MINUTES,
    'The minutes data-yvalue of a dot is below the range of the actual minutes data'
  );
  assert.isAtMost(
    yDate.getMinutes(),
    MAX_MINUTES,
    'The minutes data-yvalue of a dot is above the range of the actual minutes data'
  );
});
```

The `data-xvalue` and its corresponding dot should align with the corresponding point/value on the x-axis.

```js
const axis = document.querySelector('#x-axis');
assert.exists(axis);
const coordAttr = 'cx';
const dotsCollection = document.querySelectorAll('.dot');
assert.isNotEmpty(dotsCollection);
const ticksCollection = axis.querySelectorAll('.tick');
assert.isNotEmpty(ticksCollection);
const shapeAttr = 'data-xvalue';
const dataType = 'year';
const shapeAlign = 'center';

assert.isTrue(
  areShapesAlignedWithTicks(
    dotsCollection,
    ticksCollection,
    coordAttr,
    shapeAttr,
    dataType,
    shapeAlign
  ),
  "x values don't line up with x locations"
);
```

The `data-yvalue` and its corresponding dot should align with the corresponding point/value on the y-axis.

```js
const axis = document.querySelector('#y-axis');
assert.exists(axis);
const coordAttr = 'cy';
const dotsCollection = document.querySelectorAll('.dot');
assert.isNotEmpty(dotsCollection);
const ticksCollection = axis.querySelectorAll('.tick');
assert.isNotEmpty(ticksCollection);
const shapeAttr = 'data-yvalue';
const dataType = 'minute';
const shapeAlign = 'center';

assert.isTrue(
  areShapesAlignedWithTicks(
    dotsCollection,
    ticksCollection,
    coordAttr,
    shapeAttr,
    dataType,
    shapeAlign
  ),
  "y values don't line up with y locations"
);
```

You can see multiple tick labels on the y-axis with `%M:%S` time format.

```js
const yAxisTickLabels = document.querySelectorAll('#y-axis .tick');
assert.isNotEmpty(yAxisTickLabels);

yAxisTickLabels.forEach((label) => {
  assert.match(
    label.textContent,
    /[0-5][0-9]:[0-5][0-9]/,
    'Y-axis tick labels aren\'t in the "%M:%S" d3 time format'
  );
});
```

You can see multiple tick labels on the x-axis that show the year.

```js
const xAxisTickLabels = document.querySelectorAll('#x-axis .tick');
assert.isNotEmpty(xAxisTickLabels);

xAxisTickLabels.forEach((label) => {
  assert.match(
    label.textContent,
    /[1-2][0-9][0-9][0-9]/,
    'X-axis tick labels do not show the year'
  );
});
```

The range of the x-axis labels are within the range of the actual x-axis data.

```js
const xAxisTickLabels = document.querySelectorAll('#x-axis .tick');
assert.isNotEmpty(xAxisTickLabels);

const years = cyclistDataJson.map(d => d.Year);
const MIN_YEAR = Math.min(...years);
const MAX_YEAR = Math.max(...years) + 1;

xAxisTickLabels.forEach((label) => {
  assert.isAtLeast(
    +label.textContent,
    MIN_YEAR,
    'x axis labels are below the range of the actual data'
  );
  assert.isAtMost(
    +label.textContent,
    MAX_YEAR,
    'x axis labels are above the range of the actual data'
  );
});
```

The range of the y-axis labels are within the range of the actual y-axis data.

```js
const yAxisTickLabels = document.querySelectorAll('#y-axis .tick');
assert.isNotEmpty(yAxisTickLabels);

const times = cyclistDataJson.map(d => {
  let [min, sec] = d.Time.split(':').map(Number);

  return min + sec / 60;
});
const MIN_MINUTES = Math.floor(Math.min(...times));
const MAX_MINUTES = Math.ceil(Math.max(...times));
const MIN_TIME = new Date(0, 0, 0, 0, MIN_MINUTES, 0, 0);
const MAX_TIME = new Date(0, 0, 0, 0, MAX_MINUTES, 0, 0);

yAxisTickLabels.forEach((label) => {
  let timeArr = label.textContent.split(':');
  let mins = timeArr[0];
  let secs = timeArr[1];
  let date = new Date(0, 0, 0, 0, mins, secs, 0);
  assert.isAtLeast(
    date,
    MIN_TIME,
    'y axis labels are below the range of the actual data'
  );
  assert.isAtMost(
    date,
    MAX_TIME,
    'y axis labels are above the range of the actual data'
  );
});
```

You can see a legend containing descriptive text that has `id="legend"`.

```js
assert.isNotNull(document.getElementById('legend'));

let legendText;
if (document.querySelector('#legend text') !== null) {
  legendText = document.querySelector('#legend text').innerHTML;
} else {
  legendText = document.getElementById('legend').innerText;
}
assert.isNotNull(legendText, 'The legend should contain text');
```

When hovering over an area your scatter plot should have a tooltip with a corresponding `id="tooltip"` which displays more information about the area.

```js
const areas = document.querySelectorAll('.dot');
assert.isNotEmpty(areas);

// Place mouse on random dot and check if tooltip is visible.
const randomIndex = getRandomIndex(areas.length);
const randomArea = areas[randomIndex];
triggerMouseEvent(randomArea, 'mouseover');
triggerMouseEvent(randomArea, 'mousemove');
triggerMouseEvent(randomArea, 'mouseenter');

// Advance time to accommodate tooltip transitions.
clock.tick(1000);

const tooltip = document.getElementById('tooltip');
try {
  assert.isNotNull(
    tooltip,
    'There should be an element with id="tooltip"'
  );

  const hidden = isToolTipHidden(tooltip);
  assert.isFalse(
    hidden,
    'Tooltip should be visible when mouse is on an area'
  );
} finally {
  // Remove mouse from cell and check if tooltip is hidden again.
  triggerMouseEvent(randomArea, 'mouseout');
  triggerMouseEvent(randomArea, 'mouseleave');
}

// Advance time to accommodate tooltip transitions.
clock.tick(1000);

const hidden = isToolTipHidden(tooltip);
assert.isTrue(
  hidden,
  'Tooltip should be hidden when mouse is not on an area'
);
```

The tooltip should have a `data-year` attribute that corresponds to the `data-xvalue` of the active area.

```js
const areas = document.querySelectorAll('.dot');
assert.isNotEmpty(areas);

const randomIndex = getRandomIndex(areas.length);
const randomArea = areas[randomIndex];

triggerMouseEvent(randomArea, 'mouseover');
triggerMouseEvent(randomArea, 'mousemove');
triggerMouseEvent(randomArea, 'mouseenter');

// Advance time to accommodate tooltip transitions.
clock.tick(1000);

try {
  const tooltip = document.getElementById('tooltip');
  assert.isNotNull(
    tooltip,
    'There should be an element with id="tooltip"'
  );

  assert.isNotNull(
    tooltip.getAttribute('data-year'),
    'Could not find attribute "data-year" in tooltip'
  );

  const tooltipYear = tooltip.getAttribute('data-year');
  const areaYear = new Date(randomArea.getAttribute('data-xvalue')).getFullYear();
  
  assert.equal(
    tooltipYear,
    areaYear,
    'Tooltip\'s "data-year" attribute should be equal to the active area\'s year from "data-xvalue" attribute'
  );
} finally {
  // Clear out tooltip.
  triggerMouseEvent(randomArea, 'mouseout');
  triggerMouseEvent(randomArea, 'mouseleave');
}
```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Build a Scatterplot Graph</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/d3/7.9.0/d3.min.js"></script>
  </head>
  <body>

  </body>
</html>
```

```css

```

```js

```


# --solutions--

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Build a Scatterplot Graph</title>
    <link rel="stylesheet" href="styles.css" />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/d3/7.9.0/d3.min.js"></script>
  </head>
  <body>
    <script src="script.js"></script>
  </body>
</html>
```

```css
.graph {
  display: block;
  margin: auto;
  background-color: white;
}

body {
  font: 10px sans-serif;
  width: 100%;
  height: 100%;
}
.main {
  position: relative;
}

.axis path,
.axis line {
  fill: none;
  stroke: #000;
  shape-rendering: crispEdges;
}

.dot {
  stroke: #000;
  opacity: 0.8;
}

div.tooltip {
  position: absolute;

  padding: 10px;
  font: 12px sans-serif;
  background: lightsteelblue;
  border: 0px;
  border-radius: 8px;
  pointer-events: none;
}
```

```js
let url =
  'https://cdn.freecodecamp.org/curriculum/labs/data/scatterplot/cyclist-data.json';
let margin = {
    top: 100,
    right: 20,
    bottom: 30,
    left: 60
  },
  width = 920 - margin.left - margin.right,
  height = 630 - margin.top - margin.bottom;

let x = d3.scaleLinear().range([0, width]);

let y = d3.scaleTime().range([0, height]);

let color = d3.scaleOrdinal(d3.schemeCategory10);

let timeFormat = d3.timeFormat('%M:%S');
let xAxis = d3.axisBottom(x).tickFormat(d3.format('d'));

let yAxis = d3.axisLeft(y).tickFormat(timeFormat);

// Define the div for the tooltip
let div = d3
  .select('body')
  .append('div')
  .attr('class', 'tooltip')
  .attr('id', 'tooltip')
  .style('opacity', 0);

let svg = d3
  .select('body')
  .append('svg')
  .attr('width', width + margin.left + margin.right)
  .attr('height', height + margin.top + margin.bottom)
  .attr('class', 'graph')
  .append('g')
  .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

d3.json(url)
  .then(data => {
    data.forEach(function (d) {
      d.Place = +d.Place;
      let parsedTime = d.Time.split(':');
      d.Time = new Date(1970, 0, 1, 0, parsedTime[0], parsedTime[1]);
    });

    x.domain([
      d3.min(data, function (d) {
        return d.Year - 1;
      }),
      d3.max(data, function (d) {
        return d.Year + 1;
      })
    ]);
    y.domain(
      d3.extent(data, function (d) {
        return d.Time;
      })
    );

    svg
      .append('g')
      .attr('class', 'x axis')
      .attr('id', 'x-axis')
      .attr('transform', 'translate(0,' + height + ')')
      .call(xAxis)
      .append('text')
      .attr('class', 'x-axis-label')
      .attr('x', width)
      .attr('y', -6)
      .style('text-anchor', 'end')
      .text('Year');

    svg
      .append('g')
      .attr('class', 'y axis')
      .attr('id', 'y-axis')
      .call(yAxis)
      .append('text')
      .attr('class', 'label')
      .attr('transform', 'rotate(-90)')
      .attr('y', 6)
      .attr('dy', '.71em')
      .style('text-anchor', 'end')
      .text('Best Time (minutes)');

    svg
      .append('text')
      .attr('transform', 'rotate(-90)')
      .attr('x', -160)
      .attr('y', -44)
      .style('font-size', 18)
      .text('Time in Minutes');

    svg
      .selectAll('.dot')
      .data(data)
      .enter()
      .append('circle')
      .attr('class', 'dot')
      .attr('r', 6)
      .attr('cx', function (d) {
        return x(d.Year);
      })
      .attr('cy', function (d) {
        return y(d.Time);
      })
      .attr('data-xvalue', function (d) {
        return d.Year;
      })
      .attr('data-yvalue', function (d) {
        return d.Time.toISOString();
      })
      .style('fill', function (d) {
        return color(d.Doping !== '');
      })
      .on('mouseover', function (event, d) {
        div.style('opacity', 0.9);
        div.attr('data-year', d.Year);
        div
          .html(
            d.Name +
              ': ' +
              d.Nationality +
              '<br/>' +
              'Year: ' +
              d.Year +
              ', Time: ' +
              timeFormat(d.Time) +
              (d.Doping ? '<br/><br/>' + d.Doping : '')
          )
          .style('left', event.pageX + 'px')
          .style('top', event.pageY - 28 + 'px');
      })
      .on('mouseout', function () {
        div.style('opacity', 0);
      });

    // title
    svg
      .append('text')
      .attr('id', 'title')
      .attr('x', width / 2)
      .attr('y', 0 - margin.top / 2)
      .attr('text-anchor', 'middle')
      .style('font-size', '30px')
      .text('Doping in Professional Bicycle Racing');

    // subtitle
    svg
      .append('text')
      .attr('x', width / 2)
      .attr('y', 0 - margin.top / 2 + 25)
      .attr('text-anchor', 'middle')
      .style('font-size', '20px')
      .text("35 Fastest times up Alpe d'Huez");

    let legendContainer = svg.append('g').attr('id', 'legend');

    let legend = legendContainer
      .selectAll('#legend')
      .data(color.domain())
      .enter()
      .append('g')
      .attr('class', 'legend-label')
      .attr('transform', function (d, i) {
        return 'translate(0,' + (height / 2 - i * 20) + ')';
      });

    legend
      .append('rect')
      .attr('x', width - 18)
      .attr('width', 18)
      .attr('height', 18)
      .style('fill', color);

    legend
      .append('text')
      .attr('x', width - 24)
      .attr('y', 9)
      .attr('dy', '.35em')
      .style('text-anchor', 'end')
      .text(function (d) {
        if (d) {
          return 'Riders with doping allegations';
        } else {
          return 'No doping allegations';
        }
      });
  })
  .catch(err => console.log(err));
```
