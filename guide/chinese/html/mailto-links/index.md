---
title: Mailto Links
localeTitle: Mailto链接
---
## Mailto链接

mailto链接是一种带有特殊参数的超链接（ `<a href=""></a>` ），可让您指定其他收件人，主题行和/或正文。

### 收件人的基本语法是：

```html

<a href="mailto:friend@something.com">Some text</a> 
```

### 更多定制！

#### 将主题添加到该邮件：

如果要为该邮件添加特定主题，请小心在主题行中有空格的地方添加`%20`或`+` 。确保格式正确的简单方法是使用[URL解码器/编码器](https://meyerweb.com/eric/tools/dencoder/) 。

#### 添加正文：

同样，您可以在电子邮件的正文部分添加特定邮件： 同样，空格必须由`%20`或`+`替换。 在主题参数之后，任何附加参数必须以`&`开头

示例：假设您希望用户向他们的朋友发送有关他们在Free Code Camp中的进度的电子邮件：

地址：空

主题：好消息

身体：我正在成为一名开发人员

您的HTML链接现在：

```html

<a href="mailto:?subject=Great%20news&body=I%20am%20becoming%20a%20developer">Send mail!</a> 
```

在这里，我们将mailto留空（mailto：？）。这将打开用户的电子邮件客户端，用户将自己添加收件人地址。

#### 添加更多收件人：

以相同的方式，您可以添加CC和bcc参数。 用逗号分隔每个地址！

其他参数必须以`&`开头。

```html

<a href="mailto:firstfriend@something.com?subject=Great%20news&cc=secondfriend@something.com,thirdfriend@something.com&bcc=fourthfriend@something.com">Send mail!</a> 
```

#### 更多信息：

[MDN - 电子邮件链接](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks#E-mail_links)