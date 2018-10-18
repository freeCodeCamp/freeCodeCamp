---
title: Where to Get Fonts
localeTitle: Где искать шрифты
---
## Где искать шрифты

Интернет-сервисы шрифтов, такие как Google Fonts или Font Squirrel, обеспечивают простой способ использования разных шрифтов на вашем сайте без необходимости беспокоиться о том, будет ли у человека, просматривающего ваш сайт, шрифт, доступный в их системе.

### Загруженные шрифты

Сайты, такие как Font Squirrel, позволяют загружать файлы шрифтов, которые вы выбрали. Как только это будет сделано, вы должны загрузить их на сервер, на котором размещен ваш сайт. Чтобы использовать их, вам необходимо объявить их в таблице стилей CSS, что означает, что ваш CSS попросит браузер пользователя отобразить его. Объявить шрифт обычно делается с помощью `@font-face` поверх таблицы стилей CSS.

```css
@font-face { 
  font-family: "My Super Awesome Open Sans Font"; /* name that you will use later to apply the font */ 
  src: url("/fontfolder/open-sans.woff"); /* path to the file */ 
 } 
 body { 
  font-family: "My Super Awesome Open Sans Font"; 
 } 
```

Обратите внимание, что вы также можете указать формат шрифта в соответствии с совместимостью браузера, как показано ниже.

```css
@font-face { 
 font-family: "My Super Awesome Open Sans Font"; 
 src: url("/fontfolder/open-sans.woff"); format("woff"), 
 } 
```

### Google Fonts

С помощью Google Fonts вам не нужно загружать файлы шрифтов на свой сайт, вам просто нужно поместить определенную ссылку в `head` вашего сайта.

Чтобы использовать Google Fonts, просмотрите [сайт,](https://fonts.google.com/) чтобы найти шрифт, который лучше всего подходит для вашего проекта. После того, как вы выбрали, щелкните знак плюса (+) рядом с шрифтом. В нижней части экрана появится панель. Нажмите здесь. Затем вам будут предоставлены несколько строк кода. Скопируйте и вставьте строку HTML в голову HTML-файла выше существующего  элемент. Затем возьмите CSS и используйте его, когда это необходимо, в таблице стилей.

```html

<html> 
  <head> 
  <link href="https://fonts.googleapis.com/css?family=Inconsolata" rel="stylesheet"> 
  </head> 
  <body> 
  Some text. 
  </body> 
 </html> 
```

```css
body{ 
  font-family: "Inconsolata", monospace; 
 } 
```

Все готово! У вас есть новые шрифты для вашего сайта.

##### Дополнительные ресурсы:

*   [Google Fonts](http://fonts.google.com)
*   [FontSpace](http://www.fontspace.com)
*   [Font Squirrel](http://fontsquirrel.com)
*   [DaFont](http://www.dafont.com)
*   [1001 бесплатные шрифты](http://www.1001freefonts.com)

#### Дополнительная информация:

*   [Обзор веб-шрифтов от Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text/Web_fonts)