---
id: bd7168d8c242eddfaeb5bd13
title: Build a Bar Chart
challengeType: 25
dashedName: build-a-bar-chart
demoType: onClick
---

# --description--

In this project you will use the data from `https://cdn.freecodecamp.org/curriculum/labs/data/bar-chart/GDP-data.json` to build a bar chart.

The tests require axes to be generated using the D3 axis property, which automatically generates ticks along the axis. These ticks are required for passing the D3 tests because their positions are used to determine alignment of graphed elements.

**Objective:** Fulfill the user stories below and get all the tests to pass to complete the lab.

**User Stories:**

1. Your chart should have a title with a corresponding `id="title"`.
1. Your chart should have a `g` element x-axis with a corresponding `id="x-axis"`.
1. Your chart should have a `g` element y-axis with a corresponding `id="y-axis"`.
1. Both axes should contain multiple tick labels, each with a corresponding `class="tick"`.
1. Your chart should have a `rect` element for each data point with a corresponding `class="bar"` displaying the data.
1. Each `.bar` should have the attributes `data-date` and `data-gdp` containing `date` and `GDP` values.
1. The `.bar` elements' `data-date` attributes should match the order of the provided data.
1. The `.bar` elements' `data-gdp` attributes should match the order of the provided data.
1. Each `.bar` element's height should accurately represent the data's corresponding `GDP`.
1. The `data-date` attribute and its corresponding `.bar` element should align with the corresponding value on the x-axis.
1. The `data-gdp` attribute and its corresponding `.bar` element should align with the corresponding value on the y-axis.
1. You should be able to mouse over an area and see a tooltip with a corresponding `id="tooltip"` which displays more information about the area.
1. Your tooltip should have a `data-date` attribute that corresponds to the `data-date` of the active area.

# --before-all--

