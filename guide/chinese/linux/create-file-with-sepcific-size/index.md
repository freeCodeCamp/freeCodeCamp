---
title: Create a dummy file with a specific size
localeTitle: 创建具有特定大小的虚拟文件
---
## 如何使用“dd”命令创建具有特定大小的虚拟文件：

“dd”命令可用于创建特定大小的文件。如果您想测试下载速度或任何其他测试，并且需要特定大小的文件，这将非常有用。
```
dd if=/dev/zero of=file_name.txt bs=1024k count=10 
```

这将创建一个名为file\_name.txt的1MB文件。

bs是您的字节大小，count表示块的数量。一个简单的方法是1024K X 10。

这是创建1MB文件的更简单方法：
```
dd if=/dev/zero of=file_name.txt bs=1MB count=1 

```