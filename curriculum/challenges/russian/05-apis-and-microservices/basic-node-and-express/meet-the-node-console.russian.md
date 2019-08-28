---
id: 587d7fb0367417b2b2512bed
title: Meet the Node console
challengeType: 2
forumTopicId: 301515
localeTitle: Встречайте консоль Node
---

## Description
<section id='description'>
В процессе разработки важно иметь возможность проверить, что происходит в вашем коде. Node - это просто среда JavaScript. Как и клиентский JavaScript, вы можете использовать консоль для отображения полезной отладочной информации. На вашем локальном компьютере вы увидите вывод консоли в терминале. На Glitch вы можете открыть логи в нижней части экрана. Вы можете переключать панель журнала с помощью кнопки «Журналы» (вверху слева под названием приложения). 
Для начала просто распечатай классический «Hello World» в консоли. Мы рекомендуем держать панель журнала открытой во время работы с этими проблемами. Читая журналы, вы можете знать природу возможных ошибок.
</section>

## Instructions
<section id='instructions'>
Измените файл <code>myApp.js</code> чтобы <code>myApp.js</code> «Hello World» на консоль.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>"Hello World"</code> should be in the console
    testString: getUserInput => $.get(getUserInput('url') + '/_api/hello-console').then(data => { assert.isTrue(data.passed, '"Hello World" is not in the server console'); }, xhr => { throw new Error(xhr.responseText); })

```

</section>
