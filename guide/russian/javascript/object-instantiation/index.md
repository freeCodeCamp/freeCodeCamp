---
title: Object Instantiation
localeTitle: Создание объектов
---
## Создание объектов

В Javascript и большинстве других языков объект содержит ряд свойств, которые представляют собой пару ключей, значений. Существует несколько вариантов, когда вам нужно построить объект.

### Инициализировать переменную объекта

Вы можете создать объект с заранее определенными свойствами:

```javascript
let myObject = { 
  name: "Dave", 
  age: 33 
 } 
```

### Создание пустого объекта

Это создает пустой объект внутри нашей переменной myObject:

```javascript
let myObject = new Object(); 
```

Когда вы хотите добавить свойства к своему объекту, вы просто используете либо нотацию ноты, либо скобку с именем свойства по вашему выбору:

```javascript
myObject.name = "Johnny Mnemonic" 
 myObject["age"] = 55 
```

### Использование функции конструктора

Вы можете определить функцию-конструктор, которую вы можете использовать для создания ваших объектов:

```javascript
function Kitten(name, cute, color) { 
  this.name = name, 
  this.cute = cute, 
  this.color = color 
 } 
```

Вы можете определить переменную, содержащую экземпляр этого объекта, вызывая функцию конструктора:

```javascript
let myKitten = new Kitten("Nibbles", true, "white") 
```

### Object.create ()

Метод Object.create () (впервые определенный в ECMAScript 5.1) позволяет создавать объекты. он позволяет вам выбрать объект-прототип для вашего нового объекта без необходимости заранее определять функцию-конструктор.

```javascript
// Our pre-defined object 
 let kitten = { 
  name: "Fluff", 
  cute: true, 
  color: "gray" 
 } 
 // Create a new object using Object.create(). kitten is used as the prototype 
 let newKitten = Object.create(kitten) 
 
 console.log(newKitten.name) // Will output "Fluff" 
```

#### Больше информации

[Статья MDN по работе с объектами](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects)