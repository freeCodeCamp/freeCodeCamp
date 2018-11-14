---
title: Override Class Declarations by Styling ID Attributes
localeTitle: Переопределить объявления классов с помощью атрибутов идентификатора стилизации
---
## Переопределить объявления классов с помощью атрибутов идентификатора стилизации

Чтобы понять переопределение в CSS, вы должны сначала понять принцип precendance в CSS.

Главное правило, чтобы помнить, что CSS читается снизу вверх.

Примером этого является:

```html

<style> 
  body { 
    background-color: black; 
    font-family: Arial; 
    color: black; 
  } 
  .red-text { 
    color: red; 
  } 
  .blue-text { 
    color: blue; 
  } 
 </style> 
 <h1 class="red-text blue-text">Example</h1> 
```

В приведенном выше `Example` текстовый `Example` будет синим, потому что последний добавленный класс был `blue-text` .

**Важно помнить, что атрибут `id` будет иметь приоритет над классами, что означает, что он занимает наивысший уровень.**

Вы можете создать атрибут `id` , добавив `#` перед именем класса, как показано ниже:

```html

<style> 
  #purple-text { 
    color: purple; 
  } 
 </style> 
```

Вот пример, чтобы показать вам, как **переопределить объявления классов с помощью атрибутов идентификатора стилей** :

```html

<style> 
  body { 
    background-color: black; 
    font-family: Arial; 
    color: black; 
  } 
  .red-text { 
    color: red; 
  } 
  .blue-text { 
    color: blue; 
  } 
  #green-color { 
    color: green; 
  } 
 </style> 
 <h1 id="green-color" class="red-text blue-text">Example</h1> 
```

Это позволит сделать текст `Example` быть зеленым , потому что `id` атрибут всегда будет иметь приоритет над `class` декларациями.