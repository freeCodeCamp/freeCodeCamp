---
id: 598e8944f009e646fc236146
title: Understanding Undefined Value returned from a Function
challengeType: 1
---

## Description
<section id='description'>
A function can include the <code>return</code> statement but it does not have to. In the case that the function doesn't have a <code>return</code> statement, when you call it, the function processes the inner code but the returned value is <code>undefined</code>.
<strong>Example</strong>
<blockquote>var sum = 0;<br>function addSum(num) {<br>&nbsp;&nbsp;sum = sum + num;<br>}<br>var returnedValue = addSum(3); // sum will be modified but returned value is undefined</blockquote>
<code>addSum</code> is a function without a <code>return</code> statement. The function will change the global <code>sum</code> variable but the returned value of the function is <code>undefined</code>
</section>

## Instructions
<section id='instructions'>
Create a function <code>addFive</code> without any arguments. This function adds 5 to the <code>sum</code> variable, but its returned value is <code>undefined</code>.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>addFive</code> should be a function
    testString: 'assert(typeof addFive === ''function'', ''<code>addFive</code> should be a function'');'
  - text: <code>sum</code> should be equal to 8
    testString: 'assert(sum === 8, ''<code>sum</code> should be equal to 8'');'
  - text: Returned value from <code>addFive</code> should be <code>undefined</code>
    testString: 'assert(addFive() === undefined, ''Returned value from <code>addFive</code> should be <code>undefined</code>'');'
  - text: 'Inside of your functions, add 5 to the <code>sum</code> variable'
    testString: 'assert(code.match(/(sum\s*\=\s*sum\s*\+\s*5)|(sum\s*\+\=\s*5)/g).length === 1, ''Inside of your functions, add 5 to the <code>sum</code> variable'');'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Example
var sum = 0;
function addThree() {
  sum = sum + 3;
}

// Only change code below this line



// Only change code above this line
var returnedValue = addFive();
```

</div>


### After Test
<div id='js-teardown'>

```js
console.info('after the test');
```

</div>

</section>

## Solution
<section id='solution'>


```js
function addFive() {
 sum = sum + 5;
}
```

</section>
