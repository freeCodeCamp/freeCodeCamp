---
id: 587d7db2367417b2b2512b8a
title: Use Closure to Protect Properties Within an Object from Being Modified Externally
challengeType: 1
---

## Description
<section id='description'>
In the previous challenge, <code>bird</code> had a public property <code>name</code>. It is considered public because it can be accessed and changed outside of <code>bird</code>'s definition.
<blockquote>bird.name = "Duffy";</blockquote>
Therefore, any part of your code can easily change the name of <code>bird</code> to any value. Think about things like passwords and bank accounts being easily changeable by any part of your codebase. That could cause a lot of issues.
The simplest way to make properties private is by creating a variable within the constructor function. This changes the scope of that variable to be within the constructor function versus available globally. This way, the property can only be accessed and changed by methods also within the constructor function.
<blockquote>function Bird() {<br>&nbsp;&nbsp;let hatchedEgg = 10; // private property<br><br>&nbsp;&nbsp;this.getHatchedEggCount = function() { // publicly available method that a bird object can use<br>&nbsp;&nbsp;&nbsp;&nbsp;return hatchedEgg;<br>&nbsp;&nbsp;};<br>}<br>let ducky = new Bird();<br>ducky.getHatchedEggCount(); // returns 10</blockquote>
Here <code>getHachedEggCount</code> is a privileged method, because it has access to the private variable <code>hatchedEgg</code>. This is possible because <code>hatchedEgg</code> is declared in the same context as <code>getHachedEggCount</code>. In JavaScript, a function always has access to the context in which it was created. This is called <code>closure</code>.
</section>

## Instructions
<section id='instructions'>
Change how <code>weight</code> is declared in the <code>Bird</code> function so it is a private variable. Then, create a method <code>getWeight</code> that returns the value of <code>weight</code>.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The <code>weight</code> property should be a private variable.
    testString: 'assert(!code.match(/this\.weight/g), "The <code>weight</code> property should be a private variable.");'
  - text: Your code should create a method in <code>Bird</code> called <code>getWeight</code> that returns the <code>weight</code>.
    testString: 'assert((new Bird()).getWeight() === 15, "Your code should create a method in <code>Bird</code> called <code>getWeight</code> that returns the <code>weight</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function Bird() {
  this.weight = 15;


}

```

</div>



</section>

## Solution
<section id='solution'>


```js
function Bird() {
  let weight = 15;

  this.getWeight = () => weight;
}
```

</section>
