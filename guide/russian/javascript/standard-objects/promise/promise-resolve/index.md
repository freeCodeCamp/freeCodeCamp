---
title: Promise Resolve
localeTitle: Обещание
---
## Обещание

### Описание

Функция `Promise.resolve` указывает на успешное завершение обещания. Эта функция позволяет вам вернуть обещание вызывающей функции.

`Promise.resolve` принимает один параметр для возврата к вызывающей функции. Этот параметр может быть либо значением, либо последующим, либо другим обещанием.

«Значение» для функции разрешения может быть базовыми типами JavaScript, массивами или объектами.

```javascript
Promise.resolve('success'); // string 
 Promise.resolve([2, 3, 5]); // array 
 Promise.resolve({name: 'John', age: '43'}); // object 
```

«Thenable» - это функция, которая выполняет две функции обратного вызова в качестве параметров. Вы можете использовать первый параметр для запуска успешного завершения, а второй - для возврата ошибки в Promise.

```javascript
thenableFunction = {then: function(onSuccesss, onFailure) { 
    if (condition === 'success') { 
      onSuccess(paramList); // success condition 
    } else { 
      onFailure(paramList); // error condition 
    } 
  } 
 } 
 
 Promise.resolve(thenableFunction); 
```

Связывание функции then с вызывающим обещанием даст вам доступ к результату `Promise.resolve` .

```javascript
promiseCallingFunction(paramList) 
  .then(function(value) { 
    /* 
     * this is where you get access to the value 
     * returned by a promise on successful completion 
     */ 
  }); 

```