---
title: Method Overloading
localeTitle: 方法重载
---
# 方法重载

默认参数是在C＃4.0版本中引入的，但直到那时，C＃编码器一直在使用不同的技术，这种技术基本上是相同的，称为方法重载。它允许程序员定义几个具有相同名称的方法，只要它们采用不同的参数集即可。当您使用.NET框架的类时，您很快就会意识到在整个地方都使用了方法重载。

## 例

1.  创建一个名为Person.cs的类文件并输入以下代码。 \`\`\` 公共阶层人 { public string FirstName {get;私人集; } public string LastName {get;组; }
    
    public Person（string firstName，string lastName） { this.FirstName = firstName; this.LastName = lastName; }
    
    public string SayHello（字符串名称） { 返回“你好，”+名称; }
    
    公共字符串SayHello（人） { 返回“Hello there，”+ person.FirstName +“”+ person.LastName; } }
    
```
2. In your default Program.cs file you can call now this class Person using the method overloading. 
```

课程 { static void Main（string \[\] args） { 人物=新人（“简”，“美国能源部”）; Console.WriteLine（person.SayHello（“Peter Smith”））;
```
        Person friend = new Person("Chuck", "Norris"); 
        Console.WriteLine(person.SayHello(friend)); 
 
        Console.ReadKey(); 
 
 
    } 
 } 
```

\`\`\`