```js
const GDPDataJson = {
  "errors": {},
  "id": 120140,
  "source_name": "Federal Reserve Economic Data",
  "source_code": "FRED",
  "code": "GDP",
  "name": "Gross Domestic Product, 1 Decimal",
  "urlize_name": "Gross-Domestic-Product-1-Decimal",
  "display_url": "http://research.stlouisfed.org/fred2/data/GDP.txt",
  "description": "Units: Billions of Dollars\nSeasonal Adjustment: Seasonally Adjusted Annual Rate\nNotes: A Guide to the National Income and Product Accounts of the United States (NIPA) - (http://www.bea.gov/national/pdf/nipaguid.pdf)",
  "updated_at": "2015-12-14T20:00:28.561Z",
  "frequency": "quarterly",
  "from_date": "1947-01-01",
  "to_date": "2015-07-01",
  "column_names": [
    "DATE",
    "VALUE"
  ],
  "private": false,
  "type": null,
  "premium": false,
  "data": [
    [
      "1947-01-01",
      243.1
    ],
    [
      "1947-04-01",
      246.3
    ],
    [
      "1947-07-01",
      250.1
    ],
    [
      "1947-10-01",
      260.3
    ],
    [
      "1948-01-01",
      266.2
    ],
    [
      "1948-04-01",
      272.9
    ],
    [
      "1948-07-01",
      279.5
    ],
    [
      "1948-10-01",
      280.7
    ],
    [
      "1949-01-01",
      275.4
    ],
    [
      "1949-04-01",
      271.7
    ],
    [
      "1949-07-01",
      273.3
    ],
    [
      "1949-10-01",
      271
    ],
    [
      "1950-01-01",
      281.2
    ],
    [
      "1950-04-01",
      290.7
    ],
    [
      "1950-07-01",
      308.5
    ],
    [
      "1950-10-01",
      320.3
    ],
    [
      "1951-01-01",
      336.4
    ],
    [
      "1951-04-01",
      344.5
    ],
    [
      "1951-07-01",
      351.8
    ],
    [
      "1951-10-01",
      356.6
    ],
    [
      "1952-01-01",
      360.2
    ],
    [
      "1952-04-01",
      361.4
    ],
    [
      "1952-07-01",
      368.1
    ],
    [
      "1952-10-01",
      381.2
    ],
    [
      "1953-01-01",
      388.5
    ],
    [
      "1953-04-01",
      392.3
    ],
    [
      "1953-07-01",
      391.7
    ],
    [
      "1953-10-01",
      386.5
    ],
    [
      "1954-01-01",
      385.9
    ],
    [
      "1954-04-01",
      386.7
    ],
    [
      "1954-07-01",
      391.6
    ],
    [
      "1954-10-01",
      400.3
    ],
    [
      "1955-01-01",
      413.8
    ],
    [
      "1955-04-01",
      422.2
    ],
    [
      "1955-07-01",
      430.9
    ],
    [
      "1955-10-01",
      437.8
    ],
    [
      "1956-01-01",
      440.5
    ],
    [
      "1956-04-01",
      446.8
    ],
    [
      "1956-07-01",
      452
    ],
    [
      "1956-10-01",
      461.3
    ],
    [
      "1957-01-01",
      470.6
    ],
    [
      "1957-04-01",
      472.8
    ],
    [
      "1957-07-01",
      480.3
    ],
    [
      "1957-10-01",
      475.7
    ],
    [
      "1958-01-01",
      468.4
    ],
    [
      "1958-04-01",
      472.8
    ],
    [
      "1958-07-01",
      486.7
    ],
    [
      "1958-10-01",
      500.4
    ],
    [
      "1959-01-01",
      511.1
    ],
    [
      "1959-04-01",
      524.2
    ],
    [
      "1959-07-01",
      525.2
    ],
    [
      "1959-10-01",
      529.3
    ],
    [
      "1960-01-01",
      543.3
    ],
    [
      "1960-04-01",
      542.7
    ],
    [
      "1960-07-01",
      546
    ],
    [
      "1960-10-01",
      541.1
    ],
    [
      "1961-01-01",
      545.9
    ],
    [
      "1961-04-01",
      557.4
    ],
    [
      "1961-07-01",
      568.2
    ],
    [
      "1961-10-01",
      581.6
    ],
    [
      "1962-01-01",
      595.2
    ],
    [
      "1962-04-01",
      602.6
    ],
    [
      "1962-07-01",
      609.6
    ],
    [
      "1962-10-01",
      613.1
    ],
    [
      "1963-01-01",
      622.7
    ],
    [
      "1963-04-01",
      631.8
    ],
    [
      "1963-07-01",
      645
    ],
    [
      "1963-10-01",
      654.8
    ],
    [
      "1964-01-01",
      671.1
    ],
    [
      "1964-04-01",
      680.8
    ],
    [
      "1964-07-01",
      692.8
    ],
    [
      "1964-10-01",
      698.4
    ],
    [
      "1965-01-01",
      719.2
    ],
    [
      "1965-04-01",
      732.4
    ],
    [
      "1965-07-01",
      750.2
    ],
    [
      "1965-10-01",
      773.1
    ],
    [
      "1966-01-01",
      797.3
    ],
    [
      "1966-04-01",
      807.2
    ],
    [
      "1966-07-01",
      820.8
    ],
    [
      "1966-10-01",
      834.9
    ],
    [
      "1967-01-01",
      846
    ],
    [
      "1967-04-01",
      851.1
    ],
    [
      "1967-07-01",
      866.6
    ],
    [
      "1967-10-01",
      883.2
    ],
    [
      "1968-01-01",
      911.1
    ],
    [
      "1968-04-01",
      936.3
    ],
    [
      "1968-07-01",
      952.3
    ],
    [
      "1968-10-01",
      970.1
    ],
    [
      "1969-01-01",
      995.4
    ],
    [
      "1969-04-01",
      1011.4
    ],
    [
      "1969-07-01",
      1032
    ],
    [
      "1969-10-01",
      1040.7
    ],
    [
      "1970-01-01",
      1053.5
    ],
    [
      "1970-04-01",
      1070.1
    ],
    [
      "1970-07-01",
      1088.5
    ],
    [
      "1970-10-01",
      1091.5
    ],
    [
      "1971-01-01",
      1137.8
    ],
    [
      "1971-04-01",
      1159.4
    ],
    [
      "1971-07-01",
      1180.3
    ],
    [
      "1971-10-01",
      1193.6
    ],
    [
      "1972-01-01",
      1233.8
    ],
    [
      "1972-04-01",
      1270.1
    ],
    [
      "1972-07-01",
      1293.8
    ],
    [
      "1972-10-01",
      1332
    ],
    [
      "1973-01-01",
      1380.7
    ],
    [
      "1973-04-01",
      1417.6
    ],
    [
      "1973-07-01",
      1436.8
    ],
    [
      "1973-10-01",
      1479.1
    ],
    [
      "1974-01-01",
      1494.7
    ],
    [
      "1974-04-01",
      1534.2
    ],
    [
      "1974-07-01",
      1563.4
    ],
    [
      "1974-10-01",
      1603
    ],
    [
      "1975-01-01",
      1619.6
    ],
    [
      "1975-04-01",
      1656.4
    ],
    [
      "1975-07-01",
      1713.8
    ],
    [
      "1975-10-01",
      1765.9
    ],
    [
      "1976-01-01",
      1824.5
    ],
    [
      "1976-04-01",
      1856.9
    ],
    [
      "1976-07-01",
      1890.5
    ],
    [
      "1976-10-01",
      1938.4
    ],
    [
      "1977-01-01",
      1992.5
    ],
    [
      "1977-04-01",
      2060.2
    ],
    [
      "1977-07-01",
      2122.4
    ],
    [
      "1977-10-01",
      2168.7
    ],
    [
      "1978-01-01",
      2208.7
    ],
    [
      "1978-04-01",
      2336.6
    ],
    [
      "1978-07-01",
      2398.9
    ],
    [
      "1978-10-01",
      2482.2
    ],
    [
      "1979-01-01",
      2531.6
    ],
    [
      "1979-04-01",
      2595.9
    ],
    [
      "1979-07-01",
      2670.4
    ],
    [
      "1979-10-01",
      2730.7
    ],
    [
      "1980-01-01",
      2796.5
    ],
    [
      "1980-04-01",
      2799.9
    ],
    [
      "1980-07-01",
      2860
    ],
    [
      "1980-10-01",
      2993.5
    ],
    [
      "1981-01-01",
      3131.8
    ],
    [
      "1981-04-01",
      3167.3
    ],
    [
      "1981-07-01",
      3261.2
    ],
    [
      "1981-10-01",
      3283.5
    ],
    [
      "1982-01-01",
      3273.8
    ],
    [
      "1982-04-01",
      3331.3
    ],
    [
      "1982-07-01",
      3367.1
    ],
    [
      "1982-10-01",
      3407.8
    ],
    [
      "1983-01-01",
      3480.3
    ],
    [
      "1983-04-01",
      3583.8
    ],
    [
      "1983-07-01",
      3692.3
    ],
    [
      "1983-10-01",
      3796.1
    ],
    [
      "1984-01-01",
      3912.8
    ],
    [
      "1984-04-01",
      4015
    ],
    [
      "1984-07-01",
      4087.4
    ],
    [
      "1984-10-01",
      4147.6
    ],
    [
      "1985-01-01",
      4237
    ],
    [
      "1985-04-01",
      4302.3
    ],
    [
      "1985-07-01",
      4394.6
    ],
    [
      "1985-10-01",
      4453.1
    ],
    [
      "1986-01-01",
      4516.3
    ],
    [
      "1986-04-01",
      4555.2
    ],
    [
      "1986-07-01",
      4619.6
    ],
    [
      "1986-10-01",
      4669.4
    ],
    [
      "1987-01-01",
      4736.2
    ],
    [
      "1987-04-01",
      4821.5
    ],
    [
      "1987-07-01",
      4900.5
    ],
    [
      "1987-10-01",
      5022.7
    ],
    [
      "1988-01-01",
      5090.6
    ],
    [
      "1988-04-01",
      5207.7
    ],
    [
      "1988-07-01",
      5299.5
    ],
    [
      "1988-10-01",
      5412.7
    ],
    [
      "1989-01-01",
      5527.4
    ],
    [
      "1989-04-01",
      5628.4
    ],
    [
      "1989-07-01",
      5711.6
    ],
    [
      "1989-10-01",
      5763.4
    ],
    [
      "1990-01-01",
      5890.8
    ],
    [
      "1990-04-01",
      5974.7
    ],
    [
      "1990-07-01",
      6029.5
    ],
    [
      "1990-10-01",
      6023.3
    ],
    [
      "1991-01-01",
      6054.9
    ],
    [
      "1991-04-01",
      6143.6
    ],
    [
      "1991-07-01",
      6218.4
    ],
    [
      "1991-10-01",
      6279.3
    ],
    [
      "1992-01-01",
      6380.8
    ],
    [
      "1992-04-01",
      6492.3
    ],
    [
      "1992-07-01",
      6586.5
    ],
    [
      "1992-10-01",
      6697.6
    ],
    [
      "1993-01-01",
      6748.2
    ],
    [
      "1993-04-01",
      6829.6
    ],
    [
      "1993-07-01",
      6904.2
    ],
    [
      "1993-10-01",
      7032.8
    ],
    [
      "1994-01-01",
      7136.3
    ],
    [
      "1994-04-01",
      7269.8
    ],
    [
      "1994-07-01",
      7352.3
    ],
    [
      "1994-10-01",
      7476.7
    ],
    [
      "1995-01-01",
      7545.3
    ],
    [
      "1995-04-01",
      7604.9
    ],
    [
      "1995-07-01",
      7706.5
    ],
    [
      "1995-10-01",
      7799.5
    ],
    [
      "1996-01-01",
      7893.1
    ],
    [
      "1996-04-01",
      8061.5
    ],
    [
      "1996-07-01",
      8159
    ],
    [
      "1996-10-01",
      8287.1
    ],
    [
      "1997-01-01",
      8402.1
    ],
    [
      "1997-04-01",
      8551.9
    ],
    [
      "1997-07-01",
      8691.8
    ],
    [
      "1997-10-01",
      8788.3
    ],
    [
      "1998-01-01",
      8889.7
    ],
    [
      "1998-04-01",
      8994.7
    ],
    [
      "1998-07-01",
      9146.5
    ],
    [
      "1998-10-01",
      9325.7
    ],
    [
      "1999-01-01",
      9447.1
    ],
    [
      "1999-04-01",
      9557
    ],
    [
      "1999-07-01",
      9712.3
    ],
    [
      "1999-10-01",
      9926.1
    ],
    [
      "2000-01-01",
      10031
    ],
    [
      "2000-04-01",
      10278.3
    ],
    [
      "2000-07-01",
      10357.4
    ],
    [
      "2000-10-01",
      10472.3
    ],
    [
      "2001-01-01",
      10508.1
    ],
    [
      "2001-04-01",
      10638.4
    ],
    [
      "2001-07-01",
      10639.5
    ],
    [
      "2001-10-01",
      10701.3
    ],
    [
      "2002-01-01",
      10834.4
    ],
    [
      "2002-04-01",
      10934.8
    ],
    [
      "2002-07-01",
      11037.1
    ],
    [
      "2002-10-01",
      11103.8
    ],
    [
      "2003-01-01",
      11230.1
    ],
    [
      "2003-04-01",
      11370.7
    ],
    [
      "2003-07-01",
      11625.1
    ],
    [
      "2003-10-01",
      11816.8
    ],
    [
      "2004-01-01",
      11988.4
    ],
    [
      "2004-04-01",
      12181.4
    ],
    [
      "2004-07-01",
      12367.7
    ],
    [
      "2004-10-01",
      12562.2
    ],
    [
      "2005-01-01",
      12813.7
    ],
    [
      "2005-04-01",
      12974.1
    ],
    [
      "2005-07-01",
      13205.4
    ],
    [
      "2005-10-01",
      13381.6
    ],
    [
      "2006-01-01",
      13648.9
    ],
    [
      "2006-04-01",
      13799.8
    ],
    [
      "2006-07-01",
      13908.5
    ],
    [
      "2006-10-01",
      14066.4
    ],
    [
      "2007-01-01",
      14233.2
    ],
    [
      "2007-04-01",
      14422.3
    ],
    [
      "2007-07-01",
      14569.7
    ],
    [
      "2007-10-01",
      14685.3
    ],
    [
      "2008-01-01",
      14668.4
    ],
    [
      "2008-04-01",
      14813
    ],
    [
      "2008-07-01",
      14843
    ],
    [
      "2008-10-01",
      14549.9
    ],
    [
      "2009-01-01",
      14383.9
    ],
    [
      "2009-04-01",
      14340.4
    ],
    [
      "2009-07-01",
      14384.1
    ],
    [
      "2009-10-01",
      14566.5
    ],
    [
      "2010-01-01",
      14681.1
    ],
    [
      "2010-04-01",
      14888.6
    ],
    [
      "2010-07-01",
      15057.7
    ],
    [
      "2010-10-01",
      15230.2
    ],
    [
      "2011-01-01",
      15238.4
    ],
    [
      "2011-04-01",
      15460.9
    ],
    [
      "2011-07-01",
      15587.1
    ],
    [
      "2011-10-01",
      15785.3
    ],
    [
      "2012-01-01",
      15973.9
    ],
    [
      "2012-04-01",
      16121.9
    ],
    [
      "2012-07-01",
      16227.9
    ],
    [
      "2012-10-01",
      16297.3
    ],
    [
      "2013-01-01",
      16440.7
    ],
    [
      "2013-04-01",
      16526.8
    ],
    [
      "2013-07-01",
      16727.5
    ],
    [
      "2013-10-01",
      16957.6
    ],
    [
      "2014-01-01",
      16984.3
    ],
    [
      "2014-04-01",
      17270
    ],
    [
      "2014-07-01",
      17522.1
    ],
    [
      "2014-10-01",
      17615.9
    ],
    [
      "2015-01-01",
      17649.3
    ],
    [
      "2015-04-01",
      17913.7
    ],
    [
      "2015-07-01",
      18064.7
    ]
  ]
}

window.fetch = async () => 
 ({ ok: true, status: 200, json: () => GDPDataJson})


const clock = __FakeTimers.install()
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

The chart should have a `g` element x-axis with a corresponding id `x-axis`.

```js
assert.isNotEmpty(document.querySelector('g#x-axis'))
```

The chart should have a `g` element y-axis with a corresponding id `y-axis`.

```js
assert.isNotEmpty(document.querySelector('g#y-axis'))
```

The x axis should contain multiple tick labels, each with the corresponding `class="tick"`.

```js
assert.isNotEmpty(document.querySelectorAll('#x-axis .tick'));
```

The y axis should contain multiple tick labels, each with the corresponding `class="tick"`.

```js
assert.isNotEmpty(document.querySelectorAll('#y-axis .tick'));
```

Your chart should have a `rect` element for each data point with a corresponding `class="bar"` displaying the data.

```js
assert.lengthOf(document.querySelectorAll('rect.bar'), GDPDataJson.data.length);
```

Each bar should have the attributes `data-date` and `data-gdp` containing date and GDP values.

```js
const bars = document.querySelectorAll('rect.bar');
assert.isNotEmpty(bars);

