---
title: ES6
---

## ES6

The 6th edition of ECMAScript is called ES6. 

It is also know as ES2015. 

The changes add a lot of syntactic sugar that allow developers to create applications in an object oriented style. 

> ES5 example:

```javascript
var User = function () {
  function User(name) {
    this._name = name;
  }

  User.prototype.getName = function getName(x) {
    return 'Mr./Mrs. ' + this._name;
  };

  return User;
}();
```

> ES6 example:

```javascript
class User {
  constructor(name) {
    this._name = name
  }

  getName() {
    return `Mr./Mrs. ${this._name}`
  }
}
```

A lot of new syntax features were introduced including:

- classes,
- modules,
- templating,
- for/of loops,
- generator expressions,
- arrow functions,
- collections,
- promises.

Nowadays most of the features are available in all popular browsers. The <a href='https://kangax.github.io/compat-table/es6/' target='_blank' rel='nofollow'>compatibility table</a> contains all information about feature availability of all modern browsers. 

Frequently new features arrive that are part of the successor ES7. A common way is to translate modern JavaScript (ES6, ES7 and other experimental proposals) to ES5. This makes sure that also old browsers can execute the code. There are tools like <a href='https://babeljs.io/' target='_blank' rel='nofollow'>Babel</a> that transforms new JavaScript to ES5.

Besides syntactic sugar coming from ECMAScript standards there are features that require a <a href='https://babeljs.io/docs/usage/polyfill' target='_blank' rel='nofollow'>Polyfill</a>. Usually they are necessary because whole class/method implementations were added to the standard.
