---
title: A Href Attribute
localeTitle: Атрибут Href
---
## Атрибут Href

`<a href>` относится к получателю, предоставленному ссылкой. Тег `a` (anchor) мертв без атрибута `<href>` . Иногда в вашем рабочем процессе вам не нужна прямая ссылка, иначе вы еще не узнаете ссылку. В этом случае полезно установить атрибут `href` в `"#"` чтобы создать мертвую ссылку. Атрибут `href` можно использовать для связи с локальными файлами или файлами в Интернете.

Например:

```html

<html> 
  <head> 
    <title>Href Attribute Example</title> 
  </head> 
  <body> 
    <h1>Href Attribute Example</h1> 
      <p> 
        <a href="https://www.freecodecamp.org/contribute/">The freeCodeCamp Contribution Page</a> shows you how and where you can contribute to freeCodeCamp's community and growth. 
      </p> 
    </h1> 
  </body> 
 </html> 
```

`<a href>` поддерживается всеми браузерами.

#### Дополнительные атрибуты:

`hreflang` : Указывает язык связанного ресурса. `target` : указывает контекст, в котором откроется связанный ресурс. `title` : Определяет название ссылки, которая отображается пользователю как подсказка.

### Примеры

```html

<a href="#">This is a dead link</a> 
 <a href="https://www.freecodecamp.org">This is a live link to freeCodeCamp</a> 
 <a href="https://html.com/attributes/a-href/">more with a href attribute</a> 
```

### Встроенные привязки

Также возможно установить привязку к определенному месту страницы. Чтобы сделать это, вы должны сначала поместить вкладку в местоположение на странице с тегом и необходимым атрибутом «имя» с любым описанием ключевого слова в нем, например:

```html

<a name="top"></a> 
```

Любое описание между тегами не требуется. После этого вы можете поместить ссылку, ведущую к этому якорю, в любой точке на той же странице. Для этого вы должны использовать тег с необходимым атрибутом «href» с символом № (резким) и описанием ключевого слова якоря, например:

```html

<a href="#top">Go to Top</a> 
```

### Ссылки на изображения

`<a href="#">` также может применяться к изображениям и другим элементам HTML.

### пример

```html

<a href="#"><img itemprop="image" style="height: 90px;" src="http://www.chatbot.chat/assets/images/header-bg_y.jpg" alt="picture">  </a> 
```

### пример

[![картина](http://www.chatbot.chat/assets/images/header-bg_y.jpg)](#)

### Еще несколько примеров href

```html

<base href="https://www.freecodecamp.org/a-href/">This gives a base url for all further urls on the page</a> 
 <link href="style.css">This is a live link to an external stylesheet</a> 

```