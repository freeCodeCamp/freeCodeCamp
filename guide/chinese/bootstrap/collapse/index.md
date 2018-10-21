---
title: Collapse
localeTitle: 坍方
---
## 坍方

折叠是一个插件，可以帮助您使用平滑动画隐藏或显示元素。开发人员通常使用bootstrap collapse来隐藏或显示网页部分的辅助细节。例如，您可以拥有一个包含很长描述的项目列表。显示所有内容会占用大量空间，因此可以使用bootstrap collapse来隐藏和显示描述。

Bootstrap崩溃作为单独的插件提供，名为collapse.js，这意味着它可以在引导环境之外使用。插件本身可以在这里找到http://getbootstrap.com/2.0.4/javascript.html#collapse。

Bootstrap折叠可以与几个元素，按钮，锚标签或面板一起使用。要使用折叠，您需要至少两个元素，一个元素将控制隐藏或显示另一个元素的状态。

崩溃插件通过更改可折叠元素上的类来工作。有三种可能的类：

*   .collapse - 这个类隐藏了元素
*   .collapsing - 此类在转换期间附加
*   .collapse.in - 此类显示元素

### 如何使用它

要使用折叠，您可以通过两种方式执行此操作：

*   在`<a>`标签上使用`href`
*   在`<button>`标签上使用`data-target`

`href`或`data-target`的值将是要折叠的元素的选择器。如果您决定使用`<a>`或`<button>`标记，则需要`data-toggle="collapse"` 。

要折叠的元素必须包含类`.collapse` 。

### 按钮示例

```html

<a class="btn btn-primary" role="button" data-toggle="collapse" href="#collapseExample" aria-expanded="false" aria-controls="collapseExample"> 
  Link with href 
 </a> 
 <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample"> 
  Button with data-target 
 </button> 
 
 <div class="collapse" id="collapseExample"> 
  <div class="well"> 
    ... 
  </div> 
 </div> 
```

在上面的示例中，我们使用按钮和锚标记来控制div元素。作为控制元素的按钮和锚需要两个东西，一个属性用于指定控制元素用于折叠，另一个属性用于指定它控制哪个元素（隐藏或显示）。

它们都具有_data-toggle_属性，其值为_collapse_ ，指定它们将用于折叠元素。 anchor标记使用_href_属性指定它控制的元素，而按钮使用_data-target_属性指定它控制的元素。

> 你可以在这里查看按钮的演示https://www.w3schools.com/bootstrap/tryit.asp?filename=trybs\_collapsible&stacked=h
> 
> 您可以在此处查看锚标记的演示https://www.w3schools.com/bootstrap/tryit.asp?filename=trybs\_collapsible2&stacked=h

## 手风琴的例子

```html

<div class="panel panel-default"> 
    <div class="panel-heading" role="tab" id="headingOne"> 
      <h4 class="panel-title"> 
        <a role="button" data-toggle="collapse" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne"> 
          Collapsible Group Item #1 
        </a> 
      </h4> 
    </div> 
    <div id="collapseOne" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne"> 
      <div class="panel-body"> 
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. 
      </div> 
    </div> 
  </div> 
```

在上面的例子中，我们使用bootstrap collapse来创建一个手风琴。手风琴只是一个自举面板，其中显示标题并用于控制面板的主体。

面板的头部包含一个锚标记，用于控制身体的塌陷状态。因此，我们附加_数据切换_以指定此元素用于折叠，并使用_href_指定它隐藏或显示的元素。我们还可以使用一组面板来制作面板可折叠面板组。

> 你可以在这里看到面板折叠的演示https://www.w3schools.com/bootstrap/tryit.asp?filename=trybs _collapsible_ accordion＆stacked = h

### 内容元素

一个段落！

```html

<p>Lorem ipsum dolar, Free Code Camp rocks... </p> 
```

1.  添加`.collapse`类以声明该段落是可折叠元素。
2.  添加`id`以使此可折叠元素可供控制器元素访问。

```html

<p id="myParagraph" class="collapse">Lorem ipsum dolar, Free Code Camp rocks... </p> 
```

### 控制器元素

一个按钮！

```html

<button>Click Me To See Some Magic!</button> 
```

1.  添加`data-toggle="collapse"`属性以控制可折叠元素。
2.  添加`data-target="#id"`属性以引用具有其id的可折叠元素。

```html

<button data-toggle="collapse" data-target="#myParagraph">Click Me To See Some Magic!</button> 
```

## 例

```html

<p> 
  <a class="btn btn-primary" data-toggle="collapse" href="#collapseExample" aria-expanded="false" aria-controls="collapseExample"> 
    Link with href 
  </a> 
  <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample"> 
    Button with data-target 
  </button> 
 </p> 
 <div class="collapse" id="collapseExample"> 
  <div class="card card-block"> 
    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. 
  </div> 
 </div> 
```

### 与JavaScript一起使用

此插件允许您将其与JavaScript一起使用，您只需选择要折叠的元素即可启用它：

```js
$('.collapsible-element').collapse(); 
```

`collapse`方法接受一个可选对象，您可以在其中设置可折叠元素的初始状态。选项是：

*   `toggle` ：它将隐藏或显示元素，具体取决于其状态。如果它被隐藏，它将被显示，如果显示它将被隐藏。
*   `hide` ：隐藏元素。
*   `show` ：显示元素。

```js
$('.collapsible-element').collapse('hide'); 
```

还有一些暴露的方法可以挂钩到崩溃功能：

*   `show.bs.collapse` ：调用`show`实例方法时立即触发。
*   `shown.bs.collapse` ：当一个折叠元素对用户可见时触发（将等待CSS转换完成）​​。
*   `hide.bs.collapse` ：调用`hide`方法后立即触发。
*   `hidden.bs.collapse` ：在向用户隐藏了一个collapse元素时触发（将等待CSS转换完成）​​。

```js
$('.collapsible-element').on('show.bs.collapse', function() { 
  // for example you want to make an AJAX call to get some data to put in the collapsible element. 
 }) 
```

### 在行动中看到它

![替代文字](https://github.com/figengungor/Gif/blob/master/freeCodeCamp/bootstrap/collapse/collapse.gif)

#### 更多信息：

[关于崩溃的官方Bootstrap 4指南](https://v4-alpha.getbootstrap.com/components/collapse/)