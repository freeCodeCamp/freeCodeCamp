---
id: 5e46f979ac417301a38fb932
title: 端口扫描器
challengeType: 10
forumTopicId: 462372
helpCategory: Python
dashedName: port-scanner
---

# --description--

你将使用<a href="https://replit.com/github/freeCodeCamp/boilerplate-port-scanner" target="_blank" rel="noopener noreferrer nofollow">我们在 Replit 的初始化项目</a>来完成这个项目。

-   首先在 Replit 中导入项目。
-   接着，你将看到一个 `.replit` 窗口。
-   选择 `Use run command` 并点击 `Done` 按钮。


我们仍在开发 Python 课程的交互式教学部分。 目前，你可以在 YouTube 上通过 freeCodeCamp.org 上传的一些视频学习这个项目相关的知识。

- <a href="https://www.freecodecamp.org/news/python-for-everybody/" target="_blank" rel="noopener noreferrer nofollow">每个人视频课程的 Python</a> (14小时)

- <a href="https://www.freecodecamp.org/news/learn-python-basics-in-depth-video-course/" target="_blank" rel="noopener noreferrer nofollow">深入学习 Python 基础知识</a>（4 小时）

- <a href="https://www.freecodecamp.org/news/intermediate-python-course/" target="_blank" rel="noopener noreferrer nofollow">Python 中级课程</a>（6 小时）

# --instructions--

使用 Python 创建一个端口扫描器。

在 `port_scanner.py` 文件中，创建一个名为 `get_open_ports` 的函数，它接受一个 `target` 参数和一个 `port_range` 参数。 `target` 可以是 URL 或 IP 地址。 `port_range` 是两个数字的列表，表示要检查的端口范围的第一个和最后一个数字。

以下是如何调用该函数的示例：

```py
get_open_ports("209.216.230.240", [440, 445])
get_open_ports("www.stackoverflow.com", [79, 82])
```

该函数应返回给定范围内的开放端口列表。

`get_open_ports` 函数还应采用可选的第三个参数 `True` 来表示“详细”模式。 如果将其设置为 true，则该函数应返回描述性字符串而不是端口列表。

以下是详细模式下应返回的字符串格式（`{}` 中的文本表示应显示的信息）：

```bash
Open ports for {URL} ({IP address})
PORT     SERVICE
{port}   {service name}
{port}   {service name}
```

你可以使用 `common_ports.py` 中的字典为每个端口获取正确的服务名称。

例如，如果函数是这样调用的：

```py
port_scanner.get_open_ports("scanme.nmap.org", [20, 80], True)
```

它应该返回以下内容：

```bash
Open ports for scanme.nmap.org (45.33.32.156)
PORT     SERVICE
22       ssh
80       http
```

确保包含正确的间距和换行符。

如果传入 `get_open_ports` 函数的 URL 无效，该函数应返回字符串：“Error: Invalid hostname”。

如果传入 `get_open_ports` 函数的 IP 地址无效，该函数应返回字符串：“Error:  Invalid IP address”。

## 开发

在 `port_scanner.py` 中编写你的代码。 对于开发，你可以使用 `main.py` 来测试你的代码。 单击“运行”按钮，`main.py` 将运行。

## 测试

这个项目的单元测试在 `test_module.py` 中。 为了你的方便，我们将测试从 `test_module.py` 导入到 `main.py`。 只要你点击“运行”按钮，测试就会自动运行。

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
