---
id: 587d78b1367417b2b2512b0c
title: タイポグラフィをレスポンシブにする
challengeType: 0
videoUrl: 'https://scrimba.com/p/pzrPu4/crzN7T8'
forumTopicId: 301141
dashedName: make-typography-responsive
---

# --description--

テキストサイズとして `em` や `px` を使用する代わりに、ビューポート単位を使用してレスポンシブなタイポグラフィを作成できます。 ビューポート単位は、パーセンテージと同様に相対単位ですが、これらは異なる項目を基準にします。 ビューポートの単位はデバイスのビューポート寸法 (幅または高さ) からの相対値ですが、パーセンテージは親コンテナー要素のサイズからの相対値です。

4 つの異なるビューポートの単位は次のとおりです:

<ul><li><code>vw</code> (ビューポート幅): <code>10vw</code> はビューポートの幅の 10% になります。</li><li><code>vh</code> (ビューポート高さ): <code>3vh</code> はビューポートの高さの 3% になります。</li><li><code>vmin</code> (ビューポート最小値): <code>70vmin</code> はビューポートの (高さまたは幅のうち) 短い方の 70% になります。</li><li><code>vmax</code> (ビューポート最大値): <code>100vmax</code> はビューポートの (高さまたは幅のうち) 長い方の 100% になります。</li></ul>

ここでは `body` タグをビューポートの幅の 30% に設定する例を示します。

```css
body { width: 30vw; }
```

# --instructions--

`h2` タグの `width` をビューポートの幅の 80% に、段落の `width` をビューポートの短辺の 75% に設定します。

# --hints--

`h2` タグの `width` は 80vw に設定されている必要があります。

```js
assert(
  __helpers
    .removeCssComments(code)
    .match(/h2\s*?{\s*?width:\s*?80vw;\s*?}/g)
);
```

`p` タグの `width` は 75vmin に設定されている必要があります。

```js
assert(
  __helpers
    .removeCssComments(code)
    .match(/p\s*?{\s*?width:\s*?75vmin;\s*?}/g)
);
```

# --seed--

## --seed-contents--

```html
<style>

</style>

<h2>Importantus Ipsum</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis tempus massa. Aenean erat nisl, gravida vel vestibulum cursus, interdum sit amet lectus. Sed sit amet quam nibh. Suspendisse quis tincidunt nulla. In hac habitasse platea dictumst. Ut sit amet pretium nisl. Vivamus vel mi sem. Aenean sit amet consectetur sem. Suspendisse pretium, purus et gravida consequat, nunc ligula ultricies diam, at aliquet velit libero a dui.</p>
```

# --solutions--

```html
<style>
  h2 {
      width: 80vw;
  }
  p {
      width: 75vmin;
  }
</style>

<h2>Importantus Ipsum</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis tempus massa. Aenean erat nisl, gravida vel vestibulum cursus, interdum sit amet lectus. Sed sit amet quam nibh. Suspendisse quis tincidunt nulla. In hac habitasse platea dictumst. Ut sit amet pretium nisl. Vivamus vel mi sem. Aenean sit amet consectetur sem. Suspendisse pretium, purus et gravida consequat, nunc ligula ultricies diam, at aliquet velit libero a dui.</p>
```
