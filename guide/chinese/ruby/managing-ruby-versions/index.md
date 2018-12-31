---
title: Managing Ruby versions
localeTitle: 管理Ruby版本
---
## Ruby已经发生了变化

自20世纪90年代以来，Ruby一直在不断发展，与许多语言一样， 各个版本都有语法更改，因此明确这一点非常重要 关于代码期望的Ruby版本。

可能最明显的变化来自Ruby 1.9;以前，我们写道 像这样的哈希：

```ruby
  { :one => 1, :two => 2, :three => 3 } 
```

使用'hashrocket'运算符（ `=>` ）是如此常见，Ruby 1.9 提供了一个简写：
```
  { one: 1, two: 2, three: 3 } 
```

这个旧代码可以在任何版本上运行，但较新的语法只能在Ruby 1.9+上运行。

## 这是如何引起问题的？

例如，您可能决定使用内部依赖的Gem Ruby 1.9功能;这意味着您的项目现在也依赖于Ruby 1.9 特征。

如果你没有指定你的项目需要哪个版本的Ruby，它可能非常 代码在一台机器上运行而另一台机器运行时会造成混淆。

与大多数语言一样，指定版本是一种良好的做法 您的代码期望的Ruby。这使得管理多个更容易 您的开发机器上的项目，每个项目都期望不同的版本 红宝石。

## 如何指定我的Ruby版本？

有一些很受欢迎的工具，但两者都同意了 共享一个共同的文件。许多Ruby（或Rails）项目都包含一个简单的项目 `.ruby-version`文件，它只是指定版本号， _例如_ ：
```
2.4.2 
```

帮助您管理Ruby版本的常用工具有：

*   [Ruby版本管理器（RVM）](https://rvm.io)
*   [rbenv](https://github.com/rbenv/rbenv)

我们来看看RVM。

### 使用RVM

RVM通常安装在Linux，Unix或MacOS上（ [链接](https://rvm.io) ） 机器，并且非常方便，因为它挂入`cd` （ `c` hange `d` irectory） 命令，当您移动到新项目时，将读取`.ruby-version` 自动，您将自动切换到正确的Ruby版本 在你开始工作之前。

例如，您可能有以下序列：

```shell
% cd ~/projects/older-project 
 % ruby --version 
 
 ruby 2.3.5p376 (2017-09-14 revision 59905) [x86_64-darwin16] 
 
 % cd ~/projects/newer-project 
 % ruby --version 
 
 ruby 2.4.2p198 (2017-09-14 revision 59899) [x86_64-darwin16] 
```

（这些示例来自MacOS机器）