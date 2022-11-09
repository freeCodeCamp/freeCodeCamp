# Як допомогти з відеозавданнями

Відеозавдання – це новий тип завдань у навчальній програмі freeCodeCamp.

Відеозавдання – це маленька частина повноформатного відеокурсу на певну тему. Сторінка з відеозавданням містить відео на ютубі. Кожна сторінка має одне запитання з декількома варіантами відповідей, що стосуються відео. Користувач повинен правильно відповісти на запитання перед тим, як перейти до наступного відеозавдання курсу.

Сторінки з відеозавданнями створюються учасниками команди freeCodeCamp. Відео на ютуб також завантажуються учасниками команди freeCodeCamp. Багато відеозавдань ще не мають запитань, пов'язаних з ними.

Ви можете допомогти, створивши запитання з декількома варіантами відповіді, повʼязаних з розділами відео, та додавши ці питання до markdown-файлів для відеозавдань.

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

## Створення запитань для questions for video challenges

### Отримання доступу до markdown-файлів відеозавдань

Markdow-файли до відеозавдань можна знайти у наступних локаціях навчальної програми:

- [Data Analysis with Python Course](https://github.com/freeCodeCamp/freeCodeCamp/tree/main/curriculum/challenges/english/08-data-analysis-with-python/data-analysis-with-python-course)
- [TensorFlow 2.0 Course](https://github.com/freeCodeCamp/freeCodeCamp/tree/main/curriculum/challenges/english/11-machine-learning-with-python/tensorflow)
- [Numpy Course](https://github.com/freeCodeCamp/freeCodeCamp/tree/main/curriculum/challenges/english/08-data-analysis-with-python/numpy)
- [How Neural Networks Work Course](https://github.com/freeCodeCamp/freeCodeCamp/tree/main/curriculum/challenges/english/11-machine-learning-with-python/how-neural-networks-work)

Оберіть markdown-файл завдання із поданих нижче.

### Ознайомтеся із відео, пов'язаним із завданням, та створіть запитання із декількома варіантами відповіді

Спершу знайдіть `videoId`.

For example, in the following code from the header of a video challenge markdown file, the `videoId` is "nVAaxZ34khk". On GitHub, the information should be laid out in a table format.

````
---
id: 5e9a093a74c4063ca6f7c14d title: Data Analysis Example A challengeType: 11
videoId: nVAaxZ34khk
---
```

Next, access the YouTube video with that `videoId`. The URL for the video will be:
https://www.youtube.com/watch?v=[videoId] (replace `videoId` in the URL with the video's ID - without square brackets)

In the example above, the URL is https://www.youtube.com/watch?v=nVAaxZ34khk

Skim the YouTube video with that `videoId` and think of a multiple-choice question based on the content of the video.

### Add the question to the markdown file

You can add the question locally or using the GitHub interface. To add the question locally, you need to [set up freeCodeCamp locally](how-to-setup-freecodecamp-locally.md). You can also find the file on GitHub and click the edit button to add the question right in your browser.

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

Add/Update the question text under the part that shows:

```
# --question--

## --text--
```

Add/Update answers (`Answer 1`, `Answer 2`, and so on) under `## --answers--`. Make sure to update the number under `## --video-solution--` with the correct answer number. You can add more possible answers using the same format. Запитання та відповіді можуть бути в лапках.

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

## Відкрийте пул реквест

After creating one or more questions, you can commit the changes to a new branch and [open a pull request](how-to-open-a-pull-request.md).
