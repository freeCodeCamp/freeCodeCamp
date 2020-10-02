# 在FreeCodeCamp.org开发者操作

本指南将帮助您了解我们的基础设施堆栈以及我们如何维护我们的平台。 虽然本指南没有关于所有操作的详尽无遗的细节，但可以用来作为你理解系统的参考。

让我们知道，如果你有反馈意见或询问，我们将乐于加以澄清。

## 我们如何构建、测试和部署代码库？

这个仓库是持续构建、测试和部署到 **个独立的基础设施组合(塞尔维亚、 数据库、 CDN 等)**。

这涉及按顺序采取的三个步骤：

1. 新的更改(修复和功能)通过拉取请求合并到我们的初级开发分支(`主`)。
2. 这些更改是通过一系列自动测试进行的。
3. 测试通过后，我们会发布更改（或在需要时更新它们）以部署到我们的基础设施。

#### 构建代码库-映射Git分支到部署。

典型的 [`master`](https://github.com/freeCodeCamp/freeCodeCamp/tree/master) (默认开发分支) 已合并到 [`生产暂存`](https://github.com/freeCodeCamp/freeCodeCamp/tree/production-staging) 分支每天一次并释放到一个孤立的基础设施。

这是我们的开发者和志愿贡献者的中间版本。 它也被称为“暂存”或“乙型”释放。

它与我们在 `freeCodeCamp.org`的现场生产环境完全相同，而不是使用一套单独的数据库、服务器、网络代理等。 这种隔离使我们能够在像场景一样的“生产”中测试正在进行的开发和功能，而不会影响到FreeCodeCamp.org主平台的正常用户。

开发人员团队 [`@freeCodeCamp/dev-team`](https://github.com/orgs/freeCodeCamp/teams/dev-team/members) 对Staging平台上的更改感到高兴。 这些更改每隔几天移动到 [`当前生产`](https://github.com/freeCodeCamp/freeCodeCamp/tree/production-current) 分支。

这是移动我们在 FreeCodeCamp.org 上生产平台更改的最后版本。

#### 测试更改 - 集成和用户接受测试。

我们采用不同程度的整合和验收测试来检查守则的质量。 我们所有的测试都是通过诸如 [Travis CI](https://travis-ci.org/freeCodeCamp/freeCodeCamp) 和 [Azure Pelines](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp) 等软件完成的。

我们有测试挑战解决方案、服务器 API 和客户端用户界面的单元测试。 这有助于我们检验不同组成部分之间的一体化。

> [!注意] 我们也正在编写终端用户测试，这将有助于复制真实的世界情景，如更新电子邮件或拨打到 API 或第三方服务。

这些测试一起有助于防止问题重复发生，并确保我们在处理另一个错误或功能时不会引入错误。

#### 正在部署更改 - 正在推送对服务器的更改。

我们配置了连续传送软件，将更改推送到我们的开发和生产服务器。

一旦更改被推送到受保护的释放分支，构建管道将自动触发到该分支。 建造管道负责建造人工制品并将其存放在冷藏库以供日后使用。

构建管道继续启动，如果它成功运行，就会触发相应的释放管道。 释放管道负责收集建筑工材，将其移动到服务器并投入运行。

构建和发布状态 [可在这里访问](#build-test-and-deployment-status)。

## 触发建造、试验和部署。

目前，只有开发者团队的成员可以推送到生产分支。 `production-*` 分支的更改只能通过快速合并到 [`上游`](https://github.com/freeCodeCamp/freeCodeCamp) 降落。

> [!注意] 在今后几天中，我们将通过提取请求来改善这种流动，以更好地管理访问和提高透明度。

### 正在推送对待发布应用程序的更改。

1. 正确配置您的遥控器。

   ```sh
   git 远程-v
   ```

   **结果：**

   ```
   original git@github.com:raisedadead/freeCodeCamp.git (fetch)
   origin git@github.com:raisedadead/freeCodeCamp.git (pack)
   upstream git@github.com:freeCodeCamp/freeCodeCamp.git (fetch)
   upstream git@github.com:freeCodeCamp/freeCodeCamp.git (pus)
   ```

2. 请确保您的 `主分支` 原始并与上游同步。

   ```sh
   git 签出master
   git 获取--all --prune
   git reset --hard upstream/master
   ```

3. 检查Travis CI正在上游的 `主` 分支上。

   [连续集成](https://travis-ci.com/github/freeCodeCamp/freeCodeCamp/branches) 测试应该是绿色的， `` 分支应该是绿色的。

    <details> <summary> 正在检查Travis CI上的状态(屏幕截图) </summary>
      <br>
      ![在 Travis CI 上检查构建状态](https://raw.githubusercontent.com/freeCodeCamp/freeCodeCamp/master/docs/images/devops/travis-build.png)
    </details>

   如果这个失败，您应该停止并调查错误。

4. 确认您能够在本地构建资源库。

   ```
   npm 运行清理和开发
   ```

5. 通过快速合并将更改从 `主` 移动到 `生产暂存`

   ```
   git 签出生产暂存
   git 合并主
   git 推送上流
   ```

   > [!注意] 您将无法强制推送，如果您已经重写了历史记录，这些命令将会出去。
   > 
   > 如果他们这样做，你可能做了一些不正确的事情，你应该刚刚开始。

上述步骤将自动触发运行于 `生产暂存` 分支的构建管道。 一旦构建完成，伪影将被保存为冷存储中的 `.zip` 文件，以后检索和使用。

当从已连接的构建管道中可以找到新的艺术品时，释放管道会自动触发。 对于暂存平台，这个过程不需要手动批准，伪影被推送到客户端 CDN 和 API 服务器。

> [!TIP|label:估计数] 通常运行需要 ~20-25分钟才能完成安装，客户端运行需要 ~15-20 分钟， 和 ~5-10 分钟让API能够在线使用。 从代码推送到在分阶段平台上运行，整个过程总共需要 **~35-45 分钟**。

### 推送对生产应用程序的更改。

这个过程基本上与中转平台相同，还有几个额外的检查。 这仅仅是为了确保我们不会在 freeCodeCamp.org 上断开任何东西，因为它可以看到数以百计的用户在任何时候使用它。

| 不要执行这些命令，除非您已经验证所有的工作都在暂存平台上。 您不应在继续进行之前绕过或跳过任何预览测试。 |
|:---------------------------------------------------- |
|                                                      |


1. 请确保您的 `生产暂存` 分支原始并与上游同步。

   ```sh
   git 签出生产暂存
   git 抓取--all --prune
   git reset --hard upstream/production-staging
   ```

2. 通过快速合并将变化从 `生产暂存` 移动到 `生产当前`

   ```
   git 签出当前production-current
   git 合并production-staging
   git 推送上流
   ```

   > [!注意] 您将无法强制推送，如果您已经重写了历史记录，这些命令将会出去。
   > 
   > 如果他们这样做，你可能做了一些不正确的事情，你应该刚刚开始。

上述步骤将自动触发 `生产-当前` 分支在构建管道上的运行。 一旦建筑工件准备就绪，它将触发释放管道上的运行。

> [!TIP|label:估计数] 通常构建运行需要20-25分钟才能完成。

**工作人员行动的其他步骤**

一个版本运行触发，开发人员团队成员将收到自动手动干预电子邮件。 他们可以通过 _批准_ 或 _拒绝发布_。

如果更改运行得很好，并且已经在暂存平台上测试，那么它就可以被批准。 批准必须在被自动拒绝之前4小时内发出。 员工可以重新启动手动运行的被拒绝的释放，或者等待下一个释放周期。

工作人员使用：

| 请检查您的电子邮件直接链接或 [在构建运行完成后转到发布面板](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_release)。 |
|:---------------------------------------------------------------------------------------------- |
|                                                                                                |


一旦一名工作人员批准发布，管道将把更改现场推送到FreeCodeCodeCamp.org的生产CDN和API服务器。 他们通常需要 ~15-20 分钟的客户端，还需要 ~5 分钟的API服务器才能正常使用。

> [!TIP|label:估算] 运行的版本通常需要 ~15-20 分钟，每一个 API 实例的 ~5-10 分钟即可使用。 从代码推送到在生产平台上运行，整个过程总共需要 **~90-120 分钟** (不算等待员工批准的时间)。

## 构建、测试和部署状态

这里是代码库的当前测试、构建和部署状态。

| 类型    | 分支                                                                              | 状态                                                                                                                                                                                                                                          | 仪表板                                                                        |
|:----- |:------------------------------------------------------------------------------- |:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |:-------------------------------------------------------------------------- |
| CI 测试 | [`master`](https://github.com/freeCodeCamp/freeCodeCamp/tree/master)            | ![Travis CI 构建状态](https://travis-ci.com/freeCodeCamp/freeCodeCamp.svg?branch=master)                                                                                                                                                        | [转到状态仪表板](https://travis-ci.com/github/freeCodeCamp/freeCodeCamp/branches) |
| CI 测试 | [`生产暂存中`](https://github.com/freeCodeCamp/freeCodeCamp/tree/production-staging) | ![Travis CI 构建状态](https://travis-ci.com/freeCodeCamp/freeCodeCamp.svg?branch=production-staging)                                                                                                                                            | [转到状态仪表板](https://travis-ci.com/github/freeCodeCamp/freeCodeCamp/branches) |
| 构建管道线 | [`生产暂存中`](https://github.com/freeCodeCamp/freeCodeCamp/tree/production-staging) | [![构建状态](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_apis/build/status/dot-dev-ci?branchName=production-staging)](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_build/latest?definitionId=15&branchName=production-staging) | [转到状态仪表板](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_build)      |
| 释放流线  | [`生产暂存中`](https://github.com/freeCodeCamp/freeCodeCamp/tree/production-staging) |                                                                                                                                                                                                                                             | [转到状态仪表板](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_release)    |
| CI 测试 | [`当前生产`](https://github.com/freeCodeCamp/freeCodeCamp/tree/production-current)  | ![Travis CI 构建状态](https://travis-ci.com/freeCodeCamp/freeCodeCamp.svg?branch=production-current)                                                                                                                                            | [转到状态仪表板](https://travis-ci.com/github/freeCodeCamp/freeCodeCamp/branches) |
| 构建管道线 | [`当前生产`](https://github.com/freeCodeCamp/freeCodeCamp/tree/production-staging)  | [![构建状态](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_apis/build/status/dot-org-ci?branchName=production-current)](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_build/latest?definitionId=17&branchName=production-current) | [转到状态仪表板](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_build)      |
| 释放流线  | [`当前生产`](https://github.com/freeCodeCamp/freeCodeCamp/tree/production-staging)  |                                                                                                                                                                                                                                             | [转到状态仪表板](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_release)    |

## 早期访问和测试测试版

我们欢迎您在 **"公开测试"** 模式中测试这些版本，并尽早访问平台上即将出现的功能。 有时这些功能/变化会被称为接下来的 **、殴打、挂起** 等。

您通过反馈和发布报告做出的贡献将帮助我们在 `免费CodeCodeCamp上创建生产平台。 rg` 更多 **复原力**, **一致性** 和 **稳定** 对所有人来说都是如此。

我们感谢您报告了您遇到的bug，并帮助使FreeCodeCamp.org变得更好。 你摇一摇！

### 确定平台即将到来的版本

目前有一个公开测试版本：

<h1 align="center"><a href='https://www.freecodecamp.dev' _target='blank'>Freecodecamp.dev</a></h1>

> [!注意] 域名与 **`freeCodeCamp.org`** 不同。 这是为了防止搜索引擎索引并避免平台的普通用户感到困惑。

### 确定平台的当前版本

**The current version of the platform is always available at [`freeCodeCamp.org`](https://www.freecodecamp.org).**

开发团队在发布更改时将从 `生产暂存` 分支合并到 `生产当前` 的变化。 顶部提交应该是您在网站上看到的活动内容。

您可以通过访问状态部分中可用的构建和部署日志来识别部署的确切版本。 或者，您也可以在 [贡献者聊天室](https://gitter.im/FreeCodeCamp/Contributors) 打扰我们以获得确认。

### 已知限制

使用平台的 beta 版本时有一些已知的限制和权衡。

- #### 这些测试平台上的所有数据 / 个人进度 `不会被保存或传输到` 生产。

  **测试版上的用户将有一个与生产分开的帐户。** 测试版使用一个与生产分开的实际数据库。 这使我们有能力防止任何意外丢失数据或修改。 开发团队可以根据需要清理这个测试版上的数据库。

- #### 测试平台的使用时间和可靠性没有保障。

  预计部署工作将频繁进行，有时是每天多次。 因此，测试版有时会出现意外故障或功能中断。

- #### 不要向这个站点发送普通用户作为确认修复的措施

  测试站现在是，而且一直是为了加强当地的发展和测试，没有其它东西。 这不是对即将到来的许诺，而是对正在进行的工作的概述。

- #### 签名页面可能看起来不同于生产

   我们在作者0上使用 Freecodecamp.dev 的测试租户，因此没有能力设置自定义域。 这使得所有重定向回调和登录页面都出现在默认域名上： `https://freecodecamp-dev.auth0.com/`。 这不会影响我们能够获得的功能接近生产。

## 报告问题和留下反馈

请为讨论和报告错误打开新问题。 您可以将他们标记为 **[`发布：下次/测试`](https://github.com/freeCodeCamp/freeCodeCamp/labels/release%3A%20next%2Fbeta)** 进行测试。

如果您有任何查询，您可以向 `dev[at]freecodecamp.org` 发送一封电子邮件。 因为所有安全漏洞都应该报告给 `安全[at]Freecodecamp.org` 而不是公共跟踪器和论坛。
