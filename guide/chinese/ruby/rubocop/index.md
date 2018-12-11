---
title: Rubocop
localeTitle: Rubocop
---
[Rubocop](https://github.com/bbatsov/rubocop)是一种静态分析工具 [Ruby](https://www.ruby-lang.org/en/) 。这是什么意思？这意味着Rubocop 将“读取”您的代码（而不是运行它，因此'静态'部分 （名称），并分析它。 Rubocop使用的分析规则来自 [Ruby社区风格指南](https://github.com/bbatsov/ruby-style-guide) 。

样式指南是一组关于如何编写代码的具体建议 更具可读性，更具表现力，更传统。作为一个社区，它 如果我们能够轻松地阅读其他任何人的代码，那将是非常棒的，他们可以 轻松阅读我们的这就是Rubocop帮助我们做的事情。这种工具是 总是有价值的，但是当你学习Ruby时它特别有用 你可能编码哪个是_正确的_ ，但不符合Ruby惯例， 或者没有利用Ruby的一些更强大的功能。

最有用的是，Rubocop可以自动修复许多次要警告 - 比如 间距不正确。这在代码审查之前非常有用，因为它意味着你的 其他开发人员可以专注于更高层次的关注，而不必浪费 在语法问题上的时间。

## 使用Rubocop

### 安装

Rubocop作为Gem交付，所以在一个使用Bundler的典型项目中 将它添加到您的`Gemfile`的开发部分：
```
group :development do 
  gem rubocop 
 end 
```

这意味着使用您的项目的任何人都将拥有相同版本的Rubocop，并且 每个人都会同意目前的最佳做法。

### 用法

在每次提交之前，我都想检查我新修改的代码是否符合要求 社区标准，只需运行：
```
rubocop 
```

这将输出有关您的代码的警告列表。

向Rubocop寻求更多帮助会很有帮助：
```
rubocop --extra-details --display-cop-names 
```

（您可以将它们添加到`.rubocop`文件中以使其成为默认值。）

许多编辑将允许您集成Rubocop，它可以立即提供 编写代码时的反馈。

### 修复问题

假设我写了一些新代码;在我提交之前，我可能会决定 检查它是否符合指南：

```shell
rubocop <my new file> 
```

我可以手动编辑建议的更改，或者我可以要求Rubocop修复 小问题自动：
```
rubocop --auto-correct 
```

### 仅运行某些警察

每个社区指南都以Rubocop“警察”的形式实施。在工作时 遗留的代码库在引入Rubocop时可能会被警告淹没。 在这种情况下，只运行一个警察通常是有用的 代码库，并在继续下一个指南之前检查这些更改 例：
```
rubocop --auto-correct --only 'Layout/EmptyLineAfterMagicComment' 
```

### 文本编辑器集成

Rubocop可以与Vim，Visual Studio Code，Atom和其他文本编辑器集成。完整列表可以在[这里](https://rubocop.readthedocs.io/en/latest/integration_with_other_tools/)找到。