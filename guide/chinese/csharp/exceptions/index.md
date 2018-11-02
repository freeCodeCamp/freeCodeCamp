---
title: Exceptions
localeTitle: 例外
---
# 例外

例外是程序运行时发生的意外错误，例如尝试访问不存在的文件。如果不处理，它将停止程序。

## 例

如果我们尝试读取不存在的文件的文本：
```
using System.IO; 
 
 string content = File.ReadAllText(@"C:\DoesNotExist.txt"); 
```

将引发`FileNotFoundException` 。

其他一些常见例外：

*   `IndexOutofRangeException` ：尝试访问具有无效索引的数组。
*   `NullReferenceException` ：尝试使用未分配的引用变量。
*   `DivideByZeroException` ：尝试除以0。

## 最佳实践

### 使用try / catch / finally块
```
try 
 { 
   var client = new WebClient(); 
   var resultData = client.DownloadString("http://github.com"); 
 } 
 catch (Exception ex) 
 { 
   //code for handling exceptions 
 } 
 finally 
 { 
   //this code is always executed, does not matter if an exception is thrown or not 
 } 
```

### 处理条件可能存在的例外情况

代替
```
try 
 { 
   conn.Close(); 
 } 
 catch (Exception ex) 
 { 
   //code for handling exceptions. 
 } 
```

试试这个
```
if (conn.State != ConnectionState.Closed) 
 { 
    conn.Close(); 
 } 

```