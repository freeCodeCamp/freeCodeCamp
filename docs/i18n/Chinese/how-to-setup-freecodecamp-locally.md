遵循这些准则在您的系统上本地建立免费CodeCamp。 如果您想要定期捐款，这将是强烈推荐的。

对于一些贡献的工作流，您需要在本地运行免费CodeCamp。 例如，预览编码挑战或调试和修复编解码器中的bug。

> [!提示] 如果您不想在本地建立免费CodeCamp，请使用 Gitpod，免费的在线开发环境。
> 
> [![在 Gitpod 中打开](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/freeCodeCamp/freeCodeCamp)
> 
> (在您的浏览器中为FreeCodeCodeCamp启动一个现成的开发环境。)

## 准备您的本地机

首先为您的操作系统安装必备软件。

我们主要支持开发 **\*nix** 系统。 我们的工作人员和社区贡献者经常使用安装在 Ubuntu 和 macOS 上的工具与代码库合作。

我们还通过 WSL 2 支持Windows 10，您可以通过 [阅读本指南](/how-to-setup-wsl) 来准备它。

一些社区成员还在Windows 10上使用Git for Windows (Git Bash)开发，以及安装在Windows上的其他工具。 我们目前对这种设置没有官方支持，我们建议使用WSL2。

**前提条件：**

| 前提条件：                                                                              | 版本     | 注                                                                                                                                            |
| ---------------------------------------------------------------------------------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------- |
| [Node.js](http://nodejs.org)                                                       | `12.x` | [LTS 计划](https://github.com/nodejs/Release#release-schedule)                                                                                 |
| npm (随后与节点捆绑)                                                                      | `6.x`  | 没有LTS版本，我们使用与节点LTS捆绑的版本                                                                                                                      |
| [MongoDB 社区服务器](https://docs.mongodb.com/manual/administration/install-community/) | `3.6`  | [发布笔记](https://docs.mongodb.com/manual/release-notes/), 注意：我们目前在 `3.6`, 计划进行 [升级](https://github.com/freeCodeCamp/freeCodeCamp/issues/18275) |

> [!DANGER] 如果您有不同的版本，请安装推荐版本。 我们只能支持推荐版本的安装问题。 详情见 [故障排除](#troubleshooting)。

如果Node.js已经安装在您的机器上，运行以下命令来验证版本：

```console
节点-v
npm -v
```

> [!提示] 我们强烈建议更新上面列出的软件的最新稳定版本，也称为长期支持(LTS)版本。

一旦安装了前提条件，您需要准备您的开发环境。 这对许多发展工作流来说是常见的，你只需要做一次这么做。

**按照这些步骤准备好您的发展环境：**

1. 如果您还没有安装 [Git](https://git-scm.com/) 或您最喜欢的 Git 客户端。 更新到最新版本；与您的操作系统捆绑的版本可能已经过时。

2. (可选但推荐) [为 GitHub 设置一个 SSH 密钥](https://help.github.com/articles/generating-an-ssh-key/)。

3. 安装您选择的代码编辑器。

   我们强烈建议使用 [Visual Studio 代码](https://code.visualstudio.com/) 或 [Atom](https://atom.io/)。 这些是巨大的、免费的和开源代码编辑器。

4. 为您的代码编辑器设置行号。

   您应该在您的编辑器中运行 [ESLint](http://eslint.org/docs/user-guide/integrations.html)并且它将突出任何不符合 [免费CodeCamp的 JavaScript 风格指南](http://forum.freecodecamp.org/t/free-code-camp-javascript-style-guide/19121) 的内容。

   > [!提示] 请不要忽略任何行号错误。 They are meant to **help** you and to ensure a clean and simple codebase.

## 在 GitHub 上派生仓库

[Forcing](https://help.github.com/articles/about-forks/) 是你在GitHub 上获取你自己的 FreeCodeCamp的主要存储库 (a.k.a _repo_) 的一个步骤。

这是非常重要的，因为它允许您在GitHub上使用您自己的免费CodeCamp， 或者下载 (克隆) 您的资源库在本地工作。 稍后，您将能够通过拉取请求(PR)从分叉中提取到主存储库。

> [!TIP] 主仓库在 `https://github.com/freeCodeCamp/freeCodeCode` 经常被称为 `上游的` 仓库.
> 
> 您在 `https://github.com/YOUR_USER_NAME/freeCodeCamp` 的叉经常被称为 `来源` 资源库。

**按照这些步骤派生 `https://github.com/freeCodeCamp/freeCodeCodeCamp` 仓库：**

1. 转到GitHub上的免费CodeCamp仓库： [https://github.com/freeCodeCodeCamp/freeCodeCamp](https://github.com/freeCodeCamp/freeCodeCamp)

2. 点击接口右上角的“Fork”按钮([此处有更多详细信息](https://help.github.com/articles/fork-a-repo/))

3. 当仓库被解压后，你将被带到你的免费CodeCamp 仓库的副本： `https://github.com/YOUR_USER_NAME/freeCodeCamp`

<details>
   <summary>
      如何派生GitHub 上的 FreeCodeCamp (screshot)
   </summary>

   <br>
   <img src="https://raw.githubusercontent.com/freeCodeCamp/freeCodeCamp/master/docs/images/github/how-to-fork-freeCodeCamp.gif" alt="如何在 GitHub 上派生免费CodeCamp" />
</details>

## 从GitHub 复制你的叉文件

[克隆](https://help.github.com/articles/cloning-a-repository/) 是您的位置 **下载** 从 `远程` 处下载的仓库副本，由您或其他人拥有。 In your case, this remote location is your `fork` of freeCodeCamp's repository that should be available at `https://github.com/YOUR_USER_NAME/freeCodeCamp`.

在本地机器上运行这些命令：

1. 在您的工程目录中打开终端/命令提示/Shell

   _i.e. : `/你的项目目录/`_

2. 克隆你的免费CodeCamp，用你的 GitHub 用户名替换 `YOUR_USER_NAME`

   ```console
   git 克隆--depth=1 https://github.com/YOUR_USER_NAME/freeCodeCamp.git
   ```

这将下载整个免费CodeCamp 仓库到您的项目目录。

注意： `--depth=1` 创建了一个你的叉中的浅色克隆，只有最近的历史/提交。

## 设置父同步

既然你已经下载了你的叉副本，你将需要设置一个 `上游` 远程到父仓库中。

[如前面提到的](#fork-the-repository-on-github), 主仓库已被调用 `上游的` 仓库. 你的叉被称为 `来源` 仓库。

除了 `来源于` 仓库外，您还需要本地克隆的引用到 `上游` 存储库。 这是为了您可以同步主仓库中的更改，而无需重复叉和克隆。

1. 将目录更改为新的 FreeCodeCamp 目录：

   ```console
   cd 免费CodeCamp
   ```

2. 添加远程引用到主FreeCodeCamp仓库：

   ```console
   git 远程添加上游版 https://github.com/freeCodeCamp/freeCodeCamp.git
   ```

3. 确保配置正确：

   ```console
   git 远程-v
   ```

   输出应该像下面这样：

   ```console
   原点 https://github.com/YOUR_USER_NAME/freeCodeCamp.git (fetch)
   原点 https://github.com/YOUR_USER_NAME/freeCodeCamp.git (pack)
   上游流https://github.com/freeCodeCamp/freeCodeCamp.git (fetch)
   上游流 https://github.com/freeCodeCamp/freeCodeCamp.git (pus)
   ```

## 在本地运行免费CodeCamp

现在你有一个本地的免费CodeCamp，你可以按照这些指示在本地运行。 这将允许您：

- 预览将出现在学习平台上的页面.
- 4. 关于与用户界面有关的问题和改进的工作。
- 与应用程序服务器和客户端应用程序调试和修复问题。

如果您确实遇到了问题，请先对您的问题进行网页搜索，并查看是否已经回答过了。 如果您找不到解决方案， 如果尚未报告，请搜索我们的 [GitHub 问题](https://github.com/freeCodeCamp/freeCodeCamp/issues) 页面并报告问题。

一如既往， 觉得可以随时连接到我们的 [贡献者聊天室在 Gitter](https://gitter.im/FreeCodeCamp/Contributors) 或 [我们的 Discord 服务器](https://discord.gg/pFspAhS), 快速查询。

> [!提示] 如果你只是编辑文件，你可能会跳过本地免费运行CodeCamp。 例如，执行 `rebase`, 或解决 `合并` 冲突。
> 
> 以后您总是可以返回说明的这一部分。 You should **only** skip this step if you do not need to run the apps on your machine.
> 
> [跳过进行更改](#making-changes-locally)。

### 配置依赖项

#### 第 1 步：设置环境变量文件

默认 API 密钥和环境变量存储在文件 `sample.env` 中。 此文件需要复制到一个名为 `.env` 的新文件，该文件是在安装过程中动态访问的。

```console
# 创建一个 "sample.env" 的副本，并命名它".env"。
# 用必要的 API 密钥和密钥填充它：

# macOS / Linux
cp 样本。 nv .env

# Windows
复制 sample.env .env
```

`.env` 文件中的密钥 _并不需要更改_ 才能本地运行应用程序。 您可以保留从 `sample.env` 复制的默认值。

> [!提示] 如果您想要使用像Auth0 或 Algolia 这样的服务，请记住。 您必须为这些服务获取您自己的 API 密钥，并相应地在 `中编辑条目。 nv` 文件。

#### 步骤 2: 安装依赖关系

此步骤将安装应用程序运行所需的依赖关系：

```console
npm ci
```

#### 步骤 3: 启动 MongoDB 并种子数据库

在本地运行应用程序之前，您需要启动 MongoDB 服务。

> [!注意] 除非您在 MongoDB 中运行的设置不同于默认， 在 `中存储为 <code>MONGOHQ_URL` 值的 URL。 nv</code> 文件应该正常工作。 如果您正在使用自定义配置，请根据需要修改此值。

在 MongoDB 服务器单独的终端中启动：

- 在 macOS & Ubuntu：

  ```console
  mongod
  ```

- 在 Windows上，您必须指定 `怪物` 双进制的完整路径

  ```console
  "C:\Program Files\MongoDB\Server\3.6\bin\mongod"
  ```

  请确保将 `3.6` 替换为您已安装的版本

> [!提示] 您可以通过安装它作为后台服务来避免每次启动 MongoDB 。 您可以 [在他们为您的操作系统提供的文档中了解更多关于它的信息](https://docs.mongodb.com/manual/administration/install-community/)

接下来，让我们来做数据库的种子。 在这个步骤中，我们运行下面的命令，将MongoDB 服务器填充一些服务所需的初始数据集。 除其他外，其中包括一些计划。

```console
npm 运行种子
```

#### 步骤 4: 启动免费CodeCam客户端应用程序和 API 服务器

您现在可以启动 API 服务器和客户端应用程序。

```console
npm 运行开发
```

这个单一命令将会发射所有的服务，包括API服务器和客户端应用程序供您使用。

> [!注意] 一旦准备就绪, 打开网页浏览器和 **访问 <http://localhost:8000>** 如果应用程序加载，恭喜——你都已设置！ 您现在有一个免费CodeCamp的整个学习平台在您的本地机器上运行。

> [!提示] API 服务器在 `http://localhost:3000` 上提供 API。 Gatsby应用在 `http://localhost:8000` 为客户端应用程序服务

> 如果您访问 <http://localhost:3000/explorer> ，您应该看到可用的 API。

## 使用本地用户登录

您的本地设置自动将本地用户添加到数据库中。 点击 `登录` 按钮将自动认证您进入本地应用程序。

然而，访问用户组合页面有点微妙。 在发展中， Gatsby接管了客户端页面的服务，因此在本地工作时，您将获得用户组合的 `404` 页面。

只需点击 **"预览自定义 404 页面"** 按钮会将您转到正确的页面。

<details>
   <summary>
      如何在本地工作时登录 (屏幕截图)
   </summary>

   <br>
   <img src="https://user-images.githubusercontent.com/29990697/71541249-f63cdf00-2923-11ea-8a85-cefb6f9c9977.gif" alt="如何在本地工作时登录" />
</details>

## 在当地进行变化

您现在可以对文件进行更改并将您的更改提交给您的本地叉。

跟随这些步骤：

1. 验证您在 `master` 分支：

   ```console
   git status
   ```

   您应该获得如下输出：

   ```console
   对于分支管理员
   您的分支是最新的，带有“原始/主”

   无需提交，工作目录清理
   ```

   如果您不在主目录，或者您的工作目录没有被清理，解决任何未处理的文件/提交和结帐 `主`:

   ```console
   git 结帐管理员
   ```

2. 从上游的FreeCodeCamp `master` 分支同步到您的本地主分支的最新更改：

   > [!警告] 如果你有任何未完成的拉取请求是从你的叉的 `主` 分支提出的 在这一步结束时，你会丢失他们。
   > 
   > 您应该确保您的拉取请求在执行此步骤之前由版主合并。 To avoid this scenario, you should **always** work on a branch other than the `master`.

   这个步骤 **将同步来自免费CodeCamp主要仓库的最新更改**。 重要的是您尽可能频繁地将分支重新建立在最新的 `上面/主` 上面，以避免以后发生冲突。

   更新您本地的 FreeCodeCamp 上游版本库：

   ```console
   git 获取上流
   ```

   使用免费CodeCamp大师重置您的主分支：

   ```console
   git 重置 --hard 上游/管理员
   ```

   将您的主分支推送到您的原始位置，在GitHub上的叉上有一个干净的历史记录：

   ```console
   git 推送原始主--force
   ```

   您可以通过执行一个分支来验证您当前的主匹配的上游/主：

   ```console
   git diff 上游/大师
   ```

   生成的输出应为空。

3. 创建新分支：

   为每个问题单独工作一个分支有助于您保持本地工作副本干净。 你永远不应该在 `主` 上工作。 这将使您的免费CodeCamp的副本土生土长，并且您可能必须从新的克隆或叉开始。

   检查您是否像以前解释过的那样在 `主` 上，并从那里关闭分支：

   ```console
   git 结帐-b fix/update-guide-for-xyz
   ```

   您的分支名称应该以 `修复/`、 `feature/`、 `docs/`等开头。 避免在分支中使用问题编号。 保持其简短、有意义和独特性。

   良好的分支名称的一些例子包括：

   ```md
   修复/update-challenges-for-action
   fix/update-guide-for-html-css
   fix/platform-bug-sign-in issues
   feat/add-guide-article-for-javascript
   translate/add-spanish-basic-html
   ```

4. 在您最喜欢的文本编辑器中编辑页面并使用代码。

5. 一旦您对更改感到满意，您应该可以在本地免费运行CodeCamp来预览更改。

6. 请确保您修复任何错误并检查您更改的格式。

7. 检查并确认您正在更新的文件：

   ```console
   git status
   ```

   这将显示您编辑的 `未发布的` 文件列表。

   ```console
   对于分支功能/文档
   您的分支是最新的 "upstream/feate/documentation"。

   更改尚未提交：
   (使用 git add/rm <file>... 更新将要执行的内容
   (使用 "git 结帐" - <file>." 放弃工作目录中的更改)

       修改: CONTRIBUTING。 d
       修改：docsor README.md
       修改：docs/howto setup-freecodecamp-local。 d
       修改: docs/how-work-on-guide-articles.md
...
   ```

8. 阶段更改并提交：

   在这个步骤中，您只应标记您自己编辑或添加的文件。 您可以执行重置和解析文件，如果需要，您不打算更改这些文件。

   ```console
   git 添加路径到/my/changed/file.ext
   ```

   或者您可以将所有 `未发布的` 文件添加到暂存区域：

   ```console
   git 添加
   ```

   只有移到暂存区域的文件才会在提交时被添加。

   ```console
   git status
   ```

   输出:

   ```console
   对于分支功能/文档
   您的分支是最新的 "upstream/feate/documentation"。

   要进行的更改：
   (使用 "git reset HEAD <file>..." to unstage)

       修改：CONTRIBUTING.md
       修改：docs/README.md
       修改：docs/howto setup-freecodecamp-locally.md
       修改：docs/how-work-on-guide-articles.md
   ```

   现在，您可以用这样一个简短的消息来提交您的更改：

   ```console
   git 提交 -m "修复：我的短提交信息"
   ```

   一些例子：

   ```md
   修复：为 Java 更新指南文章 - 循环
   功能：为alexa 技能添加指南文章
   ```

   可选：

   我们强烈建议发表一项常规承诺信息。 这是一个好的做法，您将在一些受欢迎的开源仓库中看到。 作为开发者，这鼓励您遵循标准做法。

   常规承诺信息的一些例子是：

   ```md
   修复：更新 HTML 指南文章
   修复：更新 Travis-CI 版本的脚本
   功能：为JavaScript 钩子
   文档添加文章：更新贡献指南
   ```

   保持这些短篇幅不超过50个字符。 您总是可以在提交消息的描述中添加额外信息。

   这不需要任何额外的时间，只需要一个非常规信息，例如“更新文件”或“添加索引.md”

   您可以了解更多关于您为什么要在这里使用常规提交 [](https://www.conventionalcommits.org/en/v1.0.0-beta.2/#why-use-conventional-commits)。

9. 如果您意识到需要编辑文件或在提交后更新提交消息，您可以在编辑文件后这样做：

   ```console
   git 提交 --revision
   ```

   这将打开一个默认文本编辑器，如 `nano` or `vi` ，您可以在那里编辑提交的消息标题并添加/编辑描述。

10. 接下来，你可以将你的更改推到你的叉中：

    ```console
    git 推送来源分支/名称到这里
    ```

## 提出合并请求(PR)

在您提交了您的更改后，请在这里检查 [如何打开一个合并请求](how-to-open-a-pull-request.md)。

## 快速命令参考

快速引用您在本地工作时需要的命令。

| 命令                                                         | description                        |
| ---------------------------------------------------------- | ---------------------------------- |
| `npm ci`                                                   | 安装/重新安装所有依赖关系和引导不同的服务。             |
| `npm 运行种子`                                                 | 解析所有挑战Markdown文件并将其插入MongoDB。      |
| `npm 运行开发`                                                 | 启动免费CodeCamp API 服务器和客户端应用程序。      |
| `npm 测试`                                                   | 在系统中运行所有 JS 测试，包括客户端、服务器、 直线和挑战测试。 |
| `npm 运行测试：客户端`                                             | 运行客户端测试套件。                         |
| `npm 运行测试：课程`                                              | 运行课程测试套件。                          |
| `npm 运行测试:course --block='Basic HTML 和 HTML5'`             | 测试特定方块。                            |
| `npm 运行 test:course --superblock='responsible web-design'` | 测试一个特定的超级块。                        |
| `npm 运行测试课程全文输出`                                           | 运行课程测试套件，而不会在第一个错误后进行保养。           |
| `npm 运行测试：服务器`                                             | 运行服务器测试套件。                         |
| `npm 运行e2e`                                                | 运行 Cypress 端口来结束测试。                |
| `npm 运行清理`                                                 | 卸载所有依赖关系并清理缓存。                     |

## 故障排除

### 安装推荐前提条件的问题

我们经常在最新或最受欢迎的操作系统上开发，如macOS 10.15或更高版本，Ubuntu 18.04或更高版本，以及Windows 10(WSL2)。

建议在资源上研究您的具体问题，例如谷歌、堆栈溢出和堆栈交换。 有一个很好的机会让某人面临同样的问题，你的具体查询已经有一个答案。

如果您处于不同的操作系统和/或仍在出现问题，请参阅 [获取帮助](#getting-help)。

> [!警告]
> 
> 请避免为前提问题创建 GitHub 问题。 它们超出了该项目的范围。

### UI、字体、构建错误等问题。

如果您面临UI问题，字体或看到构建错误，清理可能有用：

```console
npm 运行清洁
npm ci
npm 运行种子
npm 运行开发
```

或

使用快捷方式

```
npm 运行清理和开发
```

如果你继续面临建筑物问题，清理工作区是推荐的。

在交互模式下使用 `git 净化`

```
git 清理-ifdX
```

<details>
   <summary>
      如何清理git 解压过的文件(屏幕截图)
   </summary>

   <br>
   <img src="https://user-images.githubusercontent.com/1884376/94270515-ca579400-ff5d-11ea-8ff1-152cade31654.gif" alt="如何清理git 解压过的文件" />
</details>

### API、登录、挑战提交等问题

如果您不能登录，而是看到一个带有错误消息的横幅，它将被报告给FreeCodeCodeCamp， 请再次检查您的本地端口 `3000` 是否没有被另一个程序使用。

**在 Linux / macOS / WSL 窗口上 - 从终端：**

```console
netstat -ab | grep "3000"

tcp4 0 0 0.0.0.0:3000 DESKTOP LISTEN
```

**在 Windows 上 - 从高亮的电源架：**

```powershell
netstat -ab | 选择字符串"3000"

TCP 0.0.0:3000DESKTOP 列表正在注意中
```

### 安装依赖关系的问题

如果您在安装依赖时遇到错误， 请确保您不在受限制的网络中，或您的防火墙设置不会阻止您访问资源。

首次设置可能需要一段时间，取决于您的网络带宽。 耐心等待，如果你仍然被卡住，我们使用GitPod 而不是脱机设置。

## 获取帮助

如果您被卡住并需要帮助。 通过在 [中在我们的论坛](https://forum.freecodecamp.org/c/contributors) 上询问贡献者的类别或在 Gitter 上的 [贡献者聊天室](https://gitter.im/FreeCodeCamp/Contributors) 来让我们知道。

在您的浏览器控制台或Bash / Terminal / Command 行中可能有错误，将有助于识别问题。 在您的问题描述中提供此错误信息，以便其他人能够更容易地识别问题并帮助您找到解决方案。
