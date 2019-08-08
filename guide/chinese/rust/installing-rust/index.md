---
title: Installing Rust
localeTitle: 安装Rust
---
# 安装Rust

使用`rustup`是Rust安装的首选。 `rustup`为您的系统安装和管理Rust。

## 在Windows中安装Rust

访问[rustup网站](https://rustup.rs)并下载`rustup-init.exe` 。安装它然后你应该准备好了！

## 在其他操作系统中安装Rust（Mac OS X，Linux，BSD，Unix）

打开终端并输入以下命令：
```shell
curl https://sh.rustup.rs -sSf | sh 
```

这将获取`rustup`安装程序，然后获取您需要的所有内容。

# 验证安装

安装`rustup`将安装与rust相关的所有内容，但最重要的是这意味着安装编译器和包管理器。要验证是否已安装所有内容，请运行以下命令：
```shell
cargo version 
```

你现在可以使用Rust了！

# 更多信息

要了解有关安装过程的更多信息，请访问 https://www.rust-lang.org/en-US/install.html
