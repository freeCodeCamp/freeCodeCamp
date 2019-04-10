---
id: bd7123c8c441eddfaeb5bdef
title: Say Hello to HTML Elements
challengeType: 0
videoUrl: ''
localeTitle: HTML要素にHelloと表示
---

## Description
<section id='description'>
freeCodeCampのHTMLコーディングチャレンジへようこそ。コーディングチャレンジを通じてweb開発を段階的に覚えていきましょう。
最初にHTMLを使った単純なウェブページを作りましょう。webページに埋め込まれた<code>コードエディタ</code>で<code>コード</code>を編集できます。
コードエディタ内の<code>&#60;h1&#62;Hello&#60;/h1&#62;</code>のコードが見えますか？これはHTMLの<code>要素</code>です。
ほとんどのHTML要素には<code>開始タグ</code>と<code>終了タグ</code>があります。
開始タグはこのように:
<code>&#60;h1&#62;</code>
終了タグはこのように:
<code>&#60;/h1&#62;</code>
開始タグの終了タグの唯一の違いは終了タグの最初の開いた括弧の後にスラッシュが入ります。
各チャレンジには"Run tests"ボタンをクリックすることで実行できるテストがあります。あたなの答えを送信後に全てのテストをクリアできたら、次のコーディングチャレンジに行きましょう。
</section>

## Instructions
<section id='instructions'>
コーディングチャレンジのテストをクリアするために<code>h1</code>要素のテキストを"Hello World"に変えましょう。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: あなたの<code>h1</code>要素に"Hello World"を持たせましょう。
    testString: assert.isTrue((/hello(\s)+world/gi).test($('h1').text()), 'Your <code>h1</code> element should have the text "Hello World".');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<h1>Hello</h1>
```

</div>



</section>

## Solution
<section id='solution'>

```html
<h1>Hello World</h1>
```
</section>
