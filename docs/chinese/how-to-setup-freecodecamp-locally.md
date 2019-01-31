<table>
    <tr>
        <!-- Do not translate this table -->
        <td> Read these guidelines in </td>
        <td><a href="/CONTRIBUTING.md"> English </a></td>
        <td><a href="/docs/chinese/CONTRIBUTING.md"> 中文 </a></td>
        <td><a href="/docs/russian/CONTRIBUTING.md"> русский </a></td>
        <td><a href="/docs/arabic/CONTRIBUTING.md"> عربي </a></td>
        <td><a href="/docs/spanish/CONTRIBUTING.md"> Español </a></td>
        <td><a href="/docs/portuguese/CONTRIBUTING.md"> Português </a></td>
    </tr>
</table>

# 在本地搭建起freeCodeCamp

请遵循以下指南，以便在您的本地系统上获取freeCodeCamp。如果您想经常参与贡献，强烈建议您这样做。

因为一些贡献的工作流程，如预览指南页面或编码挑战，或者调试和修复代码库中的错误，需要您在本地运行freeCodeCamp。

## 在GitHub上分叉存储库

[『Forking』分叉](https://help.github.com/articles/about-forks/) 是一个您在GitHub上获得自己的freeCodeCamp主存储库（又称为 _repo_）副本的步骤。

这是必不可少的一步，因为这样您才可以在您自己的freeCodeCamp副本上工作，不管是直接在Github上处理，还是下载后在本地处理。之后，您将能够通过提交一个拉取请求，来请求将您的修改合并入原主存储库。

> ** 老鸟提示：**
> `https://github.com/freeCodeCamp/freeCodeCamp` 的主存储库通常被称为`upstream`存储库。
> 您在`https://github.com/您的用户名/freeCodeCamp`的分叉通常被称为`origin`存储库。

**按照以下步骤分叉`https://github.com/freeCodeCamp/freeCodeCamp`存储库：**

1. 转到GitHub上的freeCodeCamp存储库：<https://github.com/freeCodeCamp/freeCodeCamp>
2. 单击界面右上角的『Fork』按钮（[更多详细信息](https://help.github.com/articles/fork-a-repo/)）
3. 存储库分叉后，您将被带到的您自己的freeCodeCamp副本上 https://github.com/您的用户名/freeCodeCamp。

![GIF  - 如何在Github上派生freeCodeCamp](/docs/images/github/how-to-fork-freeCodeCamp.gif)

## 准备开发环境

安装必备组件后，需要为开发环境做好准备。这在许多开发工作流程中很常见，您只需要执行一次。

**按照以下步骤准备好开发环境：**

1.如果您还没有安装[Git](https://git-scm.com/)或您喜欢的Git客户端，请先进行安装。更新到最新版本，与您的操作系统捆绑的版本可能已过时。

2.（可选但建议）为GitHub[设置SSH密钥](https://help.github.com/articles/generating-an-ssh-key/)。

3.安装代码编辑器。

    我们强烈推荐 [VS Code](https://code.visualstudio.com/) 或 [Atom](https://atom.io/)。这些是很棒的免费且开源的代码编辑器。

4.为您的代码编辑器设置linting。

    您应该[在您的编辑器中运行ESLint](http://eslint.org/docs/user-guide/integrations.html)，它将突出显示任何不符合[freeCodeCamp的JavaScript样式指南](http://forum.freecodecamp.org/t/free-code-camp-javascript-style-guide/19121)的内容。

    > 请不要忽略任何linting错误。它们旨在**帮助**您，并确保干净简单的代码库。

## 克隆您的freeCodeCamp副本

[『Cloning』克隆](https://help.github.com/articles/cloning-a-repository/) 是一个您从某个『远程』位置**下载**您或其他人拥有的存储库副本的步骤。在我们当前的情况下，这个远程位置指的是您`分叉`的freeCodeCamp存储库，应该可以在`https://github.com/您的用户名/freeCodeCamp`获得。

在您的本地计算机上运行以下命令：

1.在项目目录中打开 终端/命令提示符/ Bash Shell

    _比如：`/ yourprojectdirectory /`_

2.克隆您的freeCodeCamp的fork副本，用您的GitHub用户名替换『您的用户名』。

```shell
git clone https://github.com/您的用户名/freeCodeCamp.git
```

这会将整个freeCodeCamp存储库下载到您的项目目录中。

## 设置`upstream`指向主存储库

现在您已经下载了fork的副本，您需要设置一个`upstream`。

如前所述，`https://github.com/freeCodeCamp/freeCodeCamp`的主存储库通常被称为`upstream`存储库。您在`https://github.com/您的用户名/freeCodeCamp`的分叉通常被称为`origin`存储库。

除了`origin`之外，您还需要为您的本地克隆指向`upstream`。这样您就可以同步原主存储库中的更改，避免一次又一次地进行分叉和克隆。

1. 将当前目录更改为新的freeCodeCamp目录：

    ```shell
    cd freeCodeCamp
    ```

2. 添加 upstream 到主freeCodeCamp存储库：

    ```shell
    git remote add upstream https://github.com/freeCodeCamp/freeCodeCamp.git
    ```

3. 检查配置是否成功：

    ```shell
    git remote -v
    ```

    输出应如下所示：

    ```shell
    origin    https://github.com/YOUR_USER_NAME/freeCodeCamp.git (fetch)
    origin    https://github.com/YOUR_USER_NAME/freeCodeCamp.git (push)
    upstream    https://github.com/freeCodeCamp/freeCodeCamp.git (fetch)
    upstream    https://github.com/freeCodeCamp/freeCodeCamp.git (push)
    ```

## 在您的计算机上本地运行freeCodeCamp

现在您已拥有freeCodeCamp的本地副本，您可以按照这些说明使其在本地运行。这将有助于您：

 - 预览对学习平台上显示的页面的编辑。
 - 处理与UI相关的问题和增强功能。
 - 调试和修复应用程序服务器和客户端应用程序中的问题。

如果您只是编辑文件，执行`rebase`或解决`merge`冲突，您可以跳过本地运行freeCodeCamp。您以后可以随时返回这部分说明。

[跳过本地运行freeCodeCamp这一步](#在本地修改freeCodeCamp的副本)

### 安装先决条件

首先安装这些必备软件。

| 先决条件                                     | 版本     | 备注   |
| ------------------------------------------- | ------- | ----- |
| [MongoDB社区服务器](https://docs.mongodb.com/manual/administration/install-community/)| `3.6` | [发布说明](https://docs.mongodb.com/manual/release-notes/)，注意：我们目前在`3.6`，[计划升级](https://github.com/freeCodeCamp/freeCodeCamp/issues/18275)。
| [Node.js](http://nodejs.org)| `10.x` | [LTS Schedule](https://github.com/nodejs/Release#release-schedule) |
| npm（与Node捆绑在一起）| `6.x` | 没有LTS版本，我们使用与Node LTS 捆绑在一起的版本 |

**重要：**

我们强烈建议您更新上述最新的稳定版本，又称为 长期支持（LTS）版本。
如果您的计算机上已安装Node.js或MongoDB，请运行以下命令以验证版本：

```shell
node -v
mongo --version
npm -v
```

> 如果您有不同的版本，请安装推荐的版本。我们只为推荐版本的安装问题做支持。

**我在安装推荐的先决条件时遇到问题。我该怎么办？**

我们经常在流行的和最新的操作系统上开发，如macOS 10.12或更高版本，Ubuntu 16.04或更高版本以及Windows 10。我们建议在以下资源上查找您的特定问题：Google，Stack Overflow或Stack Exchange。有可能有人遇到了同样的情况，并且您的问题已经有了解决办法。

如果您使用的是其他操作系统，和/或仍然遇到问题，请联系我们公共论坛上的[贡献者社区](https://www.freeCodeCamp.org/c/contributors) 或[贡献者聊天室](https://gitter.im/freeCodeCamp/Contributors) 。

请不要使用GitHub issues 询问软件安装问题，因为它超出了本项目的范围。

### 安装依赖项

首先您需要添加私有环境变量（API密钥）：

```shell
# 创建“sample.env”的副本并将其命名为“.env”。
# 使用必要的API密钥和秘密填充它：

# macOS / Linux
cp sample.env .env

# Windows
copy sample.env .env
```

然后，安装应用程序启动所需的依赖项。

```shell
# 安装NPM依赖项
npm install
```

无需更改密钥即可在本地运行应用程序。您可以保留`sample.env`中的默认值。


接下来，让我们引导各种服务，比如 api 服务器，客户端UI应用等等。您可以[在本指南中了解有关这些服务的更多信息](#)。

`MONGOHQ_URL`是最重要的一个。除非您在不同于默认值的设置中运行MongoDB，否则`sample.env`中的URL应该可以正常工作。

您可以保留其他键。请记住，如果您想使用更多服务，您必须为这些服务获取自己的API密钥，并在`.env`文件中相应地编辑这些条目。


###启动MongoDB

在启动应用程序之前，您需要启动MongoDB：

在另一个独立的终端中启动MongoDB服务器

 - 在macOS和Ubuntu上：

    ```shell
    mongod
    ```

 - 在Windows上，您必须指定`mongod`二进制文件的完整路径

    确保您安装的版本是`3.6`

    ```shell
    "C:\Program Files\MongoDB\Server\3.6\bin\mongod"
    ```

> 老鸟提示：
> 通过将 MongoDB 作为后台服务安装，您可以避免每次必须手动启动的麻烦。
> 您可以[在 MongoDB 文档中了解更多信息](https://docs.mongodb.com/manual/administration/install-community/)

### 填充数据库

接下来，让我们一起填充数据库。在此步骤中，我们运行以下命令，该命令将使MongoDB服务器填充其他服务所需的一些初始数据集。这包括一些结构，以及其他内容。

```shell
npm run seed
```

### 启动freeCodeCamp客户端应用程序和API服务器

现在您能启动API服务器和客户端应用程序。
```shell
npm run develop
```
这单条命令将启动所有服务，包括可供您使用的API服务器和客户端应用程序。

现在打开浏览器并且访问 <http://localhost:8000>。 如果应用加载成功，那么祝贺您——全部设置好了。

> 老鸟提示：
>
> API服务器伺服API于 `http://localhost:3000`
> Gatsby 应用伺服客户端应用程序于 `http://localhost:8000`

这意味着，如果您访问 <http://localhost:3000/explorer> 您应该会看到我们有的APIs。
祝贺🎉! 现在您的本地机器上已经运行了freeCodeCamp的整个学习平台的副本。


## 在本地工作时快速命令参考

下面是对您可能不时需要的本地命令列表的[快速参考](/docs/README.md)

## 在本地修改freeCodeCamp的副本

接下来，您可以做文件的修改，并且提交您的变动。
跟着这些步骤：

1. 确认您处在 `master` 分支上

    ```shell
    git status
    ```

    您应当看到以下输出：

    ```shell
    On branch master
    Your branch is up-to-date with 'origin/master'.

    nothing to commit, working directory clean
    ```

    如果您不是处在 `master` 分支或您的工作目录已产生变动，请处理好任何未解决的文件/提交，并切换回 `master` 分支：

    ```shell
    git checkout master
    ```

2. 接下来，您可能需要从freeCodeCamp主存储库 **同步最新 `master` 分支代码** 。

    **注意：** 如果您在您副本存储库的 `master` 分支有任何未处理的拉取请求（PR），执行这一步都会丢失它们。所以在执行之前，请务必保证这些请求已经被主存储库的管理员合并。当然最好的做法是，总是在一个新的分支上工作，这样就不会出现 `master` 分支被覆盖的问题。

    这一步将从freeCodeCamp主存储库 **同步最新 `master` 分支代码**。尽可能频繁地变基（rebase），以避免以后发生冲突，这一点很重要。

    ```shell
    git fetch upstream
    ```

    现在，您需要对freeCodeCamp master上的副本进行硬重置：

    ```shell
    git reset --hard upstream/master
    ```

    推送这些变化到您的origin，以便您在Github上的存储库的提交历史是准确整洁的。

    ```shell
    git push origin master --force
    ```

3. 下面，您将会创建一个新的分支。

    为每个单独的问题创建单独的分支，可以帮助您保持本地工作副本的整洁。您永远也不应当直接在 `master` 分支上直接工作。这将污染你的freeCodeCamp副本，你可能不得不在一个新的副本上重新来过。

    如前所述，检查您是否处于 `master`，并从那里开始新分支：

    ```shell
    git checkout -b fix/update-guide-for-xyz
    ```

    您的分支名应当以 `fix/`（修复问题）、`feat/`（功能实现） 等等开头。避免使用问题数字序号作为分支名，分支名应当简短、意义明确、不重复。

    这些是好的分支名例子：

    ```md
    fix/update-challenges-for-react
    fix/update-guide-for-html-css
    fix/platform-bug-sign-in-issues
    feat/add-guide-article-for-javascript
    translate/add-spanish-basic-html
    ```

4. 接着，您就可以处理编辑页面，也可以在您最喜欢的文本编辑器中开始工作

5. 一旦您对您的更改感到满意，您可以在本地运行freeCodeCamp来预览这些更改，这一步不是强制。

6. 确保修复了所有错误，并检查更改的格式。我们为指南文章和编码挑战提供了样式指南。

7. 然后，查看并确认您更新过的文件

    ```shell
    git status
    ```

    这条命令会显示您编辑过但 `未分级（unstaged）`的文件列表。

    ```shell
    On branch feat/documentation
    Your branch is up to date with 'upstream/feat/documentation'.

    Changes not staged for commit:
    (use "git add/rm <file>..." to update what will be committed)
    (use "git checkout -- <file>..." to discard changes in working directory)

        modified:   CONTRIBUTING.md
        modified:   docs/README.md
        modified:   docs/how-to-setup-freecodecamp-locally.md
        modified:   docs/how-to-work-on-guide-articles.md
    ...
    ```

8. 将更改分级并提交。

    这一步您应只标记您编辑过的或新添加的文件。您可以执行一个重置，确定出您不打算修改的文件。

    ```shell
    git add path/to/my/changed/file.ext
    ```

    或者你也可以直接把所有`未分级`文件添加到待命（staging）区域。

    ```shell
    git add .
    ```

    当你准备提交的时候，只有被移动到待命区域的文件会被添加。

    ```shell
    git status
    ```

    输出：
    ```shell
    On branch feat/documentation
    Your branch is up to date with 'upstream/feat/documentation'.

    Changes to be committed:
    (use "git reset HEAD <file>..." to unstage)

        modified:   CONTRIBUTING.md
        modified:   docs/README.md
        modified:   docs/how-to-setup-freecodecamp-locally.md
        modified:   docs/how-to-work-on-guide-articles.md
    ```

    现在，您可以像这样使用一条短消息提交更改：

    ```shell
    git commit -m "fix: my short commit message"
    ```

    一些例子：

    ```md
    fix: update guide article for Java - for loop
    feat: add guide article for alexa skills
    ```

    可选：

    我们强烈建议使用约定式提交消息。您将在一些流行的开源存储库中看到这是一个很好的实践。作为开发人员，这鼓励您遵循标准实践。

    一些约定式提交消息的例子：

    ```md
    fix: update HTML guide article
    fix: update build scripts for Travis-CI
    feat: add article for JavaScript hoisting
    docs: update contributing guidelines
    ```

    每条消息尽可能简短，不超过50个字。您总是可以在提交消息的详细描述中补充额外信息。

    这种方式相比非约定式消息如 `更新了文件` 或者 `添加 index.md`，并不会多花时间。

    您可以学习更多关于您[为什么应该使用约定式提交](https://www.conventionalcommits.org/en/v1.0.0-beta.2/#why-use-conventional-commits)。

9. 如果您在完成提交后发现，还需要修改文件或更新提交消息。您可以在修改好文件后执行：

    ```shell
    git commit --amend
    ```

    这条命令将打开您的默认文本编辑器比如 `nano` 或者 `vi`，这里您可以重新编辑提交信息以及详细描述。

10. 下面，您就可以推送您的改动到您的分叉存储库。

    ```shell
    git push origin branch/name-here
    ```

## 提交一个拉取请求（PR）

1. 一旦修改已经提交，您将在Github存储库的页面上被提示可以新建一个拉取请求。

    ![Image - Compare pull request prompt on GitHub](/docs/images/github/compare-pull-request-prompt.png)

2. 一般来说，所有拉取请求都应针对 freeCodeCamp 主存储库的 `master` 分支。

    创建拉取请求时，确认您的基础分叉设置为 freeCodeCamp/freeCodeCamp。

    ![Image - Comparing forks when making a pull request](/docs/images/github/comparing-forks-for-pull-request.png)

3. 提交拉取请求，从您的工作分支，指向 freeCodeCamp 的 `master` 分支。

4. 在PR的主体中应包含您所做修改的更详细描述，以及为什么做这些修改。

    - 您将看到一个拉取请求的模板。这是一个在打开拉取请求之前应该遵循的检查列表。

    - 把你认为合适的细节填进去。这些信息将被检查并决定您的拉取请求是否被接受。

    - 如果PR是为了修复现有的问题，那么在PR描述的最后，添加关键字 `closes` 和 #xxxx(其中xxxx是issue的数字序号)。例如：`closes #1337`。如果PR被接受并合并，GitHub会自动关闭相应的issue。

5. 说明您是否在网站的本地副本上进行过测试。

    这很重要，尤其当你修改的不是markdown文件时。比如，修改 CSS 或者 JS 代码等。

## 获取帮助

如果您遇到困难并需要帮助，请通过[我们论坛的『贡献者』类别](https://www.freecodecamp.org/forum/c/contributors) 或 Gitter 的 [贡献者聊天室](https://gitter.im/FreeCodeCamp/Contributors)联系我們。

您的浏览器控制台或Bash/终端/命令行中可能有错误消息，这将有助于识别问题。

### 故障排除

如果应用程序启动，但您遇到UI本身的错误，例如，如果字体未加载或代码编辑器未正确显示，您可以尝试以下故障排除步骤至少一次：

```shell
# 刪除所有已安装的 node 模块
rm -rf node_modules ./**/node_modules

# 重新安裝npm包
npm install

# 引导項目
npm run bootstrap

# 填充数据库
npm run seed

# 重启应用程序
npm run develop
```
