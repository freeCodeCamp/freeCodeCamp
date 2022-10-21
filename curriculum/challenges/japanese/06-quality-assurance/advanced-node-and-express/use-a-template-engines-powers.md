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

 Pug is all about using whitespace and tabs to show nested elements and cutting down on the amount of code needed to make a beautiful site. Read the Pug documentation for more information on usage and syntax.

 Here is an example:

 ```html
 <!--Typing this using Pug-->
 head
    script(type='text/javascript').
      if (foo) bar(1 + 5);
  body
    if youAreUsingPug
        p You are amazing
      else
        p Get on it!

<!--will lead to creating this code-->
  <head>
    <script type="text/javascript">
      if (foo) bar(1 + 5);
    </script>
  </head>
  <body>
    <p>You are amazing</p>
  </body>
  ```

プロジェクトに含まれている pug ファイル `index.pug` では、変数 `title` と `message` を使用しました。

これらをサーバーから渡すには、`res.render` への 2 番目の引数として、変数とその値を持つオブジェクトを追加する必要があります。 たとえば、インデックスビューの変数を設定するために、`{title: 'Hello', message: 'Please login'}` というオブジェクトを渡すことができます。

コードは `res.render(process.cwd() + '/views/pug/index', {title: 'Hello', message: 'Please login'});` のようになります。これでページを更新すると、`index.pug` ファイルに配置されているビュー内の正しい場所に、これらの値がレンダーされるはずです！

正しいと思ったら、ページを送信してください。 エラーが発生している場合は、ここまでに完了したプロジェクトを<a href="https://gist.github.com/camperbot/4af125119ed36e6e6a8bb920db0c0871" target="_blank" rel="noopener noreferrer nofollow">こちら</a>で確認できます。

# --hints--

Pug で変数を正しくレンダーする必要があります。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/').then(
    (data) => {
      assert.match(
        data,
        /pug-variable("|')>Please login/gi,
        'Your projects home page should now be rendered by pug with the projects .pug file unaltered'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

# --solutions--

```js
/**
  Backend challenges don't need solutions, 
  because they would need to be tested against a full working project. 
  Please check our contributing guidelines to learn more.
*/
```
