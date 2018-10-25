---
title: Forms
localeTitle: формы
---
## \## Формы

Структура Bootstrap предоставляет функцию формы, которую программист может использовать для создания красивых html-форм. Использование формы бутстрапа дает каждому отдельному элементу формы единый глобальный стиль. Форма Bootstrap добавляет правильный интервал и смотрит на каждый элемент.

Каждый элемент формы бутстрапа должен иметь класс _\-контроль_ . Этот класс - это то, как bootstrao знает, какие элементы стиля. Все текстовые элементы, такие как **input** , **textarea** и **select,** которые имеют _класс управления формой,_ по умолчанию будут иметь ширину 100%. Существует два типа форм Bootstrap:

*   Встроенная форма - создает форму на одной строке. Полезно для форм входа в навигационную панель
*   Горизонтальная форма - создает форму с каждым элементом в другой строке

## Пример базовой формы

\`\` \`\` HTML

Адрес электронной почты 

пароль 

Вход в файл 

Пример текста справки на уровне блока.

 Проверить меня 

Отправить
```
## Example of an inline form 
```

HTML

имя 

Эл. адрес 

Выслать пригласительное
```
## Example of horizontal form 
```

HTML

Эл. адрес

пароль

 Запомни меня 

войти в систему
```
![Inline Form 2](https://github.com/TroyB12/Pictures/blob/master/Inline%20Form2.PNG) 
```

HTML

Сумма (в долларах)

$

+0,00

Перевод денежных средств
```
Bootstrap forms allow the programmer to use classes to easily make HTML forms presentable and responsive. 
 Take the following simple form: 
 
 ![](https://siamcomm.com/wp-content/uploads/2017/10/Forms-·-Bootstrap.png) 
```

HTML

Адрес электронной почты  Мы никогда не будем делиться вашей электронной почтой с кем-либо еще.

пароль 

 Проверить меня 

Отправить
```
Individual form fields and the associated label should be wrapped in a `<div>` with a class of `form-group`. One exception to this is when using checkbox field where `form-check` should be used instead of `form-group`. 
 
 The `<input>` tag should be given a class of `form-control`. 
 
 The `<button>` tag should be given the classes of `btn btn-primary`. 
 
 #### More Information: 
 <!-- Please add any articles you think might be helpful to read before writing the article --> 
 [The official BootStrap documentation is very helpful](http://getbootstrap.com/docs/4.0/components/forms/) 
 
 ![Inline Form 3](https://github.com/TroyB12/Pictures/blob/master/Inline%20Form3.PNG) 
 
 #### Horizontal Form 
 In combination with Bootstrap's predefined grid classes to align labels and groups of form controls in a horizontal layout by adding `.form-horizontal` to the form. Doing so changes `.form-group`s to behave as grid rows, so no need for `.row`. 
```

HTML

Эл. адрес

пароль

 Запомни меня 

войти в систему

\`\` \`

![Горизонтальная форма](https://github.com/TroyB12/Pictures/blob/master/Horizontal%20Form.PNG)