---
title: Traceroute
localeTitle: 跟踪路由
---
**目录**

*   [跟踪路由](#traceroute)
*   [数据如何通过互联网传播](#how-data-travels-across-the-internet)
*   [用法的一些示例](#some-examples-for-usage)
*   [更多信息](#more-information)

## 跟踪路由

Traceroute是一种计算机网络诊断工具，用于显示路径（路径）和测量Internet协议（IP）网络上数据包的传输延迟。路由的历史记录为从路径（路径）中的每个连续主机（远程节点）接收的分组的往返时间;每一跳的平均次数之和是建立连接所花费的总时间的度量。 Traceroute继续进行，除非所有（三个）发送的数据包丢失超过两次，然后连接丢失并且无法评估路由。另一方面，Ping仅计算从目的地点开始的最终往返时间。

#### 数据如何通过互联网传播

traceroute上的每台计算机都由其IP地址标识，该IP地址是由标识该计算机唯一网络连接的句点分隔的九位数字。以下是有关traceroute的一些详细信息：
```
- The journey from one computer to another is known as a hop. 
 - The amount of time it takes to make a hop is measured in milliseconds. 
 - The information that travels along the traceroute is known as a packet. 
```

traceroute读数通常会为跳跃时间显示三个单独的列，因为每个traceroute会向每台计算机发送三个单独的信息包。在列表的最顶部，traceroute将给出它将显示多少跳的限制--30跳通常是最大数。

当traceroute无法访问计算机时，它将显示消息“请求超时”。每个跃点列将显示星号而不是毫秒计数。

#### 用法的一些示例

大多数实现至少包括用于指定每跳发送的查询数，等待响应的时间，跳跃限制和要使用的端口的选项。调用没有指定选项的traceroute会显示可用选项列表，而man traceroute会显示更多详细信息，包括显示的错误标志。 Linux上的简单示例：
```
[root@example ~]#  traceroute -w 3 -q 1 -m 16 www.google.com 
 traceroute to www.google.com (216.58.200.36), 16 hops max, 60 byte packets 
 1  192.168.4.2 (192.168.4.2)  0.136 ms 
 2  * 
 3  * 
 4  * 
 5  * 
 6  * 
 7  * 
 8  * 
 9  * 
 10  * 
 11  * 
 12  * 
 13  * 
 14  * 
 15  * 
 16  * 
```

在上面的示例中，所选的选项是等待三秒（而不是五秒），每个跳（而不是三个）只发送一个查询，在放弃之前将最大跳数限制为16（而不是30），将www.google.com作为最终主持人。

这有助于识别可能阻止ICMP流量或Unix ping中的高端口UDP到站点的错误路由表定义或防火墙。请注意，防火墙可能允许ICMP数据包，但不允许其他协议的数据包。

渗透测试人员还使用Traceroute来收集有关给定主机周围的网络基础结构和IP范围的信息。

它也可以在下载数据时使用，如果有多个镜像可用于同一条数据，则可以跟踪每个镜像，以便更好地了解哪个镜像最快使用。

#### 更多信息

阅读有关Traceroute的更多信息：

*   [如何在Windows中使用TRACERT](https://support.microsoft.com/en-us/help/314868/how-to-use-tracert-to-troubleshoot-tcp-ip-problems-in-windows) - [如何在Linux中使用TRACERT](https://www.lifewire.com/traceroute-linux-command-4092586)