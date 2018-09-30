---
id: 56533eb9ac21ba0edf2244ca
title: Using Objects for Lookups
challengeType: 1
---

## Description
<section id='description'>
Objects can be thought of as a key/value storage, like a dictionary. If you have tabular data, you can use an object to "lookup" values rather than a <code>switch</code> statement or an <code>if/else</code> chain. This is most useful when you know that your input data is limited to a certain range.
Here is an example of a simple reverse alphabet lookup:
<blockquote>var alpha = {<br>&nbsp;&nbsp;1:"Z",<br>&nbsp;&nbsp;2:"Y",<br>&nbsp;&nbsp;3:"X",<br>&nbsp;&nbsp;4:"W",<br>&nbsp;&nbsp;...<br>&nbsp;&nbsp;24:"C",<br>&nbsp;&nbsp;25:"B",<br>&nbsp;&nbsp;26:"A"<br>};<br>alpha[2]; // "Y"<br>alpha[24]; // "C"<br><br>var value = 2;<br>alpha[value]; // "Y"</blockquote>
</section>

## Instructions
<section id='instructions'>
Convert the switch statement into an object called <code>lookup</code>. Use it to look up <code>val</code> and assign the associated string to the <code>result</code> variable.
</section>

## Tests
<section id='tests'>

```yml
- text: <code>phoneticLookup("alpha")</code> should equal <code>"Adams"</code>
  testString: 'assert(phoneticLookup("alpha") === "Adams", "<code>phoneticLookup("alpha")</code> should equal <code>"Adams"</code>");'
- text: <code>phoneticLookup("bravo")</code> should equal <code>"Boston"</code>
  testString: 'assert(phoneticLookup("bravo") === "Boston", "<code>phoneticLookup("bravo")</code> should equal <code>"Boston"</code>");'
- text: <code>phoneticLookup("charlie")</code> should equal <code>"Chicago"</code>
  testString: 'assert(phoneticLookup("charlie") === "Chicago", "<code>phoneticLookup("charlie")</code> should equal <code>"Chicago"</code>");'
- text: <code>phoneticLookup("delta")</code> should equal <code>"Denver"</code>
  testString: 'assert(phoneticLookup("delta") === "Denver", "<code>phoneticLookup("delta")</code> should equal <code>"Denver"</code>");'
- text: <code>phoneticLookup("echo")</code> should equal <code>"Easy"</code>
  testString: 'assert(phoneticLookup("echo") === "Easy", "<code>phoneticLookup("echo")</code> should equal <code>"Easy"</code>");'
- text: <code>phoneticLookup("foxtrot")</code> should equal <code>"Frank"</code>
  testString: 'assert(phoneticLookup("foxtrot") === "Frank", "<code>phoneticLookup("foxtrot")</code> should equal <code>"Frank"</code>");'
- text: <code>phoneticLookup("")</code> should equal <code>undefined</code>
  testString: 'assert(typeof phoneticLookup("") === "undefined", "<code>phoneticLookup("")</code> should equal <code>undefined</code>");'
- text: You should not modify the <code>return</code> statement
  testString: 'assert(code.match(/return\sresult;/), "You should not modify the <code>return</code> statement");'
- text: 'You should not use <code>case</code>, <code>switch</code>, or <code>if</code> statements'
  testString: 'assert(!/case|switch|if/g.test(code.replace(/([/]{2}.*)|([/][*][^/*]*[*][/])/g,"")), "You should not use <code>case</code>, <code>switch</code>, or <code>if</code> statements"); '

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Setup
function phoneticLookup(val) {
  var result = "";

  // Only change code below this line
  switch(val) {
    case "alpha":
      result = "Adams";
      break;
    case "bravo":
      result = "Boston";
      break;
    case "charlie":
      result = "Chicago";
      break;
    case "delta":
      result = "Denver";
      break;
    case "echo":
      result = "Easy";
      break;
    case "foxtrot":
      result = "Frank";
  }

  // Only change code above this line
  return result;
}

// Change this value to test
phoneticLookup("charlie");
```

</div>



</section>

## Solution
<section id='solution'>


```js
function phoneticLookup(val) {
  var result = "";

  var lookup = {
    alpha: "Adams",
    bravo: "Boston",
    charlie: "Chicago",
    delta: "Denver",
    echo: "Easy",
    foxtrot: "Frank"
  };

  result = lookup[val];

  return result;
}
```

</section>
