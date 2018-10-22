<table>
    <tr>
        <td> Read these guidelines in </td>
        <td><a href="/CONTRIBUTING.md"> English </a></td>
        <td><a href="/docs/chinese/CONTRIBUTING.md"> 中文 </a></td>
        <td><a href="/docs/russian/CONTRIBUTING.md"> русский </a></td>
        <td><a href="/docs/arabic/CONTRIBUTING.md"> عربى </a></td>
        <td><a href="/docs/spanish/CONTRIBUTING.md"> Español </a></td>
        <td><a href="/docs/portuguese/CONTRIBUTING.md"> Português </a></td>
    </tr>
</table>

# Как работать над этими задачами

### Изменение на GitHub

Каждое задание размещено в отдельном файле разметки. Это позволяет редактировать задания прямо из GitHub.

Вы можете редактировать даже не устанавливая что-либо локально на своем компьютере.

Как только вы найдёте на GitHub файл, который хотите редактировать, кликните иконку карандаша для того чтобы начать редактировать файл. Это автоматически создаст форк проекта, если у он не был создан ранее.

Вы также можете склонировать репозиторий и редактировать его локально на своем компьютере. Для помощи с этим вы можете прочесть о том [как внести свой вклад](/CONTRIBUTING.md).

### Шаблон Задания

Примерно так выглядит файл разметки содержащий шаблон задания.

````md
---
id: Unique identifier (alphanumerical, MongoDB _id)
title: Challenge Title
challengeType: 0
guideUrl: 'url of guide article'
videoUrl: 'url of video explaination'
---

## Description
<section id='description'>
A Description of the challenge and what is required to pass
</section>

## Instructions
<section id='instructions'>
Instructions about what exactly needs to be done.
</section>
## Tests
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

### Before Test
<div id='js-setup'>

```js
Test setup code.
```

</div>

</section>

### After Test
<div id='js-teardown'>

```js
Test tear down code.
```

</div>

</section>

## Solution
<section id='solution'>

```js
Challenge solution code.
```

</section>
````

### Полезные ссылки

Создание и редактирование заданий

1. [Challenge Style Guide](style-guide-for-curriculum-challenges.md) - как создавать и редактировать задания.

2. [Challenge types](https://github.com/freeCodeCamp/learn/blob/a5cb25704168aa37f59a582f0bb5a19b7bd89b46/utils/challengeTypes.js) - что такое перечисляемые типы (enum).

3. [Contributing to FreeCodeCamp - Writing ES6 Challenge Tests ](https://www.youtube.com/watch?v=iOdD84OSfAE#t=2h49m55s) - видео о том как [Ethan Arrowood](https://twitter.com/ArrowoodTech) вносит свой вклад в старую версию учебного плана.

