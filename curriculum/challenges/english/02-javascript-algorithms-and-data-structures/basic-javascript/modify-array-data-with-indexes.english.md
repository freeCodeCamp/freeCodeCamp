---
id: cf1111c1c11feddfaeb8bdef
title: Modify Array Data With Indexes
challengeType: 1
videoUrl: 'https://scrimba.com/c/czQM4A8'
forumTopicId: 18241
---

## Description
<section id='description'>
Unlike strings, the entries of arrays are <dfn>mutable</dfn> and can be changed freely.
<strong>Example</strong>

```js
var ourArray = [50,40,30];
ourArray[0] = 15; // equals [15,40,30]
```

<strong>Note</strong><br>There shouldn't be any spaces between the array name and the square brackets, like <code>array [0]</code>. Although JavaScript is able to process this correctly, this may confuse other programmers reading your code.
</section>

## Instructions
<section id='instructions'>
Modify the data stored at index <code>0</code> of <code>myArray</code> to a value of <code>45</code>.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>myArray</code> should now be [45,64,99].
    testString: assert((function(){if(typeof myArray != 'undefined' && myArray[0] == 45 && myArray[1] == 64 && myArray[2] == 99){return true;}else{return false;}})());
  - text: You should be using correct index to modify the value in <code>myArray</code>.
    testString: assert((function(){if(code.match(/myArray\[0\]\s*=\s*/g)){return true;}else{return false;}})());

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Setup
var myArray = [18,64,99];

// Only change code below this line


```

</div>


### After Test
<div id='js-teardown'>

```js
if(typeof myArray !== "undefined"){(function(){return myArray;})();}
```

</div>

</section>

## Solution
<section id='solution'>


```js
var myArray = [18,64,99];
myArray[0] = 45;
```

</section>
