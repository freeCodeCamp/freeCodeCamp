---
title: Href
localeTitle: Href
---
## Href

Справочник по гипертексту (HREF) - это атрибут HTML, который используется для указания адресата ссылки или Uniform Resource Locator (URL). Чаще всего вы увидите атрибут HREF в паре с привязным тегом `<a>` .

Атрибут HREF получает точное значение ссылки в зависимости от элемента, который его использует. Например, при использовании с тегом `<a>` , он ссылается на местоположение объекта express в виде URL-адреса. При использовании атрибута HREF с `<image>` атрибут HREF ссылается на URL-адрес изображения для рендеринга.

### Примеры:

Ссылка на домашнюю страницу Google:

\-> Текст «Посетить домашнюю страницу Google» действует как ссылка на главную страницу

```html

<a href="https://www.google.com">Visit Google's Homepage</a> 
```

Изображение как ссылка:

\-> Логотип Google, который ссылается на главную страницу Google

```html

<a href="https://www.google.com"> 
 <img border="0" alt="Google" src="https://www.google.com/logos/doodles/2015/googles-new-logo-5078286822539264.3-hp2x.gif" width="100" height="100"> 
```

Теги, использующие HREF:

```html

<a> 
 <area> 
 <base> 
 <cursor> 
 <discard> 
 <feImage> 
 <hatch> 
 <image> 
 <link> 
 <mesh> 
 <meshgradient> 
 <mpath> 
 <pattern> 
 <script> 
 <textPath> 
 <use> 
```

#### Дополнительная информация:

[WTF - это href в любом случае](https://tomayko.com/blog/2008/wtf-is-an-href-anyway) [MDN](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/href)