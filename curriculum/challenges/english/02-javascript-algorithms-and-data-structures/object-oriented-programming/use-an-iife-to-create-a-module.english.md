---
id: 587d7db2367417b2b2512b8c
title: Use an IIFE to Create a Module
challengeType: 1
---

## Description
<section id='description'>
An <code>immediately invoked function expression</code> (<code>IIFE</code>) is often used to group related functionality into a single object or <code>module</code>. For example, an earlier challenge defined two mixins:
<blockquote>function glideMixin(obj) {<br>&nbsp;&nbsp;obj.glide = function() {<br>&nbsp;&nbsp;&nbsp;&nbsp;console.log("Gliding on the water");<br>&nbsp;&nbsp;};<br>}<br>function flyMixin(obj) {<br>&nbsp;&nbsp;obj.fly = function() {<br>&nbsp;&nbsp;&nbsp;&nbsp;console.log("Flying, wooosh!");<br>&nbsp;&nbsp;};<br>}</blockquote>
We can group these <code>mixins</code> into a module as follows:
<blockquote>let motionModule = (function () {<br>&nbsp;&nbsp;return {<br>&nbsp;&nbsp;&nbsp;&nbsp;glideMixin: function (obj) {<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;obj.glide = function() {<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;console.log("Gliding on the water");<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;};<br>&nbsp;&nbsp;&nbsp;&nbsp;},<br>&nbsp;&nbsp;&nbsp;&nbsp;flyMixin: function(obj) {<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;obj.fly = function() {<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;console.log("Flying, wooosh!");<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;};<br>&nbsp;&nbsp;&nbsp;&nbsp;}<br>&nbsp;&nbsp;}<br>}) (); // The two parentheses cause the function to be immediately invoked</blockquote>
Note that you have an <code>immediately invoked function expression</code> (<code>IIFE</code>) that returns an object <code>motionModule</code>. This returned object contains all of the <code>mixin</code> behaviors as properties of the object.
The advantage of the <code>module</code> pattern is that all of the motion behaviors can be packaged into a single object that can then be used by other parts of your code. Here is an example using it:
<blockquote>motionModule.glideMixin(duck);<br>duck.glide();</blockquote>
</section>

## Instructions
<section id='instructions'>
Create a <code>module</code> named <code>funModule</code> to wrap the two <code>mixins</code> <code>isCuteMixin</code> and <code>singMixin</code>. <code>funModule</code> should return an object.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>funModule</code> should be defined and return an object.
    testString: 'assert(typeof funModule === "object", ''<code>funModule</code> should be defined and return an object.'');'
  - text: <code>funModule.isCuteMixin</code> should access a function.
    testString: 'assert(typeof funModule.isCuteMixin === "function", ''<code>funModule.isCuteMixin</code> should access a function.'');'
  - text: <code>funModule.singMixin</code> should access a function.
    testString: 'assert(typeof funModule.singMixin === "function", ''<code>funModule.singMixin</code> should access a function.'');'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let isCuteMixin = function(obj) {
  obj.isCute = function() {
    return true;
  };
};
let singMixin = function(obj) {
  obj.sing = function() {
    console.log("Singing to an awesome tune");
  };
};
```

</div>



</section>

## Solution
<section id='solution'>


```js
const funModule = (function () {
  return {
    isCuteMixin: obj => {
      obj.isCute = () => true;
    },
    singMixin: obj => {
      obj.sing = () => console.log("Singing to an awesome tune");
    }
  };
})();
```

</section>