bars.forEach(function (bar) {
  assert.isTrue(bar.hasAttribute('data-date'));
  assert.isTrue(bar.hasAttribute('data-gdp'));
});
```

The bar elements' `data-date` attributes should match the order of the provided data.

```js
const bars = document.querySelectorAll('rect.bar');
assert.isNotEmpty(bars);
bars.forEach(function (bar, i) {
const currentBarDate = bar.getAttribute('data-date');
  assert.equal(
    currentBarDate,
    GDPDataJson.data[i][0]
  );
});

```

The bar elements' `data-gdp` attributes should match the order of the provided data.

```js
const bars = document.querySelectorAll('rect.bar');
assert.isNotEmpty(bars);
bars.forEach(function (bar, i) {
  const currentBarGdp = bar.getAttribute('data-gdp');
  assert.equal(
    currentBarGdp,
    GDPDataJson.data[i][1]
  );
});
```

Each bar element's height should accurately represent the data's corresponding GDP

```js
const bars = document.querySelectorAll('rect.bar');
assert.isNotEmpty(bars);
const firstRatio =
  parseFloat(bars[0].getAttribute('data-gdp')) /
  parseFloat(bars[0].getAttribute('height'));
/* iterate through each bar and make sure that its height is consistent
with its corresponding data point using the first ratio */
/* this test completely validates the bars, but isn\'t very useful to
the user, so data-date and data-gdp tests were added for clarity */
bars.forEach(function (bar) {
  const dataValue = bar.getAttribute('data-gdp');
  const barHeight = bar.getAttribute('height');
  const ratio = parseFloat(dataValue) / parseFloat(barHeight);
  assert.equal(
    firstRatio.toFixed(3),
    ratio.toFixed(3)
  );
});
```

The `data-date` attribute and its corresponding bar element should align with the corresponding value on the x-axis.

```js
const axis = document.querySelector('#x-axis');
assert.exists(axis);
const coordAttr = 'x';
const barsCollection = document.querySelectorAll('.bar');
assert.isNotEmpty(barsCollection);
const ticksCollection = axis.querySelectorAll('.tick');
assert.isNotEmpty(ticksCollection);
const shapeAttr = 'data-date';
// options are 'minute', 'month', 'thousand', and 'year'
const dataType = 'year' || Date;
// what vertex of shape to measure against the axis
// options are 'topLeft' and 'center'
const shapeAlign = 'topLeft';

