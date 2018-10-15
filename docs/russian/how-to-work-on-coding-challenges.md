# Как работать с задачами по кодированию (code challenge) 

### Изменение на github

Каждая задача сохранена в своем собственном markdown файле. Это позволяет легко редактировать задачи прямо из Github.

Вы можете вносить изменения без запуска чего-либо на локальной системе.

После того как Вы нашли файл, который Вы хотите изменить в интерфейсе GutHub, нажмите иконку с карандашом что б начать редактирование файла. Это автоматически создаст форк проэкта, если это не было сделано до этого. 

Так же Вы можете клонировать этот проект и редактировать его локально на Вашем компьютере. Для помощи с этим, прочитайте 
[contributing guide](/CONTRIBUTING.md).

### Шаблон задачи

Вот шаблон того как выглядит markdown файл задачи.

````md
---
id: Уникальный идентификатор (alphanumerical, MongoDB _id)
title: Название задачи
challengeType: 0
guideUrl: 'УРЛ статьи'
videoUrl: 'УРЛ видео с объяснением'
---

## Описание
<section id='description'>
Описание задачи и что требуется что б ее решить
</section>

## Инструкции
<section id='instructions'>
Инструкции о том, что именно нужно сделать
</section>
## Тесты
<section id='tests'>

``` yml
- text: Should return "foo".
  testString: 'A stringified function using Chai asserts'
```

</section>

<div id='js-seed'>

```js
Code desplayed in the editor by default.
```

</div>

### До теста
<div id='js-setup'>

```js
Test setup code.
```

</div>

</section>

### После теста
<div id='js-teardown'>

```js
Test tear down code.
```

</div>

</section>

## Решение
<section id='solution'>

```js
Challenge solution code.
```

</section>
````

### Полезные ссылки

Создание и редактирование задач:

1. [Challenge Style Guide](style-guide-for-curriculum-challenges.md) - как создавать и форматировать задачи

2. [Challenge types](https://github.com/freeCodeCamp/learn/blob/a5cb25704168aa37f59a582f0bb5a19b7bd89b46/utils/challengeTypes.js) - что означают числовые типы задач (enum).

3. [Contributing to FreeCodeCamp - Writing ES6 Challenge Tests ](https://www.youtube.com/watch?v=iOdD84OSfAE#t=2h49m55s) - видео от [Ethan Arrowood](https://twitter.com/ArrowoodTech) о том как он делает вклад в старую версию расписания
