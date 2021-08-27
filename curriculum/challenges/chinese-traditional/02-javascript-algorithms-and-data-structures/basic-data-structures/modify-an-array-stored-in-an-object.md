---
id: 587d7b7d367417b2b2512b1f
title: 修改存儲在對象中的數組
challengeType: 1
forumTopicId: 301163
dashedName: modify-an-array-stored-in-an-object
---

# --description--

我們已經學習了 JavaScript 對象的這些基本操作： 添加、修改、移除鍵值對、檢查某個屬性是否存在、遍歷對象的所有屬性。 在繼續學習 JavaScript 的過程中，我們會了解對象的更多用法。 另外，在之後的數據結構課程中，我們還會學習 ES6 的 <dfn>Map</dfn> 和 <dfn>Set</dfn>。 這兩種數據結構與我們現在學到的對象十分類似，但它們在對象的基礎上提供了一些額外的功能。 目前，我們已經學習了數組和對象的基礎知識，讓我們試着來用所學的知識解決一些更復雜的問題。

# --instructions--

請看一下代碼編輯器中我們爲你寫好的對象。 `user` 對象包含 3 個屬性； `data` 對象包含 5 個屬性，其中包含一個叫做 `friends` 的數組。 這就是對象作爲數據結構所展現出的靈活性。 我們已經寫好了 `addFriend` 函數的一部分， 請你完成這個函數，使其接受一個 `user` 對象，將 `friend` 參數中的名字添加到 `user.data.friends` 數組中並返回該數組。

# --hints--

`user` 對象應該包含 `name`、`age` 和 `data` 三個屬性。

```js
assert('name' in user && 'age' in user && 'data' in user);
```

`addFriend` 函數應該接受一個 `user` 對象和一個 `friend` 字符串作爲輸入參數，並將這個字符串插入到 `user` 對象的 `friends` 數組中。

```js
assert(
  (function () {
    let L1 = user.data.friends.length;
    addFriend(user, 'Sean');
    let L2 = user.data.friends.length;
    return L2 === L1 + 1;
  })()
);
```

`addFriend(user, "Pete")` 應該返回 `["Sam", "Kira", "Tomo", "Pete"]`。

```js
assert.deepEqual(
  (function () {
    delete user.data.friends;
    user.data.friends = ['Sam', 'Kira', 'Tomo'];
    return addFriend(user, 'Pete');
  })(),
  ['Sam', 'Kira', 'Tomo', 'Pete']
);
```

# --seed--

## --seed-contents--

```js
let user = {
  name: 'Kenneth',
  age: 28,
  data: {
    username: 'kennethCodesAllDay',
    joinDate: 'March 26, 2016',
    organization: 'freeCodeCamp',
    friends: [
      'Sam',
      'Kira',
      'Tomo'
    ],
    location: {
      city: 'San Francisco',
      state: 'CA',
      country: 'USA'
    }
  }
};

function addFriend(userObj, friend) {
  // Only change code below this line

  // Only change code above this line
}

console.log(addFriend(user, 'Pete'));
```

# --solutions--

```js
let user = {
  name: 'Kenneth',
  age: 28,
  data: {
    username: 'kennethCodesAllDay',
    joinDate: 'March 26, 2016',
    organization: 'freeCodeCamp',
    friends: [
      'Sam',
      'Kira',
      'Tomo'
    ],
    location: {
      city: 'San Francisco',
      state: 'CA',
      country: 'USA'
    }
  }
};

function addFriend(userObj, friend) {
  userObj.data.friends.push(friend);
  return userObj.data.friends;
}
```
