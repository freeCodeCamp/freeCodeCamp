---
id: 587d7db2367417b2b2512b8c
title: Use an IIFE to Create a Module
challengeType: 1
forumTopicId: 301332
dashedName: use-an-iife-to-create-a-module
---

# --description--

غالباً ما يستخدم immediately invoked function expression (IIFE) لتجميع الــ functionality ذات الصلة في object واحد أو <dfn>module</dfn>. فعلى سبيل المثال، كان هناك تحد سابق حدد اثنان mixins:

```js
function glideMixin(obj) {
  obj.glide = function() {
    console.log("Gliding on the water");
  };
}
function flyMixin(obj) {
  obj.fly = function() {
    console.log("Flying, wooosh!");
  };
}
```

يمكننا تجميع هذه ال mixins في module على النحو التالي:

```js
let motionModule = (function () {
  return {
    glideMixin: function(obj) {
      obj.glide = function() {
        console.log("Gliding on the water");
      };
    },
    flyMixin: function(obj) {
      obj.fly = function() {
        console.log("Flying, wooosh!");
      };
    }
  }
})();
```

لاحظ أن لديك immediately invoked function expression (IIFE) الذي يرجع كائن `motionModule`. هذا الـ object المعاد يحتوي على جميع سلوكيات ال mixin كخصائص لل object. ميزة نمط ال module هو أنه يمكن تعبئة جميع سلوكيات الحركة في object واحد يمكن استخدامه بعد ذلك في أجزاء أخرى من الكود الخاص بك. هنا مثال على استخدامه:

```js
motionModule.glideMixin(duck);
duck.glide();
```

# --instructions--

قم بإنشاء module يسمى `funModule` لتغليف ال mixins الآتيان `isCuteMixin` و `singMixin`. `funModule` يجب أن ترجع object.

# --hints--

`funModule` يجب أن يتم تعريفها وأن تعيد object.

```js
assert(typeof funModule === 'object');
```

`funModule.isCuteMixin` يجب أن يصل إلى function.

```js
assert(typeof funModule.isCuteMixin === 'function');
```

`funModule.singMixin` يجب أن يصل إلى function.

```js
assert(typeof funModule.singMixin === 'function');
```

# --seed--

## --seed-contents--

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

# --solutions--

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
