---
id: 5895f700f9fc0f352b528e63
title: Set up a Template Engine
challengeType: 2
forumTopicId: 301564
localeTitle: Настройка механизма шаблонов
---

## Description
<section id='description'>
Напомним, что этот проект строится на следующем стартовом проекте <a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-advancednode/">Glitch</a> или клонируется из <a href="https://github.com/freeCodeCamp/boilerplate-advancednode/">GitHub</a> . Механизм шаблонов позволяет использовать статические файлы шаблонов (например, написанные в <em>Pug</em> ) в вашем приложении. Во время выполнения механизм шаблонов заменяет переменные в файле шаблона фактическими значениями, которые могут быть предоставлены вашим сервером, и преобразует шаблон в статический HTML-файл, который затем отправляется клиенту. Такой подход упрощает разработку HTML-страницы и позволяет отображать переменные на странице без необходимости вызова API-клиента от клиента. Чтобы настроить <em>Pug</em> для использования в вашем проекте, вам нужно будет добавить его как зависимость сначала в package.json. <code>&quot;pug&quot;: &quot;^0.1.0&quot;</code> Теперь, чтобы сказать Node / Express использовать механизм шаблонов, вам нужно будет сказать вашему экспресс- <b>приложению,</b> чтобы <b>установить</b> «мопс» в качестве «механизма просмотра». <code>app.set(&#39;view engine&#39;, &#39;pug&#39;)</code> Наконец, вы должны изменить свой ответ на запрос маршрута указателя на <code>res.render</code> путь к представлению view <em>/ pug / index.pug</em> . Если все пойдет так, как планировалось, вы должны обновить домашнюю страницу своих приложений и увидеть небольшое сообщение о том, что вы успешно разорвали мопс из нашего файла Pug! Представьте свою страницу, когда вы думаете, что у вас все в порядке.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Pug is a dependency
    testString: getUserInput => $.get(getUserInput('url')+ '/_api/package.json') .then(data => { var packJson = JSON.parse(data); assert.property(packJson.dependencies, 'pug', 'Your project should list "pug" as a dependency'); }, xhr => { throw new Error(xhr.statusText); })
  - text: View engine is Pug
    testString: getUserInput => $.get(getUserInput('url')+ '/_api/server.js') .then(data => { assert.match(data, /('|")view engine('|"),( |)('|")pug('|")/gi, 'Your project should set Pug as a view engine'); }, xhr => { throw new Error(xhr.statusText); })
  - text: Pug is working
    testString: getUserInput => $.get(getUserInput('url')+ '/') .then(data => { assert.match(data, /pug-success-message/gi, 'Your projects home page should now be rendered by pug with the projects .pug file unaltered'); }, xhr => { throw new Error(xhr.statusText); })

```

</section>
