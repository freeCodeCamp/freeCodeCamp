---
title: Any Type
localeTitle: 随便哪种
---
# 随便哪种

Any类型指示Typescript暂停对指定变量的类型检查。在处理您不知道类型的动态内容以及将Javascript的代码库转换为打字稿时非常有用。您可以使用Javascript的隐式类型与使用Any类型声明的变量。

```typescript
  let notSure: any = 4; 
  notSure = "maybe a string instead"; 
  notSure = false; 

```