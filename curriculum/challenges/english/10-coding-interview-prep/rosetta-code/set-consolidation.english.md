---
id: 5eb3e4af7d0e7b760b46cedc
title: Set consolidation
challengeType: 5
forumTopicId: 385319
---

## Description

<section id='description'>
Given two sets of items then if any item is common to any set then the result of applying <i>consolidation</i> to those sets is a set of sets whose contents is:

<ul>
  <li>The two input sets if no common item exists between the two input sets of items.</li>
  <li>The single set that is the union of the two input sets if they share a common item.</li>
</ul>

Given N sets of items where N > 2 then the result is the same as repeatedly replacing all combinations of two sets by their consolidation until no further consolidation between set pairs is possible. If N < 2 then consolidation has no strict meaning and the input can be returned.

Here are some examples:

<strong>Example 1:</strong>

<span style="margin-left: 2em;">Given the two sets `{A,B}` and `{C,D}` then there is no common element between the sets and the result is the same as the input.</span>

<strong>Example 2:</strong>

<span style="margin-left: 2em;">Given the two sets `{A,B}` and `{B,D}` then there is a common element `B` between the sets and the result is the single set `{B,D,A}`.  (Note that order of items in a set is immaterial: `{A,B,D}` is the same as `{B,D,A}` and `{D,A,B}`, etc).</span>

<strong>Example 3:</strong>

<span style="margin-left: 2em;">Given the three sets `{A,B}` and `{C,D}` and `{D,B}` then there is no common element between the sets `{A,B}` and `{C,D}` but the sets `{A,B}` and `{D,B}` do share a common element that consolidates to produce the result `{B,D,A}`. On examining this result with the remaining set, `{C,D}`, they share a common element and so consolidate to the final output of the single set `{A,B,C,D}`</span>

<strong>Example 4:</strong>

<span style="margin-left: 2em;">The consolidation of the five sets:</span>

<span style="margin-left: 4em;">`{H,I,K}`, `{A,B}`, `{C,D}`, `{D,B}`, and `{F,G,H}`</span>

<span style="margin-left: 2em;">Is the two sets:</span>

<span style="margin-left: 4em;">`{A, C, B, D}`, and `{G, F, I, H, K}`</span>
</section>

## Instructions

<section id='instructions'>
Write a function that takes an array of strings as a parameter. Each string is represents a set with the characters representing the set elements. The function should return a 2D array containing the consolidated sets. Note: Each set should be sorted.
</section>

## Tests

<section id='tests'>

```yml
tests:
  - text: <code>setConsolidation</code> should be a function.
    testString: assert(typeof setConsolidation === 'function');
  - text: <code>setConsolidation(["AB", "CD"])</code> should return a array.
    testString: assert(Array.isArray(setConsolidation(["AB", "CD"])));
  - text: <code>setConsolidation(["AB", "CD"])</code> should return <code>[["C", "D"], ["A", "B"]]</code>.
    testString: assert.deepEqual(setConsolidation(["AB", "CD"]), [["C", "D"], ["A", "B"]]);
  - text: <code>setConsolidation(["AB", "BD"])</code> should return <code>[["A", "B", "D"]]</code>.
    testString: assert.deepEqual(setConsolidation(["AB", "BD"]), [["A", "B", "D"]]);
  - text: <code>setConsolidation(["AB", "CD", "DB"])</code> should return <code>[["A", "B", "C", "D"]]</code>.
    testString: assert.deepEqual(setConsolidation(["AB", "CD", "DB"]), [["A", "B", "C", "D"]]);
  - text: <code>setConsolidation(["HIK", "AB", "CD", "DB", "FGH"])</code> should return <code>[["F", "G", "H", "I", "K"], ["A", "B", "C", "D"]]</code>.
    testString: assert.deepEqual(setConsolidation(["HIK", "AB", "CD", "DB", "FGH"]), [["F", "G", "H", "I", "K"], ["A", "B", "C", "D"]]);
```

</section>

## Challenge Seed

<section id='challengeSeed'>
<div id='js-seed'>

```js
function setConsolidation(sets) {

}
```

</div>
</section>

## Solution

<section id='solution'>

```js
function setConsolidation(sets) {
  function addAll(l1, l2) {
    l2.forEach(function(e) {
      if (l1.indexOf(e) == -1) l1.push(e);
    });
  }

  function consolidate(sets) {
    var r = [];
    for (var i = 0; i < sets.length; i++) {
      var s = sets[i];
      {
        var new_r = [];
        new_r.push(s);
        for (var j = 0; j < r.length; j++) {
          var x = r[j];
          {
            if (
              !(function(c1, c2) {
                for (var i = 0; i < c1.length; i++) {
                  if (c2.indexOf(c1[i]) >= 0) return false;
                }
                return true;
              })(s, x)
            ) {
              (function(l1, l2) {
                addAll(l1, l2);
              })(s, x);
            } else {
              new_r.push(x);
            }
          }
        }
        r = new_r;
      }
    }
    return r;
  }

  function consolidateR(sets) {
    if (sets.length < 2) return sets;
    var r = [];
    r.push(sets[0]);
    {
      var arr1 = consolidateR(sets.slice(1, sets.length));
      for (var i = 0; i < arr1.length; i++) {
        var x = arr1[i];
        {
          if (
            !(function(c1, c2) {
              for (var i = 0; i < c1.length; i++) {
                if (c2.indexOf(c1[i]) >= 0) return false;
              }
              return true;
            })(r[0], x)
          ) {
            (function(l1, l2) {
              return l1.push.apply(l1, l2);
            })(r[0], x);
          } else {
            r.push(x);
          }
        }
      }
    }
    return r;
  }

  function hashSetList(set) {
    var r = [];
    for (var i = 0; i < set.length; i++) {
      r.push([]);
      for (var j = 0; j < set[i].length; j++)
        (function(s, e) {
          if (s.indexOf(e) == -1) {
            s.push(e);
            return true;
          } else {
            return false;
          }
        })(r[i], set[i].charAt(j));
    }
    return r;
  }

  var h1 = consolidate(hashSetList(sets)).map(function(e) {
    e.sort();
    return e;
  });
  return h1;
}
```

</section>
