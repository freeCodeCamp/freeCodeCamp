---
id: 587d7b8e367417b2b2512b5d
title: 瞭解使用命令式編程的危害
challengeType: 1
forumTopicId: 301241
dashedName: understand-the-hazards-of-using-imperative-code
---

# --description--

使用函數式編程是一個好的習慣。 它使你的代碼易於管理，避免潛在的 bug。 但在開始之前，先看看命令式編程方法，以強調你可能有什麼問題。

在英語 (以及許多其他語言) 中，命令式時態用來發出指令。 同樣，命令式編程是向計算機提供一套執行任務的聲明。

命令式編程常常改變程序狀態，例如更新全局變量。 一個典型的例子是編寫 `for` 循環，它爲一個數組的索引提供了準確的迭代方向。

相反，函數式編程是聲明式編程的一種形式。 通過調用方法或函數來告訴計算機要做什麼。

JavaScript 提供了許多處理常見任務的方法，所以你無需寫出計算機應如何執行它們。 例如，你可以用 `map` 函數替代上面提到的 `for` 循環來處理數組迭代。 這有助於避免語義錯誤，如調試章節介紹的 "Off By One Errors"。

考慮這樣的場景：你正在瀏覽器中瀏覽網頁，並想操作你打開的標籤。 下面我們來試試用面向對象的思路來描述這種情景。

窗口對象由選項卡組成，通常會打開多個窗口。 窗口對象中每個打開網站的標題都保存在一個數組中。 在對瀏覽器進行了如打開新標籤、合併窗口、關閉標籤之類的操作後，你需要輸出所有打開的標籤。 關掉的標籤將從數組中刪除，新打開的標籤（爲簡單起見）則添加到數組的末尾。

代碼編輯器中顯示了此功能的實現，其中包含 `tabOpen()`，`tabClose()`，和 `join()` 函數。 `tabs` 數組是窗口對象的一部分用於儲存打開頁面的名稱。

# --instructions--

在編輯器中運行代碼。 它使用了有副作用的方法，導致輸出錯誤。 存儲在 `finalTabs.tabs` 中的打開標籤的最終列表應該是 `['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium', 'new tab', 'Netflix', 'YouTube', 'Vine', 'GMail', 'Work mail', 'Docs', 'freeCodeCamp', 'new tab']`，但輸出會略有不同。

修改 `Window.prototype.tabClose` 使其刪除正確的標籤。

# --hints--

`finalTabs.tabs` 應該是 `['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium', 'new tab', 'Netflix', 'YouTube', 'Vine', 'GMail', 'Work mail', 'Docs', 'freeCodeCamp', 'new tab']`

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