assert.isTrue(
  areShapesAlignedWithTicks(
    barsCollection,
    ticksCollection,
    coordAttr,
    shapeAttr,
    dataType,
    shapeAlign
  ),
  "x values don't line up with x locations "
);
```

The `data-gdp` attribute and its corresponding bar element should align with the corresponding value on the y-axis.

```js
const axis = document.querySelector('#y-axis');
assert.exists(axis);
const coordAttr = 'y';
const barsCollection = document.querySelectorAll('.bar');
assert.isNotEmpty(barsCollection);
const ticksCollection = axis.querySelectorAll('.tick');
assert.isNotEmpty(ticksCollection);
const shapeAttr = 'data-gdp';
const dataType = 'thousand';
const shapeAlign = 'topLeft';

assert.isTrue(
  areShapesAlignedWithTicks(
    barsCollection,
    ticksCollection,
    coordAttr,
    shapeAttr,
    dataType,
    shapeAlign
  ),
  "y values don't line up with y locations "
);
```

When hovering over an area your bar chart should have a tooltip with a corresponding `id="tooltip"` which displays more information about the area.

```js
const areas = document.querySelectorAll('.bar');
assert.isNotEmpty(areas);
const toolTipDataName = 'data-date';
const areaDataName = 'data-date';

// Place mouse on random bar and check if tooltip is visible.
const randomIndex = getRandomIndex(areas.length);
const randomArea = areas[randomIndex];
triggerMouseEvent(randomArea, 'mouseover');
triggerMouseEvent(randomArea, 'mousemove');
triggerMouseEvent(randomArea, 'mouseenter');

