---
title: HTML5 Web Storage
localeTitle: Веб-хранилище HTML5
---
## Веб-хранилище HTML5

Хранилище веб-сайтов позволяет веб-приложениям хранить до 5 МБ информации в хранилищах браузеров на каждый источник (на домен и протокол).

### Типы веб-хранилища

Для хранения данных на клиенте есть два объекта:

`window.localStorage` : хранит данные без даты истечения срока действия и до тех пор, пока не будет удален.

```javascript
// Store Item 
 localStorage.setItem("foo", "bar"); 
 
 // Get Item 
 localStorage.getItem("foo"); //returns "bar" 
```

`window.sessionStorage` : сохраняет данные за один сеанс, где данные теряются, когда вкладка браузера / браузера закрыта.

```javascript
// Store Item 
 sessionStorage.setItem("foo", "bar"); 
 
 // Get Item 
 sessionStorage.getItem("foo"); //returns "bar" 
```

Поскольку текущая реализация поддерживает только привязки строк к строкам, вам необходимо сериализовать и де-сериализовать другие структуры данных.

Вы можете сделать это с помощью JSON.stringify () и JSON.parse ().

Например, для данного JSON
```
var jsonObject = { 'one': 1, 'two': 2, 'three': 3 }; 
```

Сначала мы конвертируем объект JSON в строку и сохраняем в локальном хранилище:
```
localStorage.setItem('jsonObjectString', JSON.stringify(jsonObject)); 
```

Чтобы получить объект JSON из строки, хранящейся в локальном хранилище:
```
var jsonObject = JSON.parse(localStorage.getItem('jsonObjectString')); 
```

#### Дополнительная информация:

[MDN](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) [Скалы HTML5](https://www.html5rocks.com/en/features/storage) [W3 Школы](https://www.w3schools.com/html/html5_webstorage.asp)