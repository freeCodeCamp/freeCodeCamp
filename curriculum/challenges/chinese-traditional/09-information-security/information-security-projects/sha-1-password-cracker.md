---
id: 5e46f983ac417301a38fb933
title: SHA-1 密碼破解器
challengeType: 10
forumTopicId: 462374
helpCategory: Python
dashedName: sha-1-password-cracker
---

# --description--

你將使用<a href="https://replit.com/github/freeCodeCamp/boilerplate-SHA-1-password-cracker" target="_blank" rel="noopener noreferrer nofollow">我們在 Replit 的初始化項目</a>來完成這個項目。

-   首先在 Replit 中導入項目。
-   接着，你將看到一個 `.replit` 窗口。
-   選擇 `Use run command` 並點擊 `Done` 按鈕。


我們仍在開發 Python 課程的交互式教學部分。 目前，你可以在 YouTube 上通過 freeCodeCamp.org 上傳的一些視頻學習這個項目相關的知識。

- <a href="https://www.freecodecamp.org/news/python-for-everybody/" target="_blank" rel="noopener noreferrer nofollow">每個人視頻課程的 Python</a> (14小時)

- <a href="https://www.freecodecamp.org/news/learn-python-basics-in-depth-video-course/" target="_blank" rel="noopener noreferrer nofollow">深入學習 Python 基礎知識</a>（4 小時）

- <a href="https://www.freecodecamp.org/news/intermediate-python-course/" target="_blank" rel="noopener noreferrer nofollow">Python 中級課程</a>（6 小時）

# --instructions--

密碼不應以純文本形式存儲。 它們應該存儲爲哈希值，以防萬一密碼列表被泄露。 然而，並不是所有的哈希都是一樣的。

在這個項目中，你將通過創建一個密碼破解器來找出使用 SHA-1 散列的密碼，從而瞭解到良好安全的重要性。

創建一個函數，該函數接受密碼的 SHA-1 哈希值，如果它是使用的前 10,000 個密碼之一，則返回該密碼。 如果 SHA-1 哈希不是數據庫中的密碼，則返回“密碼不在數據庫中”。

該函數應該對 `top-10000-passwords.txt` 中的每個密碼進行散列，並將其與傳遞給函數的散列進行比較。

該函數應採用名爲 `use_salts` 的可選第二個參數。 如果設置爲 true，則文件 `known-salts.txt` 中的每個 salt 字符串，都應該在散列之前，和將它與傳遞給函數的哈希值進行比較之前，添加到 `top-10000-passwords.txt` 中的每個密碼的之前和之後。

以下是一些用於測試該功能的散列密碼：

- `b305921a3723cd5d70a375cd21a61e60aabb84ec` 應該返回 “sammy123”
- `c7ab388a5ebefbf4d550652f1eb4d833e5316e3e` 應該返回 “abacab”
- `5baa61e4c9b93f3f0682250b6cf8331b7ee68fd8` 應該返回 “password”

以下是一些散列密碼，用於在 `use_salts` 設置爲 `True` 時測試該功能：

- `53d8b3dc9d39f0184144674e310185e41a87ffd5` 應該返回 “superman”
- `da5a4e8cf89539e66097acd2f8af128acae2f8ae` 應該返回 “q1w2e3r4t5”
- `ea3f62d498e3b98557f9f9cd0d905028b3b019e1` 應該返回 “bubbles1”

`hashlib` 庫已經爲你導入。 你應該在你的代碼中使用它。 <a href="https://docs.python.org/3/library/hashlib.html" target="_blank" rel="noopener noreferrer nofollow">在此瞭解更多關於 “hashlib” 的信息</a>。

## 開發

在 `password_cracker.py` 中編寫你的代碼。 對於開發，你可以使用 `main.py` 來測試你的代碼。 單擊“運行”按鈕，`main.py` 將運行。

## 測試

此項目的單元測試在 `test_module.py` 中。 爲了你的方便，我們將測試從 `test_module.py` 導入到 `main.py`。 只要你點擊“運行”按鈕，測試就會自動運行。

## 提交

複製項目的 URL 並將其提交給 freeCodeCamp。

# --hints--

它應該通過所有的 Python 測試。

```js

```

# --solutions--

```py
  # Python challenges don't need solutions,
  # because they would need to be tested against a full working project.
  # Please check our contributing guidelines to learn more.
```
