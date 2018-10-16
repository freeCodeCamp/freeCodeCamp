---
title: Erlang Term Storage
localeTitle: Erlang术语存储
---
## Erlang术语存储

Erlang Term Storage通常被简称为ETS，是OTP内置的内存数据库，可以在Elixir中访问，当您的应用程序在单个节点上运行时，它是Redis等解决方案的强大替代品。

## 快速开始

要创建ETS表，首先需要`tableName = :ets.new(:table_otp_name, [])`表`tableName = :ets.new(:table_otp_name, [])` ，一旦您将表格`tableName = :ets.new(:table_otp_name, [])`您可以：插入数据，查找值，删除数据等。

### IEX的ETS演示

```elixir
iex(1)> myETSTable = :ets.new(:my_ets_table, []) 
 #Reference<0.1520230345.550371329.65846> 
 iex(2)> :ets.insert(myETSTable, {"favoriteWebSite", "freeCodeCamp"}) 
 true 
 iex(3)> :ets.insert(myETSTable, {"favoriteProgrammingLanguage", "Elixir"}) 
 true 
 iex(4)> :ets.i(myETSTable) 
 <1   > {<<"favoriteProgrammingLanguage">>,<<"Elixir">>} 
 <2   > {<<"favoriteWebSite">>,<<"freeCodeCamp">>} 
 EOT  (q)uit (p)Digits (k)ill /Regexp --> 
```

## 坚持

ETS表不是持久的，一旦拥有它的进程终止就会被销毁。如果要持久存储数据，建议使用传统的数据库和/或基于文件的存储。

## 用例

ETS表通常用于缓存应用程序中的数据，例如，从数据库获取的帐户数据可以存储在ETS表中以减少对数据库的查询量。另一个用例是限制Web应用程序中功能的使用 - ETS的快速读写速度使其非常适合。 ETS表是以尽可能低的硬件成本开发高度一致的Web应用程序的强大工具。

#### 更多信息：

*   [elixir-lang.org | Erlang图书馆（ETS）](https://elixir-lang.org/getting-started/erlang-libraries.html#erlang-term-storage)
*   [erlang.org | ETS](http://erlang.org/doc/man/ets.html)