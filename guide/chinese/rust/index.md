---
title: Rust
localeTitle: 锈
---
# 锈

## 介绍

Rust是一种系统编程语言，专注于三个目标：安全性，速度和并发性。它的设计允许您创建具有低级语言性能和控制的程序，但具有强大的高级语言抽象。这些属性使Rust适合那些具有C语言经验并且正在寻找更安全的替代方案的程序员，以及那些正在寻找编写性能更好而不牺牲表现力的代码的Python语言的程序员。 Rust在编译时运行其大部分安全检查和内存管理决策，因此您的程序的运行时性能不会受到影响。这使得它在许多其他语言不擅长的用例中很有用：具有可预测空间和时间要求的程序，嵌入其他语言以及编写低级代码，如设备驱动程序和操作系统。也用于Web应用程序也为Rust包注册表站点[crates.io提供支持](https://www.crates.io) 。

欲了解更多信息，请访问[Rust的主页](https://www.rust-lang.org) 。

## 安装

生锈的开发人员使您可以非常轻松地在系统上安装和管理生锈。这是通过工具`rustup`来实现的，它不仅可以安装防锈编译器`rustc` ，还可以在编译器的稳定版，测试版和夜间版之间轻松切换，并使它们保持最新状态。

官方安装文档可以在[这里](https://doc.rust-lang.org/book/second-edition/ch01-01-installation.html)找到。

### Linux或Mac

如果您正在运行Linux或Mac，最好通过终端安装`rustup` ：

```bash
$ curl https://sh.rustup.rs -sSf | sh 
```

这将下载并运行安装该工具的机器的脚本。下次登录后，安装脚本会自动将Rust添加到系统`PATH` 。

### 视窗

在Windows上，转到[rustup网站](https://rustup.rs)并按照说明下载`rustup-init.exe` 。运行它并按照它给出的其他说明进行操作。

### 更新

一旦安装了`rustup` ，更新到更新的版本很简单。你需要运行的只是：

```bash
$ rustup update 
```

要查看生锈编译器的当前版本号，提交哈希值和提交日期，请运行以下命令：

```bash
$ rustc --version 
 rustc xyz (abcabcabc yyyy-mm-dd) 
```

### 卸载

从系统中卸载生锈就像安装它一样简单：

```bash
$ rustup self uninstall 

```