// Advance time to accommodate tooltip transitions.
clock.tick(1000)

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
clock.tick(1000)

const hidden = isToolTipHidden(tooltip);
assert.isTrue(
  hidden,
  'Tooltip should be hidden when mouse is not on an area'
);
```

The tooltip should have a `data-date` attribute that corresponds to the `data-date` of the active area.

```js
const areas = document.querySelectorAll('.bar');
assert.isNotEmpty(areas);
const toolTipDataName = 'data-date';
const areaDataName = 'data-date';

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
    tooltip.getAttribute(toolTipDataName),
    `Could not find attribute "${toolTipDataName}" in tooltip `
  );

  assert.equal(
    tooltip.getAttribute(toolTipDataName),
    randomArea.getAttribute(areaDataName),
    `Tooltip's "${toolTipDataName}" attribute should be equal to the ` +
      `active area's "${areaDataName}" attribute`
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
    <title>Build a Bar Chart</title>
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
<html  lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="styles.css" />
    <title>Build a Bar Chart</title>
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

let width = 800,
  height = 400,
  barWidth = width / 275;

let tooltip = d3
  .select('.visHolder')
  .append('div')
  .attr('id', 'tooltip')
  .style('opacity', 0);

let overlay = d3
  .select('.visHolder')
  .append('div')
  .attr('class', 'overlay')
  .style('opacity', 0);

let svgContainer = d3
  .select('.visHolder')
  .append('svg')
  .attr('width', width + 100)
  .attr('height', height + 60);

d3.json(
  'https://cdn.freecodecamp.org/curriculum/labs/data/bar-chart/GDP-data.json'
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

    let years = data.data.map(function (item) {
      let quarter;
      let temp = item[0].substring(5, 7);

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

    let yearsDate = data.data.map(function (item) {
      return new Date(item[0]);
    });

    let xMax = new Date(d3.max(yearsDate));
    xMax.setMonth(xMax.getMonth() + 3);
    let xScale = d3
      .scaleTime()
      .domain([d3.min(yearsDate), xMax])
      .range([0, width]);

    let xAxis = d3.axisBottom().scale(xScale);

    svgContainer
      .append('g')
      .call(xAxis)
      .attr('id', 'x-axis')
      .attr('transform', 'translate(60, 400)');

    let GDP = data.data.map(function (item) {
      return item[1];
    });

    let scaledGDP = [];

    let gdpMax = d3.max(GDP);

    let linearScale = d3.scaleLinear().domain([0, gdpMax]).range([0, height]);

    scaledGDP = GDP.map(function (item) {
      return linearScale(item);
    });

    let yAxisScale = d3.scaleLinear().domain([0, gdpMax]).range([height, 0]);

    let yAxis = d3.axisLeft(yAxisScale);

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
        let i = this.getAttribute('index');

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
