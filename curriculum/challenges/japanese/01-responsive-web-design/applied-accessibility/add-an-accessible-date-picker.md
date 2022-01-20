---
id: 587d778b367417b2b2512aa8
title: 使いやすい日付選択フィールドを追加する
challengeType: 0
videoUrl: 'https://scrimba.com/c/cR3bRbCV'
forumTopicId: 301008
dashedName: add-an-accessible-date-picker
---

# --description--

フォームはしばしば `input` フィールドをもちます。これにより様々なフォームコントロールを作成することができます。 この要素の `type` 属性は、どの種類の `input` 要素が作成されるかを表します。

`text` と `submit` タイプには以前のチャレンジで気づいたかもしれません。そして HTML5 では新しい指定オプションとして `date` フィールドが導入されました。 ブラウザのサポート状況に応じて、`input` にフォーカスがある場合、全てのユーザーにとってフォームへの記入が簡単になる日付選択フィールドが表示されます。

古いブラウザでは、このタイプはデフォルトで `text` になるため、念の為 `label` や `placeholder` を使って期待する日付フォーマットをユーザーに伝えるといいでしょう。

例:

```html
<label for="input1">Enter a date:</label>
<input type="date" id="input1" name="input1">
```

# --instructions--

Camper Cat は Mortal Kombatトーナメントを実施しており、競技参加者にどの日付が最も良いか尋ねたいと思っています。 `input` タグを追加しましょう。`type` 属性には `date` を、`id` 属性には `pickdate`を、`name` 属性には `date` を設定してください。

# --hints--

日付選択フィールドとして `input` タグを追加します。

```js
assert($('input').length == 2);
```

`input` タグは `date` 値が設定された `type` 属性を持つ必要があります。

```js
assert($('input').attr('type') == 'date');
```

`input` タグは `pickdate` 値が設定された `id` 属性を持つ必要があります。

```js
assert($('input').attr('id') == 'pickdate');
```

`input` タグは `date` 値が設定された `name` 属性を持つ必要があります。

```js
assert($('input').attr('name') == 'date');
```

# --seed--

## --seed-contents--

```html
<body>
  <header>
    <h1>Tournaments</h1>
  </header>
  <main>
    <section>
      <h2>Mortal Kombat Tournament Survey</h2>
      <form>
        <p>Tell us the best date for the competition</p>
        <label for="pickdate">Preferred Date:</label>

        <!-- Only change code below this line -->



        <!-- Only change code above this line -->

        <input type="submit" name="submit" value="Submit">
      </form>
    </section>
  </main>
  <footer>&copy; 2018 Camper Cat</footer>
</body>
```

# --solutions--

```html
<body>
  <header>
    <h1>Tournaments</h1>
  </header>
  <main>
    <section>
      <h2>Mortal Kombat Tournament Survey</h2>
      <form>
        <p>Tell us the best date for the competition</p>
        <label for="pickdate">Preferred Date:</label>
        <input type="date" id="pickdate" name="date">
        <input type="submit" name="submit" value="Submit">
      </form>
    </section>
  </main>
  <footer>&copy; 2018 Camper Cat</footer>
</body>
```
