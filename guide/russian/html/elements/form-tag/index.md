---
title: Form Tag
localeTitle: Тег формы
---
## Тег формы

Тег `<form>` используется для создания форм в HTML, которые предназначены для ввода пользователем. Когда пользователь вводит данные и отправляет их, данные отправляются на обрабатываемый сервер.

Вот пример использования `<form>` :

```html

<form action="/example.php" method="get"> 
 Name: <input type="text"><br> 
 Email Address: <input type="text"><br> 
 <input type="submit" value="Submit"> 
 </form> 
```

### Атрибут действия

Каждому элементу `<form>` нужен атрибут действия. Значение атрибута action - это URL-адрес сервера, который будет получать данные в форме при их отправке.

Вот пример использования атрибута action:

```html

<form action="http://www.google.com/form.php" method="get"> 
 <p>Controls will appear inside here.</p> 
 </form> 
```

Как вы можете видеть, форма отправляет свои данные на URL [http://www.google.com/from.php](http://www.google.com/from.php) .

### метод

Формы могут быть представлены с использованием метода GET или POST.

*   Метод GET идеален для более коротких форм, поскольку он привязывает данные к концу URL-адреса, указанного внутри атрибута действия.
    
*   Метод POST идеально подходит для форм, которые длиннее или когда вы добавляете или удаляете информацию из базы данных. С помощью метода POST значения формы отправляются в заголовках HTTP.
    

### элементы

Элемент `<form>` будет иметь по крайней мере один из следующих элементов, вложенных внутри него:

*   [`<input>`](https://guide.freecodecamp.org/html/elements/input "вход")
*   [`<button>`](https://guide.freecodecamp.org/html/elements/button-tag "кнопка")
*   [`<label>`](https://guide.freecodecamp.org/html/elements/label-tag "этикетка")
*   [`<select>`](https://guide.freecodecamp.org/html/elements/select-tag "Выбрать")
*   [`<textarea>`](https://guide.freecodecamp.org/html/elements/textarea-tag "Textarea")
*   [`<fieldset>`](https://guide.freecodecamp.org/html/elements/fieldsets-and-legends "Fieldset")

### Ресурсы

*   [W3 Schools Form Resource](https://www.w3schools.com/tags/tag_form.asp "W3 Школы")
*   [Ресурс формы Mozilla](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form "Форма Mozilla")