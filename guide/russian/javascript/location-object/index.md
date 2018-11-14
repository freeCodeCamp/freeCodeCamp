---
title: Location Object
localeTitle: Объект местоположения
---
## Объект местоположения

Объект «Местоположение» предоставляет API (интерфейс прикладного программирования), который позволяет извлекать URL-адрес, настройку URL-адреса или доступ к частям URL-адреса. Он уже реализован для вас по умолчанию для объектов Window и Document. Примечание. Для объекта местоположения нет общедоступного стандарта, но все основные браузеры поддерживают его.

### Свойства объекта местоположения

| Недвижимость | Описание | | ---------- | -------------------------------------- ------------------- | | хэш | Устанавливает или возвращает опорную часть (#) URL-адреса | | хост | Устанавливает или возвращает имя хоста и номер порта URL | | имя хоста | Устанавливает или возвращает имя хоста URL-адреса | | href | Устанавливает или возвращает весь URL | | происхождение | Возвращает протокол, имя хоста и номер порта URL | | путь | Устанавливает или возвращает путь к URL-адресу | | порт | Устанавливает или возвращает номер порта URL-адреса | | протокол | Задает или возвращает протокол URL-адреса | | Поиск | Задает или возвращает часть запроса URL-адреса |

### Методы определения местоположения

| Метод | Описание | | ----------- | ------------------------------------- --------- | | assign () | Загружает новый документ | | reload () | Перезагружает текущий документ | | replace () | Заменяет текущий документ новым |

### Примеры

Объекты местоположения доступны:

```javascript
    console.log(window.location); 
    // > https://guide.freecodecamp.org/javascript/location-object 
    console.log(document.location); 
    // > https://guide.freecodecamp.org/javascript/location-object 
```

Вы также можете программно создать объект Location элемента HTML `<a>` или элемент HTML `<area>` с помощью JavaScript.

```javascript
    var anchor = document.createElement('a'); 
    anchor.url = "https://guide.freecodecamp.org/javascript/location-object"; 
```

После того, как у вас есть объект с набором URL (включая окно), API-интерфейс Location позволяет вам получить доступ к частям URL-адреса.

```javascript
    console.log(anchor.protocol); 
    // > https: 
    console.log(anchor.host); 
    // > guide.freecodecamp.org (includes port number if applicable. Example: guide.freecodecamp.org:8080) 
```

Другие свойства «Местоположение», к которым вы можете получить доступ:

*   `anchor.hostname` - _guide.freecodecamp.org_
*   `anchor.port` - _8080_
*   `anchor.pathname` - _/ javascript / location-object_
*   `anchor.origin` - _https://developer.mozilla.org_

Если ваш URL-адрес содержит параметры или хэши, вы можете обращаться к ним следующим образом:

```javascript
    // If your URL is https://guide.freecodecamp.org/javascript?param=location#other-properties 
    console.log(window.location.search); 
    // > "?param=location" 
    console.log(document.location.hash); 
    // > "#other-properties" 
```

#### Дополнительная информация:

[W3C - Объект местоположения](https://www.w3schools.com/jsref/obj_location.asp) [Место нахождения](https://developer.mozilla.org/en-US/docs/Web/API/Location)