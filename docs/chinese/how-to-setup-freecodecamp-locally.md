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

＃在本地设置freeCodeCamp

请遵循以下准则，以便在系统上本地获取freeCodeCamp。如果您想定期参与，强烈建议您这样做。

一些贡献工作流程，如预览指南页面或编码挑战，调试和修复代码库中的错误，需要您在本地运行freeCodeCamp。

##在GitHub上分叉存储库

['Forking']（https://help.github.com/articles/about-forks/）是您在GitHub上获得自己的freeCodeCamp主存储库（a.k.a _repo_）副本的步骤。

这是必不可少的，因为这样您就可以在GitHub上处理freeCodeCamp的副本，或者下载它以便在本地工作。稍后，您将能够通过拉取请求请求将更改拖入主存储库。

> ** ProTip：**
>`https：// github.com / freeCodeCamp / freeCodeCamp`的主存储库通常被称为`upstream`存储库。
>您在`https：// github.com / YOUR_USER_NAME / freeCodeCamp`的分支通常被称为`origin`存储库。

**按照以下步骤分叉`https：// github.com / freeCodeCamp / freeCodeCamp`存储库：**

1.转到GitHub上的freeCodeCamp存储库：<https://github.com/freeCodeCamp/freeCodeCamp>
2.单击界面右上角的“Fork”按钮（[更多详细信息]（https://help.github.com/articles/fork-a-repo/））
3.存储库分叉后，您将被带到https：// github.com / YOUR_USER_NAME / freeCodeCamp的freeCodeCamp副本。

！[GIF  - 如何在Github上派生freeCodeCamp]（/ docs / images / github / how-to-fork-freeCodeCamp.gif）

##准备开发环境

安装必备组件后，需要为开发环境做好准备。这在许多开发工作流程中很常见，您只需要执行一次。

**按照以下步骤准备好开发环境：**

1.如果您还没有安装[Git]（https://git-scm.com/）或您喜欢的Git客户端。更新到最新版本，与您的操作系统捆绑的版本可能已过时。

2.（可选但建议）为GitHub设置[SSH密钥]（https://help.github.com/articles/generating-an-ssh-key/）。

3.安装您选择的代码编辑器。

    我们强烈建议使用[VS Code]（https://code.visualstudio.com/）或[Atom]（https://atom.io/）。这些是一些很棒的免费和开源代码编辑器。

4.为您的代码编辑器设置linting。

