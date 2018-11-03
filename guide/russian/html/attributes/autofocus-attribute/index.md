---
title: Autofocus Attribute
localeTitle: Атрибут autofocus
---
## Атрибут autofocus | HTML5

Атрибут **autofocus** является логическим атрибутом.

Когда он присутствует, он указывает, что элемент должен автоматически получать фокус ввода при загрузке страницы.

Только один элемент формы в документе может иметь атрибут **Autofocus** . Он не может применяться к полям `<input type="hidden">` .

### Относится к

| Элемент | Атрибут |
| :-- | :-- |
| `<button>` | autofocus |
| `<input>` | autofocus |
| `<select>` | autofocus |
| `<textarea>` | autofocus |

### пример

```html

<form> 
    <input type="text" name="fname" autofocus> 
    <input type="text" name="lname"> 
 </form> 
```

### Совместимость

Это атрибут HTML5.

#### Дополнительная информация:

[HTML autofocus Attribute](https://www.w3schools.com/tags/att_autofocus.asp) на w3schools.com

[<input> autofocus attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input) на MDN web docs
