---
id: 587d78b0367417b2b2512b05
title: テクニカルドキュメントページを作成する
challengeType: 3
forumTopicId: 301146
dashedName: build-a-technical-documentation-page
---

# --description--

**目標:** こちら <https://codepen.io/freeCodeCamp/full/NdrKKL> と同様の機能を持つ [CodePen.io](https://codepen.io) アプリを構築します。

以下の[ユーザーストーリー](https://en.wikipedia.org/wiki/User_story)を満たし、すべてのテストがパスするようにしてください。 あなた独自のスタイルを与えてください。

このプロジェクトを完了するために、HTML、JavaScript、CSS を使用することができます。 これまでのレッスンでカバーされた純粋な CSS の練習をするため、純粋な CSS の使用を推奨します。 Bootstrap や SASS を使用しても構いません。 このプロジェクトで追加のテクノロジー (jQuery、React、Angular、Vue など) を使用することは推奨されません。使用する場合は自己責任で使用してください。 React のようなさまざまな技術スタックで作業する機会は他のプロジェクトで得られます。 私達は、このプロジェクトの推奨技術スタックを使用している場合の問題報告は全て受け入れ、修正するように努めます。 ハッピーコーディング！

**ユーザーストーリー #1:** `id="main-doc"` を持ち、ページのメインコンテンツ (テクニカルドキュメント) を含む `main` 要素があります。

**ユーザーストーリー #2:** `#main-doc` 要素内に、それぞれのクラスが `main-section` である複数の `section` 要素があります。 最低でも 5 個必要です。

**ユーザーストーリー #3:** 各 `.main-section` 内の最初の要素は、そのセクションの主なトピックを説明するテキストを含む `header` 要素でなければなりません。

**ユーザーストーリー #4:** クラスが `main-section` の各 `section` 要素は、それぞれの `header` のテキストに対応する id も持つ必要があります。 すべてのスペースはアンダースコアに置き換える必要があります (例: "JavaScript and Java" ヘッダーを含む `section` には対応する `id="JavaScript_and_Java"` が必要です)。

**ユーザーストーリー #5:** `.main-section` 要素は少なくとも (それぞれではなく) 合計で 10 個の `p` 要素を含む必要があります。

**ユーザーストーリー #6:** `.main-section` 要素は少なくとも (それぞれではなく) 合計で 5 個の `code` 要素を含む必要があります。

**ユーザーストーリー #7:** `.main-section` 要素は少なくとも (それぞれではなく) 合計で 5 個の `li` 要素を含む必要があります。

**ユーザーストーリー #8:** `id="navbar"` を持つ `nav` 要素があります。

**ユーザーストーリー #9:** navbar 要素には、テクニカルドキュメントのトピックを説明するテキストを含む `header` 要素が含まれている必要があります。

**ユーザーストーリー #10:** さらに、ナビゲーションバーには `nav-link` のクラスを持つリンク (`a`) 要素が含まれている必要があります。 これはクラス `main-section` の各要素ごとに一つ存在する必要があります。

**ユーザーストーリー #11:** ナビゲーションバーの `header` 要素は navbar のどのリンク (`a`) 要素よりも前に置かれなければなりません。

**ユーザーストーリー #12:** `nav-link` クラスの各要素には、各 `section` 内の `header` テキストに対応するテキストが含まれていなければなりません (例えば、もし "Hello world" セクション / ヘッダーがあるならば、ナビゲーションバーには "Hello world" テキストを含む要素が必要です) 。

**User Story #13:** When I click on a navbar element, the page should navigate to the corresponding section of the `main-doc` element (e.g. If I click on a `nav-link` element that contains the text "Hello world", the page navigates to a `section` element that has that id and contains the corresponding `header`.

**User Story #14:** On regular sized devices (laptops, desktops), the element with `id="navbar"` should be shown on the left side of the screen and should always be visible to the user.

**User Story #15:** My Technical Documentation page should use at least one media query.

You can build your project by <a href='https://codepen.io/pen?template=MJjpwO' target='_blank' rel='nofollow'>using this CodePen template</a> and clicking `Save` to create your own pen. Or you can use this CDN link to run the tests in any environment you like: `https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js`

Once you're done, submit the URL to your working project with all its tests passing.

# --solutions--

```html
// solution required
```
