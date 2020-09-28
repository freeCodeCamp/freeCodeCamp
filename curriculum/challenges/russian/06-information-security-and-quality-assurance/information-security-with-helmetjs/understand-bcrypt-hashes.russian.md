---
id: 58a25bcef9fc0f352b528e7c
title: Understand BCrypt Hashes
challengeType: 2
forumTopicId: 301586
localeTitle: Понимание
---

## Description
<section id='description'>
Напомним, что этот проект строится на следующем стартовом проекте <a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-bcrypt/">Glitch</a> или клонируется из <a href="https://github.com/freeCodeCamp/boilerplate-bcrypt/">GitHub</a> . Хэши BCrypt очень надежны. Хэш - это в основном отпечаток исходных данных - всегда уникальный. Это достигается путем подачи исходных данных в алгоритм и возврата результата фиксированной длины. Чтобы еще больше усложнить этот процесс и сделать его более безопасным, вы также можете <em>солить</em> свой хэш. Соление вашего хэша включает в себя добавление случайных данных в исходные данные до процесса хэширования, что еще более усложняет процесс хэширования. Хэши BCrypt всегда будут выглядеть как <code>$2a$13$ZyprE5MRw2Q3WpNOGZWGbeG7ADUre1Q8QO.uUUtcbqloU0yvzavOm</code> который имеет структуру. Первый маленький бит данных <code>$2a</code> определяет, какой хэш-алгоритм использовался. Следующая часть <code>$13</code> определяет <em>стоимость</em> . Стоимость - это то, сколько энергии требуется для вычисления хэша. Он находится в логарифмическом масштабе 2^стоимости и определяет, сколько раз данные передаются через алгоритм хэширования. Например, по цене 10 вы можете хэш-код на 10 паролей на среднем компьютере, однако по цене 15 требуется 3 секунды за хэш ... и взять его дальше, по цене 31 требуется несколько дней для завершения хэша. В настоящее время стоимость 12 считается очень безопасной. Последняя часть вашего хэша <code>$ZyprE5MRw2Q3WpNOGZWGbeG7ADUre1Q8QO.uUUtcbqloU0yvzavOm</code> , выглядит как 1 большая строка чисел, периодов и букв, но на самом деле это две отдельные части информации. Первые 22 символа - соль в обычном тексте, а остальные - хэшированный пароль! <hr> Чтобы начать использовать BCrypt, добавьте его как зависимость в свой проект и потребуйте его как «bcrypt» на вашем сервере. Представьте свою страницу, когда вы думаете, что у вас все в порядке.
</section>

## Instructions
<section id='instructions'>
To begin using BCrypt, add it as a dependency in your project and require it as 'bcrypt' in your server.
Submit your page when you think you've got it right.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: BCrypt is a dependency
    testString: getUserInput => $.get(getUserInput('url')+ '/_api/package.json').then(data => { var packJson = JSON.parse(data); assert.property(packJson.dependencies, 'bcrypt', 'Your project should list "bcrypt" as a dependency'); }, xhr => { throw new Error(xhr.statusText); })
  - text: BCrypt has been properly required
    testString: getUserInput => $.get(getUserInput('url')+ '/_api/server.js').then(data => {assert.match(data, /bcrypt.*=.*require.*('|")bcrypt('|")/gi, 'You should correctly require and instantiate socket.io as io.');}, xhr => { throw new Error(xhr.statusText); })

```

</section>
