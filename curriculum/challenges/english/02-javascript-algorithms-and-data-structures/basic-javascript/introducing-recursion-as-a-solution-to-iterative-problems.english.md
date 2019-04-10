---
id: 5cd9a70215d3c4e65518328f
title: Introducing Recursion as a Solution to Iterative Problems
challengeType: 1
videoUrl: 'https://medium.freecodecamp.org/how-recursion-works-explained-with-flowcharts-and-a-video-de61f40cb7f9?fbclid=IwAR2_d6pCpYlAcwVvFnpU2U9puL7K8hWBOiP8Ol2UDlg5N-vLiUelqKlH1PE'
---

## Description
<section id='description'>
Recursion is the programming concept of using a function that calls itself in order to 
accomplish a task. For example: <blockquote>function fillArrayWithZeros(myArray, n) {
<br>&nbsp;if(n <= 0) {
<br>&nbsp;&nbsp;return;
<br>&nbsp;}
<br>&nbsp;myArray.push(0);
<br>&nbsp;fillArrayWithZeros(myArray, n - 1);<br>}
 </blockquote>
 This function returns an array filled with n 0's inside of it. 
 Recursion has two fundamental parts: the base case, and the recursive loop. The base case tells the recursive function when to stop (in this example, when n is equal to zero), and the recursive loop tells the function when to call itself, and with what parameters (in this example: calling itself with n-1 when n is greater than zero). 
 Check out the video link at the top of the page to take a more in-depth look at how recursion works.
</section>

## Instructions
<section id='instructions'>
We have defined a function called <code>fillArrayBackwards</code> with two parameters.  The function should take an empty array in the <code>myArray</code> parameter and fill it with the numbers n to 1 based on the <code>n</code> parameter.  
For example, calling this function with <code>n = 5</code> will return the array with numbers <code>[5, 4, 3, 2, 1]</code> inside of it.
Your function must use recursion by calling itself and must not use loops of any kind.
</section>

## Tests
<section id='tests'>

``` yml
tests:
  - text: after calling <code>fillArrayBackwards(myArray, -1)</code>, myArray should be empty.
    testString: assert.isEmpty(fillArray([], -1));
  - text: after calling <code>fillArrayBackwards(myArray, 10)</code>, myArray should contain <code>[10, 9, 8, 7, 6, 5, 4, 3, 2, 1]</code>
    testString: assert.deepStrictEqual(fillArray([], 10), [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);
  - text: after calling <code>fillArrayBackwards(myArray, 5)</code>, myArray should contain <code>[5, 4, 3, 2, 1]</code>
    testString: assert.deepStrictEqual(fillArray([], 5), [5, 4, 3, 2, 1]);
  - text: Your code should not rely on any kind of loops (<code>for</code> or <code>while</code> or higher order functions such as <code>forEach</code>, <code>map</code>, <code>filter</code>, or <code>reduce</code>.).
    testString: assert(!removeJSComments(code).match(/for|while|forEach|map|filter|reduce/g));
  - text: You should use recursion to solve this problem.
    testString: assert(removeJSComments(fillArrayBackwards.toString()).match(/fillArrayBackwards\s*\(.+\)\;/));
```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js


//Only change code below this line
function fillArrayBackwards(myArray, n){
  return;
}

```

</div>

### After Test
<div id='js-teardown'>

```js
const removeJSComments = str => str.replace(/\/\*[\s\S]*?\*\/|\/\/.*$/gm, '');
function fillArray(arr, n){
  fillArrayBackwards(arr, n);
  return arr;
}

```

</div>

</section>

## Solution
<section id='solution'>

```js
//Only change code below this line
function fillArrayBackwards(myArray, n){
  if(n <= 0){
    return;
  }
  else{
    myArray.push(n);
    fillArrayBackwards(myArray, n - 1);
  }
}
```

</section>
