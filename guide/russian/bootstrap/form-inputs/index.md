---
title: Form Inputs
localeTitle: Входы формы
---
## Входы формы

Bootstrap поддерживает следующие элементы управления формой:

1.  поле ввода данных
2.  текстовое поле
3.  флажок
4.  радио
5.  Выбрать

## Примеры фрагментов кода

#### 1\. Вход

Bootstrap поддерживает все типы ввода данных HTML5: текст, пароль, дату и время, дату-время, дату, месяц, время, неделю, число, адрес электронной почты, URL-адрес, поиск, телефон и цвет.

**Примечание. Поля ввода данных НЕ будут полностью оформлены, если их тип будет объявлен неправильно!**

Следующий пример содержит два элемента ввода данных: один - для текста и один для пароля:

```html

<div class="form-group"> 
  <label for="usr">Name:</label> 
  <input type="text" class="form-control" id="usr"> 
 </div> 
 <div class="form-group"> 
  <label for="pwd">Password:</label> 
  <input type="password" class="form-control" id="pwd"> 
 </div> 
```

#### 2\. Текстовое поле

Следующий пример содержит текстовое поле:

```html

<div class="form-group"> 
  <label for="comment">Comment:</label> 
  <textarea class="form-control" rows="5" id="comment"></textarea> 
 </div> 
```

#### 3\. Флажки

Флажки используются, если вы хотите, чтобы пользователь выбирал любое количество опций из предустановленного списка.

Следующий пример содержит три флажка. Последняя опция отключена:

```html

<div class="checkbox"> 
  <label> 
  <input type="checkbox" value="">Option 1</label> 
 </div> 
 <div class="checkbox"> 
  <label> 
  <input type="checkbox" value="">Option 2</label> 
 </div> 
 <div class="checkbox disabled"> 
  <label> 
  <input type="checkbox" value="" disabled>Option 3</label> 
 </div> 
```

Используйте **класс .checkbox-inline,** если вы хотите, чтобы флажки отображались в одной строке:

```html

<label class="checkbox-inline"><input type="checkbox" value="">Option 1</label> 
 <label class="checkbox-inline"><input type="checkbox" value="">Option 2</label> 
 <label class="checkbox-inline"><input type="checkbox" value="">Option 3</label> 
```

#### 4\. Радиокнопки

Радиокнопки используются, если вы хотите ограничить пользователя одним выбором из предустановленного списка.

Следующий пример содержит три переключателя. Последний отключен:

```html

<div class="radio"> 
  <label><input type="radio" name="optradio">Option 1</label> 
 </div> 
 <div class="radio"> 
  <label><input type="radio" name="optradio">Option 2</label> 
 </div> 
 <div class="radio disabled"> 
  <label><input type="radio" name="optradio" disabled>Option 3</label> 
 </div> 
```

Используйте **класс .radio-inline,** если вы хотите, чтобы радиокнопки отображались в одной строке:

```html

<label class="radio-inline"><input type="radio" name="optradio">Option 1</label> 
 <label class="radio-inline"><input type="radio" name="optradio">Option 2</label> 
 <label class="radio-inline"><input type="radio" name="optradio">Option 3</label> 
```

#### 5\. Выбор (Список)

Списки выбора используются, если вы хотите разрешить пользователю выбирать из нескольких вариантов.

Следующий пример содержит раскрывающийся список (Список выбора):

```html

<div class="form-group"> 
  <label for="sel1">Select list:</label> 
  <select class="form-control" id="sel1"> 
    <option>1</option> 
    <option>2</option> 
    <option>3</option> 
    <option>4</option> 
  </select> 
 </div> 
```

## Как сделать доступными загрузочные входы

У полей ввода данных должны быть метки или какой-либо другой идентификатор, например теги WAI-ARIA, чтобы соответствовать Руководству по обеспечению доступности Web-контент  или [WCAG] (https://www.w3.org/WAI/tutorials/forms/) для краткости. Для того, чтобы экранные считывающие устройства точно сообщали пользователю, какие метки связаны с какими полями ввода, каждая метка должна ссылаться на соответствующее поля ввода.

Это можно сделать, используя параметр `for` в HTML:

```html

<label for="email-input">Enter Email</label> 
 <input type="email" class="form-control" id="email-input" placeholder="Enter Email"> 
```

Этикетка `for` атрибута **всегда** ссылается на поле ввода по его **ID.** Это говорит экранному считывающему устройству, что этот ярлык определенно подходит для этого поля ввода, что минимизирует путаницу для всех пользователей, которые используют такие программы для посещения веб-сайтов.

### Дополнительная информация:

Примеры кода из [W3Schools - Input Bootstrap Form](https://www.w3schools.com/bootstrap/bootstrap_forms_inputs.asp) .
