---
title: Register a Store Listener
localeTitle: Зарегистрировать слушателя магазина
---
## Зарегистрировать слушателя магазина

Давайте раскроем инструкции, чтобы точно определить, что именно они задают.

> _Напишите функцию обратного вызова, которая увеличивает счет глобальной переменной каждый раз, когда хранилище получает действие, и передайте эту функцию в метод store.subscribe ()._

Мы можем суммировать эти шаги на небольшие куски:

1.  написать функцию обратного вызова
2.  увеличить счетчик глобальных переменных
3.  передать функцию `store.subscribe()` .

Потрясающие! Теперь давайте рассмотрим некоторые из основ.

### Что такое «функция обратного вызова» на простом английском языке?

Функция обратного вызова - это просто функция, вызываемая вызовом после выполнения другой функции. В реальном мире это может быть примерно так:

```javascript
// You drop your car off at the mechanic and you want the shop to 'call you back' when your car is fixed. 
 let carIsBroken = true; 
 const callCarOwner = () => console.log('Hello your car is done!'); 
 const fixCar = (carIsBroken, callCarOwner) => { 
  if (carIsBroken === true) { 
    carIsBroken = false; 
  } 
  console.log(carIsBroken); 
  // After the car is fixed, the last thing we do is call the car owner - that's our 'callback function'. 
  callCarOwner(); 
 } 
 fixCar(carIsBroken, callCarOwner); 
```

### Как увеличить числовую переменную?

Мы можем сделать это, используя оператор «+ =».

```javascript
let count = 1; 
 const addOne = () => count +=1; 
```

### Как передать функцию методу?

Мы можем передать функцию методу так же, как мы можем передать переменную методу. Просто передайте это в качестве аргумента!

```javascript
function sayHi() { 
  console.log('Hi!'); 
 } 
 store.subscribe(sayHi); 
```

Хотите обновить это? [Отредактируйте эту заглушку на GitHub.](https://github.com/freecodecamp/guides/tree/master/src/pages/certifications/front-end-libraries/redux/register-a-store-listener/index.md)