---
title: ArrayList
localeTitle: 数组列表
---
# 数组列表

ArrayList是_Collection框架的一部分_ 。

_Collection框架_包含所有可以包含一组值的接口和类（类似于[数组](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/arrays.html) ）。 **ArrayList**是此层次结构中的一个类，称为_**Collection对象**_ 。它实现了_List_接口，后者又实现了_Collection_接口。可以在`java.util`包中找到此_Collection_接口。您需要导入此包。

ArrayList是一个用于创建动态数组的类。它比常规数组慢，但允许大量操作。它可以初始化为具有特定大小，或者默认大小为10个单位。

`java ArrayList<String> names = new ArrayList<>(); ArrayList<Integer> ages = new ArrayList<>(5);`

在上面的代码片段中，角度breacket `<>`采用通用数据类型作为参数，指定ArrayList中元素的数据类型。第一个ArrayList `names`被指定为包含_String_元素。因此，只允许包含String元素。它的大小未指定，因此它的默认大小为10.第二个ArrayList `ages`指定它只保存整数。但是ArrayList不能保存基元，它只保存对象。因此，为了使它存储整数，浮点数等，我们可以使用包装类。 `names`的指定大小为5。

由于ArrayList实现了_List_ ，因此可以使用以下语法创建ArrayList： `java List<Integer> students = new ArrayList<>();`

ArrayList是动态的，这意味着它会在需要时增大，如果从中删除元素，它的大小也会缩小。这使得它比普通数组更好用。

ArrayList允许我们随机访问元素。 ArrayList在很多方面类似于_Vector_ 。但它比矢量更快。需要注意的主要事项是 - 矢量比数组快，但ArrayLists不是。

因此，当选择两者之间时 - 如果速度至关重要，则应考虑Vector，否则ArrayLists在存储大量元素和有效访问时更好。