---
id: 5eb3e4b20aa93c437f9e9717
title: Set of real numbers
challengeType: 5
forumTopicId: 385322
---

## Description

<section id='description'>
All real numbers form the uncountable set ℝ.  Among its subsets, relatively simple are the convex sets, each expressed as a range between two real numbers <i>a</i> and <i>b</i> where <i>a</i> ≤ <i>b</i>.  There are actually four cases for the meaning of "between", depending on open or closed boundary:

<ul>
  <li>[<i>a</i>, <i>b</i>]: {<i>x</i> | <i>a</i> ≤ <i>x</i> and <i>x</i> ≤ <i>b</i> }</li>
  <li>(<i>a</i>, <i>b</i>): {<i>x</i> | <i>a</i> < <i>x</i> and <i>x</i> < <i>b</i> }</li>
  <li>[<i>a</i>, <i>b</i>): {<i>x</i> | <i>a</i> ≤ <i>x</i> and <i>x</i> < <i>b</i> }</li>
  <li>(<i>a</i>, <i>b</i>]: {<i>x</i> | <i>a</i> < <i>x</i> and <i>x</i> ≤ <i>b</i> }</li>
</ul>

Note that if <i>a</i> = <i>b</i>, of the four only [<i>a</i>, <i>a</i>] would be non-empty.

<strong>Task</strong>

<ul>
  <li>Devise a way to represent any set of real numbers, for the definition of "any" in the implementation notes below.</li>
  <li>Provide methods for these common set operations (<i>x</i> is a real number; <i>A</i> and <i>B</i> are sets):</li>
  <ul>
    <li>
      <i>x</i> ∈ <i>A</i>: determine if <i>x</i> is an element of <i>A</i><br>
      example: 1 is in [1, 2), while 2, 3, ... are not.
    </li>
    <li>
      <i>A</i> ∪ <i>B</i>: union of <i>A</i> and <i>B</i>, i.e. {<i>x</i> | <i>x</i> ∈ <i>A</i> or <i>x</i> ∈ <i>B</i>}<br>
      example: [0, 2) ∪ (1, 3) = [0, 3); [0, 1) ∪ (2, 3] = well, [0, 1) ∪ (2, 3]
    </li>
    <li>
      <i>A</i> ∩ <i>B</i>: intersection of <i>A</i> and <i>B</i>, i.e. {<i>x</i> | <i>x</i> ∈ <i>A</i> and <i>x</i> ∈ <i>B</i>}<br>
      example: [0, 2) ∩ (1, 3) = (1, 2); [0, 1) ∩ (2, 3] = empty set
    </li>
    <li>
      <i>A</i> - <i>B</i>: difference between <i>A</i> and <i>B</i>, also written as <i>A</i> \ <i>B</i>, i.e. {<i>x</i> | <i>x</i> ∈ <i>A</i> and <i>x</i> ∉ <i>B</i>}<br>
      example: [0, 2) − (1, 3) = [0, 1]
    </li>
  </ul>
</ul>
</section>

## Instructions

<section id='instructions'>

Write a function that takes 2 objects, a string and an array as parameters. The objects represents the set and have attributes: `low`, `high` and `rangeType`. 

The `rangeType` can have values 0, 1, 2 and 3 for `CLOSED`, `BOTH_OPEN`, `LEFT_OPEN` and `RIGHT_OPEN`, respectively. The function should implement a set using this information. 

The string represents the operation to be performed on the sets. It can be: `"union"`, `"intersect"` and `"subtract"` (difference). 

After performing the operation, the function should check if the values in the array are present in the resultant set and store a corresponding boolean value to an array. The function should return this array.

</section>

## Tests

<section id='tests'>

