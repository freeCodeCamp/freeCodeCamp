---
title: Ruby
localeTitle: 红宝石
---
## 什么是Ruby？

Ruby由Yukihiro“Matz”Matsumoto创建，是一种[开源](https://github.com/ruby/ruby) ，动态和解释的脚本语言，用于快速简便的面向对象编程。意思是：

众所周知，它拥有编程语言中[最大的友好社区](https://www.ruby-lang.org/en/community/)之一。

*   能够直接进行操作系统调用
*   开发期间的即时反馈
*   变量声明是不必要的
*   内存管理是自动的
*   一切都是对象
*   模块具有“mixin”功能
*   迭代器和闭包

如果您不熟悉上述一些概念，请继续阅读，不要担心。 Ruby专注于简单性和生产力，具有易于阅读和易于编写的优雅语法，例如：

```ruby
# Quick example of Ruby with Object Oriented Programming 
 class Greeter 
  def initialize(name) 
    @name = name.capitalize 
  end 
 
  def salute 
    puts "Hello #{@name}!" 
  end 
 end 
 
 # Create a new object 
 g = Greeter.new("world") 
 
 # Output "Hello World!" 
 g.salute 
```

## 版

目前的稳定版本是[2.5.1](https://www.ruby-lang.org/en/news/2018/03/28/ruby-2-5-1-released/) 。

## 安装

Mac OS X和许多Linux发行版预先安装了Ruby。要检查系统中是否预先安装了`ruby -v` ，只需在shell上运行`ruby -v` 。有几种方法可以安装Ruby：

*   当您使用类UNIX操作系统时，使用系统的包管理器是最简单的入门方法。但是，打包的Ruby版本通常不是最新版本。
*   安装程序可用于安装特定或多个Ruby版本。还有一个Windows安装程序。
*   管理器可帮助您在系统上的多个Ruby安装之间切换。
*   最后，您还可以从源代码构建Ruby。

要了解如何通过包管理器，安装程序和源安装Ruby，请单击[此处](https://www.ruby-lang.org/en/documentation/installation/) 。 RVM（Ruby Version Manager）和rbenv是管理多个Rubies的最流行的Ruby管理器。如果你被卡在任何地方，请不要担心，只需前往我们的[Gitter聊天室](https://gitter.im/FreeCodeCamp/ruby)并向我们​​询问任何问题。

## IRB

IRB代表Interactive Ruby Shell。缩写irb来自Ruby的文件扩展名为“.rb”的事实，尽管交互式Ruby文件没有“.irb”的扩展名。该程序从命令行启动，允许执行Ruby命令并立即响应，实时进行实验。它具有命令历史记录，行编辑功能和作业控制功能，并且能够通过Internet直接作为shell脚本进行通信，并与实时服务器进行交互。它由Keiju Ishitsuka开发。

```shell
    irb 
    2.3.0 :001 > print "Hello World" 
    Hello World! => nil 
```

## Ruby解释器

Ruby解释器是用于运行Ruby脚本的。如果它可用并且在Unix shell的搜索路径中可以通过键入命令`ruby`来启动它，然后脚本名称将调用解释器并运行脚本。

`hello_campers.rb`

```ruby
    if 'welcome' == 'welcome' 
        print('Hello campers!') 
    end 
```

从命令行：

```shell
    $ ruby hello_campers.rb 
    Hello campers! 
```

## 文档

Ruby有很好的[文档记录](https://www.ruby-lang.org/en/documentation/) 。这些文档包括语言的教程，指南，参考和元信息。  
文档的另一个重要资源是[Ruby Doc](http://ruby-doc.org/core-2.3.0/) 。您应该访问此[链接](https://github.com/airbnb/ruby)以了解有关由AirBnB开发人员编写的Ruby样式指南的更多信息。

Ruby中对初学者的推荐阅读是[为什么（Poignant）Ruby指南](https://poignant.guide/) 这本书在编程书籍中很不寻常。由于有很多奇怪的幽默和叙事方面的轨道有时与这个主题完全无关，因此在学习Ruby基础知识时，这个方法可以让读者受到娱乐。

## 调试

内联`print`语句可用于简单调试：

```ruby
    print some_variable # prints to console 
```

> **...通常，调试程序的最快方法是向源添加一些打印语句：快速编辑 - 测试 - 调试周期使这种简单方法非常有效。**

Ruby还包含更强大的调试工具，例如：

*   [_撬调试_](https://github.com/nixme/pry-debugger)

## 你好，世界！

回到文档，我们可以阅读[`print`](http://ruby-doc.org/core-2.3.0/Kernel.html#method-i-print)方法，它是[内核模块](http://ruby-doc.org/core-2.3.0/Kernel.html)的内置方法之一。

```ruby
    print(obj, ...) → nil 
```

将每个对象打印到$ stdout。非字符串的对象将通过调用其`to_s`方法进行转换。 print的返回值`nil` 。因此，当您在IRB中运行`print "Hello World!` ，输出为：

```shell
    2.3.0 :001 > print "Hello World!" 
    Hello World! 
     => nil 
```

## 框架（宝石）

Ruby有几个用于快速搭建应用程序的框架（gem）。到目前为止最流行的是[Rails](http://rubyonrails.org/) ，它最初于2004年发布.Ruby的其他框架（宝石）包括[Sinatra](http://www.sinatrarb.com/) ， [Lotus](http://lotusrb.org/)和[Volt](http://voltframework.com/) 。这些选项中的每一个都有其发展的优点和缺点，并满足各种需求。

## 用于移动开发的Ruby Framework

要在Ruby中编写跨平台本机应用程序，RUBY MOTION用于使用Ruby编程语言为iOS，Android和OS X开发跨平台本机应用程序。 更多资源来自：http：//www.rubymotion.com/

## 学习Ruby之后会怎么样？

每种编程语言都扮演着重要的角色。您可以为许多开源项目做出贡献，或者在掌握了Ruby之后可以申请一些大公司。许多大型互联网网站，如Basecamp，Airbnb，Bleacher Report，Fab.com，Scribd，Groupon，Gumroad，Hulu，Kickstarter，Pitchfork，Sendgrid，Soundcloud，Square，Yammer，Crunchbase，Slideshare，Funny or Die，Zendesk，Github， Shopify建立在Ruby之上，因此有很多选择。 此外，许多初创公司正在招聘RUby on Rails技能的人，因为没有多少程序员试图学习Ruby。所以，你可能有一个明确的工作在一家初创公司工作。 因此，Ruby是初学者友好的，并且非常难以发现你有很多空缺可以作为开发人员工作。