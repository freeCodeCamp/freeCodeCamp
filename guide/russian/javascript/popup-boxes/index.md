---
title: Popup Boxes
localeTitle: Всплывающие окна
---
## Всплывающие окна

Всплывающие окна (или диалоговые окна) - это модальные окна, используемые для уведомления или предупреждения пользователя или для ввода данных от пользователя.

Всплывающие окна запрещают пользователю получать доступ к другим аспектам программы до тех пор, пока всплывающее окно не будет закрыто, поэтому их не следует злоупотреблять.

Существует три разных типа всплывающих методов, используемых в JavaScript: [window.alert ()](https://developer.mozilla.org/en-US/docs/Web/API/Window/alert) , [window.confirm ()](https://developer.mozilla.org/en-US/docs/Web/API/Window/confirm) и [window.prompt ()](https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt) .

### бдительный

Метод [предупреждения](https://developer.mozilla.org/en-US/docs/Web/API/Window/alert) отображает сообщения, которые не требуют от пользователя ввода ответа. После вызова этой функции появится диалоговое окно предупреждения с указанным (необязательным) сообщением. Пользователи должны будут подтвердить сообщение до того, как предупреждение исчезнет.

### Пример:

`window.alert("Welcome to our website");`

![Пример предупреждения MDN](https://mdn.mozillademos.org/files/130/AlertHelloWorld.png)

### подтвердить

Метод [подтверждения](https://developer.mozilla.org/en-US/docs/Web/API/Window/confirm) похож на `window.alert()` , но также отображает кнопку отмены во всплывающем окне. Кнопки возвращают логические значения: true для OK и false для Cancel.

### Пример:

```javascript
var result = window.confirm('Are you sure?'); 
 if (result === true) { 
    window.alert('Okay, if you're sure.'); 
 } else { 
    window.alert('You seem uncertain.'); 
 } 
```

![Пример подтверждения MDN](https://mdn.mozillademos.org/files/7163/firefoxcomfirmdialog_zpsf00ec381.png)

### Незамедлительный

Метод [подсказки](https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt) обычно используется для получения текстового ввода от пользователя. Эта функция может принимать два аргумента, оба из которых являются необязательными: сообщение для отображения пользователю и значение по умолчанию для отображения в текстовом поле.

### Пример:

`var age = prompt('How old are you?', '100');`

![Пример подсказки MDN](https://mdn.mozillademos.org/files/11303/prompt.png)

### Другие варианты дизайна:

Если вы недовольны всплывающими надписями JavaScript по умолчанию, вы можете заменить их в различных библиотеках пользовательского интерфейса. Например, SweetAlert обеспечивает приятную замену стандартным JavaScript-модалам. Вы можете включить его в свой HTML через CDN (сеть доставки контента) и начать использовать.

```HTML
<script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script> 
```

Синтаксис таков: `swal(title, subtitle, messageType)`

```javascript
swal("Oops!", "Something went wrong on the page!", "error"); 
```

В приведенном выше коде будет отображаться следующее всплывающее окно: ![Пример SweetAlert](https://ludu-assets.s3.amazonaws.com/lesson-content/rWqOoQXgDrSVSMrAKiZ9) SweetAlert ни в коем случае не является единственным подходом для стандартных модалов, но он чист и прост в реализации.

#### Дополнительная информация:

*   [MDN window.alert ()](https://developer.mozilla.org/en-US/docs/Web/API/Window/alert)
*   [MDN window.confirm ()](https://developer.mozilla.org/en-US/docs/Web/API/Window/confirm)
*   [MDN window.prompt ()](https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt)