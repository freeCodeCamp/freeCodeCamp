---
id: 587d78b0367417b2b2512b08
title: メディアクエリを作成する
challengeType: 0
videoUrl: 'https://scrimba.com/p/pzrPu4/cqwKrtm'
forumTopicId: 301139
dashedName: create-a-media-query
---

# --description--

メディアクエリは CSS3 で導入された新しい手法で、異なるビューポートサイズに基づいてコンテンツの表示を変更するものです。 ビューポートとは、Web ページでユーザーが見ることが可能な領域のことであり、サイトアクセス時に使用されているデバイスによって異なります。

メディアクエリはメディアタイプで構成されており、そのメディアタイプがドキュメントを表示しているデバイスのタイプと一致する場合、該当するスタイルが適用されます。 メディアクエリ内に必要な数だけセレクターやスタイルを指定できます。

下記はデバイスの幅が `100px` 以下の場合にコンテンツを返すメディアクエリの例です:

```css
@media (max-width: 100px) { /* CSS Rules */ }
```

そして次のメディアクエリは、デバイスの高さが `350px` 以上である場合にコンテンツを返します:

```css
@media (min-height: 350px) { /* CSS Rules */ }
```

メディアクエリ内の CSS が適用されるのは、メディアタイプが使用中デバイスのタイプと一致する場合のみであることに注意してください。

# --instructions--

デバイスの高さが `800px` 以下の場合に `p` タグの `font-size` が `10px` になるように、メディアクエリを追加してください。

# --hints--

`800px` 以下の `height` を持つデバイスに対する `@media` クエリを宣言する必要があります。

```js
const media = new __helpers.CSSHelp(document).getCSSRules('media');
assert(media.some(x => x.media?.mediaText?.includes('(max-height: 800px)')));
```

デバイスの `height` が `800px` 以下である場合、`p` 要素の `font-size` が `10px` である必要があります。

```js
const rules = new __helpers.CSSHelp(document).getRuleListsWithinMedia('(max-height: 800px)');
assert(rules?.find(x => x.selectorText === 'p')?.style?.fontSize === "10px");
```

デバイスの `height` が `800px` 以上である場合、`p` 要素の `font-size` は初期値の `20px` である必要があります。

```js
const ifPFirst = new __helpers.CSSHelp(document).getCSSRules()?.find(x => x?.selectorText === 'p' || x?.media);
assert(ifPFirst?.style?.fontSize === '20px');
```

# --seed--

## --seed-contents--

```html
<style>
  p {
    font-size: 20px;
  }

  /* Only change code below this line */

  /* Only change code above this line */
</style>

<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis tempus massa. Aenean erat nisl, gravida vel vestibulum cursus, interdum sit amet lectus. Sed sit amet quam nibh. Suspendisse quis tincidunt nulla. In hac habitasse platea dictumst. Ut sit amet pretium nisl. Vivamus vel mi sem. Aenean sit amet consectetur sem. Suspendisse pretium, purus et gravida consequat, nunc ligula ultricies diam, at aliquet velit libero a dui.</p>
```

# --solutions--

```html
<style>
  p {
    font-size: 20px;
  }

  @media (max-height: 800px) {
    p {
      font-size: 10px;
    }
  }
</style>

<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis tempus massa. Aenean erat nisl, gravida vel vestibulum cursus, interdum sit amet lectus. Sed sit amet quam nibh. Suspendisse quis tincidunt nulla. In hac habitasse platea dictumst. Ut sit amet pretium nisl. Vivamus vel mi sem. Aenean sit amet consectetur sem. Suspendisse pretium, purus et gravida consequat, nunc ligula ultricies diam, at aliquet velit libero a dui.</p>
```
