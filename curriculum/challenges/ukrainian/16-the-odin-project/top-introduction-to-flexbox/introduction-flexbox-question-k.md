---
id: 6597b43d854b3fa8e35d66d7
title: Вступ до Flexbox. Запитання K
challengeType: 15
dashedName: introduction-flexbox-question-k
---

# --description--

<iframe allowfullscreen="true" allowpaymentrequest="true"
style="width: 100%; overflow:hidden; display:block;"
allowtransparency="true" class="cp_embed_iframe " frameborder="0" height="400" width="100%" name="cp_embed_1" scrolling="no" src="https://codepen.io/TheOdinProjectExamples/embed/MWoyBzR?height=400&amp;default-tab=html%2Cresult&amp;slug-hash=MWoyBzR&amp;editable=true&amp;user=TheOdinProjectExamples&amp;name=cp_embed_1" title="Вставка CodePen" loading="lazy" id="cp_embed_MWoyBzR"></iframe>

Щоб змінити розташування предметів по перехресній осі, використайте `align-items`. Спробуйте розмістити блоки по центру контейнера, додавши `align-items: center` до `.container`. Бажаний результат виглядає так:

<img src="https://cdn.freecodecamp.org/curriculum/odin-project/flex-box/flexbox-06.png" alt="three blue squares centered in the middle of the flex container" style="margin: 15px 0" />

Оскільки `justify-content` та `align-items` базуються на головній та перехресній осях контейнера, то їхня поведінка змінюється, якщо ви змінюєте `flex-direction` гнучкого контейнера. Наприклад, якщо змінити `flex-direction` на `column`, то `justify-content` вирівнюватиме вертикально, а `align-items` — горизонтально. Однак найпоширенішою поведінкою є поведінка за замовчуванням: `justify-content` вирівнює предмети горизонтально (оскільки головна вісь за замовчуванням горизонтальна), а `align-items` вирівнює їх вертикально. Одна з найбільших труднощів, з якими початківці стикаються при роботі з flexbox, — це плутанина при зміні поведінки.

# --question--

## --assignment--

Перш ніж перейти до наступного уроку, переконайтесь, що розумієте, як поводиться `align-items` при зміні властивості `flex-direction` на `column`.

## --text--

Як поводиться `align-items` стосовно гнучких предметів, якщо в гнучкому контейнері змінити властивість `flex-direction` на `column`?

## --answers--

Вона рівномірно розподіляє простір між предметами.

---

Вона горизонтально вирівнює предмети вздовж головної осі.

---

Вона вертикально центрує предмети вздовж перехресної осі.

---

Вона вирівнює елементи за початком контейнера вздовж перехресної осі.

## --video-solution--

3
