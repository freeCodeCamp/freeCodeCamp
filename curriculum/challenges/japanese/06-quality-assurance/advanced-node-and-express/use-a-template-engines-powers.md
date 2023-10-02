---
id: 5895f70bf9fc0f352b528e64
title: テンプレートエンジンのパワーを活用する
challengeType: 2
forumTopicId: 301567
dashedName: use-a-template-engines-powers
---

# --description--

テンプレートエンジンを使用する最大の利点の 1 つは、HTML にレンダーする前に変数をサーバーからテンプレートファイルに渡せることです。

Pug ファイルでは変数を使用することができます。それには、変数名を `#{variable_name}` として参照し、要素上の他のテキストとともにインラインで記述します。または、要素に対して `p=variable_name` のように空白を付けずに等号を使用します (この例では変数の値が p 要素のテキストに割り当てられます)。

Pug は、空白とタブを使用してネストされた要素を表し、少ないコード量で美しいサイトを作成しようとするものです。

Take the following Pug code for example:

```pug
head
  script(type='text/javascript').
    if (foo) bar(1 + 5);
body
  if youAreUsingPug
      p You are amazing
    else
      p Get on it!
```

The above yields the following HTML:

```html
<head>
  <script type="text/javascript">
    if (foo) bar(1 + 5);
  </script>
</head>
<body>
  <p>You are amazing</p>
</body>
```

Your `index.pug` file included in your project, uses the variables `title` and `message`.

Pass those from your server to the Pug file by adding an object as a second argument to your `res.render` call with the variables and their values. Give the `title` a value of `Hello` and `message` a value of `Please log in`.

It should look like:

```javascript
res.render('index', { title: 'Hello', message: 'Please log in' });
```

Now refresh your page, and you should see those values rendered in your view in the correct spot as laid out in your `index.pug` file!

完成したと思ったら、ページを送信してください。 エラーが発生している場合、<a href="https://forum.freecodecamp.org/t/advanced-node-and-express/567135#use-a-template-engines-power-2" target="_blank" rel="noopener noreferrer nofollow">この時点までの完成形のコードをこちらで確認できます</a>。

# --hints--

Pug で変数を正しくレンダーする必要があります。

```js
async (getUserInput) => {
  const url = new URL("/", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
  assert.match(
    data,
    /pug-variable("|')>Please log in/gi,
    'Your projects home page should now be rendered by pug with the projects .pug file unaltered'
  );
}
```

# --solutions--

```js
/**
  Backend challenges don't need solutions, 
  because they would need to be tested against a full working project. 
  Please check our contributing guidelines to learn more.
*/
```
