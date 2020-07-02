---
id: bd7178d8c242eddfaeb5bd13
title: Visualize Data with a Scatterplot Graph
isRequired: true
challengeType: 3
forumTopicId: 301467
localeTitle: Визуализировать данные с помощью диаграммы Scatterplot
---

## Description
<section id='description'>
<strong>Цель:</strong> создать приложение <a href="https://codepen.io" target="_blank">CodePen.io</a> , функционально похожее на это: <a href="https://codepen.io/freeCodeCamp/full/bgpXyK" target="_blank">https://codepen.io/freeCodeCamp/full/bgpXyK</a> . Выполните приведенные ниже <a href="https://en.wikipedia.org/wiki/User_story" target="_blank">истории пользователей</a> и получите все тесты для прохождения. Дайте ему свой личный стиль. Вы можете использовать HTML, JavaScript, CSS и D3 svg-based visualization library. Тесты требуют создания осей с использованием свойства оси D3, которое автоматически генерирует тики вдоль оси. Эти тики необходимы для прохождения тестов D3, потому что их позиции используются для определения выравнивания графических элементов. Вы найдете информацию о генерации осей на <a href="https://github.com/d3/d3/blob/master/API.md#axes-d3-axis" target="_blank">странице https://github.com/d3/d3/blob/master/API.md#axes-d3-axis</a> . Обязательные (не виртуальные) элементы DOM запрашиваются в момент каждого теста. Если вы используете фреймворк интерфейса (например, Vue), результаты теста могут быть неточными для динамического содержимого. Мы надеемся, что в конечном итоге их разместим, но эти рамки в настоящее время не поддерживаются для проектов D3. <strong>User Story # 1:</strong> Я вижу элемент заголовка, который имеет соответствующий <code>id=&quot;title&quot;</code> . <strong>User Story # 2:</strong> Я вижу ось x, которая имеет соответствующий <code>id=&quot;x-axis&quot;</code> . <strong>User Story # 3:</strong> Я вижу ось y, которая имеет соответствующий <code>id=&quot;y-axis&quot;</code> . <strong>User Story # 4:</strong> Я вижу точки, каждая из которых имеет класс <code>dot</code> , которые представляют собой данные, которые отображаются. <strong>User Story # 5:</strong> Каждая точка должна иметь свойства <code>data-xvalue</code> и <code>data-yvalue</code> содержащие их соответствующие значения x и y. <strong>User Story # 6:</strong> Значение <code>data-xvalue</code> <code>data-yvalue</code> и значение <code>data-xvalue</code> <code>data-yvalue</code> каждой точки должны находиться в пределах диапазона фактических данных и в правильном формате данных. Для <code>data-xvalue</code> целые числа (полные годы) или объекты Date приемлемы для оценки теста. Для <code>data-yvalue</code> (минут) используйте объекты Date. <strong>User Story # 7:</strong> Значение <code>data-xvalue</code> и соответствующая точка должны совпадать с соответствующей точкой / значением по оси x. <strong>User Story # 8:</strong> Значение <code>data-yvalue</code> и соответствующая точка должны совпадать с соответствующей точкой / значением по оси y. <strong>User Story # 9:</strong> Я вижу несколько меток ярлыков по оси Y с временным форматом <code>%M:%S</code> <strong>User Story # 10:</strong> Я вижу несколько меток ярлыков по оси x, которые показывают год. <strong>User Story # 11:</strong> Я вижу, что диапазон меток оси X находится в пределах диапазона фактических данных по оси x. <strong>User Story # 12:</strong> Я вижу, что диапазон меток оси Y находится в пределах диапазона фактических данных оси Y. <strong>User Story # 13:</strong> Я вижу легенду, содержащую описательный текст с <code>id=&quot;legend&quot;</code> . <strong>User Story # 14:</strong> Я могу навести курсор мыши на область и увидеть всплывающую подсказку с соответствующей <code>id=&quot;tooltip&quot;</code> которая отображает больше информации о области. <strong>User Story # 15:</strong> Моя подсказка должна иметь свойство <code>data-year</code> которое соответствует <code>data-xvalue</code> активной области. Вот набор данных, который вам нужно будет выполнить для этого проекта: <code>https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/cyclist-data.json</code> Вы можете создать свой проект, <a href="https://codepen.io/freeCodeCamp/pen/MJjpwO" target="_blank">нарисуя это перо CodePen</a> . Или вы можете использовать эту ссылку CDN для запуска тестов в любой среде: <code>https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js</code> Как только вы закончите, отправьте URL-адрес своей рабочей проект с прохождением всех его тестов. Не забудьте использовать метод <a href="https://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck-coding/19514" target="_blank">Read-Search-Ask,</a> если вы застряли.
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
