---
title: List Pop Method
localeTitle: 列出弹出方法
---
# 流行功能

pop（）方法从列表中删除并返回最后一个元素。有一个可选参数，即要从列表中删除的元素的索引。 如果未指定索引，则a.pop（）将删除并返回列表中的最后一项。 如果传递给pop（）方法的索引不在范围内，则抛出IndexError：pop index超出范围异常。

#### 示例用法

\`\`\`PY 城市= \[''纽约'，'达拉斯'，'圣安东尼奥'，'休斯顿'，'旧金山'\];

print“City popped is：”，cities.pop（） 打印“索引2处的城市是：”，cities.pop（2） \`\`\`

####输出 `City popped is : San Francisco City at index 2 is : San Antonio`

#### 基本堆栈功能

`pop()`方法通常与`append()`一起使用，以在Python应用程序中实现基本的堆栈功能。

```py
stack = [] 
 
 for i in range(5): 
    stack.append(i) 
 
 while len(stack): 
    print(stack.pop()) 
```

＃＃＃＃ 更多信息： `pop()`的官方文档可以在[这里](https://docs.python.org/3.6/tutorial/datastructures.html)找到