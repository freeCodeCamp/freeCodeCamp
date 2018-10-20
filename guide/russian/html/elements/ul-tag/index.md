---
title: Ul Tag
localeTitle: Ul Tag
---
## Ul Tag

Неупорядоченный список `<ul>` - это тег, используемый для создания маркированных списков. Чтобы создать список внутри `<ul>` , используйте `<li>` . В списки стилей перейдите в списки стилей CSS и внесите изменения.

`<ul>` может быть вложен в другие списки и совместим с другими тегами, такими как `<a>` , `<p>` , `<button>` , тегами стиля html ( `<strong>` , `<em>` и т. Д.).

### пример

Чтобы создать следующее:

```html

 <ul> 
    <li>This is the bulleted list #1</li> 
    <li>This is the bulleted list #2</li> 
    <li>This is the bulleted list #3</li> 
      <li> 
        <ul> 
          <li>This is the bulleted nested list #1</li> 
        </ul> 
      </li> 
  </ul> 
```

Вы бы использовали этот HTML-код: `html <html> <head> <title></title> </head> <body> <ul> <li>This is the bulleted list #1</li> <li>This is the bulleted list #2</li> <li>This is the bulleted list #3</li> <li> <ul> <li>This is the bulleted nested list #1</li> </ul> </li> </ul> </body> </html>`

## Другие источники

*   [Упорядоченный список `<ol>`](https://github.com/freeCodeCamp/guides/blob/master/src/pages/html/elements/ol-tag/index.md)