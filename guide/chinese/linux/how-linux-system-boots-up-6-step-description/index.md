---
title: Linux Booting Process
localeTitle: Linux启动过程
---
# Linux启动过程 - 6步描述性过程

操作系统被定义为支持计算机基本功能的低级软件，例如调度任务和控制外围设备。操作系统支持典型Linux启动过程的这6个高级阶段。

![脚步](https://raw.githubusercontent.com/Ayushverma8/tech-interview-handbook/master/LinuxBootingProcess.jpg)

### 1\. BIOS

*   BIOS代表基本输入/输出系统
*   通过HDD执行一些系统完整性检查
*   搜索，加载和执行引导加载程序，主要在主引导记录（MBR）中
*   它在软盘，CD-ROM或硬盘驱动器中查找引导加载程序。我们可以在BIOS启动期间按一个键（通常为F2的F12，但这取决于您的系统）以更改启动顺序。
*   一旦检测到引导加载程序并将其加载到内存中，BIOS就会为其提供控制。
*   因此，简单来说，BIOS加载并执行MBR引导加载程序

### 2\. MBR

*   MBR代表主引导记录。
*   它位于可引导磁盘的第一个扇区中。通常是/ dev / hda或/ dev / sda。为什么是sda和hda？请参阅此处了解更多。
*   MBR的大小小于512字节。这有三个组件1）第一个446字节中的主引导加载程序信息2）下一个64字节中的分区表信息3）最后2个字节中的mbr验证检查。
*   它包含有关GRUB（或旧系统中的LILO）的信息。
*   因此，简单来说，MBR加载并执行GRUB引导加载程序。

### 3\. GRUB

*   它位于可引导磁盘的第一个扇区中。通常是/ dev / hda或/ dev / sda。为什么是sda和hda？请参阅此处了解更多。
*   如果系统上安装了多个内核映像，则可以选择要执行的映像，默认情况下只会启动主映像。
*   GRUB显示启动画面，等待几秒钟，如果您不输入任何内容，它将加载grub配置文件中指定的默认内核映像。
*   GRUB具有文件系统的知识（旧的Linux加载器LILO不了解文件系统）。
*   Grub配置文件是/boot/grub/grub.conf（/etc/grub.conf是这个的链接）。以下是CentOS的示例grub.conf。
```
#boot=/dev/sda 
 default=0 
 timeout=5 
 splashimage=(hd0,0)/boot/grub/splash.xpm.gz 
 hiddenmenu 
 title CentOS (2.6.18-194.el5PAE) 
          root (hd0,0) 
          kernel /boot/vmlinuz-2.6.18-194.el5PAE ro root=LABEL=/ 
          initrd /boot/initrd-2.6.18-194.el5PAE.img 
```

### 4.内核

*   按照grub.conf中“root =”的指定安装根文件系统
*   内核执行/ sbin / init程序
*   它是由Linux内核执行的第一个程序，它的进程ID（PID）为1.执行'ps -ef | grep init'并检查pid。您也可以使用netstat
*   initrd代表初始RAM磁盘。
*   内核将initrd用作临时根文件系统，直到启动内核并挂载真正的根文件系统。它还包含内部编译的必要驱动程序，这有助于它访问硬盘驱动器分区和其他硬件。

### 5.初始

*   查看/ etc / inittab文件以确定Linux运行级别。
    
*   以下是可用的运行级别
    
*   0 - 停止
    
*   1 - 单用户模式
    
*   2 - 多用户，没有NFS
    
*   3 - 完全多用户模式
    
*   4 - 未使用
    
*   5 - X11
    
*   6 - 重启
    
*   Init从/ etc / inittab标识默认的initlevel，并使用它来加载所有适当的程序。
    
*   在系统上执行'grep initdefault / etc / inittab'以标识默认运行级别
    
*   如果您想遇到麻烦，可以将默认运行级别设置为0或6.因为您知道0和6的含义，可能您可能不会这样做。
    
*   通常，您可以将默认运行级别设置为3或5。
    

### 6.运行级程序

*   Linux系统启动时，您可能会看到各种服务启动。例如，它可能会说“启动sendmail ......”。好”。这些是运行级别程序，从运行级别定义的运行级目录执行。
*   根据您的默认初始级别设置，系统将从以下目录之一执行程序。
*   运行级别0 - /etc/rc.d/rc0.d/
*   运行级别1 - /etc/rc.d/rc1.d/
*   运行级别2 - /etc/rc.d/rc2.d/
*   运行级别3 - /etc/rc.d/rc3.d/
*   运行级别4 - /etc/rc.d/rc4.d/
*   运行级别5 - /etc/rc.d/rc5.d/
*   运行级别6 - /etc/rc.d/rc6.d/
*   在/etc/rc.d/rc\*.d/目录下，您将看到以S和K开头的程序。
*   在启动期间使用以S开头的程序。 S用于启动。
*   在关机期间使用以K开头的程序。 K杀人。
*   程序名称中的S和K旁边有数字。这些是程序应该启动或终止的序列号。