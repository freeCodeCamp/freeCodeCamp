---
id: 587d7790367417b2b2512ab0
title: tabindex を使用して要素にキーボードフォーカスを追加する
challengeType: 0
videoUrl: 'https://scrimba.com/c/cmzMDHW'
forumTopicId: 301027
dashedName: use-tabindex-to-add-keyboard-focus-to-an-element
---

# --description--

HTML の `tabindex` 属性は要素のキーボードフォーカスに関連した 3 つの異なる機能を持っています。 これがタグ上にある場合、要素にフォーカス可能なことを示します。 値 (正、負、またはゼロの整数) によって動作が決まります。

リンクやフォームコントロールなどの特定の要素は、ユーザーがページをタブで移動する際、自動的にキーボードフォーカスを受け取ります。 これは要素が HTML ソース上でマークアップされたものと同じ順序です。 これと同じ機能を `div` や `span`、`p` といった他の要素に対しても、`tabindex="0"` 属性を配置することで与えることができます。 例:

```html
<div tabindex="0">I need keyboard focus!</div>
```

**注:** 負の `tabindex` 値 (通常 -1) は、要素がフォーカス可能であるものの、キーボードからは到達できないことを示します。 この手法は一般的に、プログラム的にコンテンツへのフォーカスを与えるために使用されます (ポップアップウィンドウで使用される `div` をアクティブにする場合など)。これはこのチャレンジの範囲外です。

# --instructions--

Camper Cat は、ユーザーに関する情報を収集するための新しい調査を作成しました。 彼は入力フィールドが自動的にキーボードフォーカスを得ることを知っていますが、キーボードユーザーがタブで移動する間に説明文で一時停止したいと思っています。 `tabindex` 属性を `p` タグに追加し、値を `0` に設定してください。 ボーナス - `tabindex` を使用することで、CSS の疑似クラス `:focus` が `p` タグで動作するようになります。

# --hints--

コードではフォームの説明文を保持する `p` タグに `tabindex` 属性を追加してください。

```js
assert($('p').attr('tabindex'));
```

コードには `p` タグの `tabindex` 属性として 0 を設定する必要があります。

```js
assert($('p').attr('tabindex') == '0');
```

# --seed--

## --seed-contents--

```html
<head>
  <style>
  p:focus {
    background-color: yellow;
  }
  </style>
</head>
<body>
  <header>
    <h1>Ninja Survey</h1>
  </header>
  <section>
    <form>


      <p>Instructions: Fill in ALL your information then click <b>Submit</b></p>


      <label for="username">Username:</label>
      <input type="text" id="username" name="username"><br>
      <fieldset>
        <legend>What level ninja are you?</legend>
        <input id="newbie" type="radio" name="levels" value="newbie">
        <label for="newbie">Newbie Kitten</label><br>
        <input id="intermediate" type="radio" name="levels" value="intermediate">
        <label for="intermediate">Developing Student</label><br>
        <input id="master" type="radio" name="levels" value="master">
        <label for="master">9th Life Master</label>
      </fieldset>
      <br>
      <fieldset>
      <legend>Select your favorite weapons:</legend>
      <input id="stars" type="checkbox" name="weapons" value="stars">
      <label for="stars">Throwing Stars</label><br>
      <input id="nunchucks" type="checkbox" name="weapons" value="nunchucks">
      <label for="nunchucks">Nunchucks</label><br>
      <input id="sai" type="checkbox" name="weapons" value="sai">
      <label for="sai">Sai Set</label><br>
      <input id="sword" type="checkbox" name="weapons" value="sword">
      <label for="sword">Sword</label>
      </fieldset>
      <br>
      <input type="submit" name="submit" value="Submit">
    </form><br>
  </section>
  <footer>&copy; 2018 Camper Cat</footer>
</body>
```

# --solutions--

```html
<head>
  <style>
  p:focus {
    background-color: yellow;
  }
  </style>
</head>
<body>
  <header>
    <h1>Ninja Survey</h1>
  </header>
  <section>
    <form>


      <p tabindex="0">Instructions: Fill in ALL your information then click <b>Submit</b></p>


      <label for="username">Username:</label>
      <input type="text" id="username" name="username"><br>
      <fieldset>
        <legend>What level ninja are you?</legend>
        <input id="newbie" type="radio" name="levels" value="newbie">
        <label for="newbie">Newbie Kitten</label><br>
        <input id="intermediate" type="radio" name="levels" value="intermediate">
        <label for="intermediate">Developing Student</label><br>
        <input id="master" type="radio" name="levels" value="master">
        <label for="master">9th Life Master</label>
      </fieldset>
      <br>
      <fieldset>
      <legend>Select your favorite weapons:</legend>
      <input id="stars" type="checkbox" name="weapons" value="stars">
      <label for="stars">Throwing Stars</label><br>
      <input id="nunchucks" type="checkbox" name="weapons" value="nunchucks">
      <label for="nunchucks">Nunchucks</label><br>
      <input id="sai" type="checkbox" name="weapons" value="sai">
      <label for="sai">Sai Set</label><br>
      <input id="sword" type="checkbox" name="weapons" value="sword">
      <label for="sword">Sword</label>
      </fieldset>
      <br>
      <input type="submit" name="submit" value="Submit">
    </form><br>
  </section>
  <footer>&copy; 2018 Camper Cat</footer>
</body>
```
