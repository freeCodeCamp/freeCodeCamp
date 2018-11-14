---
title: Function.prototype.bind
localeTitle: Function.prototype.bind
---
## Function.prototype.bind

`bind` - это метод на прототипе всех функций JavaScript. Он позволяет вам создать новую функцию из существующей функции, изменить новую функцию в `this` контексте и предоставить любые аргументы, с которыми вы хотите вызвать новую функцию. Аргументы, предоставленные для `bind` будут предшествовать любым аргументам, которые передаются новой функции при ее вызове.

### Использование `bind` для изменения `this` в функции

Первым аргументом, предоставленным для `bind` является `this` контекст, к которому будет привязана функция. Если вы не хотите изменять значение `this` `null` в качестве первого аргумента.

Вам поручено написать код, чтобы обновить количество участников по мере их поступления на конференцию. Вы создаете простую веб-страницу с кнопкой, которая при щелчке увеличивает число `numOfAttendees` свойство объекта confrence. Вы используете jQuery для добавления обработчика кликов к вашей кнопке, но после нажатия кнопки объект confrence не изменился. Ваш код может выглядеть примерно так.

```javascript
var nodevember = { 
  numOfAttendees: 0, 
  incrementNumOfAttendees: function() { 
    this.numOfAttendees++; 
  } 
  // other properties 
 }; 
 
 $('.add-attendee-btn').on('click', nodevember.incrementNumOfAttendees); 
```

Это обычная проблема при работе с jQuery и JavaScript. При нажатии на кнопку `this` ключевое слово в методе , который вы передали JQuery - х `on` методу ссылается на кнопку , а не объект конференции. Вы можете связать `this` контекст своего метода, чтобы решить проблему.

```javascript
var nodevember = { 
  numOfAttendees: 0, 
  incrementNumOfAttendees: function() { 
    this.numOfAttendees++; 
  } 
  // other properties 
 }; 
 
 $('.add-attendee-btn').on('click', nodevember.incrementNumOfAttendees.bind(nodevember)); 
```

Теперь, когда нажата кнопка, `this` ссылается на объект `nodevember` .

### Предоставление аргументов функции со `bind`

Каждый аргумент передается в `bind` после того, как первый будет предшествовать любым аргументам, переданным при вызове функции. Это позволяет предварительно применить аргументы к функции. В приведенном ниже примере `combineStrings` принимает две строки и объединяет их вместе. `bind` затем используется для создания функции, которая всегда обеспечивает «Cool» в качестве первой строки.

```javascript
function combineStrings(str1, str2) { 
  return str1 + " " + str2 
 } 
 
 var makeCool = combineStrings.bind(null, "Cool"); 
 
 makeCool("trick"); // "Cool trick" 
```

В руководстве по [этой ссылке](https://guide.freecodecamp.org/javascript/this-reference) содержится дополнительная информация о том, как изменить `this` ключевое слово.

Более подробную информацию о методе `bind` можно найти в [документах MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) от Mozilla.