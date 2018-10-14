---
title: Search and Replace
localeTitle: 搜索和替换
---
# 在Vim中搜索和替换

在vim中搜索和替换将搜索给定文本模式的所有实例并将其替换为字符串。

### 命令键

用于搜索和替换的命令：

*   `:substitute`
*   `:s` （替代的简短缩写形式）

### 命令结构

用于搜索和替换的结构：

`:[range]` `s` / `[pattern]` / `[string]` / `[flags]` `[count]`

哪里…

*   `[range]`表示要搜索的行（例如`1` ：第一行， `$` ：最后一行， `%` ：所有行）。
*   `[pattern]`是要搜索的文本模式。
*   `[string]`是将替换文本模式的字符串。
*   `[flags]`打开其他搜索和替换选项（例如`c` ：确认替换， `g` ：替换每行中的所有出现， `i` ：忽略大小写）。
*   `[count]`从`[range]`的最后一行开始替换`[count]`行（如果省略`[range]`则替换当前行）。

### 常见例子

下面列出了一些常见的搜索和替换示例：

*   `:s/foo/bar/`将当前行中的第一个'foo'更改为'bar'。
*   `:s/foo/bar/g`将当前行中的每个'foo'更改为'bar'。
*   `:%s/foo/bar/g`将所有行中的每个'foo'更改为'bar'。
*   `:13s/foo/bar/g`将第13行中的每个'foo'更改为'bar'。
*   `:%s/foo/bar/cgi`将所有行中的每个'foo'更改为'bar'。