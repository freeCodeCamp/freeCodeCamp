---
id: bd7168d8c242eddfaeb5bd13
title: Visualize Data with a Bar Chart
isRequired: true
challengeType: 3
forumTopicId: 301464
localeTitle: Визуализация данных с помощью диаграммы
---

## Description
<section id='description'>
<strong>Цель:</strong> создать приложение <a href="https://codepen.io" target="_blank">CodePen.io</a> , функционально подобное этому: <a href="https://codepen.io/freeCodeCamp/full/GrZVaM" target="_blank">https://codepen.io/freeCodeCamp/full/GrZVaM</a> . Выполните приведенные ниже <a href="https://en.wikipedia.org/wiki/User_story" target="_blank">истории пользователей</a> и пройдите все тесты для выполнения задания. Создайте для приложения свой личный стиль. Вы можете использовать HTML, JavaScript, CSS и D3 svg-based visualization library. Тесты требуют создания осей с использованием свойства оси D3, которое автоматически генерирует тики вдоль оси. Эти тики необходимы для прохождения тестов D3, потому что их позиции используются для определения выравнивания графических элементов. Вы найдете информацию о генерации осей на <a href="https://github.com/d3/d3/blob/master/API.md#axes-d3-axis" target="_blank">странице https://github.com/d3/d3/blob/master/API.md#axes-d3-axis</a> . Обязательные (не виртуальные) элементы DOM запрашиваются в момент каждого теста. Если вы используете фреймворк для создания интерфейса (например, Vue), результаты теста могут быть неточными для динамического содержимого. Мы надеемся, что в конечном итоге это исправим, но эти рамки в настоящее время не поддерживаются для проектов D3. <strong>User Story # 1:</strong> Ваша диаграмма должна иметь заголовок с соответствующим <code>id=&quot;title&quot;</code> . <strong>История пользователя # 2:</strong> Ваша диаграмма должна иметь <code>g</code> элемент оси х с соответствующим <code>id=&quot;x-axis&quot;</code> . <strong>User Story # 3:</strong> Ваша диаграмма должна иметь ось y элемента <code>g</code> с соответствующим <code>id=&quot;y-axis&quot;</code> . <strong>User Story # 4:</strong> Обе оси должны содержать несколько меток ярлыков, каждый из которых имеет соответствующий <code>class=&quot;tick&quot;</code> . <strong>User Story # 5:</strong> Ваша диаграмма должна иметь <code>rect</code> элемент для каждой точки данных с соответствующим <code>class=&quot;bar&quot;</code> отображающим данные. <strong>User Story # 6: В</strong> каждом баре должны быть <code>data-date</code> и <code>data-gdp</code> содержащие значения даты и ВВП. <strong>User Story # 7:</strong> свойства <code>data-date</code> бара должны соответствовать порядку предоставленных данных. <strong>User Story # 8:</strong> Свойства <code>data-gdp</code> элементов бара должны соответствовать порядку предоставленных данных. <strong>User Story # 9:</strong> Высота каждого элемента бара должна точно представлять соответствующий ВВП. <strong>User Story # 10:</strong> Атрибут <code>data-date</code> и его соответствующий элемент бара должны совпадать с соответствующим значением по оси x. <strong>User Story # 11:</strong> атрибут <code>data-gdp</code> и его соответствующий элемент бара должны совпадать с соответствующим значением по оси y. <strong>User Story # 12:</strong> Я могу навести курсор мыши на область и увидеть всплывающую подсказку с соответствующей <code>id=&quot;tooltip&quot;</code> которая отображает больше информации об этой области. <strong>User Story # 13:</strong> Моя подсказка должна иметь свойство <code>data-date</code> , соответствующее <code>data-date</code> данных активной области. Вот набор данных, который вам нужно будет выполнить для этого проекта: <code>https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json</code> Вы можете создать свой проект, <a href="https://codepen.io/freeCodeCamp/pen/MJjpwO" target="_blank">на CodePen</a> . Или вы можете использовать эту ссылку CDN для запуска тестов в любой среде, которая вам нравится: <code>https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js</code> . После того, как вы закончите, отправьте URL-адрес вашего рабочего проекта со всеми результатами тестов. Не забудьте использовать метод <a href="https://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck-coding/19514" target="_blank">Read-Search-Ask,</a> если вы застряли.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests: []
```

</section>
