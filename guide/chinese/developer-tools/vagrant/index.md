---
title: Vagrant
localeTitle: 流浪汉
---
## 流浪汉

Vagrant是用于构建和管理虚拟机（VM）环境的工具。虚拟机可用于任何原因，但对开发人员和DevOps特别有用。

### 为什么流浪汉很有用

作为开发人员，通过使用VM，您可以拥有用于测试代码的本地环境，该环境与生产环境相同，无论您用于编码的环境如何。

对于DevOps，VM非常有用，可用于测试基础设施，配置，脚本或其他任何内容的高度可配置的一次性机器。

使用Vagrant，要使用VM，您只需要一个名为`VagrantFile`文件，其中包含VM以及所需的所有配置。通过这种方式，您可以轻松创建一个特定的，独立的开发环境，该环境非常便于携带，并且可以由团队的所有成员共享和使用。

Vagrant还有预定义的`boxes` ，它们是基本的VM，可以很容易地克隆和扩展。

Vagrant的另一个非常酷的功能是使用`synced folders` 。可以将VM的文件夹与来宾计算机中的文件夹同步。通过这样做，您可以在本地文件上使用您喜欢的编辑器，同时将这些文件同步到正在运行的VM。

#### 更多信息：

[流浪汉网站](https://www.vagrantup.com/)

### 安装Vagrant

要安装Vagrant，请先找到[适合](https://www.vagrantup.com/downloads.html)您系统的[软件包](https://www.vagrantup.com/downloads.html)并下载。 Vagrant被打包为特定于操作的包。运行系统的安装程序。安装程序会自动将vagrant添加到您的系统路径，以便它可以在终端中使用。如果找不到，请尝试注销并重新登录系统（对于Windows，这有时尤为必要）。

### 验证安装

安装Vagrant后，通过打开新的命令提示符或控制台并检查该vagrant是否可用来验证安装是否有效：

```bash
$ vagrant 
 Usage: vagrant [options] <command> [<args>] 
 
    -v, --version                    Print the version and exit. 
    -h, --help                       Print this help. 
 
 # ... 
```

### 入门

```bash
$ vagrant init hashicorp/precise64 
 $ vagrant up 
```

### 盒

盒子被添加到Vagrant与vagrant box add。这会将该框存储在特定名称下，以便多个Vagrant环境可以重复使用它。如果您还没有添加盒子，现在可以这样做：

```bash
$ vagrant box add hashicorp/precise64 
```

### 寻找更多的盒子

找到更多盒子的最佳位置是[HashiCorp的Vagrant Cloud盒子目录](https://vagrantcloud.com/boxes/search) 。

### 共同

Youtube： [Codecourse的](https://www.youtube.com/user/phpacademy) [Vagrant入门](https://www.youtube.com/watch?v=LyIyyFDgO4o)

#### 更多信息：

Vagrant网站： [vagrantup.com](https://www.vagrantup.com)