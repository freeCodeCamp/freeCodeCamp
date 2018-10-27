---
title: ID Selector
localeTitle: Селектор ID
---

## Селектор ID
CSS cелектор ID применяет стили к определенному элементу html. CSS cелектор ID должен соответствовать атрибуту ID HTML элемента.
В отличие от классов, которые могут применяться к нескольким элементам сайта, определенный ID может применяться только к одному элементу сайта.
CSS cелектор ID переопределит свойства CSS класса.
Чтобы выбрать элемент с определенным идентификатором, напишите символ хэша ( # ), за которым следует идентификатор элемента.

### Синтаксис
```css
#specified_id { /* стили */ }
```
Селектор ID можно комбинировать с другими типами селекторов для стилизации очень специфичного элемента.
```css
section#about:hover { color: blue; }

div.classname#specified_id { color: green; }
```

### Примечание об идентификаторах
Стоит избегать использование селектора ID при написании стилей, если это возможно. Поскольку он имеет высокую специфичность, и его можно переопределить, только если вы напишите стили инлайново или добавите стили в ```<style>```. Вес селектора ID переопределяет селекторы классов и селекторы типов.

Помните, что селектор ID должен соответствовать атрибуту ID элемента HTML.
```html
<div id="specified_id"><!-- content --></div>
```

### Спецефичность
Селекторы ID обладают высокой специфичностью, что затрудняет их переопределение. Классы имеют гораздо более низкую спецефичность и, как правило, являются предпочтительным способом стилизовать элементы, чтобы избежать проблем со спецефичностью. [Specificity on MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity)

#### Больше информации:
* [freeCodeCamp Challenge - Set the ID of an Element](https://www.freecodecamp.org/challenges/set-the-id-of-an-element)
* [freeCodeCamp Challenge - Use an ID Attribute to Style an Element](https://www.freecodecamp.org/challenges/use-an-id-attribute-to-style-an-element)
* [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/ID_selectors)
