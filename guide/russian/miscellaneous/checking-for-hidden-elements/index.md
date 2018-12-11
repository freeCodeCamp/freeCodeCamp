---
title: Checking for Hidden Elements
localeTitle: Проверка скрытых элементов
---
Бывают моменты, когда вам может потребоваться проверить, является ли элемент видимым или скрытым на экране, чтобы вы могли выполнить какое-либо действие по нему, учитывая его состояние. Я искал некоторые решения в Stack Overflow, пытаясь выяснить, был ли элемент видимым, и я не был удовлетворен полученными ответами.

Один из ответов заключался в том, чтобы использовать библиотеку jQuery, а затем проверить, есть ли у элемента псевдослот `:visible` с использованием этого формата: `$(element).is(':visible')` . Это работает для элементов, которые скрыты с помощью `display: none;` на них, но он не работает ни на каком элементе, который имеет `visibility` для `hidden` . Он также не работает, если родительский элемент является единственным элементом, который скрыт от представления. Если какой-либо родительский элемент тестируемого элемента скрыт, используя `visibility` или `display` , проверяемый элемент будет отображаться как видимый, несмотря на то, что он не отображается на экране.

## Решение

Я придумал чистую функцию JavaScript, которая решает эту проблему, которая не имеет зависимостей, и является решением, совместимым с кросс-браузером. Эта функция сначала проанализирует элемент, чтобы увидеть, `display` ли его свойства `display` или `visibility` как `none` или `hidden` соответственно. Затем, если они возвращаются в нормальное состояние, он проверяет все родительские элементы на тело документа. Если родительский элемент тестируемого элемента скрыт, это означает, что проверяемый элемент не отображается в документе.

[Вот пример CodePen, который демонстрирует это поведение и даже показывает, что сравнение использует решение jQuery и мое чистое решение для JavaScript](http://codepen.io/marcusparsons/pen/bpNqgY) . Обратите внимание, что в CodePen, хотя элемент скрытно скрыт от вида, использование jQuery's `.is(':visible')` не является жизнеспособным вариантом для действительно проверки любого элемента видимости.

И вот функция, которую я создал:
```
function isVisible (element) { 
    //start with initial element to check visibility and display 
    var el = document.querySelector(element); 
    //display and visibility vary per browser and must be sought in different ways depending on the browser 
    var t1 = el.currentStyle ? el.currentStyle.visibility : getComputedStyle(el, null).visibility; 
    var t2 = el.currentStyle ? el.currentStyle.display : getComputedStyle(el, null).display; 
    //if either of these are true, then the element is not visible 
    if (t1 === "hidden" || t2 === "none") { 
        return false; 
    } 
    //This regex is used to scan the parent nodes all the way up to the body element 
    while (!(/body/i).test(el)) { 
        //get the next parent node 
        el = el.parentNode; 
        //grab the values, if available, 
        t1 = el.currentStyle ? el.currentStyle.visibility : getComputedStyle(el, null).visibility; 
        t2 = el.currentStyle ? el.currentStyle.display : getComputedStyle(el, null).display; 
        if (t1 === "hidden" || t2 === "none") { 
            return false; 
        } 
    } 
    //if all scans are not successful, then the element is visible 
    return true; 
 } 
```

И чтобы использовать эту функцию, вам нужно только вызвать ее с помощью строки запроса, чтобы выбрать элемент для проверки, т. Е.
```
<body> 
    <p style="visibility: hidden;" id="myP">My paragraph</p> 
    <script type="text/javascript"> 
        //include isVisible function 
        alert('Is my paragraph visible? ' + isVisible('#myP')); 
    </script> 
 </body> 
```

И получившееся предупреждение будет: `Is my paragraph visible? false`