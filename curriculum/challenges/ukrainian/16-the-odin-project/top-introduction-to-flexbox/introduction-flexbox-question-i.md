---
id: 6571c34768e4b3b17d3957fa
title: Вступ до Flexbox. Запитання I
challengeType: 15
dashedName: introduction-flexbox-question-i
---

# --description--

<iframe allowfullscreen="true" allowpaymentrequest="true" allowtransparency="true" class="cp_embed_iframe " frameborder="0" height="400" width="100%" name="cp_embed_1" scrolling="no" src="https://codepen.io/TheOdinProjectExamples/embed/BaZKPdw?height=400&amp;default-tab=html%2Cresult&amp;slug-hash=BaZKPdw&amp;editable=true&amp;user=TheOdinProjectExamples&amp;name=cp_embed_1" style="width: 100%; overflow:hidden; display:block;" title="Вставка CodePen" loading="lazy" id="cp_embed_BaZKPdw"></iframe>

Ще одна річ в прикладі, на яку потрібно звернути увагу: `flex-direction: column` не працюватиме як очікувалось, якщо ви використали скорочення `flex: 1`. Спробуйте це зараз (тобто змініть значення `flex` в рядку `flex: 1 1 auto;`). Здогадуєтесь, чому властивість не працює, якщо використати `flex: 1`? Елементи div згорнуться, хоча вони мають чітко визначену висоту.

Причина в тому, що скорочення `flex` надає властивості `flex-basis` значення `0`, тобто `flex-growing` та `flex-shrinking` розпочнуть свої обчислення з 0. Порожні елементи div мають висоту зі значенням 0 за замовчуванням, тому, щоб гнучкі предмети заповнювали висоту свого контейнера, їм взагалі не потрібна висота.

У прикладі вище це виправлено за допомогою `flex: 1 1 auto`, що повідомляє гнучким предметам використовувати задану висоту за замовчуванням. Ще один спосіб — додати `height` до батьківського контейнера `.flex-container` або використати `flex-grow: 1`, а не скорочення.

Ще одна деталь, на яку варто звернути увагу: коли ви змінили `flex-direction` на `column`, то `flex-basis` посилається на `height`, а не `width`. Враховуючи контекст, це може бути очевидним, але про це варто знати.

# --question--

## --text--

Чому використання скорочення `flex: 1` разом з `flex-direction: column` призводить до того, що елементи div згортаються як в прикладі?

## --answers--

Скорочення `flex` надає властивості `flex-basis` значення 0 за замовчуванням, ігноруючи визначену висоту елементів div.

---

Скорочення `flex` перевизначає вказане значення `flex-direction`, що спричиняє згортання.

---

`flex: 1` працює лише з макетом на основі рядків, а не стовпців.

---

Властивість `flex-basis` стає фіксованою до ширини, ігноруючи висоту в макеті стовпця.


## --video-solution--

1
