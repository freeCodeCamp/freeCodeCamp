---
title: Text Indent Property
localeTitle: Свойство отпечатка текста
---
## Свойство отпечатка текста

Свойство css `text-indent` определяет количество отступов (пустое пространство), которое помещается перед строками текста в блоке. По умолчанию это определяет отступ только первой отформатированной строки блока, но для изменения этого поведения можно использовать `hanging` и ключевые слова в `each-line` .

**Ключевые слова**

`hanging` - отступы влияют на первую строку контейнерного блока, а также каждую строку после вынужденного прерывания строки, но не влияют на линии после разрыва мягкой упаковки.

`each-line` - инвертирует строки с отступом. Все строки, кроме первой строки, будут отступы.

**Синтаксис**

```css
  /* <length> values */ 
  text-indent: 40px; 
 
  /* <percentage> value relative to the containing block width */ 
  text-indent: 10%; 
 
  /* Keyword values */ 
  text-indent: 2em each-line; 
  text-indent: 2em hanging; 
  text-indent: 2em hanging each-line; 
```

_Примечание: в настоящее время поддержка ключевых слов `hanging` и `each-line` доступна только за флажком функций Experimental Web Platform_

### Дополнительная информация:

*   [MDN Doc для `text-indent`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-indent)
*   [Поддержка браузера для `text-indent`](http://caniuse.com/#feat=css-text-indent)