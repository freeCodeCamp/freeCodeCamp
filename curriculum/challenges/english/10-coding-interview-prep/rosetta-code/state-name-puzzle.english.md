---
id: 5a23c84252665b21eecc8024
title: State name puzzle
challengeType: 5
forumTopicId: 302323
---

## Description

<section id='description'>

This task is inspired by Mark Nelson's DDJ Column "Wordplay" and one of the weekly puzzle challenges from Will Shortz on NPR Weekend Edition <a href="https://www.npr.org/templates/story/story.php?storyId=9264290" target="_blank">[1]</a> and originally attributed to David Edelheit.
The challenge was to take the names of two U.S. States, mix them all together, then rearrange the letters to form the names of two <i>different</i> U.S. States (so that all four state names differ from one another).
What states are these?
The problem was reissued on <a href="https://tapestry.tucson.az.us/twiki/bin/view/Main/StateNamesPuzzle" target="_blank">the Unicon Discussion Web</a> which includes several solutions with analysis. Several techniques may be helpful and you may wish to refer to <a href="https://en.wikipedia.org/wiki/Goedel_numbering" target="_blank">Gödel numbering</a>, <a href="https://en.wikipedia.org/wiki/Equivalence_relation" target="_blank">equivalence relations</a>, and <a href="https://en.wikipedia.org/wiki/Equivalence_classes" target="_blank">equivalence classes</a>. The basic merits of these were discussed in the Unicon Discussion Web.
A second challenge in the form of a set of fictitious new states was also presented.

</section>

## Instructions

<section id='instructions'>

Write a function to solve the challenge for the given array of names of states. The function should return an array. Each element should be an object in this form: <code>{"from":[],"to":[]}</code>. The "from" array should contain the original names and the "to" array should contain the resultant names.

</section>

## Tests

<section id='tests'>

```yml
tests:
  - text: <code>solve</code> should be a function.
    testString: assert(typeof solve == 'function');
  - text: <code>solve(["New Mexico", "New York", "North Carolina ", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota"])</code> should return an array.
    testString: assert(Array.isArray(solve(["New Mexico", "New York", "North Carolina ", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota"])));
  - text: '<code>solve(["New Mexico", "New York", "North Carolina ", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota"])</code> should return <code>[{ from: ["North Carolina ", "South Dakota"], to: ["North Dakota", "South Carolina"] }]</code>.'
    testString: assert.deepEqual(solve(["New Mexico", "New York", "North Carolina ", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota"]), [{ from:["North Carolina ", "South Dakota"], to:["North Dakota", "South Carolina"] }]);
  - text: '<code>solve(["New York", "New Kory", "Wen Kory", "York New", "Kory New", "New Kory"])</code> should return <code>[{ from: ["New Kory", "New York"], to: ["Wen Kory", "York New"] }, { from: ["New Kory", "New York"], to: ["Kory New", "Wen Kory"] }, { from: ["New Kory", "New York"], to: ["Kory New", "York New"] }, { from: ["New York", "Wen Kory"], to: ["New Kory", "York New"] }, { from: ["New York", "Wen Kory"], to: ["Kory New", "New Kory"] }, { from: ["New York", "Wen Kory"], to: ["Kory New", "York New"] }, { from: ["New York", "York New"], to: ["New Kory", "Wen Kory"] }, { from: ["New York", "York New"], to: ["Kory New", "New Kory"] }, { from: ["New York", "York New"], to: ["Kory New", "Wen Kory"] }, { from: ["Kory New", "New York"], to: ["New Kory", "Wen Kory"] }, { from: ["Kory New", "New York"], to: ["New Kory", "York New"] }, { from: ["Kory New", "New York"], to: ["Wen Kory", "York New"] }, { from: ["New Kory", "Wen Kory"], to: ["Kory New", "York New"] }, { from: ["New Kory", "York New"], to: ["Kory New", "Wen Kory"] }, { from: ["Kory New", "New Kory"], to: ["Wen Kory", "York New"] }]</code>.'
    testString: assert.deepEqual(solve(["New York", "New Kory", "Wen Kory", "York New", "Kory New", "New Kory"]), [{ from:["New Kory", "New York"], to:["Wen Kory", "York New"] }, { from:["New Kory", "New York"], to:["Kory New", "Wen Kory"] }, { from:["New Kory", "New York"], to:["Kory New", "York New"] }, { from:["New York", "Wen Kory"], to:["New Kory", "York New"] }, { from:["New York", "Wen Kory"], to:["Kory New", "New Kory"] }, { from:["New York", "Wen Kory"], to:["Kory New", "York New"] }, { from:["New York", "York New"], to:["New Kory", "Wen Kory"] }, { from:["New York", "York New"], to:["Kory New", "New Kory"] }, { from:["New York", "York New"], to:["Kory New", "Wen Kory"] }, { from:["Kory New", "New York"], to:["New Kory", "Wen Kory"] }, { from:["Kory New", "New York"], to:["New Kory", "York New"] }, { from:["Kory New", "New York"], to:["Wen Kory", "York New"] }, { from:["New Kory", "Wen Kory"], to:["Kory New", "York New"] }, { from:["New Kory", "York New"], to:["Kory New", "Wen Kory"] }, { from:["Kory New", "New Kory"], to:["Wen Kory", "York New"] }]);
```

</section>

## Challenge Seed

<section id='challengeSeed'>

<div id='js-seed'>

```js
function solve(input) {

}
```

</div>
</section>

## Solution

<section id='solution'>

```js
function solve(input) {
  var orig = {};
  input.forEach(function(e) {
    orig[__helpers.removeWhiteSpace(e).toLowerCase()] = e;
  });

  input = Object.keys(orig);
  var map = {};
  for (var i = 0; i < input.length - 1; i++) {
    var pair0 = input[i];
    for (var j = i + 1; j < input.length; j++) {
      var pair = [pair0, input[j]];
      var s = pair0 + pair[1];
      var key = s.split('').sort();

      var val = map[key] ? map[key] : [];
      val.push(pair);
      map[key] = val;
    }
  }

  var result = [];
  Object.keys(map).forEach(key => {
    for (var i = 0; i < map[key].length - 1; i++) {
      var a = map[key][i];
      for (var j = i + 1; j < map[key].length; j++) {
        var b = map[key][j];

        if (new Set([a[0], b[0], a[1], b[1]]).size < 4) continue;
        var from = [orig[a[0]], orig[a[1]]].sort();
        var to = [orig[b[0]], orig[b[1]]].sort();
        result.push({
          from,
          to
        });
      }
    }
  });

  return result;
}
```

</section>
