---
title: Extensible Markup Language (XML)
localeTitle: 可扩展标记语言（XML）
---
## 可扩展标记语言（XML）

XML代表可扩展标记语言。它是可扩展的，因为它不使用预定义的标记集来识别结构组件，而是提供了一种定义这种标记集的机制。该语言的主要目的是共享数据。与HTML不同，在XML中没有预定义的标签和标签集指定含义，而不是表示。

\## XML的语法 XML语法是指确定如何编写XML应用程序的规则。 XML语法非常简单，这使得XML非常容易学习。 XML文档必须包含一个根元素，该元素是所有其他元素的父元素：
```
<root> 
  <child> 
    <subchild>.....</subchild> 
  </child> 
 </root> 
```

#### XML必须具有根元素

上面的语法显示了创建XML代码时必需的根元素。这可以通过以下示例显示： -
```
<?xml version="1.0" encoding="UTF-8"?> 
 <note> 
  <to>Tove</to> 
  <from>Jani</from> 
  <heading>Reminder</heading> 
  <body>Don't forget me this weekend!</body> 
 </note> 
```

在这个例子中，'note'是根元素。

*   使用XML的优点：
    
    *   简单性 - XML文档是普通的文本文件，可以使用任何文本编辑器创建和编辑。
    *   供应商独立性
    *   平台独立性
    *   广泛的基础设施
*   使用XML的缺点：
    
*   冗长而繁琐的语法
    
*   存储效率极低
    

在计算机语言中，可扩展标记语言（XML）定义了一组规则或一组规则，这些规则稍后用于以机器和人类可读的格式编码文档。

XML和HTML之间存在一个主要因素，它们使它们彼此不同。 XML旨在传递特定信息，仅关注该信息。 HTML专注于显示特定信息，如设计和所有这些信息。

此外，XML不使用HTML使用的预定义标记。它使用用户定义的标签。

以下是XML引起的简单性：

1.  它简化了数据共享
2.  它简化了数据传输
3.  它简化了平台变更
4.  它简化了数据可用性

它的主要成就是它最早于1998年2月成为W3C推荐标准。

### 更多信息

*   [XML简介](https://developer.mozilla.org/en-US/docs/XML_introduction)
*   [XML简介](https://www.w3schools.com/xml/xml_whatis.asp)