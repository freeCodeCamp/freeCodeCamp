---
title: Lambda Expressions 
localeTitle: Lambda表达式
---
## Lambda表达式

这是一个存根。 [帮助我们的社区扩展它](https://github.com/freecodecamp/guides/tree/master/src/pages/mathematics/quadratic-equations/index.md) 。

[这种快速风格指南有助于确保您的拉取请求被接受](https://github.com/freecodecamp/guides/blob/master/README.md) 。

Stream Api在java中用于允许链接顺序和聚合操作。流操作本质上是中间的或终端的。

在这个小例子中，您可以看到流的一个实用程序是接收列表中所有对象的某个属性，并使用中间和终端操作将其返回到另一个列表中。

假设您有一个Student对象类。 \`\`的java 公立班学生{ int studentId; String studentName;

public String getStudentName（）{ return this.studentName; }

public int getStudentId（）{ 返回this.studentId; } //塞特犬 } \`\`

现在假设您有一个所有学生的列表，并希望获得所有学生姓名的列表。 传统上这看起来像这样。

\`\`的java 名单学生=一些学生对象列表

名单 studentNames = new ArrayList <>（）; for（学生：学生）{ studentNames.add（student.getStudentName（））; } \`\` 虽然这并不可怕，但可以简化。 使用流可以使用一行代码。

\`\`的java 名单学生=一些学生对象列表

名单 studentNames = students.stream（）。map（String :: getStudentName）.collect（Collectors.toList（））; \`\`

学生流api遍历学生列表并使用中间地图功能使用::右侧的任何方法返回新的流列表

终端收集操作将流收集为字符串列表。

这只是java 8中使用的Streams Api的一个用途。还有许多其他应用程序使用其他操作，如文档中所示。 [Streams api doc](https://docs.oracle.com/javase/8/docs/api/java/util/stream/Stream.html)

#### 更多信息：