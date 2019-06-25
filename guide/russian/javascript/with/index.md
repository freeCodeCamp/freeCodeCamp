---
title: With
localeTitle: С
---
## С

Оператор JavaScript `with` выражением является сокращенным способом редактирования нескольких свойств на одном объекте. Большинство разработчиков отговорить использование `with` , и вы лучше не использовать это ключевое слово.

**Примечание** : `"strict mode"` запрещает использование `with` .

### Синтаксис

```js
with (expression) 
  statement 
```

### Пример использования

В JavaScript вы можете индивидуально изменять свойства объекта, как показано ниже:

```javascript
let earth = {}; 
 earth.moons = 1; 
 earth.continents = 7; 
```

`with` дает вам стенографию для изменения свойств объекта:

```javascript
with (earth) { 
  moons = 1; 
  continents = 7; 
 } 
```

Хотя этот пример надуман, вы можете понять примеры использования `with` большим количеством, если у вас есть более крупные объекты, например:

```javascript
earth.continents.australia.geography.ocean = "Pacific"; 
 earth.continents.australia.geography.river = "Murray"; 
 earth.continents.australia.geography.mountain = "Kosciuszko"; 
```

### альтернативы

Вы не должны использовать `with` , как это имеет тонкие ошибки и проблемы совместимости. Очень рекомендуемый подход - назначить объект переменной, а затем изменить свойства переменной. Вот пример использования более крупного объекта:

```javascript
let earth = { 
  continents: { 
    australia: { 
      geography: {} 
    } 
  } 
 }; 
 
 let geo = earth.continents.australia.geography; 
 
 geo.ocean = "Pacific"; 
 geo.river = "Murray"; 
 geo.mountain = "Kosciuszko"; 
```

### Попробовать

https://repl.it/Mixg/5

#### Дополнительная информация:

[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/with](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/with)

[https://yuiblog.com/blog/2006/04/11/with-statement-considered-harmful/](https://yuiblog.com/blog/2006/04/11/with-statement-considered-harmful/)

[http://2ality.com/2011/06/with-statement.html](http://2ality.com/2011/06/with-statement.html)