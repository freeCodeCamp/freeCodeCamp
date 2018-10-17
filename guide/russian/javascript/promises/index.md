---
title: Promises
localeTitle: обещания
---
## обещания

JavaScript однопоточный, что означает, что два бита скрипта не могут работать одновременно; они должны бежать один за другим. Promise - это объект, который представляет собой возможное завершение (или отказ) асинхронной операции и ее итоговое значение.

```javascript
var promise = new Promise(function(resolve, reject) { 
  // do thing, then… 
 
  if (/* everything worked */) { 
    resolve("See, it worked!"); 
  } 
  else { 
    reject(Error("It broke")); 
  } 
 }); 
```

## В одном из этих состояний существует обещание

*   Ожидание: начальное состояние, ни выполнено, ни отклонено.
*   Выполнено: операция успешно завершена.
*   Отклонено: операция завершилась неудачно.

Объект Promise работает как прокси-сервер для значения, которое не обязательно известно при создании обещания. Это позволяет связать обработчики с вероятным результатом успешной асинхронной операции или причиной сбоя. Это позволяет асинхронным методам возвращать такие значения, как синхронные методы: вместо немедленного возврата окончательного значения асинхронный метод возвращает обещание предоставить значение в какой-то момент в будущем.

## Использование 'Then' (Promise Chaining)

Чтобы выполнить несколько асинхронных вызовов и синхронизировать их один за другим, вы можете использовать цепочку слияния. Это позволяет использовать значение из первого обещания в последующих последующих обратных вызовах.

```javascript
Promise.resolve('some') 
  .then(function(string) { // <-- This will happen after the above Promise resolves (returning the value 'some') 
    return new Promise(function(resolve, reject) { 
      setTimeout(function() { 
        string += 'thing'; 
        resolve(string); 
      }, 1); 
    }); 
  }) 
  .then(function(string) { // <-- This will happen after the above .then's new Promise resolves 
    console.log(string); // <-- Logs 'something' to the console 
  }); 
```

## API обещаний

В классе Promise существует 4 статических метода:

*   Promise.resolve
*   Promise.reject
*   Promise.all
*   Promise.race

## Обещания могут быть соединены вместе

При написании обещаний для решения конкретной проблемы вы можете связать их вместе, чтобы сформировать логику.

```javascript
var add = function(x, y) { 
  return new Promise((resolve,reject) => { 
    var sum = x + y; 
    if (sum) { 
      resolve(sum); 
    } 
    else { 
      reject(Error("Could not add the two values!")); 
    } 
  }); 
 }; 
 
 var subtract = function(x, y) { 
  return new Promise((resolve, reject) => { 
    var sum = x - y; 
    if (sum) { 
      resolve(sum); 
    } 
    else { 
      reject(Error("Could not subtract the two values!")); 
    } 
  }); 
 }; 
 
 // Starting promise chain 
 add(2,2) 
  .then((added) => { 
    // added = 4 
    return subtract(added, 3); 
  }) 
  .then((subtracted) => { 
    // subtracted = 1 
    return add(subtracted, 5); 
  }) 
  .then((added) => { 
    // added = 6 
    return added * 2; 
  }) 
  .then((result) => { 
    // result = 12 
    console.log("My result is ", result); 
  }) 
  .catch((err) => { 
    // If any part of the chain is rejected, print the error message. 
    console.log(err); 
  }); 
```

Это полезно для использования парадигмы _функционального программирования_ . Создавая функции для манипулирования данными, вы можете объединить их вместе, чтобы собрать окончательный результат. Если в любой точке цепочки функций значение _отклоняется,_ цепь перейдет к ближайшему обработчику `catch()` .

Для получения дополнительной информации о функциональном программировании: [функциональное программирование](https://en.wikipedia.org/wiki/Functional_programming)

## Генераторы функций

В последних выпусках JavaScript ввел больше способов изначально обрабатывать обещания. Одним из таких способов является генератор функций. Генераторы функций являются «правдоподобными» функциями. При использовании с Promise генераторы могут сделать использование намного проще для чтения и появиться «синхронно».

```javascript
const myFirstGenerator = function* () { 
  const one = yield 1; 
  const two = yield 2; 
  const three = yield 3; 
 
  return 'Finished!'; 
 } 
 
 const gen = myFirstGenerator(); 
```

Вот наш первый генератор, который вы можете видеть по синтаксису `function*` . Объявленная переменная `gen` не будет запускать `myFirstGenerator` , но вместо этого «этот генератор будет готов к использованию».

```javascript
console.log(gen.next()); 
 // Returns { value: 1, done: false } 
```

Когда мы запустим `gen.next()` он отключит генератор и продолжит работу. Поскольку это первый раз, когда мы вызвали `gen.next()` он будет работать с `yield 1` и приостанавливаться до тех пор, пока мы снова не назовем `gen.next()` . Когда вызывается `yield 1` , он возвращает нам `value` которое было получено, и независимо от того, `done` ли генератор.

```javascript
console.log(gen.next()); 
 // Returns { value: 2, done: false } 
 
 console.log(gen.next()); 
 // Returns { value: 3, done: false } 
 
 console.log(gen.next()); 
 // Returns { value: 'Finished!', done: true } 
 
 console.log(gen.next()); 
 // Will throw an error 
```

Поскольку мы продолжаем называть `gen.next()` он будет продолжать идти на следующий `yield` и приостанавливать каждый раз. После того, как у вас больше нет `yield` , он продолжит работу с остальной частью генератора, которая в этом случае просто вернется `'Finished!'` , Если вы снова вызове `gen.next()` , он будет генерировать ошибку по завершении работы генератора.

Теперь представьте, что если каждый `yield` в этом примере был `Promise` , сам код выглядел бы крайне синхронно.

### Promise.all (iterable) очень полезен для множественного запроса к другому источнику

Метод Promise.all (iterable) возвращает единственное обещание, которое разрешает, когда все обещания в итерабельном аргументе разрешены или когда аргумент итерации не содержит никаких обещаний. Он отвергает причину первого обещания, которое отвергает.

```javascript
var promise1 = Promise.resolve(catSource); 
 var promise2 = Promise.resolve(dogSource); 
 var promise3 = Promise.resolve(cowSource); 
 
 Promise.all([promise1, promise2, promise3]).then(function(values) { 
  console.log(values); 
 }); 
 // expected output: Array ["catData", "dogData", "cowData"] 
```

### Больше информации

Для получения дополнительной информации о обещаниях: [обещания](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)