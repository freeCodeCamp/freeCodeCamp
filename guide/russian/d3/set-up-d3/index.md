---
title: Set Up D3
localeTitle: Настроить D3
---
## Настройка HTML

Пока вы просто используете текстовый файл и веб-браузер. Вы начнете со статической страницы HTML. Затем вы добавите d3.js. Создайте папку с именами _проектов_ d3js _. Создайте HTML-файл в папке с именем project_ 1.html.

Начните с базовой HTML-страницы:

```html

<!DOCTYPE html> 
 <html> 
  <head> 
  </head> 
  <body> 
    <p>Hello!</p> 
  </body> 
 </html> 
```

Что отображается в браузере:

![](https://d1gg5jm9r4jrt6.cloudfront.net/project_1_browser_snapshot_600x198.png)

### Настройка D3.js

Чтобы получить главный файл D3.js JavaScript, перейдите на сайт D3.js. После первого абзаца на странице вы увидите раздел со ссылками на последнюю версию. Загрузите последнюю версию d3.v2.min.js. Сохраните этот файл в папке d3js\_projects.

Файл d3.v2.min.js сохраняется в той же папке, что и файл HTML, так что на нее можно легко ссылаться. Мы ссылаемся на файл JavaScript из главы HTML-файла. Наш обновленный HTML-файл теперь выглядит следующим образом:

`html <!DOCTYPE html> <html> <head> <script type="text/javascript" src="d3.v2.min.js"></script> </head> <body> <p>Hello!</p> </body> </html>`

Проверка исходного файла

Чтобы проверить нашу установку D3.js, мы открываем набор инструментов для проверки элементов. На вкладке Элемент Webkit Inspector мы открываем все элементы, чтобы мы могли видеть всю структуру HTML. Затем мы наводим на d3.vs.min.js src.

![](https://d1gg5jm9r4jrt6.cloudfront.net/d3.js.installation.check.png)

Когда мы нажимаем на ссылку, она выводит нас на вкладку источников. Это покажет сокращенный код D3.js.

![](https://d1gg5jm9r4jrt6.cloudfront.net/d3.js.source.check.png)

\### Тест установки консоли JavaScript

Последний тест будет проходить в консоли JavaScript. Этот тест говорит нам, правильно ли загружен D3.js для нашего использования в консоли JavaScript. В этом снимке найдите вкладку «Консоль» в Webkit Inspector:

![](https://d1gg5jm9r4jrt6.cloudfront.net/d3.js.installation.check.png)

Когда вы нажмете на вкладке, он покажет вам пустой экран, где вы можете ввести и оценить JavaScript.

![](https://d1gg5jm9r4jrt6.cloudfront.net/JavaScript_Console_600x170.png)

В консоли JavaScript введите следующее:

`javascript alert("hello");`

Это вызовет всплывающее предупреждение и скажет «Привет!». Вот как это выглядит:

![](https://d1gg5jm9r4jrt6.cloudfront.net/JavaScript_Consoler_Alert_600x335.png)

Теперь проверьте, правильно ли загружена D3.js. Введите нижний регистр «d3» в консоль, за которым следует период:

`javascript d3`

Если мы установили D3.js правильно, должно появиться следующее:

![](https://d1gg5jm9r4jrt6.cloudfront.net/d3.js.javascript.console_300x420.png)

Если все тесты пройдены, и вы смогли правильно загрузить D3.js, вы готовы начать работу.

\#### Дополнительная информация