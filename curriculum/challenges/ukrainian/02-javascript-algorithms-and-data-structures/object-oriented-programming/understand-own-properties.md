---
id: 587d7dae367417b2b2512b7b
title: Розуміння власних властивостей
challengeType: 1
forumTopicId: 301326
dashedName: understand-own-properties
---

# --description--

В наступному прикладі конструктор `Bird` встановлює дві властивості `name` й `numLegs`:

```js
function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let duck = new Bird("Donald");
let canary = new Bird("Tweety");
```

`name` й `numLegs` називаються <dfn>own properties</dfn>, бо вони визначаються напряму від об'єкта. Це означає, що `duck` й `canary` мають власні копії цих властивостей. Насправді кожна частина `Bird` повинна мати власну копію цих властивостей. Цей код надає змогу додати всі власні властивості `duck` до масиву `ownProps`:

```js
let ownProps = [];

for (let property in duck) {
  if(duck.hasOwnProperty(property)) {
    ownProps.push(property);
  }
}

console.log(ownProps);
```

Консоль повинна зображати значення `["name", "numLegs"]`.

# --instructions--

Додайте власні властивості `canary` до масиву `ownProps`.

# --hints--

`ownProps` має містити в собі значення `numLegs` й `name`.

```js
assert(ownProps.indexOf('name') !== -1 && ownProps.indexOf('numLegs') !== -1);
```

Ви повинні розв'язати це завдання без використання побудови в методі `Object.keys()`.

```js
assert(!/Object(\.keys|\[(['"`])keys\2\])/.test(code));
```

Ви повинні розв'язати це завдання без використання складного кодування `ownProps`.

```js
assert(
  !/\[\s*(?:'|")(?:name|numLegs)|(?:push|concat)\(\s*(?:'|")(?:name|numLegs)/.test(
    code
  )
);
```

# --seed--

## --seed-contents--

```js
function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let canary = new Bird("Tweety");
let ownProps = [];
// Only change code below this line
```

# --solutions--

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
