---
title: Clear Specific Values from Your Browser Local Storage
localeTitle: 从浏览器本地存储中清除特定值
---
从浏览器的本地存储中删除特定值将解决与浏览器崩溃或冻结FreeCodeCamp相关的许多问题。

例如，这解决了在使用无限循环保存响应后浏览器在挑战页面中挂出的常见问题。

发生这种情况时，您必须删除存储该响应的`localStorage`的值。

## 在Chrome中：

*   在**freecodecamp.com上** ，打开您的开发人员工具。
    
    *   更多工具>开发人员工具（或`Ctrl` + `Shift` + `I` （Windows）， `Cmd` + `Opt` + `I` （Mac））
*   导航到“ `Resources`选项卡
    
*   展开左窗格中的“ `Local Storage`项
    
*   选择`http://www.freecodecamp.com`
    
*   在右侧窗格中找到要删除数据的挑战![在localStorage Chrome开发者工具中查找密钥](//discourse-user-assets.s3.amazonaws.com/original/2X/8/8300d3dfcf8a07bc3c1f69e7dd730d99e353972d.png)
    
*   右键单击所需的挑战并选择“ `Delete`
    

## 在Firefox中：

*   在**freecodecamp.com上** ，打开您的Web控制台
    
    *   `Ctrl` + `Shift` + `K`
*   从那里，直接使用控制台：
    
    *   输入`console.log(localStorage);`并按`Enter` 。
        
    *   单击`Storage`链接。 ![从Web控制台打印localStorage对象并显示存储](//discourse-user-assets.s3.amazonaws.com/original/2X/e/e3778d1c24e9da6fe506564405b5b1ebc11facc1.png)
        
    *   **存储**面板将出现在右侧。
        
    *   过滤结果以查找导致问题的算法，前端项目或挑战。
        
    *   找到后，将鼠标悬停在它上面并单击右侧的`x` 。 ![单击x以删除值条目。](//discourse-user-assets.s3.amazonaws.com/original/2X/a/a309e8ec8d92301f3507001ca3a796009d0a00d8.png)
        
    *   删除后，检查问题是否已解决。如有必要，请刷新或关闭并打开浏览器。
        

**注意：**这也可以使用[Storage Inspector完成](https://developer.mozilla.org/en-US/docs/Tools/Storage_Inspector) ，但是当有这么多值时，Firefox似乎会挂起。