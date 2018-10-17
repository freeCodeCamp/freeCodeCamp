---
title: Wireshark
localeTitle: Wireshark的
---
## Wireshark的

Wireshark是一个开源网络分析器应用程序，可用于Linux，macOS和Windows。它允许您“嗅探”发送到网络上不同节点的[数据包](../../network-engineering/packets/) 。

#### 为什么要使用Wireshark？

Wireshark是一个功能强大的工具，您可以使用它来：

*   了解在网络中如何使用不同的协议
*   解决网络问题
*   分析通过您的网络的流量
*   分析软件与远程服务器通信的数据
*   在发送之前验证数据是否已正确加密
*   开发网络通信协议
*   检查计算机上的[特洛伊木马程序](../trojans/)或其他恶意软件

#### 我该如何开始？

以最基本的形式使用Wireshark：

1.  [下载](https://www.wireshark.org/download.html)并安装该应用程序。
2.  选择要捕获数据包的`interface` ，这很可能是您的以太网或WiFi适配器。
3.  观看漂亮的彩色编码数据包流，让应用程序捕获它们，只要您愿意。
4.  如果有足够的数据包，请选择停止按钮。
5.  如果要保留捕获的数据包以进行持续分析，请保存它们。这是作为`.pcap`文件完成的，该文件是_数据包捕获_的标准格式。

![Screenshot of Wireshark on MacOS](https://thejayhaykid.github.io/images/Wireshark.png "MacOS上的Wireshark")

#### 分析，过滤和检查

现在你有一堆数据包，但这一切意味着什么？您看到的不同颜色表示不同类型的流量。默认情况下，一些颜色是：

*   浅紫色 - 传输控制协议（TCP）数据包;
*   浅蓝色 - 用户数据报协议（UDP）数据包;
*   黑色 - 错误

> 注意：这些颜色都可以自定义，但要注意每个数据包可能适合多个类别，因此您还必须优先考虑这些规则。

过滤数据包是查找所需内容的快捷方式。只需在窗口顶部输入文本输入，只显示与您的查询匹配的数据包。例如，如果您正在[查看HTTPS流量](https://en.wikiversity.org/wiki/Wireshark/HTTPS) ，请在过滤器中输入`ssl` 。这将显示与HTTPS连接相关的所有数据包。

现在您已找到一些相关数据包，选择一个以查看有关它的更多详细信息。根据您检查的数据包类型，这将为您提供大量详细信息。一些基本细节将包括：

*   使用的协议
*   源地址和端口
*   目的地址和端口
*   响应时间

### 更多信息：

[Wireshark.org](https://www.wireshark.org)  
[Wireshark - 维基百科](https://en.wikipedia.org/wiki/Wireshark)  
[如何使用Wireshark捕获，过滤和检查数据包 - 如何使用Geek](https://www.howtogeek.com/104278/how-to-use-wireshark-to-capture-filter-and-inspect-packets/)