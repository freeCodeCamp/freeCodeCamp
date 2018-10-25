---
title: Form Inputs
localeTitle: Входы формы
---
## Входы формы

Bootstrap поддерживает следующие элементы управления формой:

1.  вход
2.  TextArea
3.  флажок
4.  радио
5.  Выбрать

## Примеры фрагментов кода

#### 1\. Вход

Bootstrap поддерживает все типы ввода HTML5: текст, пароль, дату и время, дату-время, дату, месяц, время, неделю, число, адрес электронной почты, URL-адрес, поиск, тел и цвет.

**Примечание. Входы НЕ будут полностью оформлены, если их тип не будет правильно объявлен!**

Следующий пример содержит два входных элемента; один из типа текста и один из паролей типа:

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

#### 2\. Текстовая реклама

Следующий пример содержит текстовое поле:

```html

<div class="form-group"> 
  <label for="comment">Comment:</label> 
  <textarea class="form-control" rows="5" id="comment"></textarea> 
 </div> 
```

#### 3\. Флажки

Флажки используются, если вы хотите, чтобы пользователь выбирал любое количество опций из списка предустановленных параметров.

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

#### 4\. Кнопки радиосвязи

Радиокнопки используются, если вы хотите ограничить пользователя одним выбором из списка предустановленных параметров.

Следующий пример содержит три переключателя. Последняя опция отключена:

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

Используйте **класс .radio-inline,** если вы хотите, чтобы флажки отображались в одной строке:

```html

<label class="radio-inline"><input type="radio" name="optradio">Option 1</label> 
 <label class="radio-inline"><input type="radio" name="optradio">Option 2</label> 
 <label class="radio-inline"><input type="radio" name="optradio">Option 3</label> 
```

#### 5\. Выберите (Список)

Списки выбора используются, если вы хотите разрешить пользователю выбирать из нескольких вариантов.

Следующий пример содержит раскрывающийся список (выберите список):

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

В поля ввода должны быть метки или какой-либо другой идентификатор, например теги WAI-ARIA, чтобы соответствовать Web Рекомендации по доступности контента или [WCAG](https://www.w3.org/WAI/tutorials/forms/) для краткости. В порядке для считывателей экрана, чтобы точно передать пользователю, с какими метками связаны, с которыми вводятся метки должен ссылаться на соответствующий вход.

Это можно сделать, используя параметр `for` в HTML:

```html

<label for="email-input">Enter Email</label> 
 <input type="email" class="form-control" id="email-input" placeholder="Enter Email"> 
```

Этикетка `for` атрибута **всегда** ссылается на поле ввода его **ID.** Это говорит читателю экрана что этот ярлык определенно подходит для этого поля ввода, что минимизирует путаницу для всех пользователей, которые используют читатель экрана для посещения веб-сайта.

### Дополнительная информация:

Примеры кода из [W3Schools - Input Bootstrap Form](https://www.w3schools.com/bootstrap/bootstrap_forms_inputs.asp) .