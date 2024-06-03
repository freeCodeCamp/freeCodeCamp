---
id: 587d7dbc367417b2b2512bae
title: Створіть драм машину
challengeType: 3
forumTopicId: 301370
dashedName: build-a-drum-machine
---

# --description--
**Примітка:** **React 18 містить відомі несумісності з тестами цього проєкту (див. [проблему](https://github.com/freeCodeCamp/freeCodeCamp/issues/45922))**

**Мета:** створити застосунок, функціонально схожий до <a href="https://drum-machine.freecodecamp.rocks/" target="_blank" rel="noopener noreferrer nofollow">https://drum-machine.freecodecamp.rocks/</a>.

Виконайте історію користувача та пройдіть тести. Використовуйте необхідні вам бібліотеки або API. Оформте за власним стилем.

Для виконання цього проєкту можна використати різне поєднання HTML, JavaScript, CSS, Bootstrap, SASS, React, Redux та jQuery. Потрібно використати фронтенд фреймворк (наприклад, React), оскільки цей розділ стосується їх вивчення. Ми не рекомендуємо використовувати інші технології та ресурси, що не були вказані вище, але ви можете застосовувати їх на власний розсуд. Ми розглядаємо використання інших фронтенд фреймворків, серед яких Angular та Vue, але наразі вони не підтримуються. Ми візьмемо до уваги і спробуємо виправити всі звіти, що використовують запропонований технологічний стек у цьому проєкті. Щасливого програмування!

**Історія користувача №1:** я бачу внутрішній контейнер з відповідним `id="drum-machine"`, який містить всі інші елементи.

**Історія користувача №2:** я бачу елемент з відповідним `id="display"` в межах `#drum-machine`.

**Історія користувача №3:** я бачу 9 активних драм падів в межах `#drum-machine`, кожен з назвою класу `drum-pad`, унікальним id, що описує звук паду, та внутрішнім текстом, що відповідає одному з ключів на клавіатурі: `Q`, `W`, `E`, `A`, `S`, `D`, `Z`, `X`, `C`. Драм пади ПОВИННІ бути в цьому порядку.

**Історія користувача №4:** в межах кожного `.drum-pad` існує HTML5-елемент `audio`, який має атрибут `src`, що вказує на аудіозапис, назву класу `clip` та id, що відповідає внутрішньому тексту батьківського елемента `.drum-pad` (тобто `id="Q"`, `id="W"`, `id="E"` тощо).

**Історія користувача №5:** якщо натиснути елемент `.drum-pad`, то відтвориться аудіозапис, збережений в його дочірньому елементі `audio`.

**Історія користувача №6:** якщо натиснути ключ, пов’язаний з кожним елементом `.drum-pad`, то відтвориться аудіозапис, збережений в його дочірньому елементі `audio` (тобто, якщо натиснути ключ `Q`, то відтвориться драм пад, який містить рядок `Q`; якщо натиснути ключ `W`, то відтвориться драм пад, який містить рядок `W` тощо).

**Історія користувача №7:** якщо натиснути `.drum-pad`, то відтвориться рядок, який описує відповідний аудіозапис як внутрішній текст елемента `#display` (кожен рядок має бути унікальним).

Ось декілька аудіозаписів, які ви можете використати для своєї драм машини:

- [Heater 1](https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3)
- [Heater 2](https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3)
- [Heater 3](https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3)
- [Heater 4](https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3)
- [Clap](https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3)
- [Open-HH](https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3)
- [Kick-n'-Hat](https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3)
- [Kick](https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3)
- [Closed-HH](https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3)

Ви можете створити свій проєкт, <a href='https://codepen.io/pen?template=MJjpwO' target='_blank' rel="noopener noreferrer nofollow">використавши цей шаблон CodePen</a> та натиснувши `Save`. Або ж ви можете скористатися цим посиланням CDN, щоб виконати тести в будь-якому середовищі: `https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js`

Як тільки закінчите, надайте посилання на свій проєкт з усіма пройденими тестами.

# --solutions--

```js
// solution required
```
