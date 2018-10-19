---
title: Haskell
localeTitle: 哈斯克尔
---
## 什么是Haskell？

Haskell是一种标准化，通用，纯函数式编程语言，具有声明性和强静态类型。

Haskell在数学方面有着深厚的根基，你很快就会学会欣赏它的含义。

## 版

目前最新版本的GHC为8.6（截至2018年10月12日）

## 安装

安装Haskell的推荐方法是使用stack： [stack download](https://docs.haskellstack.org/en/stable/README/#how-to-install) Stack是一个用于开发Haskell项目的跨平台程序。它的目标是Haskellers既新颖又经验丰富。

要真正开始使用Haskell，您需要GHC（The Glasgow Haskell编译器），因此要设置： [堆栈设置](https://docs.haskellstack.org/en/stable/README/#how-to-install://docs.haskellstack.org/en/stable/README/#quick-start-guide)

```shell
stack new my-project 
 cd my-project 
 stack setup 
 stack build 
 stack exec my-project-exe 
```

一句谨慎，尽量不要使用堆栈安装即使它将全局安装包，也不建议这样做，因为不同版本的包与不同版本的GHC兼容。因此，使用堆栈构建使用包的本地副本是最好的方法。

## 你好，世界

```haskell
main :: IO () 
 main = print "Hello Haskell :)" 
```

将上面的代码保存在名为“hello.hs”的文件中并保存。

要编译Hello World示例，这会将我们的haskell代码转换为机器可理解的字节码。

```shell
stack ghc hello.hs 
 ./hello 
```

## 文档

Hackage为Haskell提供了文档

## 想了解更多？

*   Haskell wiki [链接](https://wiki.haskell.org/Haskell)