---
title: Testing with Chaijs
localeTitle: Тестирование с помощью Chaijs
---
[Chai](http://chaijs.com) - это тестовая библиотека для Node.js.

### Монтаж

Вы можете установить Chai в свой проект через npm.
```
npm install chai 
```

##### Pro-наконечник

Добавьте Chai в devDependencies _package.json_ , используя \* как тег версии. Таким образом, вы всегда имеете самую последнюю версию.
```
"devDependencies": { 
  "chai": "*" 
 } 
```

### Как пользоваться

#### утверждать

Вы можете использовать _assert_ для проверки эффективности тестов.
```
var assert = require('chai').assert, foo = 'bar', beverages = { tea: [ 'chai', 'matcha', 'oolong' ] }; 
 
 assert.typeOf(foo, 'string'); // without optional message 
 assert.typeOf(foo, 'string', 'foo is a string'); // with optional message 
 assert.equal(foo, 'bar', 'foo equal `bar`'); 
 assert.lengthOf(foo, 3, 'foo`s value has a length of 3'); 
 assert.lengthOf(beverages.tea, 3, 'beverages has 3 types of tea'); 
```

### Больше информации:

*   `help chai assert`
*   `help chai expectations`