---
id: 587d7db2367417b2b2512b89
title: Use a Mixin to Add Common Behavior Between Unrelated Objects
challengeType: 1
---

## Description
<section id='description'>
As you have seen, behavior is shared through inheritance. However, there are cases when inheritance is not the best solution. Inheritance does not work well for unrelated objects like <code>Bird</code> and <code>Airplane</code>. They can both fly, but a <code>Bird</code> is not a type of <code>Airplane</code> and vice versa.
For unrelated objects, it's better to use <code>mixins</code>. A <code>mixin</code> allows other objects to use a collection of functions.
<blockquote>let flyMixin = function(obj) {<br>&nbsp;&nbsp;obj.fly = function() {<br>&nbsp;&nbsp;&nbsp;&nbsp;console.log("Flying, wooosh!");<br>&nbsp;&nbsp;}<br>};</blockquote>
The <code>flyMixin</code> takes any object and gives it the <code>fly</code> method.
<blockquote>let bird = {<br>&nbsp;&nbsp;name: "Donald",<br>&nbsp;&nbsp;numLegs: 2<br>};<br><br>let plane = {<br>&nbsp;&nbsp;model: "777",<br>&nbsp;&nbsp;numPassengers: 524<br>};<br><br>flyMixin(bird);<br>flyMixin(plane);</blockquote>
Here <code>bird</code> and <code>plane</code> are passed into <code>flyMixin</code>, which then assigns the <code>fly</code> function to each object. Now <code>bird</code> and <code>plane</code> can both fly:
<blockquote>bird.fly(); // prints "Flying, wooosh!"<br>plane.fly(); // prints "Flying, wooosh!"</blockquote>
Note how the <code>mixin</code> allows for the same <code>fly</code> method to be reused by unrelated objects <code>bird</code> and <code>plane</code>.
</section>

## Instructions
<section id='instructions'>
Create a <code>mixin</code> named <code>glideMixin</code> that defines a method named <code>glide</code>. Then use the <code>glideMixin</code> to give both <code>bird</code> and <code>boat</code> the ability to glide.
</section>

## Tests
<section id='tests'>

```yml
- text: Your code should declare a <code>glideMixin</code> variable that is a function.
  testString: 'assert(typeof glideMixin === "function", ''Your code should declare a <code>glideMixin</code> variable that is a function.'');'
- text: Your code should use the <code>glideMixin</code> on the <code>bird</code> object to give it the <code>glide</code> method.
  testString: 'assert(typeof bird.glide === "function", ''Your code should use the <code>glideMixin</code> on the <code>bird</code> object to give it the <code>glide</code> method.'');'
- text: Your code should use the <code>glideMixin</code> on the <code>boat</code> object to give it the <code>glide</code> method.
  testString: 'assert(typeof boat.glide === "function", ''Your code should use the <code>glideMixin</code> on the <code>boat</code> object to give it the <code>glide</code> method.'');'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let bird = {
  name: "Donald",
  numLegs: 2
};

let boat = {
  name: "Warrior",
  type: "race-boat"
};

// Add your code below this line






```

</div>



</section>

## Solution
<section id='solution'>


```js
let bird = {
  name: "Donald",
  numLegs: 2
};

let boat = {
  name: "Warrior",
  type: "race-boat"
};
function glideMixin (obj) {
  obj.glide = () => 'Gliding!';
}

glideMixin(bird);
glideMixin(boat);
```

</section>
