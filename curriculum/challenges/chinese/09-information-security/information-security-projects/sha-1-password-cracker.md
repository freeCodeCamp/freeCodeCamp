---
id: 5e46f983ac417301a38fb933
title: SHA-1 密码破解器
challengeType: 10
forumTopicId: 462374
helpCategory: Python
dashedName: sha-1-password-cracker
---

# --description--

你将使用<a href="https://replit.com/github/freeCodeCamp/boilerplate-SHA-1-password-cracker" target="_blank" rel="noopener noreferrer nofollow">我们在 Replit 的初始化项目</a>来完成这个项目。

-   首先在 Replit 中导入项目。
-   接着，你将看到一个 `.replit` 窗口。
-   选择 `Use run command` 并点击 `Done` 按钮。


我们仍在开发 Python 课程的交互式教学部分。 目前，你可以在 YouTube 上通过 freeCodeCamp.org 上传的一些视频学习这个项目相关的知识。

- <a href="https://www.freecodecamp.org/news/python-for-everybody/" target="_blank" rel="noopener noreferrer nofollow">每个人视频课程的 Python</a> (14小时)

- <a href="https://www.freecodecamp.org/news/learn-python-basics-in-depth-video-course/" target="_blank" rel="noopener noreferrer nofollow">深入学习 Python 基础知识</a>（4 小时）

- <a href="https://www.freecodecamp.org/news/intermediate-python-course/" target="_blank" rel="noopener noreferrer nofollow">Python 中级课程</a>（6 小时）

# --instructions--

密码不应以纯文本形式存储。 它们应该存储为哈希值，以防万一密码列表被泄露。 然而，并不是所有的哈希都是一样的。

在这个项目中，你将通过创建一个密码破解器来找出使用 SHA-1 散列的密码，从而了解到良好安全的重要性。

创建一个函数，该函数接受密码的 SHA-1 哈希值，如果它是使用的前 10,000 个密码之一，则返回该密码。 如果 SHA-1 哈希不是数据库中的密码，则返回“密码不在数据库中”。

该函数应该对 `top-10000-passwords.txt` 中的每个密码进行散列，并将其与传递给函数的散列进行比较。

该函数应采用名为 `use_salts` 的可选第二个参数。 如果设置为 true，则文件 `known-salts.txt` 中的每个 salt 字符串，都应该在散列之前，和将它与传递给函数的哈希值进行比较之前，添加到 `top-10000-passwords.txt` 中的每个密码的之前和之后。

以下是一些用于测试该功能的散列密码：

- `b305921a3723cd5d70a375cd21a61e60aabb84ec` 应该返回 “sammy123”
- `c7ab388a5ebefbf4d550652f1eb4d833e5316e3e` 应该返回 “abacab”
- `5baa61e4c9b93f3f0682250b6cf8331b7ee68fd8` 应该返回 “password”

以下是一些散列密码，用于在 `use_salts` 设置为 `True` 时测试该功能：

- `53d8b3dc9d39f0184144674e310185e41a87ffd5` 应该返回 “superman”
- `da5a4e8cf89539e66097acd2f8af128acae2f8ae` 应该返回 “q1w2e3r4t5”
- `ea3f62d498e3b98557f9f9cd0d905028b3b019e1` 应该返回 “bubbles1”

`hashlib` 库已经为你导入。 你应该在你的代码中使用它。 <a href="https://docs.python.org/3/library/hashlib.html" target="_blank" rel="noopener noreferrer nofollow">在此了解更多关于 “hashlib” 的信息</a>。

## 开发

在 `password_cracker.py` 中编写你的代码。 对于开发，你可以使用 `main.py` 来测试你的代码。 单击“运行”按钮，`main.py` 将运行。

## 测试

此项目的单元测试在 `test_module.py` 中。 为了你的方便，我们将测试从 `test_module.py` 导入到 `main.py`。 只要你点击“运行”按钮，测试就会自动运行。

## 提交

复制项目的 URL 并将其提交给 freeCodeCamp。

# --hints--

它应该通过所有的 Python 测试。

```js

```

# --solutions--

```py
  # Python challenges don't need solutions,
  # because they would need to be tested against a full working project.
  # Please check our contributing guidelines to learn more.
```
