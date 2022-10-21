---
id: 587d7fa6367417b2b2512bc0
title: Візуалізуйте дані за допомогою діаграми Treemap
challengeType: 3
forumTopicId: 301468
dashedName: visualize-data-with-a-treemap-diagram
---

# --description--

**Мета:** створити застосунок, функціонально схожий до цього: <a href="https://treemap-diagram.freecodecamp.rocks" target="_blank" rel="noopener noreferrer nofollow">https://treemap-diagram.freecodecamp.rocks</a>.

Виконайте історію користувача та пройдіть тести. Використовуйте необхідні вам бібліотеки або API. Оформте за власним стилем.

Ви можете скористатися HTML, JavaScript, CSS та бібліотекою візуалізації, що базується на D3 svg. Для тестів потрібно згенерувати осі, використовуючи властивість осі D3, що автоматично створює відмітки вздовж осі. Ці відмітки потрібні для проходження D3 тестів, тому що їх положення використовуються для визначення вирівнювання зображених елементів. Ви можете знайти інформацію про генерування осей тут <https://github.com/d3/d3/blob/master/API.md#axes-d3-axis>. Необхідні (невіртуальні) DOM-елементи запитуються під час кожного тесту. Якщи ви використовуєте фронтенд-фреймворк (як-от, наприклад, Vue), результати тестів можуть бути неточними для динамічного контенту. Ми сподіваємося скоро їх налагодити, однак наразі ці фреймворки не підтримуються для проєктів D3.

**User Story #1:** Моя діаграма Treemap повинна мати назву з відповідним `id="title"`.

**User Story #2:** Моя діаграма Treemap повинна мати опис з відповідним `id="description"`.

**User Story #3:** Моя діаграма Treemap повинна мати елементи `rect` з відповідним `class="tile"`, що відображає дані.

**User Story #4:** Потрібно використати щонайменше 2 різних кольори заливки для комірок.

**User Story #5:** Кожна комірка повинна мати властивості `data-name`, `data-category` та `data-value`, що міститимуть їх відповідні `name`, `category` та `value`.

**User Story #6:** Область кожної комірки повинна відповідати обсягу `data-value`: комірки з більшою `data-value` повинні мати більшу площу.

**User Story #7:** Моя діаграма Treemap повинна мати легенду з відповідним `id="legend"`.

**User Story #8:** Моя легенда повинна мати елементи `rect` з відповідним `class="legend-item"`.

**User Story #9:** Для елементів `rect` у легенді треба використати принаймні 2 різних кольори заливки.

**User Story #10:** Я можу навести курсор на область і побачити спливаючу підказку з відповідним `id="tooltip"`, що відображає більше інформації про область.

**User Story #11:** Моя спливаюча підказка повинна мати показник `data-value`, що відповідає `data-value` активної області.

Для цього проєкту ви можете скористатися будь-яким із цих наборів даних:

-   **Kickstarter Pledges:** `https://cdn.freecodecamp.org/testable-projects-fcc/data/tree_map/kickstarter-funding-data.json`
-   **Movie Sales:** `https://cdn.freecodecamp.org/testable-projects-fcc/data/tree_map/movie-data.json`
-   **Video Game Sales:** `https://cdn.freecodecamp.org/testable-projects-fcc/data/tree_map/video-game-sales-data.json`

Ви можете створити свій проєкт, <a href='https://codepen.io/pen?template=MJjpwO' target="_blank" rel="noopener noreferrer nofollow">використовуючи цей шаблон CodePen</a> і натиснувши `Save`. Або ж ви можете скористатися цим CDN-посиланням, щоб провести тести в будь-якому середовищі: `https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js`

Щойно впораєтеся, прикріпіть URL-адресу із пройденими тестами до проєкту, над яким працюєте.

# --solutions--

```js
// solution required
```
