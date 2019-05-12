---
title: A Target Attribute
localeTitle: Атрибут target
---
## Атрибут target

Атрибут `<a target>` указывает, где необходимо открыть связанный документ в теге `a` (ссылка).

#### Примеры:

Атрибут target со значением «\_blank» открывает связанный документ в новом окне или вкладке.

```html

    <a href="https://www.freecodecamp.org" target="_blank">freeCodeCamp</a> 
```

Атрибут target со значением «\_self» открывает связанный документ в том же фрейме, в котором был нажат (это значение по умолчанию и обычно его не нужно указывать).

```html

    <a href="https://www.freecodecamp.org" target="_self">freeCodeCamp</a> 
```

```html

    <a href="https://www.freecodecamp.org">freeCodeCamp</a> 
```

Атрибут target со значением «\_parent» открывает связанный документ в родительском фрейме.

```html

    <a href="https://www.freecodecamp.org" target="_parent">freeCodeCamp</a> 
```

Атрибут target со значением «\_top» открывает связанный документ во всем окне.

```html

    <a href="https://www.freecodecamp.org" target="_top">freeCodeCamp</a> 
```

Атрибут target со значением _«framename»_ Открывает связанный документ в указанном именованном фрейме.

```html

    <a href="https://www.freecodecamp.org" target="framename">freeCodeCamp</a> 
```

#### Дополнительная информация:

Атрибут target: [w3schools](https://www.w3schools.com/tags/att_a_target.asp)
