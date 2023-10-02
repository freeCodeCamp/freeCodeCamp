---
id: 587d7b8e367417b2b2512b5d
title: 命令型コードの使用に関する危険性を理解する
challengeType: 1
forumTopicId: 301241
dashedName: understand-the-hazards-of-using-imperative-code
---

# --description--

関数型プログラミングは良い習慣です。 コードが管理しやすくなり、バグの潜入を防ぎます。 しかし、そうした習慣に行き着く前に、命令型プログラミングのアプローチについて、問題が起こりそうな場所を明らかにしておきましょう。

英語 (および他の多くの言語) では、コマンドを与えるために命令型の時制が使用されています。 同様に、プログラミングにおける命令型のスタイルは、コンピューターにタスクを実行するための一連のステートメントを与えます。

多くの場合、ステートメントはプログラムの状態を変更し、グローバル変数を更新したりします。 典型的な例としては、`for` ループの記述で配列のインデックスを反復処理するための正確な方向を示すことなどがあります。

対照的に、関数型プログラミングは宣言型プログラミングの一形態です。 メソッドや関数を呼び出すことによって、実行したいことをコンピューターに伝えます。

JavaScript には、一般的なタスクを処理するためにあらかじめ定義されたメソッドが多数用意されているため、コンピューターがそれらのタスクをどのように実行すべきかを記述する必要はありません。 たとえば、前述の `for` ループを使用する代わりに、配列の反復の詳細を処理する `map` メソッドを呼び出すことができます。 これは、「デバッグ」セクションで説明した「オフバイワンエラー」などのセマンティックエラーを回避するのに役立ちます。

たとえば、ブラウザーでウェブを閲覧していて、開いたタブを追跡したい、というシナリオを考えてみましょう。 簡単なオブジェクト指向のコードを使ってそれをモデル化してみます。

Window オブジェクトはタブで構成されており、通常は複数の Window が開いています。 各 Window オブジェクトで開いているそれぞれのサイトのタイトルを、配列に保持しています。 ブラウザーで作業した後 (新しいタブを開く、ウィンドウをマージする、タブを閉じるなど)、まだ開いているタブを印刷する必要があるとします。 閉じたタブを配列から削除し、新しいタブを末尾に追加します (説明を簡単にするため)。

コードエディターでは、`tabOpen()`、`tabClose()`、および `join()` に対応した関数を使用して、この機能を実装しています。 配列 `tabs` は、開いているページの名前を格納する Window オブジェクトの一部です。

# --instructions--

エディターでコードの内容を調べてみてください。 この中ではプログラムに副作用をもたらすメソッドを使用しており、不正な動作を引き起こします。 `finalTabs.tabs` に格納される、開いているタブの最終的なリストは、`['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium', 'new tab', 'Netflix', 'YouTube', 'Vine', 'GMail', 'Work mail', 'Docs', 'freeCodeCamp', 'new tab']` となるはずですが、コードによって生成されるリストは少し異なります。

正しいタブが削除されるように `Window.prototype.tabClose` を変更してください。

# --hints--

`finalTabs.tabs` は `['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium', 'new tab', 'Netflix', 'YouTube', 'Vine', 'GMail', 'Work mail', 'Docs', 'freeCodeCamp', 'new tab']` となる必要があります。

```js
assert.deepEqual(finalTabs.tabs, [
  'FB',
  'Gitter',
  'Reddit',
  'Twitter',
  'Medium',
  'new tab',
  'Netflix',
  'YouTube',
  'Vine',
  'GMail',
  'Work mail',
  'Docs',
  'freeCodeCamp',
  'new tab'
]);
```

# --seed--

## --seed-contents--

```js
// tabs is an array of titles of each site open within the window
const Window = function(tabs) {
  this.tabs = tabs; // We keep a record of the array inside the object
};

// When you join two windows into one window
Window.prototype.join = function(otherWindow) {
  this.tabs = this.tabs.concat(otherWindow.tabs);
  return this;
};

// When you open a new tab at the end
Window.prototype.tabOpen = function(tab) {
  this.tabs.push('new tab'); // Let's open a new tab for now
  return this;
};

// When you close a tab
Window.prototype.tabClose = function(index) {

  // Only change code below this line

  const tabsBeforeIndex = this.tabs.splice(0, index); // Get the tabs before the tab
  const tabsAfterIndex = this.tabs.splice(index + 1); // Get the tabs after the tab

  this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); // Join them together

  // Only change code above this line

  return this;
 };

// Let's create three browser windows
const workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']); // Your mailbox, drive, and other work sites
const socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']); // Social sites
const videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']); // Entertainment sites

// Now perform the tab opening, closing, and other operations
const finalTabs = socialWindow
  .tabOpen() // Open a new tab for cat memes
  .join(videoWindow.tabClose(2)) // Close third tab in video window, and join
  .join(workWindow.tabClose(1).tabOpen());
console.log(finalTabs.tabs);
```

# --solutions--

```js
const Window = function(tabs) {
  this.tabs = tabs;
};

Window.prototype.join = function(otherWindow) {
  this.tabs = this.tabs.concat(otherWindow.tabs);
  return this;
};

Window.prototype.tabOpen = function(tab) {
  this.tabs.push('new tab');
  return this;
};

Window.prototype.tabClose = function(index) {
  const tabsBeforeIndex = this.tabs.slice(0, index);
  const tabsAfterIndex = this.tabs.slice(index + 1);

  this.tabs = tabsBeforeIndex.concat(tabsAfterIndex);
  return this;
 };

const workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']);
const socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']);
const videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']);

const finalTabs = socialWindow
  .tabOpen()
  .join(videoWindow.tabClose(2))
  .join(workWindow.tabClose(1).tabOpen());
```
