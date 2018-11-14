---
title: Template Literals
localeTitle: Литералы шаблонов
---## Литералы шаблонов

## Введение:

Когда мы хотим использовать переменную для создания строки, она становится очень болезненной, поскольку мы должны использовать знак + для конкатенации и отслеживания кавычек.

Теперь с ES6 мы можем сделать строку с использованием обратных ссылок и с помощью заполнителей, которые обозначены знаком доллара и фигурными фигурными скобками, например $ {expression}.

```javascript
const name='John'; 
 const city='London'; 
 
 Older Style: 
 const sentence ='My name is '+ name +'. I live in '+city. 
 ES6 way: 
 const sentence = `My name is ${name}. I live in ${city}`; 
 Here ${name} and ${city}are going to be interpolated by the variable name and city respectively. 
```

## Строки MultiLine:

Пожилой стиль:

Когда мы хотели разбить нашу строку на несколько строк, нам пришлось использовать обратную косую черту.

```javascript
const multipleLineString= "We have \ 
 multiple lines \ 
 here"; 
```

Теперь, когда мы хотим создать mutiline строку, мы можем использовать строки шаблонов. Мы можем окружить нашу строку обратными окнами. Этот подход чрезвычайно полезен, когда мы хотим создать динамическую разметку html.

```javascript
const htmlMarkup = ` 
 <html> 
 <head></head> 
 <title>Template string</title> 
 <body>Hello World</body> 
 </html>`; 
```

## Вложение шаблонных строк:

Мы можем вложить их друг в друга.

```javascript
const cities =[ 
 {name:'Delhi', year: 2010}, 
 {name:'Mumbai', year: 2015}, 
 {name:'Kolkata', year: 2017}]; 
 
 
 const markup = ` 
 <ul> 
 ${cities.map(city=>`<li>I lived in ${city.name} in the year ${city.year}</li>`).join('')} 
 </ul>`; 
```

Здесь оператор объединения после функции карты удаляет дополнительные запятые, которые добавляются после каждого li.

## Если утверждения и функции

Мы также можем использовать операторы If внутри строк шаблона.

```javascript
const data = {name: 'John', city: 'London', birthyear: 1900}; 
 const markup = `<div>${data.name} lives in ${data.city}. ${data.birthyear ? `<div>He was born in the year ${data.birthyear}</div>`:''}</div>`; 
```

В приведенном выше примере, если определен рождаемость, тогда создается div с содержимым «Он родился в году», иначе не было бы никакого div.

Мы также можем вызывать функции внутри строк шаблона.