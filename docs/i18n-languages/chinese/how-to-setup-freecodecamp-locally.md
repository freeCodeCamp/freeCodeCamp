<!-- do not translate this -->
| [Read these guidelines in other languages](/docs/i18n-languages) |
|-|
<!-- do not translate this -->


# 在本地启动freeCodeCamp

请遵循以下准则，以便在系统上本地获取freeCodeCamp。如果您想定期参与，强烈建议您这样做。

一些贡献工作流程，如预览指南页面或编码挑战，调试和修复代码库中的错误，需要您在本地运行freeCodeCamp。

## 在GitHub上Fork代码库

[“Fork”]（https://help.github.com/articles/about-forks/）是您在GitHub上获得自己的freeCodeCamp主代码库（a.k.a _repo_）副本的步骤。

这是必不可少的，因为这样您就可以在GitHub上处理freeCodeCamp的副本，或者下载它以便在本地工作。稍后，您将能够通过拉取请求请求将更改拖入主存储库。

> ** ProTip：**
> `https：// github.com / freeCodeCamp / freeCodeCamp`的主存储库通常被关联为`upstream`存储库。
> 您在`https：// github.com / YOUR_USER_NAME / freeCodeCamp`的分支通常被关联为`origin`存储库。

**按照以下步骤Fork`https：// github.com / freeCodeCamp / freeCodeCamp`存储库：**

1. 转到GitHub上的freeCodeCamp存储库：<https://github.com/freeCodeCamp/freeCodeCamp>
2. 单击界面右上角的“Fork”按钮（[更多详细信息]（https://help.github.com/articles/fork-a-repo/））
3. 存储库分叉后，您将被带到https：// github.com / YOUR_USER_NAME / freeCodeCamp的freeCodeCamp副本。

![GIF —— 如何在Github上“Fork” freeCodeCamp](/docs/images/github/how-to-fork-freeCodeCamp.gif)

## 准备开发环境

安装必备组件后，需要为开发环境做好准备。这在许多开发工作流程中很常见，您只需要执行一次。

**按照以下步骤准备好开发环境：**

1. 如果您还没有安装[Git]（https://git-scm.com/）或您喜欢的Git客户端。更新到最新版本，与您的操作系统捆绑的版本可能已过时。

2. （可选但建议）为GitHub设置[SSH密钥]（https://help.github.com/articles/generating-an-ssh-key/）。

3. 安装您选择的代码编辑器。

    我们强烈建议使用[VS Code]（https://code.visualstudio.com/）或[Atom]（https://atom.io/）。这些是一些很棒的免费和开源代码编辑器。

