---
id: 587d7dae367417b2b2512b7b
title: Understand Own Properties
challengeType: 1
---

## Description
<section id='description'>
In the following example, the <code>Bird</code> constructor defines two properties: <code>name</code> and <code>numLegs</code>:
<blockquote>function Bird(name) {<br>&nbsp;&nbsp;this.name  = name;<br>&nbsp;&nbsp;this.numLegs = 2;<br>}<br><br>let duck = new Bird("Donald");<br>let canary = new Bird("Tweety");</blockquote>
<code>name</code> and <code>numLegs</code> are called <code>own</code> properties, because they are defined directly on the instance object. That means that <code>duck</code> and <code>canary</code> each has its own separate copy of these properties.
In fact every instance of <code>Bird</code> will have its own copy of these properties.
The following code adds all of the <code>own</code> properties of <code>duck</code> to the array <code>ownProps</code>:
<blockquote>let ownProps = [];<br><br>for (let property in duck) {<br>&nbsp;&nbsp;if(duck.hasOwnProperty(property)) {<br>&nbsp;&nbsp;&nbsp;&nbsp;ownProps.push(property);<br>&nbsp;&nbsp;}<br>}<br><br>console.log(ownProps); // prints [ "name", "numLegs" ]</blockquote>
</section>

## Instructions
<section id='instructions'>
Add the <code>own</code> properties of <code>canary</code> to the array <code>ownProps</code>.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>ownProps</code> should include the values <code>"numLegs"</code> and <code>"name"</code>.
    testString: assert(ownProps.indexOf('name') !== -1 && ownProps.indexOf('numLegs') !== -1);
  - text: Solve this challenge without using the built in method <code>Object.keys()</code>.
    testString: assert(!/Object(\.keys|\[(['"`])keys\2\])/.test(code));
  - text: Solve this challenge without hardcoding the <code>ownProps</code> array.
    testString: assert(!/\[\s*(?:'|")(?:name|numLegs)|(?:push|concat)\(\s*(?:'|")(?:name|numLegs)/.test(code));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let canary = new Bird("Tweety");
let ownProps = [];
// Add your code below this line



```

</div>



</section>

## Solution
<section id='solution'>


```js
function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let canary = new Bird("Tweety");
function getOwnProps (obj) {
  const props = [];

  for (let prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      props.push(prop);
    }
  }

  return props;
}

const ownProps = getOwnProps(canary);
```

</section>
