---
title: Store Data in Web Browsers Storage
localeTitle: Хранить данные в хранилищах веб-браузеров
---
Для управления данными, обрабатываемыми вашим веб-приложением, вам не обязательно нужна база данных. Соответствующие функции браузера поддерживаются Chrome (версия 4 и выше), Mozilla Firefox (версия 3.5 и выше) и Internet Explorer (версия 8 и выше), а также ряд других браузеров, в том числе iOS и Android.

Существуют две основные возможности для хранения в браузере:

## 1\. localStorage

Любой контент / данные, сохраненные в объекте `localStorage` будут доступны после перезапуска браузера (закрыты и снова открыты). Чтобы **_сохранить элемент_** в `localStorage` , вы можете использовать метод `setItem()` . Этот метод должен быть передан ключ и значение.
```
Example: localStorage.setItem("mykey","myvalue"); 
```

Чтобы **_получить элемент из localStorage_** , необходимо использовать метод `getItem` . Метод `getItem` должен быть передан ключ данных, которые вы хотите получить:
```
  Example: localStorage.getItem("mykey"); 
```

Вы можете удалить элемент из `localStorage` с помощью `removeItem()` . Этот метод должен быть передан ключ элемента, который нужно удалить:
```
  Example: localStorage.removeItem("mykey"); 
```

Чтобы очистить весь `localStorage` , вы должны использовать метод `clear()` для объекта `localStorage` :
```
  Example: localStorage.clear(); 
```

## 2\. sessionStorage

Элементы, сохраненные в объекте `sessionStorage` , останутся до тех пор, пока пользователь не закроет браузер. Затем хранилище будет очищено.

Вы можете сохранить элемент в `sessionStorage` , используйте метод `setItem()` `sessionStorage` объекта `sessionStorage` :
```
Example: sessionStorage.setItem("mykey","myvalue"); 
```

Чтобы **_извлечь элемент из sessionStorage_** , необходимо использовать метод `getItem` . Метод `getItem` должен быть передан ключ данных, которые вы хотите получить:
```
  Example: sessionStorage.getItem("mykey"); 
```

Вы можете удалить элемент из `sessionStorage` с помощью `removeItem()` . Этот метод должен быть передан ключ элемента, который нужно удалить:
```
  Example: sessionStorage.removeItem("mykey"); 
```

Чтобы очистить весь `sessionStorage` , вы должны использовать метод `clear()` для объекта `sessionStorage` :
```
  Example: sessionStorage.clear(); 
```

## Сохранение массивов в localStorage и sessionStorage

Вы не можете просто сохранить отдельные значения в `localStorage` и `sessionStorage` , но вы также можете сохранить содержимое массива.

В этом примере у нас есть массив с числами:
```
var ourArray =[1,2,3,4,5]; 
```

Теперь мы можем сохранить его в `localStorage` или `sessionStorage` с помощью `setItem()` :
```
localStorage.setItem("ourarraykey",JSON.stringify(ourArray)); 
```

или, для `sessionStorage` :
```
sessionStorage.setItem("ourarraykey",JSON.stringify(ourArray)); 
```

Для сохранения массив сначала должен быть преобразован в строку. В приведенном выше примере мы используем метод `JSON.stringify` для этого.

При извлечении наших данных из `localStorage` или `sessionStorage` преобразуйте его обратно в массив:
```
var storedArray = localStorage.getItem("ourarraykey"); 
 ourArray = JSON.parse(storedArray); 
```

или, для `sessionStorage` :
```
var storedArray = sessionStorage.getItem("ourarraykey"); 
 ourArray = JSON.parse(storedArray); 

```