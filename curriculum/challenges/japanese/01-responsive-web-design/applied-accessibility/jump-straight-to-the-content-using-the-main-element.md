---
id: 587d774e367417b2b2512a9f
title: main 要素を使用してコンテンツに直接ジャンプする
challengeType: 0
videoUrl: 'https://scrimba.com/c/cPp7zuE'
forumTopicId: 301018
dashedName: jump-straight-to-the-content-using-the-main-element
---

# --description--

HTML5 では、より多くの選択肢を開発者に提供すると同時にアクセシビリティ機能も組み込んだ新しい要素が導入されました。 それらのタグとして特に `main`、`header`、`footer`、`nav`、`article`、`section` があります。

デフォルトでは、ブラウザはこれらの要素を特に装飾のない `div` と同じように表示します。 しかし、これらを適切に使用することでマークアップに追加の意味を与えることができます。 タグ名だけでそこに含まれる情報の種類を示すことができるので、そのコンテンツにセマンティックな意味を追加することができます。 アシスティブ・テクノロジー (支援技術) はこの情報にアクセスして、より良いページ要約やナビゲーションオプションをユーザーに提供することができます。

`main` 要素は (名前から推測できる通り) メインコンテンツを囲うために使用されます。この要素は各ページに1つだけであるべきです。 これはページの中心的なトピックに関連する情報を囲むためのものです。 ナビゲーションリンクやバナーなど、ページをまたいで繰り返す項目を含めるべきではありません。

`main` タグには、支援技術でメインコンテンツに素早く移動できるようにするための目印となる機能も埋め込まれています。 ページの上部に「メインコンテンツへ移動」といったリンクがあるのを見たことがあるでしょうか。`main` タグを使用すれば、自動的に支援機器にその機能を提供することができます。

# --instructions--

Camper Cat は忍者の武器に関するページのアイデアを持っています。 (他のチャレンジで説明する) `header` と `footer` の間に、`main` の開始タグと終了タグを追加して、彼のマークアップ作業を手伝ってあげてください。 今のところ `main` タグは空のままにしておいてください。

# --hints--

コードには `main` タグが1つ必要です。

```js
assert($('main').length == 1);
```

`main` タグは、`header` の終了タグと `footer` の開始タグの間でなければなりません。

```js
assert(code.match(/<\/header>\s*?<main>\s*?<\/main>/gi));
```

# --seed--

## --seed-contents--

```html
<header>
  <h1>Weapons of the Ninja</h1>
</header>



<footer></footer>
```

# --solutions--

```html
<header>
  <h1>Weapons of the Ninja</h1>
</header>
<main>

</main>
<footer></footer>
```
