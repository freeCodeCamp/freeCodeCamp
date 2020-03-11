<!-- do not translate this -->
| [Read these guidelines in other languages](/docs/i18n-languages) |
|-|
<!-- do not translate this -->

# Як відкрити Pull Request

## Як придумати хорошу назву для Pull Request:

Відкриваючи запит на виклик (Pull Request - PR), використовуйте наступну таблицю сфер, щоб вирішити, як назвати PR в такому форматі:
`fix/feat/chore/refactor/docs/perf (scope): PR Title`

Наприклад `fix(learn): Fixed tests for the do...while loop challenge`.

| Сфера | Документація |
|---|---|
| `learn`,`curriculum` | Для Pull Requests, які вносять зміни до задач курикулуму. |
| `client` | Для Pull Requests, які вносять логіки клієнтської платформи або інтерфейсу користувача. |
| `guide` | Для Pull Requests, які вносять зміни до інструкції. |
| `docs` | Для Pull Requests, які вносять зміни до документації проекту. |

## Запропонувати Pull Request (PR)

1. Після внесення змін вам буде запропоновано створити Pull Request на сторінці GitHub вашої вилки.

    ![Image - Compare pull request prompt on GitHub](/docs/images/github/compare-pull-request-prompt.png)

2. За замовчуванням усі Pull Rell Requests повинні бути проти основного репорта freeCodeCamp, гілки `master`.

    Переконайтесь, що під час подання запиту вашій Base Fork встановлено значення freeCodeCamp / freeCodeCamp.

    ![Image - Comparing forks when making a pull request](/docs/images/github/comparing-forks-for-pull-request.png)

3. Надішліть Pull Request з вашої гілки на гілку masterCodeCamp.

4. В тілі вашого PR включіть більш детальний опис змін, які ви додали і чому.

    - Вам буде представлений шаблон запиту PR. Це чекліст, якого слід було дотримуватися перед відкриттям запиту.

    - Заповніть деталі, які здаються вам підходящими. Ця інформація буде переглянута і вирішить, чи буде прийнято ваш запит.Fill in the details as they seem fit you. 

    - Якщо PR призначений для виправлення існуючої помилки/проблеми, тоді вкінці  
      опису додайте ключове слово `closes` і  #xxxx (де xxxx
      номер проблеми). Наприклад: `closes #1337`. Це скаже GitHub'у автоматично закрити існуючу проблему, якщо PR було принято і об'єднано. 

5. Вкажіть чи ви протестували на локальній копії сайту.
  
      Це дуже важливо, коли ви вносите зміни, які стосуються не лише редагування текстового вмісту, наприклад, статті інструкції. Приклади змін, що потребують локального тестування, включають JavaScript, CSS або HTML, які можуть змінити функціональність або макет сторінки.
