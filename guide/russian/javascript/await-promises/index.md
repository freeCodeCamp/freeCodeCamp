---
title: Await Promises
localeTitle: Ожидание обещаний
---
## Ожидание обещаний

В `async` / `await` [операторы](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators) облегчают реализацию многого асинхронного Promises. Они также позволяют инженерам писать более четкий, более сжатый, проверяемый код.

Чтобы понять эту тему, вы должны иметь четкое представление о том, как работают [Обещания](https://guide.freecodecamp.org/javascript/promises) .

---

## Основной синтаксис

``` javascript
function slowlyResolvedPromiseFunc(string) { 
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(string);
    }, 5000);
  });
}

async function doIt() {
  const myPromise = await slowlyResolvedPromiseFunc("foo");
  console.log(myPromise); // "foo"
}

doIt();

```
Следует отметить несколько моментов:

* Функция, которая заключаетв себе объявление `await` должна содержать оператор `async`. Это подскажит Инттерпретатору JS, что нужно дождаться разрешение и отвержения resolve.
* Оператор `await` должен быть подключен во время объявления const.
* Это работает как для `reject`, так и для `resolve`
There are a few things to note: 
 
 --- 
 
 ## Вложенные Promises vs. `Async` / `Await` 

Реализация одного Promise довольно просто. В отличии от Цепочки Promises или создания набора зависимостей, что может привести с созданию "spagetti code" ("спагетти из кода").

В следующих примерах подразумевается, что библитека <a href='https://github.com/request/request-promise' target='_blank' rel='nofollow'>`request-promise`</a> доступна по `rp`. 
 
 ### Цепочки / Вложенные Promises 

``` javascript
// Первый Promise
const fooPromise = rp("http://domain.com/foo");

fooPromise.then(resultFoo => {
    // Ожидайте разрешения "foo"
    console.log(resultFoo);

    const barPromise = rp("http://domain.com/bar");
    const bazPromise = rp("http://domain.com/baz");

    return Promise.all([barPromise, bazPromise]);
}).then(resultArr => {
    // Обрабатываем разрешения «bar» и «baz» здесь
    console.log(resultArr[0]);
    console.log(resultArr[1]);
});
```

### `async` и `await` Promises 

``` javascript
// Оберните все в асинхронную функцию
async function doItAll() {
    // Получите данные из конечной точки "foo", но дождаться разрешения
    console.log(await rp("http://domain.com/foo"));

    // Параллельно запустите следующие две асинхронные функции,
    // не ждите пока "bar" запустит "baz"
    const barPromise = rp("http://domain.com/bar");
    const bazPromise = rp("http://domain.com/baz");

    // Когда обе запуститлись параллельно, ждите обе
    const barResponse = await barPromise;
    const bazResponse = await bazPromise;

    console.log(barResponse);
    console.log(bazResponse);
}

// Наконец, вызовите асинхронную функцию
doItAll().then(() => console.log('Done!'));
```

Преимущества использования `async` и `await` должны быть ясны. Этот код более читабельный, модульный и поддающийся тестированию.
 
Справедливо заметить, что не смотря на большую степень параллелилизма, лежащий в основе вычислительный процесс идентичен тому из предыдущего примераю
 
--- 
 
 ## Разрешение Ошибок / Rejection 
 
Обыкновенный блок попытка-перехват разрешит отвергнутый Promise. 

``` javascript
async function errorExample() {
  try {
    const rejectedPromise = await Promise.reject("Oh-oh!");
  } catch (error) {
    console.log(error); // "Uh-oh!"
  }
}

errorExample();
```

---

#### Дополнительная информация:

*   `await` Операторы [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await)
*   `async` Оператор функций [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/async_function)
