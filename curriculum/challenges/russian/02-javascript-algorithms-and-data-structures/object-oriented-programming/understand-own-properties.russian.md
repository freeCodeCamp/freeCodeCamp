---
id: 587d7dae367417b2b2512b7b
title: Understand Own Properties
challengeType: 1
forumTopicId: 301326
localeTitle: Понять собственные свойства
---

## Description
<section id='description'>
В следующем примере конструктор <code>Bird</code> определяет два свойства: <code>name</code> и <code>numLegs</code> : <blockquote> функция Bird (name) { <br> this.name = name; <br> this.numLegs = 2; <br> } <br><br> пусть утка = новая птица («Дональд»); <br> let canary = new Bird («Tweety»); </blockquote> <code>name</code> и <code>numLegs</code> называются <code>own</code> свойствами, поскольку они определяются непосредственно на объекте экземпляра. Это означает, что <code>duck</code> и <code>canary</code> имеют свою отдельную копию этих свойств. Фактически каждый экземпляр <code>Bird</code> будет иметь свою собственную копию этих свойств. Следующий код добавляет все <code>own</code> свойства <code>duck</code> к массиву <code>ownProps</code> : <blockquote> let ownProps = []; <br><br> для (пусть свойство в утке) { <br> if (duck.hasOwnProperty (свойство)) { <br> ownProps.push (свойство); <br> } <br> } <br><br> console.log (ownProps); // печатает [&quot;name&quot;, &quot;numLegs&quot;] </blockquote>
</section>

## Instructions
<section id='instructions'>
Добавьте <code>own</code> свойства <code>canary</code> к массиву <code>ownProps</code> .
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
