---
title: Identify Basic Internet Problems with Ping
localeTitle: 使用Ping识别Internet的基本问题
---
![声纳屏幕](//discourse-user-assets.s3.amazonaws.com/original/2X/b/b1bfc671722851eed4adfe2d4ec24eb9ab8a875b.png)

下次你打电话给你的服务台时，你想用你的网络知识让他们惊叹吗？在现有的Mac，Windows或Linux计算机上内置一个名为“ping”的命令，有助于识别基本的连接问题。好吧，这可能不足以“哇”你的团队成员，但是他们会很感激你开始了调试过程。请记住，您的支持人员是调试专家，因此在他们引导您完成故障排除过程时，请按照他们的说明进行操作。

## TL; DR：

您可以使用Mac OS X，Windows或Linux计算机内置的`ping`命令来识别基本的网络连接问题。在调用支持之前，这可以帮助您解决问题和/或获取有价值的调试信息。有关如何启动命令行窗口并从Mac OS X或Windows计算机运行`ping`详细信息，请阅读下文。

## `ping`命令：

`ping`命令是验证另一台计算机是否可以从您接收信息的简单方法。原作者[迈克·穆斯](https://en.wikipedia.org/wiki/Mike_Muuss) （ [Mike Muuss](https://en.wikipedia.org/wiki/Mike_Muuss) ）实际上[在](https://en.wikipedia.org/wiki/Ping_%28networking_utility%29#History) [潜水员](https://en.wikipedia.org/wiki/Mike_Muuss) [发出的“ping”声后命名该程序](https://en.wikipedia.org/wiki/Ping_%28networking_utility%29#History)以检测水中的物体。如果ping的回显返回，则表示存在某些东西。实际上， `ping`使用“ [Internet控制消息协议回应请求](https://en.wikipedia.org/wiki/Internet_Control_Message_Protocol) ”作为其底层软件设计的一部分。

在最简单的形式中， `ping`命令提供两条有价值的信息，无论消息是否被回显（ `64 bytes from…` ）以及接收消息所需的`time=6.396 ms` （例如， `time=6.396 ms` ）。根据您使用的计算机类型，您甚至可以获得包含最小值，最大值，平均值等的摘要。响应时间以“ms”或毫秒显示，即1/1000秒。 10ms或更短的响应时间非常快，但值通常在100ms范围内。在200ms以上你可能会注意到你的连接缓慢。

## 当一切顺利时：

这是我的Mac OS X计算机上的`ping`响应，当马来西亚的一切正常工作时：
```
MacBook-Pro:~ ajm$ ping Google.com 
 PING google.com (216.58.196.46): 56 data bytes 
 64 bytes from 216.58.196.46: icmp\_seq=0 ttl=55 time=6.396 ms 
 64 bytes from 216.58.196.46: icmp\_seq=1 ttl=55 time=6.368 ms 
 64 bytes from 216.58.196.46: icmp\_seq=2 ttl=55 time=26.773 ms 
 64 bytes from 216.58.196.46: icmp\_seq=3 ttl=55 time=6.984 ms 
 ^C 
 --- google.com ping statistics --- 
 4 packets transmitted, 4 packets received, 0.0% packet loss 
 round-trip min/avg/max/stddev = 6.368/11.630/26.773/8.746 ms 
```

当一切运行良好时，这就是我的`ping`响应在Windows计算机上的样子：
```
C:\Users\BJM>ping Google.com 
 Pinging google.com [216.58.196.46] with 32 bytes of data: 
 Reply from 216.58.196.46: bytes=32 time=6ms TTL=128 
 Reply from 216.58.196.46: bytes=32 time=15ms TTL=128 
 Reply from 216.58.196.46: bytes=32 time=6ms TTL=128 
 Reply from 216.58.196.46: bytes=32 time=6ms TTL=128 
 Ping statistics for 216.58.196.46: 
    Packets: Sent = 4, Received = 4, Lost = 0 (0% loss), 
 Approximate round trip times in milli-seconds: 
    Minimum = 6ms, Maximum = 15ms, Average = 8ms 
```

从这些示例中可以看出，连接非常好，平均响应时间低于10毫秒。

### 当出现问题时（三个例子）：

那么如果我无法连接到`Google.com`怎样？例如＃1 ，我通过从墙上拔下我的路由器来模拟与我的Mac的网络连接断开，然后重新运行命令。我注意到的第一件事是，它需要的命令作出回应长得_多_ ：
```
MacBook-Pro:~ ajm$ ping google.com 
 ping: cannot resolve google.com: Unknown host 
 MacBook-Pro:~ ajm$ 
```

或者，例如＃2 ，具体取决于连接失败的确切方式：
```
PING google.com (216.58.196.46): 56 data bytes 
 Request timeout for icmp\_seq 0 
 Request timeout for icmp\_seq 1 
 Request timeout for icmp\_seq 2 
 ^C 
```

有时，如果我有一个特别片段的连接，我会看到这些消息的混合。例如＃3 ，我可以通过将我的Mac电脑连接到街对面的公共Wi-Fi连接来模拟这个：
```
PING google.com (216.58.196.206): 56 data bytes 
 64 bytes from 216.58.196.206: icmp\_seq=0 ttl=57 time=273.655 ms 
 64 bytes from 216.58.196.206: icmp\_seq=1 ttl=57 time=808.546 ms 
 64 bytes from 216.58.196.206: icmp\_seq=2 ttl=57 time=179.613 ms 
 Request timeout for icmp\_seq 3 
 Request timeout for icmp\_seq 4 
 64 bytes from 216.58.196.206: icmp\_seq=5 ttl=57 time=374.612 ms 
 Request timeout for icmp\_seq 6 
 ping: sendto: No route to host 
 Request timeout for icmp\_seq 7 
 ping: sendto: No route to host 
 Request timeout for icmp\_seq 8 
 ^C 
```

在第一次测试中， `ping`告诉我，我的机器甚至找不到`Google.com`的互联网地址（IP `216.58.196.46` ）。在第二次测试中，我的计算机记住了Google的IP地址，但实际上无法访问Google服务器（ `Request timeout` ）。在第三个测试中， `sendto: No route to host`意味着网络设备知道Google服务器在哪里，但是数字路径上的某些东西被打破了。

## Mac用户：如何运行`ping`命令：

在Mac上，您通常从终端命令行运行`ping` 。要启动终端，请单击桌面右上角的OS X Spotlight放大镜图标：

![Mac Spotlight](//discourse-user-assets.s3.amazonaws.com/original/2X/9/924e9346b5f92fe41127f6b3e403f454773edae9.png)

出现搜索窗口时，键入“terminal”，突出显示“Terminal - Utilities”，然后双击（或点击

返回

）： ![Mac终端发布](//discourse-user-assets.s3.amazonaws.com/original/2X/9/976e1fb628c0d0bf2a6a9b57504305fd844716d4.png)

这将启动终端命令窗口，您可以输入我的示例中显示的命令`ping Google.com` ： ![Mac命令行](//discourse-user-assets.s3.amazonaws.com/original/2X/0/05d1e4d360c14921f7bd7ab871358b956f1e7d03.png)

**重要的Mac提示** ：如果您没有告诉它停止， `ping`命令将永远运行。为此，请按

`control`

键（键盘右下方）和

`c`

键。这将使用Control-C（ `^C` ）中断测试并返回命令行控制。对于Windows用户，该命令将在几次迭代后自行停止。

## Windows用户：如何运行`ping`命令：

打开命令提示符在Windows版本10,8.1,8和7之间有所不同;这是[如何打开命令提示符](http://pcsupport.about.com/od/commandlinereference/f/open-command-prompt.htm)的一个很好的指南。例如，在Windows 7计算机上，单击左下方的Windows“开始”图标，然后选择“命令提示符”并双击（或点击

`enter`

）：

![赢得终端发布](//discourse-user-assets.s3.amazonaws.com/original/2X/4/4e0b18755930ad0d64e6e38763f0b96054fd76fb.png)

这将启动命令窗口，您可以输入示例中显示的`ping Google.com`命令：

![赢命令行](//discourse-user-assets.s3.amazonaws.com/original/2X/9/94d8ed91d29574497ad0f2eb2cd235050132851e.png)

现在您已了解如何使用`ping`命令，您可以对网络连接进行基本的故障排除。通过一点创造力，您可以与当地的IT支持人员或您的网络拓扑和IP地址（例如， `ping`路由器， `ping`您的ISP）进行合作，以进一步识别网络问题。