---
id: 587d7dae367417b2b2512b7b
title: فهم الخصائص المملوكة (Understand Own Properties)
challengeType: 1
forumTopicId: 301326
dashedName: understand-own-properties
---

# --description--

في المثال التالي، يقوم constructor الـ `Bird` بتحديد خاصيتين: `name` و `numLegs`:

```js
function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let duck = new Bird("Donald");
let canary = new Bird("Tweety");
```

`name` و `numLegs` تسمى <dfn>own properties</dfn>، لأنها تعرف مباشرة على الـ instance object. وهذا يعني أن كل من `duck` و `canary` لديهم نسخة منفصلة خاصة بهم من هذه الخواص. في الواقع كل instance من `Bird` سيكون لديها نسخة خاصة بها من هذه الخواص. الكود التالي يضيف جميع الخصائص الخاصة بـ `duck` إلى مصفوفة `ownProps`:

```js
let ownProps = [];

for (let property in duck) {
  if(duck.hasOwnProperty(property)) {
    ownProps.push(property);
  }
}

console.log(ownProps);
```

ستعرض وحدة التحكم القيمة `["name", "numLegs"]`.

# --instructions--

أضف جميع الخصائص الخاصة بـ `canary` إلى الـ array الآتية `ownProps`.

# --hints--

`ownProps` يجب أن تتضمن القيم `numLegs` و `name`.

```js
assert(ownProps.indexOf('name') !== -1 && ownProps.indexOf('numLegs') !== -1);
```

يجب عليك حل هذا التحدي دون استخدام الدالة المدمجة في `Object.keys()`.

```js
assert(!/Object(\.keys|\[(['"`])keys\2\])/.test(code));
```

يجب عليك حل هذا التحدي بدون إدخال قيم مثبتة (hard-coding) في قائمة `ownProps`.

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
