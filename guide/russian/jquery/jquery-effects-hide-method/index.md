---
title: jQuery Effects Hide Method
localeTitle: jQuery Эффекты Скрыть метод
---
## Метод jQuery Hide

В своей простейшей форме **.hide ()** немедленно скрывает согласованный элемент без анимации. Например:

```javascript
$(".myclass").hide() 
```

скроет все элементы, класс которых является классом _myclass_ . Можно использовать любой селектор jQuery.

### .hide () как метод анимации

Благодаря своим возможностям, **.hide ()** может анимировать ширину, высоту и непрозрачность согласованных элементов одновременно.

*   Продолжительность может быть задана в миллисекундах, или с использованием литералов медленной (600 мс) и быстрой (200 мс). например:

```javascript
$("#myobject").hide(800) 
```

*   Можно указать функцию, которая будет вызываться после завершения анимации, по одному на каждый согласованный элемент. Этот обратный вызов в основном полезен для объединения разных анимаций. Например

```javascript
$("p").hide( "slow", function() { 
      $(".titles").hide("fast"); 
      alert("No more text!"); 
 }); 
  ``` 
 * More options exist, please refer to the official website for further details. 
 
 ### .toggle() method 
 
 To show / hide elements you can use ```toggle()``` method. If element is hidden ```toggle()``` will show it and vice versa. 
 Usage: 
```

Javascript $ ( "MyClass"). Переключения () \`\` \`

### .slideDown ()

Этот метод анимирует высоту согласованных элементов. Это приводит к тому, что нижние части страницы скользят вниз, что позволяет выявить предметы. Применение:

```javascript
$(".myclass").slideDown(); //will expand the element with the identifier myclass for 400 ms. 
 $(".myclass").slideDown(1000); //will expand the element with the identifier myclass for 1000 ms. 
 $(".myclass").slideDown("slow"); //will expand the element with the identifier myclass for 600 ms. 
 $(".myclass").slideDown("fast"); //will expand the element with the identifier myclass for 200 ms. 
```

#### Дополнительная информация:

Метод JQuery hide () на [официальном сайте](http://api.jquery.com/hide/)