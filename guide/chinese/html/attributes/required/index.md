---
title: Required
localeTitle: 需要
---
## 需要

HTML required属性在input元素中用于以输入表单所需的形式输入字段。 如果用户没有填写输入字段，表单将不会提交，并且会发出一条消息，要求用户填写该字段。 `< Required>`属性适用于`<input>` ， `<select>` ， `<textarea>` 。

例如：

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

选择示例：

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

文本区域示例：

```html

<form action="/action.php"> 
  <textarea name="comment" required></textarea> 
  <input type="submit"> 
 </form> 
```

简单地添加`required`的输入元件

#### 更多信息：

[关于输入元素的MDN文章](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)