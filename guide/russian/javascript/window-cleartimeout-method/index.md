---
title: Window clearTimeout Method
localeTitle: Метод clearTimeout окна
---
## Метод clearTimeout окна

Используется метод clearTimeout (), чтобы остановить таймер, установленный с помощью метода setTimeout ().

```js
    clearTimeout(setTimeout_ID); 
```

Если метод clearTimeout () вызывается до того, как таймер завершил подсчет, метод clearTimeout () прекратит выполнение метода setTimeout ().

Чтобы использовать метод clearTimeout (), вы должны использовать глобальную переменную. См. Пример ниже

```js
    myID = setTimeout(function, milliseconds); 
```

#### Дополнительная информация:

Документация: [MDN](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/clearTimeout)