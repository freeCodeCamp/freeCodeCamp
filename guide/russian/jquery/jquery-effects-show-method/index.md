---
title: jQuery Effects Show Method
localeTitle: Метод отображения эффектов jQuery
---
## Метод отображения эффектов jQuery

В своей простейшей форме **.show ()** немедленно отображает согласованный элемент без анимации. Например:

```javascript
$(".myclass").show(); 
```

покажет все элементы, класс которых является классом _myclass_ . Можно использовать любой селектор jQuery.

Однако этот метод не переопределяет `!important` в стиле CSS, например `display: none !important` .

### .show () как метод анимации

Благодаря своим параметрам **.show ()** может анимировать ширину, высоту и непрозрачность согласованных элементов одновременно.

*   Продолжительность может быть задана в миллисекундах, или с использованием литералов медленной (600 мс) и быстрой (200 мс). например:

```javascript
$("#myobject").show("slow"); 
```

*   Можно указать функцию, которая будет вызываться после завершения анимации, по одному на каждый согласованный элемент. например

```javascript
$("#title").show( "slow", function() { 
    $("p").show("fast"); 
 }); 
  ``` 
 * More options exist, please refer to the official website for further details. 
 
 ### .slideDown() method 
 This method animates the height of the matched elements. This causes lower parts of the page to slide down, making way for the revealed items. 
 Usage: 
```

Javascript $ ( "MyClass"). SlideDown (). // будет расширять элемент с идентификатором myclass за 400 мс. $ ( "MyClass") slideDown (1000). // будет расширять элемент с идентификатором myclass за 1000 мс. $ ( "MyClass "). SlideDown (" медленные"). // будет расширять элемент с идентификатором myclass за 600 мс. $ ( "MyClass ") slideDown (" быстрый"). // будет расширять элемент с идентификатором myclass за 200 мс. \`\` \`

#### Дополнительная информация:

Метод JQuery Show () на [официальном сайте](http://api.jquery.com/show/)