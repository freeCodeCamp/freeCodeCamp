---
title: The Net Platform
localeTitle: 网络平台
---
**.NET平台**是由[Microsoft](https://www.microsoft.com/net)管理的庞大而全面的框架和库集合。 C＃是用于开发一系列.NET应用程序的最流行的语言，例如[Web应用程序](http://www.asp.net/) ， [Windows](https://dev.windows.com/en-us/) [应用程序](http://www.asp.net/) ， [Mac和iPhone应用程序](https://www.xamarin.com/platform) 。

我们将从学习C＃编程语言开始 ，并使您熟悉将作为专业开发人员执行的开发环境，项目结构，技术和最佳实践。

首先让我们从.NET平台的简要概述开始，然后开始讨论一些术语。别担心，此时您无需深入了解这些内容。

*   [.NET Framework](https://msdn.microsoft.com/en-gb/library/w0x726c2(v=vs.110) .aspx）:( _发音为dot net_ ）为您的应用程序提供了在其上运行的配置。它提供应用程序所需的所有服务;例如，与数据库，网络，文件系统的通信，这些系统通常用于构建控制台，桌面，Web，移动和游戏应用程序。
    
    *   [CLR（公共语言运行时）](https://msdn.microsoft.com/en-us/library/8bs2ecf4(v=vs.100) .aspx）：是应用程序的执行环境，用于管理其生命周期。 CLR提供内存管理等服务，它是：
    
    1\. [CLI标准的](http://www.ecma-international.org/publications/standards/Ecma-335.htm)实现[（公共语言基础设施）](http://www.ecma-international.org/publications/standards/Ecma-335.htm) 2.设计为独立于平台。平台是指计算机体系结构和操作系统。 3.独立于语言，例如可用于C＃，C ++， [VB.NET\] \[vbnet\]和\[F＃\] \[fsharp\]。](https://msdn.microsoft.com/en-us/library/system.io(v=vs.110)
    
*   C-Sharp编译器： `csc.exe`是一种编译器，它将C＃代码转换为Microsoft中间语言（MSIL），通常称为IL。它定义了CLR可以理解的指令。 CLR的工作是阅读这些说明并将其转换为机器可理解的说明。
    
*   类库：它包含数千个内置类供您的应用程序使用，例如\[ `System.IO` .aspx）用于读/写数据流， [`HttpClient`](https://msdn.microsoft.com/en-us/library/system.net.http.httpclient(v=vs.118) .aspx）通过网络发送数据， [`ASP.NET`](http://www.asp.net/)发送Web应用程序， [`ADO.NET`](https://msdn.microsoft.com/en-us/library/h43ks021(v=vs.110) .aspx）用于数据访问关系数据库（如Microsoft SQL Server和MySQL）和[Windows Communication Foundation（WCF）](https://msdn.microsoft.com/en-us/library/ms735119(v=vs.90) .aspx），用于面向服务的应用程序，这些应用程序通过HTTP，REST，SOAP和TCP等已建立的协议进行通信。
    
*   C＃编程语言（ _发音为“C-sharp”_ ）：C＃的语法类似于Java，C ++和Javascript。它是：
    
    1.  用于编写应用程序，服务和可重用库。
    2.  旨在与.NET平台一起使用。
    3.  强类型，高级面向对象语言。
    
    *   [.NET Core](https://blogs.msdn.microsoft.com/dotnet/2014/12/04/introducing-net-core/) ：微软最近致力于开发以[Nuget](https://www.nuget.org/)软件包形式提供的开源，跨平台开发。他们正在使用[Mono](http://www.mono-project.com/)社区，这是Microsoft .NET框架的一个实现，用于在Windows，Linux和iOS上构建应用程序。
        
    *   [Silverlight](https://www.microsoft.com/silverlight/) ：主要用于专注于Web浏览器插件，以提供丰富的多媒体。
        
    *   [.NET for Windows app](https://dev.windows.com/en-us/) ：用于使用C＃创建Windows 8.x Store应用程序。
        

## C＃编程语言

下一步学习C＃编程语言 。