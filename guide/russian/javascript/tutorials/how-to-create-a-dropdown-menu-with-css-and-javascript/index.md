---
title: How to Create a Dropdown Menu with CSS and JavaScript
localeTitle: Как создать раскрывающееся меню с CSS и JavaScript
---
## Как создать раскрывающееся меню с CSS и JavaScript

В этом уроке вы узнаете, как создать простое выпадающее меню с ванильным Javascript, HTML и CSS. Мы будем проходить через HTML, CSS и Javascript-код, но уделяем больше внимания программированию, поскольку это учебник JS. Мы будем использовать только простые JS и CSS, без каких-либо фреймворков или препроцессоров. Единственное (вид) исключения будет импортировать файл [шрифта Awesome](https://fontawesome.com/) CSS, потому что мы будем использовать один из его значков.

Это предназначено для разработчиков, которые имеют среднее представление о HTML, CSS и JS. Я попытался сделать его максимально чистым, но я не буду уделять слишком много внимания деталям. Надеюсь, вам понравится.

## Скриншоты

Вот как выглядит результат кода:

Начальный экран:

![](https://i.imgur.com/jrnu6mE.png)

Откроется окно:

![](https://i.imgur.com/gszPtRa.png)

Выпадающее меню с выбранной опцией:

![](https://i.imgur.com/TKXxZGF.png)

#### HTML:

В этом разделе мы обсудим реализацию HTML-кода для демонстрационной страницы. Чтобы начать, давайте посмотрим код `<head>`

```html

<!DOCTYPE html> 
 <html lang="en"> 
 <head> 
    <meta charset="UTF-8"> 
    <meta name="viewport" content="width=device-width, initial-scale=1.0"> 
    <meta http-equiv="X-UA-Compatible" content="ie=edge"> 
    <title>Dropdown Example</title> 
 
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/'-awesome/4.7.0/css/font-awesome.min.css"> 
    <link rel="stylesheet" href="styles.css"> 
 </head> 
```

Это, в основном, HTML headplate, за исключением тегов `link` загружают две таблицы стилей CSS, которые мы будем использовать в этом уроке: стили шрифта Awesome и файл `styles.css` , где мы будем определять стили этой страницы.

Затем есть остальная часть HTML-файла, тело:

```html

<body> 
    <div class='dropdown'> 
        <div class='title pointerCursor'>Select an option <i class="fa fa-angle-right"></i></div> 
 
        <div class='menu pointerCursor hide'> 
            <div class='option' id='option1'>Option 1</div> 
            <div class='option' id='option2'>Option 2</div> 
            <div class='option' id='option3'>Option 3</div> 
            <div class='option' id='option4'>Option 4</div> 
        </div> 
 
    </div> 
    <span id='result'>The result is: </span> 
    <script> 
      ... 
    </script> 
 </body> 
 </html> 
```

Этот раздел можно разделить на 3 основные части:

*   `.dropdown` div, где будет определена структура элемента выпадающего элемента.
*   Элемент `#result` , который будет содержать выбранный параметр пользователем, из раскрывающегося элемента.
*   Сценарий написан в `<script>` . Его реализация скрыта здесь, потому что ее детали будут объяснены в последнем разделе этого урока.

Выпадающий элемент - это `div` содержащий элементы `title` и `menu` . Первый определяет, какой текст будет представлен в элементе перед тем, как будет выбран какой-либо параметр, и последний определит параметры, которые будут выбираться элементом.

Элемент `result` просто показать вам, какая опция выбрана.

#### Стили:

Ниже вы можете проверить полный код css. Как вы можете видеть , что делает использование CSS3 `transition` и `transform` конструкции.

Обратите внимание на определения классов `.dropdown` . Они используются для определения макета для раскрывающегося компонента контейнера, а также его внутренних элементов, таких как `.title` и его `.option` .

```css
body{ 
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif; 
 } 
 
 .hide { 
    max-height: 0 !important; 
 } 
 
 .dropdown{ 
    border: 0.1em solid black; 
    width: 10em; 
    margin-bottom: 1em; 
 } 
 
 .dropdown .title{ 
    margin: .3em .3em .3em .3em; 
    width: 100%; 
 } 
 
 .dropdown .title .fa-angle-right{ 
    float: right; 
    margin-right: .7em; 
    transition: transform .3s; 
 } 
 
 .dropdown .menu{ 
    transition: max-height .5s ease-out; 
    max-height: 20em; 
    overflow: hidden; 
 } 
 
 .dropdown .menu .option{ 
    margin: .3em .3em .3em .3em; 
    margin-top: 0.3em; 
 } 
 
 .dropdown .menu .option:hover{ 
    background: rgba(0,0,0,0.2); 
 } 
 
 .pointerCursor:hover{ 
    cursor: pointer; 
 } 
 
 .rotate-90{ 
    transform: rotate(90deg); 
 } 
```

#### JavaScript:

Теперь посмотрим, как реализована часть Javascript. Сначала мы рассмотрим определения функций а затем код, который вызывает эти функции, чтобы сделать выпадающие действия.

В принципе, есть 3 действия, которые происходят в зависимости от того, что представляет собой пользовательское взаимодействие, поскольку их слушатели добавляются в элементы DOM:

1.  Нажав на раскрывающийся элемент
2.  Выбор одного из раскрывающихся меню
3.  Изменение текущего выбранного параметра

Я хотел бы дать понять, что мы используем функции стрелок ( `() => {}` ) и ключевое слово `const` , которые являются функциями ES6. Вы, наверное, хорошо, если используете последнюю версию своего браузера, но помните об этом.

#### 1\. Нажав на раскрывающийся элемент

```Javascript
function toggleClass(elem,className){ 
    if (elem.className.indexOf(className) !== -1){ 
        elem.className = elem.className.replace(className,''); 
    } 
    else{ 
        elem.className = elem.className.replace(/\s+/g,' ') +   ' ' + className; 
    } 
 
    return elem; 
 } 
 
 function toggleDisplay(elem){ 
    const curDisplayStyle = elem.style.display; 
 
    if (curDisplayStyle === 'none' || curDisplayStyle === ''){ 
        elem.style.display = 'block'; 
    } 
    else{ 
        elem.style.display = 'none'; 
    } 
 } 
 
 
 function toggleMenuDisplay(e){ 
    const dropdown = e.currentTarget.parentNode; 
    const menu = dropdown.querySelector('.menu'); 
    const icon = dropdown.querySelector('.fa-angle-right'); 
 
    toggleClass(menu,'hide'); 
    toggleClass(icon,'rotate-90'); 
 } 
```

Когда щелкнут элемент выпадающего меню, он открывается (если он закрыт) или закрывается (если он открыт). Это происходит путем привязки `toggleMenuDisplay` к прослушивателю событий щелчка в раскрывающемся элементе. Эта функция переключает отображение своего элемента `menu` с помощью функций `toggleDisplay` и `toggleClass` .

#### 2\. Выбор одного из раскрывающихся меню

```Javascript
function handleOptionSelected(e){ 
    toggleClass(e.target.parentNode, 'hide'); 
 
    const id = e.target.id; 
    const newValue = e.target.textContent + ' '; 
    const titleElem = document.querySelector('.dropdown .title'); 
    const icon = document.querySelector('.dropdown .title .fa'); 
 
 
    titleElem.textContent = newValue; 
    titleElem.appendChild(icon); 
 
    //trigger custom event 
    document.querySelector('.dropdown .title').dispatchEvent(new Event('change')); 
    //setTimeout is used so transition is properly shown 
    setTimeout(() => toggleClass(icon,'rotate-90',0)); 
 } 
```

#### 3\. Изменение выбранного параметра

```Javascript
function handleTitleChange(e){ 
    const result = document.getElementById('result'); 
 
    result.innerHTML = 'The result is: ' + e.target.textContent; 
 } 
```

Функция `handleTitleChange` привязана к пользовательскому событию `change` в элементе `.title` , чтобы изменить `#result` элемента `#result` всякий раз, когда элемент заголовка изменяется. Вызов этого события выполняется в предыдущем разделе.

#### Основной код

```Javascript
//get elements 
 const dropdownTitle = document.querySelector('.dropdown .title'); 
 const dropdownOptions = document.querySelectorAll('.dropdown .option'); 
 
 //bind listeners to these elements 
 dropdownTitle.addEventListener('click', toggleMenuDisplay); 
 dropdownOptions.forEach(option => option.addEventListener('click',handleOptionSelected)); 
 document.querySelector('.dropdown .title').addEventListener('change',handleTitleChange); 
```

В главном разделе есть только некоторый простой код, чтобы получить заголовок и элементы раскрывающегося списка, чтобы привязать к ним события, обсуждавшиеся в последнем разделе.

## демонстрация

Полный код и демонстрацию этого приложения можно найти [здесь](https://codepen.io/GCrispino/pen/EEXmYd) .

## Больше информации

*   [Введение ES6](https://guide.freecodecamp.org/javascript/es6)
*   [Функции стрелок](https://guide.freecodecamp.org/javascript/es6/arrow-functions/)
*   [Let и Const](https://guide.freecodecamp.org/javascript/es6/let-and-const/)