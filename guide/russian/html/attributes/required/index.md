---
title: Required
localeTitle: необходимые
---
## необходимые

Обязательный атрибут HTML используется во входном элементе, чтобы ввести поле ввода в форму, необходимую для отправки формы. Если пользователь не заполнил поле ввода, форма не будет отправлена, и он даст сообщение с просьбой заполнить поле. Атрибут `< Required>` применим к `<input>` , `<select>` , `<textarea>` .

Например:

```html

<!DOCTYPE html> 
 <html> 
  <head> 
    <title>HTML Required Attribute</title> 
  </head> 
  <body> 
    <form action="/"> 
      Text Field: <input type="text" name="textfield" required> 
      <input type="submit" value="Submit"> 
    </form> 
  </body> 
 </html> 
```

Выберите пример:

```html

<form action="/action.php"> 
 <select required> 
  <option value="">None</option> 
  <option value="volvo">Volvo</option> 
  <option value="saab">Saab</option> 
  <option value="mercedes">Mercedes</option> 
  <option value="audi">Audi</option> 
 </select> 
 </form> 
```

Пример текстовой области:

```html

<form action="/action.php"> 
  <textarea name="comment" required></textarea> 
  <input type="submit"> 
 </form> 
```

Просто добавьте `required` элемент ввода

#### Дополнительная информация:

[Статья MDN по входному элементу](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)