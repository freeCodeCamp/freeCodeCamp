---
title: CSS Custom Properties
localeTitle: Пользовательские свойства CSS
---
## Пользовательские свойства CSS

Пользовательские свойства CSS также упоминаются как переменные CSS. По состоянию на октябрь 2018 года пользовательские свойства CSS по-прежнему являются экспериментальной технологией. Перед использованием этой функции в разработке рассмотрите [поддержку браузера](https://developer.mozilla.org/en-US/docs/Web/CSS/--*#Browser_compatibility) .

### Объявление пользовательских свойств

Внутри селектора пользовательские свойства объявляются с использованием двух дефис (-) и имени, за которым следует значение. Значение может быть простым, например, цветным (RGB, hexcode и т. Д.) Или размером (с использованием пикселей, em, rem и т. Д.), Или это может быть более сложным, как определение dropshadow. См. Примеры ниже.

```css
:root { 
  --firstVariable: red; 
  --headerSize: 16px; 
  --dropShadow: 1px 1px 2px 2px rgba(100,100,100,0.2); 
```

Объявление пользовательских свойств в селекторе `:root` делает эти свойства доступными по всему миру. Селектор `:root` можно считать таким же, как селектор `html` .

### Использование пользовательских свойств

Чтобы использовать настраиваемое свойство, используется функция `var()` , которая принимает один аргумент имени настраиваемого свойства. \`\` \`CSS h1 { font-size: var (- headerSize); }

.карта { box-shadow: var (- dropShadow); }
```
### Cascading Custom Properties 
 When custom properties are declared in the `:root` selector, those properties are globally available; any style rules can use the properties. If a custom property needs to be different for specific element, class, or id, a property of the same can be declared in that selector. The compiler will first look for a property name within the immediate enclosing selector, then move to the `:root`. 
```

CSS : root { --font-color: красный; }

h1 { --font-color: синий; }

h1 { font-color: var (- font-color); / \* синий \* / }

h2 { font-color: var (- font-color); / \* красный \* / } \`\` \`

#### Дополнительная информация:

Для получения дополнительной информации посетите:

*   [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)
*   [Рекомендательный документ кандидата W3C](https://www.w3.org/TR/css-variables/)
*   [Поддержка браузера](https://caniuse.com/#feat=css-variables)