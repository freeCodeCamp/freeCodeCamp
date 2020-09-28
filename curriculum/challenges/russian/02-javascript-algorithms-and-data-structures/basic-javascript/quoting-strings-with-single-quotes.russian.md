---
id: 56533eb9ac21ba0edf2244b4
title: Quoting Strings with Single Quotes
challengeType: 1
videoUrl: https://scrimba.com/c/cbQmnhM
forumTopicId: 18260
localeTitle: Цитирование строк с одиночными котировками
---

## Description
<section id='description'>
Значения <dfn>строк</dfn> в JavaScript могут быть записаны с одинарными или двойными кавычками, если вы начинаете и заканчиваете одним и тем же типом цитаты. В отличие от некоторых других языков программирования одиночные и двойные кавычки работают одинаково в JavaScript. <blockquote> doubleQuoteStr = &quot;Это строка&quot;; <br> singleQuoteStr = &#39;Это также строка&#39;; </blockquote> Причина, по которой вы, возможно, захотите использовать один тип цитаты над другим, - это если вы хотите использовать оба в строке. Это может произойти, если вы хотите сохранить разговор в строке и провести разговор в кавычках. Другим использованием для него было бы сохранение тега <code>&lt;a&gt;</code> с различными атрибутами в кавычках, все внутри строки. <blockquote> разговор = &#39;Финн восклицает Джейку: «Алгебраический!»; </blockquote> Однако это становится проблемой, если вам нужно использовать внешние цитаты внутри нее. Помните, что строка имеет такую ​​же цитату в начале и в конце. Но если у вас есть такая же цитата где-то посередине, строка остановится раньше и выкинет ошибку. <blockquote> goodStr = &#39;Джейк спрашивает Финна: ​​«Эй, давай отправимся в приключение?»; <br> badStr = &#39;Финн отвечает: «Поехали!»; // Выдает ошибку </blockquote> В <dfn>goodStr</dfn> выше вы можете безопасно использовать обе кавычки, используя обратную косую черту <code>\</code> в качестве escape-символа. <strong>Заметка</strong> <br> Обратную косую черту <code>\</code> не следует путать с косой чертой <code>/</code> . Они не делают то же самое.
</section>

## Instructions
<section id='instructions'>
Измените предоставленную строку на строку с одинарными кавычками в начале и конце и без escape-символов. Прямо сейчас тег <code>&lt;a&gt;</code> в строке использует двойные кавычки всюду. Вам нужно будет изменить внешние кавычки на одинарные кавычки, чтобы вы могли удалить escape-символы.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Remove all the <code>backslashes</code> (<code>\</code>)
    testString: assert(!/\\/g.test(code) && myStr.match('\\s*<a href\\s*=\\s*"http://www.example.com"\\s*target\\s*=\\s*"_blank">\\s*Link\\s*</a>\\s*'));
  - text: You should have two single quotes <code>&#39;</code> and four double quotes <code>&quot;</code>
    testString: assert(code.match(/"/g).length === 4 && code.match(/'/g).length === 2);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var myStr = "<a href=\"http://www.example.com\" target=\"_blank\">Link</a>";

```

</div>

### After Tests
<div id='js-teardown'>

```js
(function() { return "myStr = " + myStr; })();

```

</div>

</section>

## Solution
<section id='solution'>

```js
var myStr = '<a href="http://www.example.com" target="_blank">Link</a>';
```

</section>
