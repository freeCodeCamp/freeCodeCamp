---
id: 5cddbfd622f1a59093ec611d
title: 創建一個模塊腳本
challengeType: 6
forumTopicId: 301198
dashedName: create-a-module-script
---

# --description--

起初，JavaScript 幾乎只在 HTML web 扮演一個很小的角色。 今天，一切不同了，很多網站幾乎全是用 JavaScript 所寫。 爲了讓 JavaScript 更模塊化、更整潔以及更易於維護，ES6 引入了在多個 JavaScript 文件之間共享代碼的機制。 它可以導出文件的一部分供其它文件使用，然後在需要它的地方按需導入。 爲了使用這一功能， 需要在 HTML 文檔裏創建一個 `type` 爲 `module` 的腳本。 例子如下：

```html
<script type="module" src="filename.js"></script>
```

使用了 `module` 類型的腳本可以使用 `import` 和 `export` 特性（接下來的挑戰會介紹）。

# --instructions--

給 HTML 文檔添加 `module` 類型的腳本，指定源文件爲 `index.js`。

# --hints--

應該創建一個 `script` 標籤。

```js
assert(code.match(/<\s*script[^>]*>\s*<\/\s*script\s*>/g));
```

`script` 標籤應該有一個值爲 `module` 的 `type` 屬性。

```js
assert(
  code.match(
    /<\s*script\s+[^t]*type\s*=\s*('|")module\1[^>]*>\s*<\/\s*script\s*>/g
  )
);
```

`script` 標籤的 `src` 屬性應該爲 `index.js`。

```js
assert(
  code.match(
    /<\s*script\s+[^s]*src\s*=\s*('|")index\.js\1[^>]*>\s*<\/\s*script\s*>/g
  )
);
```

# --seed--

## --seed-contents--

```html
<html>
  <body>
    <!-- Only change code below this line -->

    <!-- Only change code above this line -->
  </body>
</html>
```

# --solutions--

```html
<html>
  <body>
    <script type="module" src="index.js"></script>
  </body>
</html>
```
