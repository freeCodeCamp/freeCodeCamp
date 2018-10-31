---
title: Getting Started with Back End Projects
localeTitle: Начало работы с проектами Back End
---
Учебный план, посвященный первому проекту Back End, не является исчерпывающим. Вот несколько общих ресурсов, которые другие туристы нашли полезными.

*   Введение в Yeoman - много полезных советов и трюков для настройки Yoman Angular Fullstack
*   [Угловой генератор](https://github.com/DaftMonk/generator-angular-fullstack#generators) - генератор, используемый Yeoman, вы можете найти синтаксис и какие файлы он создает

## API-интерфейсы

*   API для диаграмм фондового рынка: [https://www.quandl.com/help/api](https://www.quandl.com/help/api)

## Учебники и видеоролики MEAN Stack

*   5 Part Series по настройке стека MEAN  
    [https://www.youtube.com/watch?v=kHV7gOHvNdk](https://www.youtube.com/watch?v=kHV7gOHvNdk)
*   Учебник MEAN, который создает простой твист Twitter  
    [https://channel9.msdn.com/Series/MEAN-Stack-Jump-Start](https://channel9.msdn.com/Series/MEAN-Stack-Jump-Start)
*   Клементина - это стянутый стежок MEAN, отлично подходящий для изучения основ.  
    [https://johnstonbl01.github.io/clementinejs/tutorials/tutorial-beginner.html](https://johnstonbl01.github.io/clementinejs/tutorials/tutorial-beginner.html)
*   Аутентификация с паспортом для стека MEAN:  
    [https://vickev.com/#!/article/authentication-in-single-page-applications-node-js-passportjs-angularjs](https://vickev.com/#!/article/authentication-in-single-page-applications-node-js-passportjs-angularjs)
*   Удивительный список ресурсов для изучения стека MEAN:  
    [https://github.com/ericdouglas/MEAN-Learning](https://github.com/ericdouglas/MEAN-Learning)

## Учебники Scotch IO

*   [https://scotch.io/tutorials/setting-up-a-mean-stack-single-page-application](https://scotch.io/tutorials/setting-up-a-mean-stack-single-page-application)
*   [https://scotch.io/tutorials/node-and-angular-to-do-app-application-organization-and-structure](https://scotch.io/tutorials/node-and-angular-to-do-app-application-organization-and-structure)

## Узел / Экспресс

*   [Отладка онлайн для Node.js / Express](http://stackoverflow.com/a/16512303/1420506)

## Облако 9 трюков

### Ускорить перезагрузку браузера

1.  Откройте файл gruntfile.js и отредактируйте оба экземпляра `livereload: true` to `livereload: false` .
2.  Откройте сервер / config / express.js и закомментируйте строку `app.use(require('connect-livereload')());`