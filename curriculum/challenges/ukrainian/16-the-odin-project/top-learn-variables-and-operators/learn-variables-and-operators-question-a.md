---
id: 65e185b1500d930ce8ed909b
title: Вивчіть змінні та оператори. Запитання A
challengeType: 15
dashedName: learn-variables-and-operators-question-a
---

# --description--
Найпростіший спосіб розпочати роботу — створити файл HTML з кодом JavaScript всередині. Напишіть основний каркас HTML в файлі будь-де на своєму комп’ютері:

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Page Title</title>
</head>
<body>
  <script>
    // Your JavaScript goes here!
    console.log("Hello, World!")
  </script>
</body>
</html>
```

Збережіть та відкрийте цей файл у браузері (для цього можна використати <a href="https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer" target="_blank" >«Live Server» в Visual Studio Code</a>), а потім відкрийте консоль браузера, натиснувши правою кнопкою миші на порожній вебсторінці та обравши «Перевірити». В інструментах розробника знайдіть та оберіть вкладку «Консоль», де зможете побачити вихідні дані інструкції `console.log`.

> `console.log()` — це команда, яка друкує що завгодно на консолі розробника в браузері. Її можна використовувати, щоб надрукувати результати будь-якої публікації або завдання на консолі. Ми заохочуємо вас програмувати протягом цього та наступних уроків.

Інший спосіб додати JavaScript до вебсторінки — зовнішній скрипт. Він дуже схожий до прив’язки зовнішнього CSS до вебсайту.

```html
  <script src="javascript.js"></script>
```

Файли JavaScript мають розширення `.js`, яке схоже до `.css` для таблиць стилів. Зовнішні файли JavaScript використовують для складніших скриптів.

# --question--

## --text--

Яке твердження описує, як додати JavaScript до документа HTML?

## --answers--

JavaScript можна додати лише внутрішньо в межах тегу `<script>` в тілі HTML.

---

Код JavaScript потрібно написати в розділі `<head>` документа HTML, щоб той правильно виконувався.

---

JavaScript можна додати напряму до файлу HTML за допомогою тегу `<script>` або пов’язати зовні за допомогою тегу `<script src="javascript.js">`.

---

Зовнішні файли JavaScript потребують спеціального атрибута в тегу `<script>`, щоб бути визнаними браузерами.


## --video-solution--

3
