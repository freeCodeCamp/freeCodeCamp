---
title: Creating Singleton In JavaScript
localeTitle: Создание Singleton в JavaScript
---
## Создание Singleton в руководстве Javascript

Эта статья посвящена созданию синглтонов в естественном (чистом) Javascript. Эта концепция может быть полезна для поддержания чистого кода.

Если вы хотите сохранить свой код или somedata, он останется таким же, как и для вашего приложения, так вы можете это сделать.

**Предварительные знания** Это просто поможет вам понять концепцию более легко, иначе вы всегда можете скопировать-вставить код и соответствующим образом изменить его.

*   Основной синтаксис Javascript
*   Функции Javascript
*   IIFE в Javascript

### Давайте начнем

Давайте создадим объект с функцией IIFE, которая мгновенно выполнится, чтобы дать нам эффект Singleton.
```
var singletonFn = (function(){ //Created IIFE Function 
  var dataCounter = 0; 
  return { //Any code inside this return stuff will be accessible directly using objectname. 
 
    getDataCounter: function(){ 
      return dataCounter; 
    }, 
 
    setDataCounter: function(val){ 
      dataCounter = val; 
    }, 
 
    fishNames: ["SimpleFish"] //Can create variables, Arrays, etc. 
  } 
 })(); 
```

Теперь выполнить или использовать ваш синглтон. в браузере после сохранения этого файла в js и его загрузки.
```
console.log(singletonFn.getDataCounter()); //0 as bydefault it will be 0. 
 
 singletonFn.setDataCounter(20); 
 
 console.log(singletonFn.getDataCounter()); //20 as we assigned. 
 
 console.log(fishNames); //will Print array with "SimpleFish". 
```

Теперь с помощью этих знаний вы можете определить константы, перечисления или что-то, что нужно использовать в проекте, написанном здесь. или что-то вроде конфигураций.

Надеюсь, это поможет вам лучше писать коды. Счастливое кодирование :)