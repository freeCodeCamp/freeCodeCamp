---
title: Ruby Symbols
localeTitle: Ruby符号
---
## Ruby符号

符号看起来像变量名称，但它以冒号为前缀。示例 - ：action，：line\_items。您不必预先声明符号，并保证它们是唯一的。没有必要为符号分配某种值 - Ruby会为您处理这些问题。 Ruby还保证无论程序中出现何种位置，特定符号都具有相同的值。

或者，你可以认为冒号是指“命名的东西”所以：id是“名为id的东西”。您还可以想到：id表示变量id的名称，而plain id表示变量的值。

例如：因此，如果Fred是一个上下文中的常量，另一个中的方法，以及第三个中的类，则Symbol：Fred将是所有三个上下文中的同一个对象。

```ruby
module One 
  class Fred 
  end 
  $f1 = :Fred 
 end 
 module Two 
  Fred = 1 
  $f2 = :Fred 
 end 
 def Fred() 
 end 
 $f3 = :Fred 
 $f1.object_id   #=> 2514190 
 $f2.object_id   #=> 2514190 
 $f3.object_id   #=> 2514190 
```

## 使用符号

您可以识别Ruby符号，因为它将是一个以：开头的单词。

到目前为止，我们已经将它们视为Hash中的关键（使用Ruby中的哈希）：

```ruby
person = {:name => "Philip"} 
```

所以我们要做的第一件事就是检查一个Symbol，看看它使用的是什么类：

```ruby
:hello.class 
 => Symbol 
 
 "hello".class 
 => String 
```

所以我们可以看到符号和字符串是两个不同对象的实例。

您可以调用类似String的方法，例如`upcase` ， `downcase`和`capitalize`符号：

```ruby
:hello.upcase 
 => :HELLO 
 
 :HELLO.downcase 
 => :hello 
 
 :hello.capitalize 
 => :Hello 
```

## 为什么要使用Symbol而不是String？

因此，如果一个符号只是一个不可变的字符串，为什么要使用它，为什么在Ruby中有一个特殊的区别？

## 符号是不可改变的

首先，其中一个重要原因是，如上所述，符号是不可变的。当值可能发生变化时，应用程序中会出现无法预料的错误。如果您需要确保对象的值永远不会改变，那么使用不可变对象会更安全。

但是，话虽如此，可以通过调用`freeze`方法在Ruby中使String不可变：

```ruby
name = "Philip" 
 => "Philip" 
 
 name.freeze 
 => "Philip" 
 
 name << "Jim" 
 RuntimeError: can't modify frozen String 
```

正如您在上面的示例中所看到的，一旦在String实例上调用freeze方法，就无法再对其进行修改。

那么为什么你会使用Symbols而不是字符串呢？

#### 符号性能更好

在某些情况下，在字符串上使用符号的第二个原因是因为符号性能要好得多。

例如：

```ruby
philip".object_id 
 => 70288511587360 
 "philip".object_id 
 => 70288504327720 
 
 :philip.object_id 
 => 539368 
 :philip.object_id 
 => 539368 
```

当您创建具有相同值的两个String对象时，这两个对象将被视为两个不同的对象。创建符号时，引用符号将始终使用相同的对象。

这对于性能来说要好得多，因为同一个String对象将被反复创建和销毁，而实际上每次都可以重复使用相同的对象。

#### 公共课堂方法

all\_symbols =>数组单击以切换源 返回当前Ruby符号表中所有符号的数组。

```ruby
Symbol.all_symbols.size    #=> 903 
 Symbol.all_symbols[1,20]   #=> [:floor, :ARGV, :Binding, :symlink, 
                                :chown, :EOFError, :$;, :String, 
                                :LOCK_SH, :"setuid?", :$<, 
                                :default_proc, :compact, :extend, 
                                :Tms, :getwd, :$=, :ThreadGroup, 
                                :wait2, :$>] 
```

#### 更多信息：

[Ruby符号文档](http://ruby-doc.org/core-2.5.1/Symbol.html)