```yml
tests:
  - text: <code>realSet</code> should be a function.
    testString: assert(typeof realSet=='function');
  - text: <code>realSet({"low":0, "high":1, "rangeType":2}, {"low":0, "high":2, "rangeType":3}, "union", [1, 2, 3])</code> should return a array.
    testString: assert(Array.isArray(realSet({"low":0, "high":1, "rangeType":2}, {"low":0, "high":2, "rangeType":3}, "union", [1, 2, 3])));
  - text: <code>realSet({"low":0, "high":1, "rangeType":2}, {"low":0, "high":2, "rangeType":3}, "union", [1, 2, 3])</code> should return <code>[true, false, false]</code>.
    testString: assert.deepEqual(realSet({"low":0, "high":1, "rangeType":2}, {"low":0, "high":2, "rangeType":3}, "union", [1, 2, 3]), [true, false, false]);
  - text: <code>realSet({"low":0, "high":2, "rangeType":3}, {"low":1, "high":2, "rangeType":2}, "intersect", [0, 1, 2])</code> should return <code>[false, false, false]</code>.
    testString: assert.deepEqual(realSet({"low":0, "high":2, "rangeType":3}, {"low":1, "high":2, "rangeType":2}, "intersect", [0, 1, 2]), [false, false, false]);
  - text: <code>realSet({"low":0, "high":3, "rangeType":3}, {"low":0, "high":1, "rangeType":1}, "subtract", [0, 1, 2])</code> should return <code>[true, true, true]</code>.
    testString: assert.deepEqual(realSet({"low":0, "high":3, "rangeType":3}, {"low":0, "high":1, "rangeType":1}, "subtract", [0, 1, 2]), [true, true, true]);
  - text: <code>realSet({"low":0, "high":3, "rangeType":3}, {"low":0, "high":1, "rangeType":0}, "subtract", [0, 1, 2])</code> should return <code>[false, false, true]</code>.
    testString: assert.deepEqual(realSet({"low":0, "high":3, "rangeType":3}, {"low":0, "high":1, "rangeType":0}, "subtract", [0, 1, 2]), [false, false, true]);
  - text: <code>realSet({"low":0, "high":33, "rangeType":1}, {"low":30, "high":31, "rangeType":0}, "intersect", [30, 31, 32])</code> should return <code>[true, true, false]</code>.
    testString: assert.deepEqual(realSet({"low":0, "high":33, "rangeType":1}, {"low":30, "high":31, "rangeType":0}, "intersect", [30, 31, 32]), [true, true, false]);
```

</section>

## Challenge Seed

<section id='challengeSeed'>
<div id='js-seed'>

```js
function realSet(set1, set2, operation, values) {

}
```

</div>
</section>

## Solution

<section id='solution'>

```js
function realSet(set1, set2, operation, values) {
  const RangeType = {
    CLOSED: 0,
    BOTH_OPEN: 1,
    LEFT_OPEN: 2,
    RIGHT_OPEN: 3
  };

  function Predicate(test) {
    this.test = test;
    this.or = function(other) {
      return new Predicate(t => this.test(t) || other.test(t));
    };
    this.and = function(other) {
      return new Predicate(t => this.test(t) && other.test(t));
    };
    this.negate = function() {
      return new Predicate(t => !this.test(t));
    };
  }

  function RealSet(start, end, rangeType, predF) {
    this.low = start;
    this.high = end;

    if (predF) {
      this.predicate = new Predicate(predF);
    } else {
      this.predicate = new Predicate(d => {
        switch (rangeType) {
          case RangeType.CLOSED:
            return start <= d && d <= end;
          case RangeType.BOTH_OPEN:
            return start < d && d < end;
          case RangeType.LEFT_OPEN:
            return start < d && d <= end;
          case RangeType.RIGHT_OPEN:
            return start <= d && d < end;
        }
      });
    }

    this.contains = function(d) {
      return this.predicate.test(d);
    };

    this.union = function(other) {
      var low2 = Math.min(this.low, other.low);
      var high2 = Math.max(this.high, other.high);
      return new RealSet(low2, high2, null, d =>
        this.predicate.or(other.predicate).test(d)
      );
    };

    this.intersect = function(other) {
      var low2 = Math.min(this.low, other.low);
      var high2 = Math.max(this.high, other.high);
      return new RealSet(low2, high2, null, d =>
        this.predicate.and(other.predicate).test(d)
      );
    };

    this.subtract = function(other) {
      return new RealSet(this.low, this.high, null, d =>
        this.predicate.and(other.predicate.negate()).test(d)
      );
    };
  }
  set1 = new RealSet(set1.low, set1.high, set1.rangeType);
  set2 = new RealSet(set2.low, set2.high, set2.rangeType);
  var result = [];
  values.forEach(function(value) {
    result.push(set1[operation](set2).contains(value));
  });
  return result;
}
```

</section>
