---
id: bd7123c9c443eddfaeb5bdef
title: Declare JavaScript Variables
challengeType: 1
videoUrl: https://scrimba.com/c/cNanrHq
forumTopicId: 17556
localeTitle: Объявление переменных JavaScript
---

## Description
<section id='description'>
В информатике <dfn>данные</dfn> - это все, что имеет значение для компьютера. JavaScript предоставляет семь разных <dfn>типов данных,</dfn>, а именно: <code>undefined</code> , <code>null</code> , <code>boolean</code> , <code>string</code> , <code>symbol</code> , <code>number</code> и <code>object</code> . Например, компьютеры различают числа, такие как число <code>12</code> и <code>strings</code> (строки), такие как <code>&quot;12&quot;</code> , <code>&quot;dog&quot;</code> или <code>&quot;123 cats&quot;</code> , которые представляют собой собрание символов. Компьютеры могут выполнять математические операции над числами, но не над строками. <dfn>Переменные</dfn> позволяют компьютерам динамически хранить и манипулировать данными. Они делают это, используя «метку», которая указывает на данные, а не используя сами данные. Любой из семи типов данных может быть сохранен в переменной. <code>Variables</code> аналогичны переменным x и y, которые используются в математике, что означает, что они просто имя для представления данных, к которым мы хотим обратиться. Компьютерные <code>variables</code> отличаются от математических переменных тем, что они могут хранить разные значения в разное время. Мы говорим JavaScript создать или <dfn>объявить</dfn> переменную, поставив перед ней ключевое слово <code>var</code> , например: <blockquote> var ourName; </blockquote> создает <code>variable</code> с именем <code>ourName</code> . В JavaScript мы заканчиваем выражения точкой с запятой. Имена <code>Variable</code> могут состоять из чисел, букв и <code>$</code> или <code>_</code> , но могут не содержать пробелов или начинаться с числа.
</section>

## Instructions
<section id='instructions'>
Используйте ключевое слово <code>var</code> для создания переменной <code>myName</code> . <strong>Подсказка</strong> <br> Посмотрите на пример <code>ourName</code> если вы застряли.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: You should declare <code>myName</code> with the <code>var</code> keyword, ending with a semicolon
    testString: assert(/var\s+myName\s*;/.test(code));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Example
var ourName;

// Declare myName below this line

```

</div>

### After Tests
<div id='js-teardown'>

```js
if(typeof myName !== "undefined"){(function(v){return v;})(myName);}

```

</div>

</section>

## Solution
<section id='solution'>

```js
var myName;
```

</section>
