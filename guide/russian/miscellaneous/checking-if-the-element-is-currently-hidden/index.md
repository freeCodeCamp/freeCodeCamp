---
title: Checking if the Element Is Currently Hidden
localeTitle: Проверка того, скрыт ли элемент в настоящее время
---
Если вам нужно проверить статус видимости какого-либо элемента на странице, вы можете легко это сделать с помощью библиотеки jQuery с простым блоком кода, подобным приведенному ниже.
```
var display = ( jQuery('#someElement').is(':visible') ); 
 var visibility = ( jQuery('#someElement').css('visibility') != 'hidden' ); 
 var status = ( display && visibility ); 
 console.log( status ); 
```

Итак, если элемент в настоящее время отображается на странице, **`console.log(status)`** вернет `true` и в любом другом случае он вернет `false` . Для этих двух случаев будет возвращено `false` утверждение:

*   если элемент имеет `display:none;`
*   если элемент имеет `visibility: hidden`

и для более расширенной проверки: **вот элемент, видимый в окне просмотра, теперь** я бы рекомендовал использовать [плагин jQuery onScreen](http://benpickles.github.io/onScreen/)