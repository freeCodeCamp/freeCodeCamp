---
id: 5895f70bf9fc0f352b528e64
title: Use a Template Engine's Powers
challengeType: 2
forumTopicId: 301567
localeTitle: Использование мощностей шаблонных движков
---

## Description
<section id='description'>
Напомним, что этот проект строится на следующем стартовом проекте <a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-advancednode/">Glitch</a> или клонируется из <a href="https://github.com/freeCodeCamp/boilerplate-advancednode/">GitHub</a> . Одна из величайших особенностей использования механизма шаблонов - это возможность передавать переменные от сервера к файлу шаблона перед его переносом в HTML. В вашем файле Pug вы собираетесь использовать переменную, ссылаясь на имя переменной как <code>#{variable_name}</code> строке с другим текстом на элементе или используя равную сторону элемента без пробела, такого как <code>p= variable_name</code> которое устанавливает это p элементов текст, равный переменной. Мы настоятельно рекомендуем посмотреть синтаксис и структуру Pug <a href="https://github.com/pugjs/pug">здесь,</a> на их GITUBES README. Мопс - это использование пробелов и вкладок для отображения вложенных элементов и сокращения количества кода, необходимого для создания красивого сайта. Если посмотреть на наш файл-мопс «index.pug», включенный в ваш проект, мы использовали <em>заголовок</em> и <em>сообщение</em> переменных. Чтобы передать их только с нашего сервера, вам нужно будет добавить объект в качестве второго аргумента в ваш <em>res.render</em> с переменными и их значение. Например, передайте этот объект вместе с установкой переменных для вашего индексного представления: <code>{title: &#39;Hello&#39;, message: &#39;Please login&#39;</code> Он должен выглядеть так: <code>res.render(process.cwd() + &#39;/views/pug/index&#39;, {title: &#39;Hello&#39;, message: &#39;Please login&#39;});</code> Обновите свою страницу, и вы увидите те значения, которые отображаются в вашем представлении, в правильном месте, как указано в файле index.pug! Представьте свою страницу, когда вы думаете, что у вас все в порядке.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Pug render variables correct
    testString: getUserInput => $.get(getUserInput('url')+ '/') .then(data => { assert.match(data, /pug-variable("|')>Please login/gi, 'Your projects home page should now be rendered by pug with the projects .pug file unaltered'); }, xhr => { throw new Error(xhr.statusText); })

```

</section>
