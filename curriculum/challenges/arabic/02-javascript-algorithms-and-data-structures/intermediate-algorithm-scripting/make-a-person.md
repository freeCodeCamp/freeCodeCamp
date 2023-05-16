---
id: a2f1d72d9b908d0bd72bb9f6
title: اصنع شخصا (Make a Person)
challengeType: 1
forumTopicId: 16020
dashedName: make-a-person
---

# --description--

املأ الـ object constructor بالـ methods التالية أدناه:

```js
getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)
```

قم بتشغيل الاختبارات لرؤية المخرجات المتوقعة لكل method. الـ methods التي تأخذ argument يجب أن تقبل argument واحدة فقط ويجب أن تكون string. يجب أن تكون هذه الـ methods هي الوسيلة الوحيدة المتاحة للتفاعل مع الـ object.

# --hints--

لا يجب إضافة أي خواص. `Object.keys(bob).length` يجب دائما أن يرجع 6.

```js
assert.strictEqual(
  Object.keys((function () {
    let bob = new Person('Bob Ross');
    bob.setFirstName('Haskell');
    bob.setLastName('Curry');
    bob.setFullName('John Smith');
    return bob;
  })()).length,
  6
 );
```

`bob instanceof Person` يجب أن يرجع `true`.

```js
assert.deepEqual(bob instanceof Person, true);
```

`bob.firstName` يجب أن يرجع `undefined`.

```js
assert.deepEqual(bob.firstName, undefined);
```

`bob.lastName` يجب أن يرجع `undefined`.

```js
assert.deepEqual(bob.lastName, undefined);
```

`bob.getFirstName()` يجب أن يرجع السلسلة `Bob`.

```js
assert.deepEqual(bob.getFirstName(), 'Bob');
```

`bob.getLastName()` يجب أن يعيد السلسلة `Ross`.

```js
assert.deepEqual(bob.getLastName(), 'Ross');
```

`bob.getFullName()` يجب أن يعيد السلسلة `Bob Ross`.

```js
assert.deepEqual(bob.getFullName(), 'Bob Ross');
```

`bob.getFullName()` يجب أن يعيد السلسلة `Haskell Ross` بعد `bob.setFirstName("Haskell")`.

```js
assert.strictEqual(
  (function () {
    bob.setFirstName('Haskell');
    return bob.getFullName();
  })(),
  'Haskell Ross'
);
```

`bob.getFullName()` يجب أن يعيد السلسلة `Haskell Curry` بعد `bob.setLastName("Curry")`.

```js
assert.strictEqual(
  (function () {
    var _bob = new Person('Haskell Ross');
    _bob.setLastName('Curry');
    return _bob.getFullName();
  })(),
  'Haskell Curry'
);
```

`bob.getFullName()` يجب أن يعيد السلسلة `Haskell Curry` بعد `bob.setFullName("Haskell Curry")`.

```js
assert.strictEqual(
  (function () {
    bob.setFullName('Haskell Curry');
    return bob.getFullName();
  })(),
  'Haskell Curry'
);
```

`bob.getFirstName()` يجب أن يعيد السلسلة `Haskell` بعد `bob.setFullName("Haskell Curry")`.

```js
assert.strictEqual(
  (function () {
    bob.setFullName('Haskell Curry');
    return bob.getFirstName();
  })(),
  'Haskell'
);
```

`bob.getLastName()` يجب أن يعيد السلسلة `Curry` بعد `bob.setFullName("Haskell Curry")`.

```js
assert.strictEqual(
  (function () {
    bob.setFullName('Haskell Curry');
    return bob.getLastName();
  })(),
  'Curry'
);
```

# --seed--

## --seed-contents--

```js
const Person = function(firstAndLast) {
  // Only change code below this line
  // Complete the method below and implement the others similarly
  this.getFullName = function() {
    return "";
  };
  return firstAndLast;
};

const bob = new Person('Bob Ross');
bob.getFullName();
```

# --solutions--

```js
const Person = function(firstAndLast) {
  // Only change code below this line
  // Complete the method below and implement the others similarly
  var firstName;
  var lastName;
  var fullName;
  this.getFirstName = function(){
    if(firstName !== undefined){
      return firstName
    }
    else{
       firstName =  firstAndLast.split(" ")[0] ;
       return firstName;
    }
     
  }
  this.getLastName = function(){
     if(lastName !== undefined){
      return lastName
    }
    else{
       lastName =  firstAndLast.split(" ")[1] ;
       return lastName;
    }
  }

  this.setFirstName = function(str){
    firstName = str;
    lastName = firstAndLast.split(" ")[1]
    // return firstName +" "+ lastName;
  }

  this.setLastName = function(str){
    firstName = firstAndLast.split(" ")[0] 
    lastName = str;
    // return firstName +" "+ lastName;
  }
  
  this.getFullName = function() {
     if(firstName !== undefined || lastName !== undefined){
          
          fullName = firstName +" "+ lastName;
      }
      else{
          fullName= firstAndLast
      }
    
    return fullName;
  };

  this.setFullName = function(str){
    firstName = str.split(" ")[0];
    lastName = str.split(" ")[1];
  }
  return firstAndLast;
};

const bob = new Person('Bob Ross');
bob.getFullName();
```
