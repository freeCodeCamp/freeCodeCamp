---
title: Modals
localeTitle: 礼貌
---
## 情态动词

模态是弹出窗口，用于在继续之前提供重要信息。

要在当前页面的顶部创建此类对话框/弹出窗口，Bootstrap会提供Modal插件。

#### 代码示例：

```html

<!DOCTYPE html> 
 <html> 
  <head> 
    <meta charset="utf-8"> 
    <meta name="viewport" content="width=device-width"> 
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"> 
 
 <!-- jQuery library --> 
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script> 
 
 <!-- Latest compiled JavaScript --> 
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script> 
 </head> 
 
  <body> 
 
 <!-- Triggering the modal popup --> 
   <button type="button" class="btn btn-default" data-toggle="modal" data-target="#myModal">Open Modal</button> 
 
  <!-- Modal popup --> 
 
   <div class="modal fade" id="myModal"> 
       <div class="modal-dialog"> 
 
  <!-- Modal Content --> 
            <div class="modal-content"> 
              <div class="modal-header"> 
                <button  type="button" data-dismiss="modal" class="close">&times;</button> 
                <h4 class="modal-title">Modal Header</h4> 
              </div> 
 
              <div class="modal-body"> 
                Do you wish to continue? 
              </div> 
 
              <div class="modal-footer"> 
                <button class="btn btn-default"  data-dismiss="modal">close</button> 
              </div> 
 
            </div> 
        </div> 
 
   </div> 
 
 </body> 
 </html> 
```

#### 了解使用的属性和类：

a） `data-toggle = "modal"` ：它打开模态。

b） `data-target` ：它指向要打开的模态的Id。

c） `data-dismiss="modal"` ：这会在单击关闭按钮时关闭弹出窗口。

d） `.modal`类将`<div>`的内容标识为模态。

e） `.modal-dialog`类设置`.modal-dialog`的正确高度和宽度。

f） `.modal-content`类为modal.It包含页眉，正文和页脚部分。

g） `.modal-header`类表示模态的标题部分（标题和（×）按钮）。

h） `.modal-title`类用适当的高度设置模态的标题。

i） `.modal-body`类设置模态的主体（对话框/弹出窗口）。它可以有其他标记，如`<p>,<img>,<video>`等。

j） `.modal-footer`类调整模态的页脚。

#### 更多信息 ：

[Bootstrap模态](https://bootstrapbay.com/blog/working-bootstrap-modal/)

如果你想探索**__Bootstrap 4.0 Latest（Alpha版）__** ： [Bootstrap Modal v4.0](https://getbootstrap.com/docs/4.0/components/modal/)