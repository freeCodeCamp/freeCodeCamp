---
title: Span Tag
localeTitle: Время простоя
---
## Span Tag

Тег `<span>` - это контейнерный элемент общего назначения, похожий на `<div>` . Браузеры не делают никаких визуальных изменений в `<span>` s по умолчанию, но вы можете стилизовать их с помощью CSS или манипулировать ими с помощью JavaScript.

### пример

```html

<html> 
  <head> 
    <title>The Span Tag</title> 
  </head> 
  <body> 
    <div> 
      <p>This is a normal paragraph without any changes.</p> 
      <p>This paragraph has <span style="color:red">red span styling</span> inside it without affecting the rest of the document.</p> 
    </div> 
  </body> 
 </html> 
```

Код для абзаца с красным текстом выглядит следующим образом:

```html

<p>This paragraph has <span style="color:red">red span styling</span> inside it without affecting the rest of the document.</p> 
```

#### Различия между `<span>` и `<div>`

Основное отличие состоит в том, что `<span>` является встроенным элементом, а `<div>` является блочным элементом. Это означает, что a `<span>` может отображаться в предложении или абзаце (как в примере выше), а `<div>` запустит новую строку содержимого. Обратите внимание, что свойство `display` CSS может изменять это поведение по умолчанию, но это выходит за рамки этой статьи!

#### Дополнительная информация:

*   [Ссылка на HTML-код MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/span)