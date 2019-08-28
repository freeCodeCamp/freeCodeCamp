---
id: 587d774c367417b2b2512a9c
title: Add a Text Alternative to Images for Visually Impaired Accessibility
challengeType: 0
videoUrl: https://scrimba.com/c/cPp7VfD
forumTopicId: 16628
localeTitle: Добавьте текстовое описание для изображений, чтобы увеличить их информативность для пользователей с нарушением зрения
---

## Description
<section id='description'>
Вероятно, вы уже встречали атрибут <code>alt</code> в теге <code>img</code> в других задачах. <code>Alt</code> описывает содержимое изображения при помощи текстовой альтернативы. Текстовая альтернатива - тот текст, который увидит пользователь в том случае, если изображение не загружается, не может быть отображено, или пользователь с ограниченными возможностями не способен его увидеть. Поисковые системы также используют этот альтернативный текст в качестве описания изображения, чтобы включить изображение в результаты поиска.
Например: <code>&lt;img src=&quot;importantLogo.jpeg&quot; alt=&quot;Company logo&quot;&gt;</code>
Люди с нарушениями зрения полагаются на устройства чтения с экрана для преобразования веб-контента в аудиоинтерфейс. Они не могут получить информацию, которая представлена только в виде изображения, если это изображение не сопровождается описанием(текстовой альтернативой). Программы, предназначенные для людей с нарушениями зрения, могут получить доступ к атрибуту <code>alt</code> и прочитать его содержимое для доставки пользователю ключевой информации. Хорошее описание <code>alt</code> должно быть кратким, но достаточно емким, чтобы передать смысл изображения. Спецификация HTML5 требует обязательного включения атрибута <code>alt</code> для каждого изображения.
</section>

## Instructions
<section id='instructions'>
Camper Cat, настоящий ниндзя в жизни и в программировании, создает веб-сайт, чтобы поделиться своими знаниями. Он хочет использовать изображение для профиля, которое продемонстрирует его навыки и будет оценено всеми посетителями сайта. Добавьте атрибут <code>alt</code> в тег <code>img</code> так, чтобы всем стало понятно, что Camper Cat занимается каратэ. (Изображение <code>src</code> не ссылается на фактический файл, поэтому вы должны увидеть текст <code>alt</code> на дисплее.)
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your <code>img</code> tag should have an <code>alt</code> attribute and it should not be empty.
    testString: assert($('img').attr('alt'));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<img src="doingKarateWow.jpeg">

```

</div>

</section>

## Solution
<section id='solution'>

```html
<img src="doingKarateWow.jpeg" alt="Someone doing karate">
```

</section>
