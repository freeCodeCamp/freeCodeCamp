---
id: 637f701572c65bc8e73dfe30
title: Посилання та зображення. Запитання G
challengeType: 15
dashedName: links-and-images-question-g
---

# --description--

Вебсайти були б нудними, якби показувати лише текст. На щастя, HTML надає широкий вибір елементів для показу різних видів медіа. Найчастіше використовується елемент зображення.

Щоб показати зображення у HTML, використовується елемент `<img>`. На відміну від інших елементів, які ми вже вивчили, елемент `<img>` є самозакривним. Порожнім самозакривним елементам HTML не потрібний кінцевий тег.

Замість того, щоб обгортати вміст початковим та кінцевим тегами, зображення вкладається за допомогою атрибута `src`, який повідомляє браузеру, де знаходиться файл зображення. Атрибут `src` працює майже так само, як атрибут `href` для тегів посилання. Він може вкласти зображення за допомогою як абсолютного, так і відносного шляхів.

Наприклад, використовуючи абсолютний шлях, можна показати зображення з сайту The Odin Project:

<iframe allowfullscreen="true" allowpaymentrequest="true" allowtransparency="true" class="cp_embed_iframe " frameborder="0" height="300" width="100%" name="cp_embed_1" scrolling="no" src="https://codepen.io/TheOdinProjectExamples/embed/gORbExZ?height=300&amp;theme-id=dark&amp;default-tab=html%2Cresult&amp;slug-hash=gORbExZ&amp;user=TheOdinProjectExamples&amp;name=cp_embed_1" style="width: 100%; overflow:hidden; display:block;" title="Вставка CodePen" loading="lazy" id="cp_embed_gORbExZ"></iframe>

Щоб використати зображення власних вебсайтів, можна використати відносний шлях.

- Створіть новий каталог під назвою `images` в межах проєкту `odin-links-and-images`.

- Потім завантажте [це зображення](https://unsplash.com/photos/Mv9hjnEUHR4/download?force=true&w=640) та перемістіть його до щойно створеного каталогу зображень.

- Перейменуйте зображення на `dog.jpg`.

Наприкінці додайте зображення до файлу `index.html`:

```html
<body>
  <h1>Homepage</h1>
    <a href="https://www.theodinproject.com/about">click me</a>

    <a href="pages/about.html">About</a>

    <img src="images/dog.jpg">
</body>
```

Збережіть файл `index.html` та відкрийте його у браузері, щоб подивитись на Чарльза у всій його красі.


## Батьківські каталоги

Що робити, якщо ви хочете використати зображення собаки на сторінці `about`? Спочатку вам потрібно піднятися на один рівень вище в каталозі сторінок до батьківського каталогу, перш ніж ви зможете отримати доступ до каталогу зображень.

Щоб перейти до батьківського каталогу, вам потрібно використати дві крапки у відносному шляху, ось так: `../.` Розглянемо це в дії: всередині `body` файлу `about.html` додайте наступне зображення під заголовком, який ви додали раніше:

```html
<img src="../images/dog.jpg">
```

Розіб’ємо на частини:

- Спочатку перейдіть до батьківського каталогу сторінок, тобто `odin-links-and-images`.

- Потім ви можете перейти до каталогу `images` з батьківського каталогу.

- Вкінці ви можете отримати доступ до файлу `dog.jpg`.

Використаємо метафору: `../` у шляху нагадує вихід з кімнати до коридору, щоб перейти до іншої кімнати.

## Атрибут alt

Окрім атрибута `src`, кожному елементу зображення потрібний атрибут `alt` (alternative text).

Атрибут `alt` використовується для опису зображення. Він буде використаний на місці зображення, яке не завантажується. Його також використовують читачі екрана, щоб описати зображення для користувачів з порушенням зору.

Ось так виглядає логотип The Odin Project з атрибутом alt:
<iframe allowfullscreen="true" allowpaymentrequest="true" allowtransparency="true" class="cp_embed_iframe " frameborder="0" height="300" width="100%" name="cp_embed_2" scrolling="no" src="https://codepen.io/TheOdinProjectExamples/embed/ExXjoEp?height=300&amp;theme-id=dark&amp;default-tab=html%2Cresult&amp;slug-hash=ExXjoEp&amp;user=TheOdinProjectExamples&amp;name=cp_embed_2" style="width: 100%; overflow:hidden; display:block;" title="Вставка CodePen" loading="lazy" id="cp_embed_ExXjoEp"></iframe>

# --question--

## --text--

Як отримати доступ до батьківського каталогу у шляху до файлу?

## --answers--

`../`

---

`./`

---

`.../`

## --video-solution--

1
