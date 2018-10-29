---
title: Markdown Code Formatting
localeTitle: 降价代码格式
---
# 降价代码格式

Markdown中有两种格式化代码的方法。您可以使用内联代码，通过在行的某些部分周围添加反引号，也可以使用代码块，某些渲染器将使用语法突出显示。

## 内联代码

您可以使用内联代码格式来强调您正在编写的行中的小命令或语法。

例如，您可能希望提及Javascript的`Array.protoype.map()`函数。通过使用内联代码格式化，很明显这是一段代码。您也可以使用它来说明终端命令，例如`yarn install` 。

要使用内联代码格式化，只需将要格式化的代码包装在反引号中。在标准的美国布局QWERTY键盘上，可以在“1”左侧和“Tab”上方找到它。下面提供了有关国际键盘上反引号位置的更多信息。

例如，在markdown中编写\`Array.prototype.map（）\`将呈现为`Array.prototype.map()` 。

## 代码块

要编写更长或更详细的代码片段，通常最好将它们放在代码块中。代码块允许您使用多行，markdown将在其自己的框中呈现它并使用代码类型字体。

要实现这一点，请使用三个反引号开始你的阻止。这标志着您正在创建一个代码块。你将需要完成另外一行三个反引号。例如：

\`\`\`

var add2 = function（number）{

返回号码+2;

}

\`\`\`

将在降价时呈现为：
```
var add2 = function(number) { 
    return number + 2; 
 } 
```

虽然markdown本身不支持，但许多降价引擎（包括GitHub使用的引擎）将支持语法突出显示。这意味着通过告诉markdown我们在块中使用的语言，它将添加像IDE一样的颜色。您可以通过在与前三个后面的刻度相同的行中添加语言的名称来完成此操作。在上面的例子中，如果不是第一行是\`\`\`我们使用\`\`\`js，那么突出显示将应用于我们的块。

```js
var add2 = function(number) { 
    return number + 2; 
 } 
```

这可以应用于不仅仅是javascript。我可以用\`\`\`html：

```html

<div class="row"> 
    <div class="col-md-6 col-md-offset-3"> 
        <h1>Hello World</h1> 
    </div> 
 </div> 
```

\`\`\`红宝石：

```ruby
"Hello World".split('').each do |letter| 
    puts letter 
 end 
```

或\`\`\`python：

```python
a, b = 0, 1 
 while b < 10: 
    print(b) 
    a, b = a, a + b 
```

加上许多其他人。但请记住，并非所有降价引擎都会应用语法高亮显示。

## 键入反引号

在不同的键盘上，反引键的位置可能不同，如果你没有使用美国布局QWERTY键盘，可能很难找到。 [这个](http://superuser.com/a/254077/122424)有用的指南列出了一些查找反引号键的方法，我们在下面收集了这些方法。

#### QWERTY和QWERTZ（标有红色边框的键）

![QWERTY](//discourse-user-assets.s3.amazonaws.com/optimized/2X/a/a7daf1d707e12e207d47f0eb70ba01d97ffd1924_1_690x327.png)

#### AZERTY France（ Alt Gr + Key，标有红色边框）

![AZERTY](//discourse-user-assets.s3.amazonaws.com/original/2X/8/8f65c339ce4eefd9d79841f3dc54f4c37cab2e77.png)

#### AZERTY比利时（ Alt Gr + Key，标有红色边框）

![在此处输入图像描述](//discourse-user-assets.s3.amazonaws.com/original/2X/d/de291f0895b0fed992726a62d654f4e1f0e421f3.png)

#### QWERTY爱沙尼亚语（已标有红色边框的钥匙）

![爱沙尼亚语键盘布局](//discourse-user-assets.s3.amazonaws.com/optimized/2X/0/089b26510b1dcc7553625ba162582cf55837b6cd_1_690x230.png)

### 替代码

最后，反引号键有一个alt代码，可以在任何键盘上使用。如果在键盘上找不到反引号键，可以按住Alt键，然后按9，然后按6（Alt + 9,6）。这将插入一个反引号。