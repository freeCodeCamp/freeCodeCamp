---
title: Await Promises
localeTitle: Ожидание обещаний
---
## Ожидание обещаний

В `async` / `await` [операторы](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators) облегчают реализацию многого асинхронного Promises. Они также позволяют инженерам писать более четкий, более сжатый, проверяемый код.

Чтобы понять эту тему, вы должны иметь четкое представление о том, как работают [Обещания](https://guide.freecodecamp.org/javascript/promises) .

* * *

## Основной синтаксис

\`\` \`javascript функция медленноResolvedPromiseFunc (строка) { return new Promise (solve => { setTimeout (() => { разрешения (строка); }, 5000); }); }

асинхронная функция doIt () { const myPromise = ждать медленноResolvedPromiseFunc ("foo"); console.log (myPromise); // "foo" }

сделай это();
```
There are a few things to note: 
 
 * The function that encompasses the `await` declaration must include the `async` operator. This will tell the JS interpreter that it must wait until the Promise is resolved or rejected. 
 * The `await` operator must be inline, during the const declaration. 
 * This works for `reject` as well as `resolve`. 
 
 --- 
 
 ## Nested Promises vs. `Async` / `Await` 
 
 Implementing a single Promise is pretty straightforward. In contrast, Chained Promises or the creation of a dependency pattern may produce "spaghetti code". 
 
 The following examples assume that the <a href='https://github.com/request/request-promise' target='_blank' rel='nofollow'>`request-promise`</a> library is available as `rp`. 
 
 ### Chained/Nested Promises 
```

Javascript // Первое обещание const fooPromise = rp ("http://domain.com/foo");

fooPromise.then (resultFoo => { // Должен дождаться "foo", чтобы разрешить console.log (resultFoo);
```
const barPromise = rp("http://domain.com/bar"); 
 const bazPromise = rp("http://domain.com/baz"); 
 
 return Promise.all([barPromise, bazPromise]); 
```

}), затем (resultArr => { // Обрабатываем разрешения «bar» и «baz» здесь console.log (resultArr \[0\]); console.log (resultArr \[1\]); });
```
### `async` and `await` Promises 
```

Javascript // Оберните все в асинхронной функции асинхронная функция doItAll () { // Получить данные из конечной точки «foo», но дождаться разрешения console.log (ожидание rp ("http://domain.com/foo"));
```
// Concurrently kick off the next two async calls, 
 // don't wait for "bar" to kick off "baz" 
 const barPromise = rp("http://domain.com/bar"); 
 const bazPromise = rp("http://domain.com/baz"); 
 
 // After both are concurrently kicked off, wait for both 
 const barResponse = await barPromise; 
 const bazResponse = await bazPromise; 
 
 console.log(barResponse); 
 console.log(bazResponse); 
```

}

// Наконец, вызовите функцию async doItAll (). then (() => console.log ('Done!'));
```
The advantages of using `async` and `await` should be clear. This code is more readable, modular, and testable. 
 
 It's fair to note that even though there is an added sense of concurrency, the underlying computational process is the same as the previous example. 
 
 --- 
 
 ## Handling Errors / Rejection 
 
 A basic try-catch block handles a rejected Promise. 
```

Javascript async function errorExample () { пытаться { const rejectPromise = ждать Promise.reject («О-о!»); } catch (ошибка) { console.log (ошибка); // «О-о!» } }

errorExample (); \`\` \`

* * *

#### Дополнительная информация:

*   `await` Операторы [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await)
*   `async` Оператор функций [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/async_function)