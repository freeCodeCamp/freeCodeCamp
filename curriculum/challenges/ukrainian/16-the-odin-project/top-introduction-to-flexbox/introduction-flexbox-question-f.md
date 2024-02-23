---
id: 6571b300cc1de61d7b4dd384
title: Вступ до Flexbox. Запитання F
challengeType: 15
dashedName: introduction-flexbox-question-f
---

# --description--

`flex-grow` очікує число як значення, і це число використовується як «фактор росту» гнучкого предмета. Коли ви застосували `flex: 1` до кожного елемента div в контейнері, ви повідомили всім елементам div зростати однаково. В результаті всі елементи div мають однаковий розмір. А якщо додати `flex: 2` лише до одного елемента div, він буде в два рази більшим за інших.

У наступному прикладі скорочення `flex` має значення для `flex-shrink` та `flex-basis`, вказані за замовчуванням.

<iframe allowfullscreen="true" allowpaymentrequest="true" allowtransparency="true" class="cp_embed_iframe " frameborder="0" height="300" width="100%" name="cp_embed_1" scrolling="no" src="https://codepen.io/TheOdinProjectExamples/embed/YzQqvgK?height=300&amp;default-tab=html%2Cresult&amp;slug-hash=YzQqvgK&amp;editable=true&amp;user=TheOdinProjectExamples&amp;name=cp_embed_1" style="width: 100%; overflow:hidden; display:block;" title="Вставка CodePen" loading="lazy" id="cp_embed_YzQqvgK"></iframe>

# --question--

## --text--

Що відбудеться, якщо встановити `flex: 2` до одного певного елемента div в гнучкому контейнері, коли всі інші елементи div мають `flex: 1`?

## --answers--

Контейнер зменшиться, щоб вмістити більший елемент div.

---

Елементи div не змінять розмір через конфліктуючі значення `flex`.

---

Певний елемент div стане вдвічі більшим за інші елементи.

---

Елементи div зменшаться, щоб відповідати новим розмірам `flex`.

## --video-solution--

3
