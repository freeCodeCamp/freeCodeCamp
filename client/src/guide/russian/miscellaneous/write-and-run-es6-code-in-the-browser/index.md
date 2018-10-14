---
title: Write and Run Es6 Code in the Browser
localeTitle: Запись и запуск кода Es6 в браузере
---
> Включите следующий код на странице.
```
<!-- Write these first. Here `bootstrap.js` doesn't mean Twitter Bootstrap. --> 
 <script src="https://google.github.io/traceur-compiler/bin/traceur.js"></script> 
 <script src="https://google.github.io/traceur-compiler/src/bootstrap.js"></script> 
 
 <!-- Edit the src. Write `type="module"` (important) for linked script --> 
 <script src="app.js" type="module"></script> 
 
 <!-- Remember to write `type="module"` for embedded script --> 
 <script type="module"> 
    //→ write your script here 
 </script> 
```

**См.** [Начало работы компилятора Traceur](https://github.com/google/traceur-compiler/wiki/Getting-Started)

**Демо-** [версия](https://github.com/abhisekp/JS-Weird-Parts/tree/109ab3b0c94d1fbf9bbc402dd36e9bca60d5b456) **:** [демонстрационный источник ES6 Demo](https://github.com/abhisekp/JS-Weird-Parts/tree/109ab3b0c94d1fbf9bbc402dd36e9bca60d5b456)