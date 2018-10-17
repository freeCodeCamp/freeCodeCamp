---
title: Using Browsec for Securing Your Connection to Freecodecampcom
localeTitle: 使用Browsec保护与Freecodecampcom的连接
---
### 为什么我需要一个插件或插件？

最近一些营员开始面临奇怪的问题，即一些互联网服务提供商（ISP）的“内容修改”，导致[FreeCodeCamp.com](http://freecodecamp.com) （FCC）网站有时被打破。

这与露营者记录的一些问题有关：

*   [＃5999：印度ISP注入广告中断网站](https://github.com/FreeCodeCamp/FreeCodeCamp/issues/5999)
*   [＃6122：严重问题使用FCC IDE，控制台显示错误...](https://github.com/FreeCodeCamp/FreeCodeCamp/issues/6122)
*   [＃6381：无法在浏览器中查看代码编辑器](https://github.com/FreeCodeCamp/FreeCodeCamp/issues/6381)

## TL; DR：又错了什么？

嗯，对于一些露营者来说，这是[中间人攻击](https://en.wikipedia.org/wiki/Man-in-the-middle_attack)的经典案例。

例如，正如问题＃5999所示 ，来自印度的一些露营者的ISP故意将广告注入用户访问过的网站，导致问题。

而在其他情况下，ISP有时会使用类似的策略来缓存消费者访问的网站，以便他们可以将缓存的内容提供给访问相同网站的其他消费者，这可以节省带宽成本，同时使网站更快地可用。

但是如果没有正确完成（或者像第一种情况那样做得不好），这会修改网站的基本内容，并阻止它们正常运行。

## 那有什么问题呢？

很简单，我们需要加密我们与FCC网站的连接。通过加密我们的流量，我们绕过了ISP在内容通过其基础架构时修改或缓存内容的能力。

这可以通过名为[Browsec](https://browsec.com/en/)的有用浏览器插件来完成。

### 附加组件如何工作？

附加组件在您的设备和外部世界之间创建VPN连接。也就是说，Peeping Tom先生（ISP），不能搞乱你与FCC网站的联系。它在技术上与您不在家中相同，但从美国，荷兰或其他类似地方访问FCC网站。

_在幕后它加密数据传输，并隐藏你的IP。_

## 我卖了，告诉我步骤。

你去！

### 对于Google Chrome：

#### 第1步：安装browsec扩展。

您可以从官方[WebStore下载并安装](https://chrome.google.com/webstore/detail/browsec/omghfjlpggmjjaagoclmmobgdodcjboh) Chrome浏览器[插件](https://chrome.google.com/webstore/detail/browsec/omghfjlpggmjjaagoclmmobgdodcjboh) 。

![“在Google Chrome WebStore上浏览”的图片](//discourse-user-assets.s3.amazonaws.com/original/2X/6/61bd52ed78c56369e62ca376b6dd9e56abcb6363.png)

#### 第2步：清除浏览器cookie和缓存（可选）。

如果您在第一次使用browsec时清除浏览器缓存，这是一件好事，这样您的浏览器就会从头开始加载所有文件。

#### 第3步：重新启动浏览器，然后访问[FreeCodeCamp.com](http://freecodecamp.com)

只需关闭浏览器，然后重新启动即可。检查browsec扩展，找到所需的端点位置。

### 对于Mozilla Firefox：

从[Browsec网站](https://browsec.com/en/dashboard/main)下载带有附加插件的便携式Firefox版本。

![“在Google Chrome WebStore上浏览”的图片](//discourse-user-assets.s3.amazonaws.com/original/2X/b/b30fbf3bade330044e18b3c37409f2437a3810c1.png)

而已！快乐的编码！如果这样可行，请在[帮助聊天中](https://gitter.im/FreeCodeCamp/Help)告诉我们

## 常见问题解答

### 如果我面对“中间人”攻击，我怎么知道？

当您访问FCC网站或进行挑战时，如果您查看浏览器的开发者控制台（按F12>控制台选项卡），您应该会看到类似的错误，如下所示。

![“错误”的图片](//discourse-user-assets.s3.amazonaws.com/original/2X/4/4949599e3143f454fc5a7174a81e65fa68d04c77.png)

![“错误”的图片](//discourse-user-assets.s3.amazonaws.com/original/2X/0/039acb319bae57f31ebd78aa3c8987f324a37f84.png)

![“错误”的图片](//discourse-user-assets.s3.amazonaws.com/original/2X/2/25dcc04ecddc422fb7ba113ddac3378d5decd905.png)

这些是该问题的经典案例。

### 等一下，我可以使用任何替代机制，来Browsec？

是的，为什么不，您可以使用市场上任何可用的VPN客户端，但请记住，Browsec是免费的，工作得很好！

### 嘿其他浏览器，Internet Explorer，Safari等等呢？

嗯，对于这些浏览器可以找到的任何VPN附加组件， [Tor](https://www.torproject.org/) ，就是这样一个客户端，但是它们带有付费订阅，你基本上可以使用你想要的任何匿名器，但Chrome和Browsec都经过了试用和测试，过去曾为大多数露营者工作过。

### 我可以使用匿名者来使用FCC以外的网站吗？

当然是的。为什么不？但请记住，这并不会让你看不到法律，所以要小心你在做什么！ ![:wink:](//forum.freecodecamp.com/images/emoji/emoji_one/wink.png?v=2 "：眨眼：")

### 如果这对我不起作用怎么办？

请在[帮助聊天中](https://gitter.im/FreeCodeCamp/Help)告诉我们，我们会尽力找到解决方法。

#### _放弃_

**_FreeCodeCamp不认可本文中提到的任何软件，请自行决定使用它们。某些VPN客户端可能会跟踪您的活动，也可能存在副作用，例如速度慢或页面加载延迟。_**