---
title: Scanning
localeTitle: 扫描
---
# 扫描

## 介绍

网络扫描是指用于识别网络上的主机，帖子和服务的一组过程。

扫描活动可能涉及检查网络上的开放端口，横幅抓取和创建网络图。

## 扫描技术

扫描网络的最常用方法之一是称为Ping扫描的技术。这可以确定一系列IP地址上的实时主机。一个非常简单的例子就是转到命令行并输入`ping 8.8.8.8` 。这将向主机发送[ICMP](https://en.wikipedia.org/wiki/Internet_Control_Message_Protocol) ECHO请求，在这种情况下，它将是Google的公共DNS。

不同的Internet协议需要不同的扫描方法;例如，扫描[TCP](https://en.wikipedia.org/wiki/Transmission_Control_Protocol)网络与扫描[UDP](https://en.wikipedia.org/wiki/User_Datagram_Protocol)网络不同。

TCP扫描通常利用TCP运行的方式以及TCP如何通过“握手”来启动网络通信：

1.  设备（主机A）将发送`SYN`消息以尝试通过网络与另一设备通信（服务器B）
2.  B需要用`SYN`和`ACK`回复A以确认A的开始通信请求
3.  A需要发回`ACK`消息以确认B的响应
4.  然后可以开始沟通

在整个通信过程中，每个参与者在尝试发起会话时都会发送一些信息。

请注意，您还可以扫描IPv6网络（IPv6会增加IP地址大小以使更多地址可用）。

有更多类型的[扫描](https://nmap.org/bennieston-tutorial/)进一步滥用TCP握手过程。这些包括IDLE扫描，Xmas树扫描，反向TCP扫描和完全扫描。

## 在渗透测试中扫描

扫描是渗透测试的典型五个阶段中的第二阶段。扫描阶段需要使用技术工具来收集关于目标的进一步情报，但在这种情况下，所寻求的英特尔更常见于他们所拥有的系统。 1

主要有三个目标：

1.  确定系统是否还活着
2.  端口扫描系统
3.  扫描系统漏洞2

### 确定系统是否还活着

确定目标系统是否处于活动状态的一种方法是使用**ping**命令，如上面的Ping扫描技术中所述。

例如：
```
ping <target_ip_address> -c <number_of_packets_to_send> 
 ping 10.10.0.1 -c 4 
```

如果目标系统处于活动状态，您应该得到类似于下面的响应。
```
Pinging 10.10.0.1 with 32 bytes of data: 
 
 Reply from 10.0.0.1: bytes=32 time=26ms TTL=240 
 Reply from 10.0.0.1: bytes=32 time=26ms TTL=240 
 Reply from 10.0.0.1: bytes=32 time=26ms TTL=240 
 Reply from 10.0.0.1: bytes=32 time=26ms TTL=240 
 Ping statistics for 10.10.0.1: 
    Packets: Sent = 4, Received = 4, Lost = 0 (0% loss), 
 Approximate round trip times in milliseconds: 
    Minimum = 26ms, Maximum = 26ms, Average = 26ms 
```

*   **回复来自**表示我们的ICMP Echo Request数据包已收到ICMP Echo Reply数据包已发回。
*   **Bytes = 32**告诉我们发送的数据包的大小。
*   **time = 26ms**让我们知道ICMP Echo Request数据包到达目标所花费的总时间以及ICMP Echo Reply数据包返回我们机器的时间。
*   **TTL = 240**是生存时间值，它告诉我们数据包在丢弃之前所需的最大跳数。

## 扫描工具

有许多工具可供扫描，但最常见的一种是`nmap` 。它是一个非常有用的工具，具有获取有关网络上实时主机的信息，正在运行的服务以及所使用的操作系统的类型和版本等功能。

## 更多信息：

*   如何在Linux中Ping？https://www.wikihow.com/Ping-in-Linux
*   [视频来自Gordon Lyon aka Fydor，nmap工具的创建者](https://www.youtube.com/watch?v=Hk-21p2m8YY)

## 来源

1.  总结渗透测试的五个阶段。 （2015年5月6日）。检索2017年10月26日，来自https://www.cybrary.it/2015/05/summarizing-the-five-phases-of-penetration-testing/

3.  Engebretson，P。（2013）。黑客和渗透测试的基础知识：道德黑客和渗透测试轻松编辑。 2. Syngress。