您应该[在您的编辑器中运行[ESLint]（http://eslint.org/docs/user-guide/integrations.html），它将突出显示任何不符合[freeCodeCamp的JavaScript样式指南]的内容（http：/ /forum.freecodecamp.org/t/free-code-camp-javascript-style-guide/19121）。

    >请不要忽略任何掉毛错误。它们旨在帮助您，并确保干净简单的代码库。

##克隆你的freeCodeCamp副本

['Cloning']（https://help.github.com/articles/cloning-a-repository/）是一个步骤，您可以**下载**您或其他人拥有的存储库副本一个“远程”位置。在你的情况下，这个远程位置是freeCodeCamp存储库的`fork`，应该可以在`https：// github.com / YOUR_USER_NAME / freeCodeCamp`获得。

在本地计算机上运行以下命令：

1.在项目目录中打开终端/命令提示符/ Bash Shell

    _i.e。：`/ yourprojectdirectory /`_

2.克隆你的freeCodeCamp的fork，用你的GitHub用户名替换'YOUR_USER_NAME`

    ```壳
    git clone https://github.com/YOUR_USER_NAME/freeCodeCamp.git
    ```

这会将整个freeCodeCamp存储库下载到您的项目目录中。

##在主存储库中设置`upstream`

现在你已经下载了fork的副本，你需要设置一个`upstream`。

如前所述，`https：// github.com / freeCodeCamp / freeCodeCamp`的主存储库通常被称为`upstream`存储库。你在`https：// github.com / YOUR_USER_NAME / freeCodeCamp`的分支通常被称为`origin`信息库。

除了`origin`之外，你还需要将你的本地克隆指向`upstream`。这样您就可以同步主存储库中的更改。这样您就不必一次又一次地进行分叉和克隆。

1.将目录更改为新的freeCodeCamp目录：

    ```壳
    cd freeCodeCamp
    ```

2.将遥控器添加到主freeCodeCamp存储库：

    ```壳
    git remote add upstream https://github.com/freeCodeCamp/freeCodeCamp.git
    ```

3.检查配置看起来不错：

    ```壳
        git remote -v
    ```

        输出应如下所示：

    ```壳
        来源https://github.com/YOUR_USER_NAME/freeCodeCamp.git（获取）
        来源https://github.com/YOUR_USER_NAME/freeCodeCamp.git（推）
        上游https://github.com/freeCodeCamp/freeCodeCamp.git（获取）
        上游https://github.com/freeCodeCamp/freeCodeCamp.git（推送）
    ```

##在您的计算机上本地运行freeCodeCamp

现在您已拥有freeCodeCamp的本地副本，您可以按照这些说明使其在本地运行。这将有助于您：

 - 预览对学习平台上显示的页面的编辑。
 - 处理与UI相关的问题和增强功能。
 - 调试和修复应用程序服务器和客户端应用程序中的问题。

如果您只是编辑文件，执行`rebase`或解决`merge`冲突，您可以跳过本地运行freeCodeCamp。您以后可以随时返回这部分说明。

[跳过本地运行freeCodeCamp]（＃making-changes-to-your-clone-of-freecodecamp-local）

###安装先决条件

首先安装这些必备软件。

|先决条件|版本|备注|
| ------------------------------------------- | ------- | ----- |
| [MongoDB社区服务器]（https://docs.mongodb.com/manual/administration/install-community/）| `3.6` | [发布说明]（https://docs.mongodb.com/manual/release-notes/），注意：我们目前在`3.6`，[计划升级]（https://github.com/freeCodeCamp/freeCodeCamp /问题/ 18275）。
| [Node.js]（http://nodejs.org）| `8.x` | [LTS Schedule]（https://github.com/nodejs/Release#release-schedule）|
| npm（与Node捆绑在一起）| `6.x` |没有LTS版本，我们使用与Node LTS |捆绑在一起的版本

**重要：**

我们强烈建议您更新上述最新的稳定版本a.k.a长期支持（LTS）版本。
如果您的计算机上已安装Node.js或MongoDB，请运行以下命令以验证版本：

```壳
节点-v
mongo --version
npm -v
```

>如果您有不同的版本，请安装推荐的版本。我们只支持推荐版本的安装问题。

**我在安装推荐的先决条件时遇到问题。我该怎么办？**

我们定期开发流行的和最新的操作系统，如macOS 10.12或更高版本，Ubuntu 16.04或更高版本以及Windows 10.它建议在以下资源上查找您的特定问题：Google，Stack Overflow或Stack Exchange。有可能有人遇到了同样的问题，并且您的特定查询已经有了答案。

如果您使用的是其他操作系统，和/或仍然遇到问题，请联系我们公共论坛上的[贡献者社区]（https://www.freeCodeCamp.org/c/contributors）或[贡献者聊天室] （https://gitter.im/freeCodeCamp/Contributors）。我们或许可以解决一些常见问题。

我们无法在GitHub上为您提供支持，因为软件安装问题超出了本项目的范围。

###安装依赖项

首先安装应用程序启动所需的依赖项。

```壳
＃安装NPM依赖项
npm安装
```

然后，您需要添加私有环境变量（API密钥）：

```壳
＃创建“sample.env”的副本并将其命名为“.env”。
＃使用必要的API密钥和秘密填充它：

#macOS / Linux
cp sample.env .env

#Windows
copy sample.env .env
```
无需更改密钥即可在本地运行应用程序。您可以保留`sample.env`中的默认值。

`MONGOHQ_URL`是最重要的一个。除非您在不同于默认值的设置中运行MongoDB，否则`sample.env`中的URL应该可以正常工作。

您可以保留其他键。请记住，如果您想使用更多服务，您必须为这些服务获取自己的API密钥，并在`.env`文件中相应地编辑这些条目。

接下来，引导各种服务，即api-server，客户端UI应用程序等。您可以[在本指南中了解有关这些服务的更多信息]（＃）。

通过引导，您将绑定服务之间的链接。他们是半独立的。这意味着，在生产中，这些服务会部署到自己的位置，但在本地运行时，您希望它们都可供您使用。

```壳
＃引导此存储库中的所有项目
npm运行bootstrap
```

###启动MongoDB

在启动应用程序之前，您需要启动MongoDB：

在单独的终端中启动MongoDB服务器

 - 在macOS和Ubuntu上：

    ```壳
    的mongod
    ```

 - 在Windows上，您必须指定`mongod`二进制文件的完整路径

    确保用您安装的版本替换`3.6`

    ```壳
    “C：\ Program Files \ MongoDB \ Server \ 3.6 \ bin \ mongod”
    ```

> ProTip：
>通过将其作为后台服务安装，您可以避免每次都启动MongoDB。
>您可以[在他们的操作系统文档中了解更多信息]（https://docs.mongodb.com/manual/administration/install-community/）

###播种数据库

接下来，让数据库播种。在此步骤中，我们运行以下命令，该命令将使MongoDB服务器填充其他服务所需的一些初始数据集。这包括一些模式，以及其他内容。

```壳
npm run seed
```
###开始freeCodeCamp客户端应用程序和API服务器
您能现在开始API服务器和客户端应用程序。
```壳
npm奔跑开发
这
单一命令将射击所有服务的```包括API服务器和客户端应用程序可利用为您运作。
现在打开浏览器并且参观< http://localhost:8000 >。 如果app装载，祝贺-您是全部设置了。
> ProTip ：
>
> API服务器服务APIs在`http://localhost:3000 `
> Gatsby app为客户端应用程序服务在`http://localhost:8000 `
意思，如果您参观< http://localhost:3000/explorer >您应该看APIs我们有。
祝贺🎉! 您现在有freeCodeCamp的整个学习的平台的拷贝运行在您的地方机器的。
##快的命令参考当工作地方
[这一个即时参考](/docs/README.md)时在您可能时常当地需要命令的名单：
当地做对freeCodeCamp您的克隆的##变动
其次，您能做对文件的变动，并且做您的变动。
跟随这些步：
1.一旦提交了編輯內容，系統將提示您在fork的GitHub頁面上創建一個拉取請求。

    ！[圖片 - 比較GitHub上的拉取請求提示]（/ docs / images / github / compare-pull-request-prompt.png）

2.默認情況下，所有pull請求都應該針對freeCodeCamp主repo，`master`分支。

    提出拉取請求時，請確保將Base Fork設置為freeCodeCamp / freeCodeCamp。**

    ！[圖片 - 在提出拉取請求時比較叉子]（/ docs / images / github / comparison -forks-for-pull-request.png）

3.將分支的pull請求提交給freeCodeCamp的`master`分支。

4.在PR的正文中包含更詳細的摘要，包括您所做的更改以及原因。

     - 您將看到一個拉取請求模板。這是在打開拉取請求之前應該遵循的清單。

     - 填寫適合您的詳細信息。我們將審核此信息，並決定是否接受您的提款請求。

     - 如果PR旨在解決現有的錯誤/問題，那麼，在結束時
      你PR的描述，附加關鍵字`closes`和#xxxx（其中xxxx
      是問題編號）。示例：`關閉＃1337`。這告訴GitHub
      如果PR被接受並合併，則自動關閉現有問題。

5.表明您是否在本地網站上進行過測試。

    當您進行非複制編輯降價文件的更改時，這非常重要。例如，對CSS或JavaScript代碼等的更改

##讓你的PR接受



##獲得幫助

如果您遇到困難並需要幫助，請通過我們論壇上的['貢獻者'類別]（https://www.freecodecamp.org/forum/c/contributors）或[貢獻者聊天室]詢問我們（關於Gitter的https://gitter.im/FreeCodeCamp/Contributors）。

您的瀏覽器控制台或Bash /終端/命令行中可能存在錯誤，有助於識別問題。

＃＃＃ 故障排除

如果應用程序啟動但您遇到UI本身的錯誤，例如，如果未加載字體或代碼編輯器未正確顯示，您可以嘗試至少一次以下故障排除步驟：

```殼
＃刪除所有已安裝的節點模塊
rm -rf node_modules ./**/node_modules

＃重新安裝npm包
npm安裝

＃引導項目
npm運行bootstrap

＃種子數據庫
npm run seed

＃重新啟動應用程序
npm run develop
```