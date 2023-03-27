# Як допомогти з відеозавданнями

Відеозавдання — це новий вид завдань у навчальній програмі freeCodeCamp.

Відеозавдання — це маленька частина повноформатного відеокурсу на певну тему. Сторінка з відеозавданням містить відео на ютубі. Кожна сторінка має одне запитання з декількома варіантами відповідей, що стосуються відео. Користувач повинен правильно відповісти на запитання перед тим, як перейти до наступного відеозавдання курсу.

Сторінки з відеозавданнями створюються учасниками команди freeCodeCamp. Відео на ютуб також завантажуються учасниками команди freeCodeCamp. Багато відеозавдань ще не мають запитань, пов’язаних з ними.

Ви можете допомогти, створивши запитання з декількома варіантами відповіді, повʼязаних з розділами відео, та додавши ці запитання до markdown-файлів для відеозавдань.

## Зразок завдання

Нижче наведено зразок того, як виглядають markdown-файли завдання.

````md
---
id: Unique identifier (alphanumerical, MongoDB_id)
title: Challenge Title
challengeType: 11
videoId: 'YouTube videoId for video challenge'
forumTopicId: 12345
---

# --description--

Опис завдання, у markdown

```html
<div>example code</div>
````

# --question--

Наразі ці поля використовуються у завданнях з декількома варіантами відповідей на тему Python.

## --text--

Запитання повинне бути тут.

## --answers--

Відповідь 1

---

Відповідь 2

---

Інші відповіді

## --video-solution--

Номер правильної відповіді повинен бути тут.
````

## Створення запитань для відеозавдань

### Отримання доступу до markdown-файлів відеозавдань

Markdow-файли до відеозавдань можна знайти у наступних локаціях навчальної програми:

- [Data Analysis with Python Course](https://github.com/freeCodeCamp/freeCodeCamp/tree/main/curriculum/challenges/english/08-data-analysis-with-python/data-analysis-with-python-course)
- [TensorFlow 2.0 Course](https://github.com/freeCodeCamp/freeCodeCamp/tree/main/curriculum/challenges/english/11-machine-learning-with-python/tensorflow)
- [Numpy Course](https://github.com/freeCodeCamp/freeCodeCamp/tree/main/curriculum/challenges/english/08-data-analysis-with-python/numpy)
- [How Neural Networks Work Course](https://github.com/freeCodeCamp/freeCodeCamp/tree/main/curriculum/challenges/english/11-machine-learning-with-python/how-neural-networks-work)

Оберіть markdown-файл завдання із поданих нижче.

### Ознайомтеся із відео, пов’язаним із завданням, та створіть запитання із декількома варіантами відповіді

Спершу знайдіть `videoId`.

Наприклад, у наступному коді із заголовка markdown-файлу завдання, `videoId` є «nVAaxZ34khk». На GitHub інформація повинна бути поданою у форматі таблиці.

````
---
id: 5e9a093a74c4063ca6f7c14d title: Data Analysis Example A challengeType: 11
videoId: nVAaxZ34khk
---
```

Потім отримайте доступ до відео на ютубі за допомогою `videoId`. Посиланням на відео буде:
https://www.youtube.com/watch?v=[videoId] (замініть `videoId` у посиланні на ID відео, без квадратних дужок)

У прикладі вище посиланням є https://www.youtube.com/watch?v=nVAaxZ34khk

Перегляньте відео із цим `videoId` та на його основі придумайте запитання із декількома варіантами відповіді.

### Додайте запитання до markdown-файлу

Ви можете додати запитання локально або скориставшись інтерфейсом GitHub. Щоб додати запитання локально, вам потрібно [налаштувати freeCodeCamp локально](how-to-setup-freecodecamp-locally.md). Ви також можете знайти файл на GitHub та клацнути кнопку редагування, щоб додати запитання прямо у своєму браузері.

Якщо запитання ще не додано до певного відеозавдання, воно матиме наступне запитання за замовчуванням:

```md
# --question--

## --text--

Запитання

## --answers--

Відповідь 1

---

Відповідь 2

---

Інші відповіді

## --video-solution--

1
```

Додайте/оновіть текст запитання під частиною, яка зображає:

```
# --question--

## --text--
```

Додайте/оновіть відповіді (`Answer 1`, `Answer 2` і так далі) під `## --answers--`. Переконайтеся, що оновили номер правильної відповіді під `## --video-solution--`. Ви можете додати більше можливих відповідей, використовуючи такий самий формат. Запитання та відповіді можуть бути в лапках.

### Приклади запитань

````md
# --question--

## --text--

Що виведе на консоль даний код JavaScript?

```js
console.log('hello world');
````

## --answers--

hello _world_

---

**hello** world

---

hello world

---

## --video-solution--

3
````

````md
# --question--

## --text--

Що виведеться на екран після цього коду:

```py
width = 15
height = 12.0
print(height/3)
````

## --answers--

39

---

4

---

4.0

---

5.0

---

5

## --video-solution--

3 ````

Більше прикладів ви можете побачити в markdown-файлах даного відеокурсу. Всі завдання вже мають запитання: [Python for Everybody Course](https://github.com/freeCodeCamp/freeCodeCamp/tree/main/curriculum/challenges/english/07-scientific-computing-with-python/python-for-everybody)

## Відкрийте запит на злиття

Після створення одного чи більше запитань, ви можете зафіксувати зміни в новій гілці та [відкрити запит на злиття](how-to-open-a-pull-request.md).
