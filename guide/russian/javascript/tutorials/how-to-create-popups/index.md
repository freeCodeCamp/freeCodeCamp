---
title: How to Create Popups
localeTitle: Как создать всплывающие окна
---
## Как создать всплывающие окна

Всплывающее окно - это окно, которое появляется (появляется), когда вы выбираете опцию с помощью мыши или нажимаете специальную функциональную клавишу.

В этом примере всплывающее окно появится, когда вы нажмете на кнопку и останетесь на экране, пока не нажмете кнопку X.

Мы построим всплывающее окно с использованием `HTML` , `CSS` и `JavaScript`

### Шаг 1 HTML

HTML обеспечивает структуру всплывающего окна

\`\` \`\` HTML

Открыть PopUp

Всплывающее окно с JavaScript

Икс
```
### Step 2 CSS 
 We will choose our own style for the popup window. Notice: the popup div should be hidden at first, so in the style I will select display: none; 
```

CSS .popup _main_ div { позиция: фиксированная; ширина: 800 пикселей; высота: 400 пикселей; граница: 2px сплошной черный; border-radius: 5px; background-color: #fff; слева: 50%; margin-left: -400px; верх: 50%; margin-top: -250px; display: none;

} .close _popup { позиция: абсолютная; ширина: 25 пикселей; высота: 25 пикселей; border-radius: 25px; граница: 2px сплошной черный; text-align: center; правый: 5px; top: 5px; курсор: указатель; } .close_ popup p { margin-top: 5px; font-weight: 400;

} .текст{ text-align: center; размер шрифта: 30 пикселей; font-weight: 400; margin-top: 22%; } #Btn { позиция: абсолютная; слева: 50%; верх: 20%;

}
```
### Step 3 JavaScript 
```

JS // Прежде всего, я инициализирую свои переменные // Выберите элементы, которые мы будем использовать из DOM // Я добавлю событие en в кнопку, которая вызовет функцию, которая изменит стиль отображения всплывающего окна от ни одного, чтобы заблокировать

const Btn = document.getElementById ("Btn") const PopupDiv = document.querySelector (". popup _main_ div") const ClosePopup = document.querySelector (". close\_popup") Btn.addEventListener ( 'нажмите', функция () { PopupDiv.style.display = "блок" }) ClosePopup.addEventListener ( 'нажмите', функция () { не PopupDiv.style.display = "ни один" })

\`\` \`

Живой код в: [Codepen.io](https://codepen.io/voula12/pen/qyyNeK)