4. 为您的代码编辑器设置linting。

    您应该[在您的编辑器中运行ESLint](http://eslint.org/docs/user-guide/integrations.html)，它将突出显示任何不符合[freeCodeCamp的JavaScript样式指南](http//forum.freecodecamp.org/t/free-code-camp-javascript-style-guide/19121)的内容。

    > 请不要忽略任何掉毛错误。它们旨在帮助您，并确保干净简单的代码库。

## 克隆你的freeCodeCamp副本

["克隆"](https://help.github.com/articles/cloning-a-repository/)是一个步骤，您可以**下载**一个属于您或其他人“远端”位置存储库的副本。在这里，这个远端位置是freeCodeCamp存储库的`fork`，你可以在`http//github.com/YOUR_USER_NAME/freeCodeCamp`获得。

在本地计算机上运行以下命令：

1. 在项目目录中打开终端/命令提示符/Bash Shell

    _i.e。：`/ yourprojectdirectory /`_

2. 克隆你的freeCodeCamp的fork，用你的GitHub用户名替换`YOUR_USER_NAME`

   ```shell
   git clone https://github.com/YOUR_USER_NAME/freeCodeCamp.git
   ```

这会将整个freeCodeCamp存储库下载到您的项目目录中。

## 在主存储库中设置`upstream`

现在你已经下载了fork的副本，你需要设置一个`upstream`。

如前所述，`https：// github.com / freeCodeCamp / freeCodeCamp`的主存储库通常被称为`upstream`存储库。你在`https：// github.com / YOUR_USER_NAME / freeCodeCamp`的分支通常被称为`origin`信息库。

除了`origin`之外，你还需要将你的本地克隆指向`upstream`。这样您就可以同步主存储库中的更改。这样您就不必一次又一次地进行分叉和克隆。

1. 将目录更改为新的freeCodeCamp目录：

    ```shell
    cd freeCodeCamp
    ```

2. 将遥控器添加到主freeCodeCamp存储库：

    ```shell
    git remote add upstream https://github.com/freeCodeCamp/freeCodeCamp.git
    ```

3. 检查配置看起来不错：

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

[跳过本地运行freeCodeCamp](#making-changes-to-your-clone-of-freecodecamp-local)

### 安装先决条件

首先安装这些必备软件。

|先决条件|版本|备注|
| ------------------------------------------- | ------- | ----- |
| [MongoDB社区服务器]（https://docs.mongodb.com/manual/administration/install-community/）| `3.6` | [发布说明]（https://docs.mongodb.com/manual/release-notes/），注意：我们目前在`3.6`，[计划升级]（https://github.com/freeCodeCamp/freeCodeCamp /问题/ 18275）。
| [Node.js]（http://nodejs.org）| `8.x` | [LTS Schedule]（https://github.com/nodejs/Release#release-schedule）|
| npm（与Node捆绑在一起）| `6.x` |没有LTS版本，我们使用与Node LTS |捆绑在一起的版本

**重要：**

我们强烈建议您更新上述最新的稳定版本a.k.a长期支持（LTS）版本。
如果您的计算机上已安装Node.js或MongoDB，请运行以下命令以验证版本：

```shell
mode -v
mongo --version
npm -v
```

> 如果您有不同的版本，请安装推荐的版本。我们只支持推荐版本的安装问题。

**我在安装推荐的先决条件时遇到问题。我该怎么办？**

我们定期开发流行的和最新的操作系统，如macOS 10.12或更高版本，Ubuntu 16.04或更高版本以及Windows 10.它建议在以下资源上查找您的特定问题：Google，Stack Overflow或Stack Exchange。有可能有人遇到了同样的问题，并且您的特定查询已经有了答案。

如果您使用的是其他操作系统，和/或仍然遇到问题，请联系我们公共论坛上的[贡献者社区]（https://www.freeCodeCamp.org/c/contributors）或[贡献者聊天室] （https://gitter.im/freeCodeCamp/Contributors）。我们或许可以解决一些常见问题。

我们无法在GitHub上为您提供支持，因为软件安装问题超出了本项目的范围。

### 安装依赖项

首先，你需要添加私有环境变量（API密钥）：

```shell
# 创建“sample.env”的副本并将其命名为“.env”。
# 使用必要的API密钥和秘密填充它：

# macOS / Linux 环境下
cp sample.env .env

# Windows 环境下
copy sample.env .env
```

然后，你需要安装应用启动需要的依赖。

```shell
# 安装NPM依赖项
npm install
```

无需更改密钥即可在本地运行应用程序。您可以保留`sample.env`中的默认值。

`MONGOHQ_URL`是最重要的一个。除非您在不同于默认值的设置中运行MongoDB，否则`sample.env`中的URL应该可以正常工作。

您可以保留其他键。请记住，如果您想使用更多服务，您必须为这些服务获取自己的API密钥，并在`.env`文件中相应地编辑这些条目。

### 启动MongoDB

在启动应用程序之前，您需要启动MongoDB：

在单独的终端中启动MongoDB服务器

- 在macOS和Ubuntu上：

    ```shell
    mongod
    ```

- 在Windows上，您必须指定`mongod`二进制文件的完整路径
    确保用您安装的版本替换`3.6`

    ```shell
    "C:\Program Files\MongoDB\Server\3.6\bin\mongod"
    ```

> ProTip：
> 通过将其作为后台服务安装，您可以避免每次都启动MongoDB。
> 您可以[在他们的操作系统文档中了解更多信息](https://docs.mongodb.com/manual/administration/install-community/)

### 播种数据库

接下来，让数据库播种。在此步骤中，我们运行以下命令，该命令将使MongoDB服务器填充其他服务所需的一些初始数据集。这包括一些模式，以及其他内容。

```shell
npm run seed
```

### 开始freeCodeCamp客户端应用程序和API服务器

您能现在开始API服务器和客户端应用程序。
```shell
npm run develop
```

这单一命令将启动所有服务，包括API服务器和客户端应用程序都会为您运行。
现在打开浏览器并且访问<http://localhost:8000>。 如果app运行，祝贺-您是全部设置好了。

> 专业小贴士 ：
>
> API服务器服务APIs在`http://localhost:3000 `
> Gatsby app为客户端应用程序服务在`http://localhost:8000 `

意思是，如果您参观<http://localhost:3000/explorer>您可以看到我们有的API。

祝贺🎉! 您现在有freeCodeCamp的整个学习的平台的拷贝运行在您的本地机器上。

## 本地启动应用快捷命令参考

[这有一些快捷参考](/docs/chinese/README.md)，列举出了当你在本地启动项目是时常需要的一些命：

## 对克隆到本地的freeCodeCamp代码进行改动

接下来，您能对文件做改动，并保存（commit）你的改动。

遵循以下步骤：

1. 检查你是否在 `master` 分支上

    ```shell
    git status
    ```

    你可能会得到如下输出：

    ```shell
    On branch master
    Your branch is up-to-date with 'origin/master'.

    nothing to commit, working directory clean
    ```

    如果你不是在master分支上或者你工作的文件夹不干净, 消除所有未完成的文件/保存并且切换到`master`分支上：

    ```shell
    git checkout master
    ```

2. 接下来，你可能想从freeCodeCamp主代码库**同步`master`分支最新的修改**。

    **提示：**如果你有任何未完成的之前以你Fork的代码库的`master`分支发起的拉取请求，你将会丢失掉他们。 你应该让一个主持人优先跟进，合并它们。为了避免这种情况，你应当总是在一个分支上工作。

    尽量经常做此操作, 以避免日后造成冲突：

    ```shell
    git fetch upstream
    ```

    现在，你可能想让副本相对于freeCodeCamp的master代码分支做一个硬性重置：

    ```shell
    git reset --hard upstream/master
    ```

    推送你的分支到你名为origin的远端代码库,以清理你在GitHub上Fork的代码库的历史纪录：

    ```shell
    git push origin master --force
    ```

3. 接下来, 你需要创建一个新的分支。

    为每个单独的问题创建一个分离的分支进行处理，会帮助你保持你的本地副本库干净。你永远不要在`master`分支上工作。否则会弄脏你的freeCodeCamp副本，而且你可能不得不通过重新克隆或者Fork来重新开始。

    像之前讲解的那样检查是否在`master`分支上，创建一个新的分支并离开这个分支：

    ```shell
    git checkout -b fix/update-guide-for-xyz
    ```

    你的分支名应该以 `fix/`、`feat/` 等开始。要避免在分支名中使用问题的编号。保持名称短小，有意义并且唯一。

    如下，一些比较不错的分支命：

    ```md
    fix/update-challenges-for-react
    fix/update-guide-for-html-css
    fix/platform-bug-sign-in-issues
    feat/add-guide-article-for-javascript
    translate/add-spanish-basic-html
    ```

4. 接下来，你可以在你喜欢的编辑器上编辑页面和代码了。

5. 一旦对你的修改满意了，你亏启动本地freeCodeCamp项目来预览你的修改。

6. 确保你修复任意的错误并检查你的修改格式。我们有指南文章和代码挑战和风格指南。

7. 接下来，检查和确认你更新的文件

    ```shell
    git status
    ```

    这个命令会显示一个你编辑过但`未缓存的`文件列表。

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

8. 缓存修改并保存。

    这部你只需要标记你修改或添加的文件。你可以执行一下重置，并且消除那些你不想修改的文件。

    ```shell
    git add path/to/my/changed/file.ext
    ```

    或者, 可选地你可以添加所`未缓存的`文件到缓存区域：

    ```shell
    git add .
    ```

    当你执行保存的时候，只有添加到缓存区的修改才会被保存。

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

    现在, 你可以像这样附带一个短信息保存你的修改：

    ```shell
    git commit -m "fix: my short commit message"
    ```

    一些例子：

    ```md
    fix: update guide article for Java - for loop
    feat: add guide article for alexa skills
    ```

    可选的：

    我们高度推荐提交约定保存信息。这是一个你可以在其他一些流行的开源库上看到最佳实践。作为一个开发者，这鼓励你遵循标准实践

    一些约定的保存信息例子：

    ```md
    fix: update HTML guide article
    fix: update build scripts for Travis-CI
    feat: add article for JavaScript hoisting
    docs: update contributing guidelines
    ```

    保持短小, 不要超过50个字母。你可以一直在保存信息的描述上添加额外信息。

    这并不会比'update file'或者'add index.md'这样的非约定信息消耗更多额外的时间。

    你可以通过[这里](https://www.conventionalcommits.org/en/v1.0.0-beta.2/#why-use-conventional-commits)了解更多关于我们为什么需要使用约定保存。

9. 如果你在做了保存后意识到你需要编辑一个文件或者更新保存信息，在编辑文件之后这样做：

    ```shell
    git commit --amend
    ```

    这会打开一个默认的像`nano`或`vi`的文本编辑器，你可以在上面编辑保存信息标题并且添加/编辑描述。

10. 接下来，你可以推送你的修改到你的Fok仓库了。

    ```shell
    git push origin branch/name-here
    ```


## 提交一个拉取请求（Pull Request——PR）

1. 一旦提交了编辑內容，系统将提示您在fork的GitHub页面上创建一个拉取请求。

    ![Image - Compare pull request prompt on GitHub](/docs/images/github/compare-pull-request-prompt.png)

2. 默认情况下，所有拉取请求都应该针对freeCodeCamp主代码库的`master`分支。

    提出拉取请求时，请确保将Base Fork设置为freeCodeCamp/freeCodeCamp。

    ![Image - Comparing forks when making a pull request](/docs/images/github/comparing-forks-for-pull-request.png)

3. 将分支的拉取求提交给freeCodeCamp的`master`分支。

4. 在PR的正文中包含尽量详细的摘要，包括您所做的更改以及原因。

     - 您將看到一個拉取请求模板。这是在打开拉取請求之前应该遵循的清单。

     - 填写适合您的详细信息。我们将核对此信息，并决定是否接受您的拉取请求。

     - 如果PR旨在解决现有的错误/问题，那么，在结束时
      你PR的描述，附加关键字`closes`和#xxxx（其中xxxx
      是问题编号）。示例：`close#1337`。這告訴GitHub
      如果PR被接受并合并，则自动关闭现有问题。

5. 表明您是否在本地网站上进行过测试。

    当您进行非复制编辑markdown文件的修改时，这非常重要。例如，对CSS或JavaScript代码等的更改。

## 获取帮助

如果您遇到困难并需要帮助，请通过我们论坛上的['贡献者'类別](https://forum.freecodecamp.org/c/contributors)或在Gitter上的[贡献者者聊天室](https://gitter.im/FreeCodeCamp/Contributors)询问我們。

您的浏览器控制台或Bash/終端/命令行中可能存在錯誤有助於识別問題。

### 故障排除

如果應用程序啟動但您遇到UI本身的錯誤，例如，如果未加載字體或代碼編輯器未正確顯示，您可以嘗試至少一次以下故障排除步驟：

```shell
# 刪除所有已安裝的節點模塊
rm -rf node_modules ./**/node_modules

# 重新安裝npm包
npm安裝

# 引導項目
npm運行bootstrap

# 種子數據庫
npm run seed

#重新啟動應用程序
npm run develop
```
