# 局部地设置freeCodeCamp

请遵循以下准则，以便在您系统上局部地使用freeCodeCamp。若您时常参与，我们强烈建议您这样做。

一些贡献工作流程，如预览指南页面或编码挑战，调试和修复代码库中的错误，需要您在局部地运行freeCodeCamp。

## 分叉GitHub存储库

['Forking'](https://help.github.com/articles/about-forks/) 是您在GitHub上获得自己的freeCodeCamp主存储库（a.k.a _repo_）副本的步骤。

这是必不可少的，因为这样您就可以在GitHub上处理freeCodeCamp的副本，或者下载它以便在您电脑局部地工作。稍后，您将能够通过拉取请求将更改并入主存储库。

> ** 专人指点：**
>`https：// github.com / freeCodeCamp / freeCodeCamp`的主存储库通常被称为`upstream`或‘上流’存储库。
>您在`https：// github.com / YOUR_USER_NAME / freeCodeCamp`的分支通常被称为`origin`或‘起源‘存储库。

**按照以下步骤分叉`https：// github.com / freeCodeCamp / freeCodeCamp`存储库：**

1.请到GitHub上的freeCodeCamp存储库：<https://github.com/freeCodeCamp/freeCodeCamp>
2.点击网页右上角的“Fork”按钮（[更多详情](https://help.github.com/articles/fork-a-repo/)）
3.存储库分叉后，您将被带到https：// github.com / 您用户名 / freeCodeCamp的freeCodeCamp副本。

![GIF - How to fork freeCodeCamp on Github](/docs/images/github/how-to-fork-freeCodeCamp.gif)

## 准备开发环境

安装必备组件后，您需要为开发环境做好准备。这在许多开发工作流程中都很常见，您只需要执行一次。

**按照以下步骤准备好开发环境：**

1.若您还未安装，请安装[Git](https://git-scm.com/) 或您喜欢的Git客户端。更新到最新版本，您的操作系已有的版本可能已过时。

2.（可选但建议您）为GitHub设置[SSH密钥](https://help.github.com/articles/generating-an-ssh-key/)。

3.安装您选择的代码编辑器。

  我们强烈建议使用[VS Code](https://code.visualstudio.com/) 或 [Atom](https://atom.io/) 。这些是一些很棒而免费的开源代码编辑器。

4.为您的代码编辑器设置linting。

   您应该[在您的编辑器中运行[ESLint](http://eslint.org/docs/user-guide/integrations.html) ，它将突出显示任何不符合[freeCodeCamp的JavaScript样式指南](http://forum.freecodecamp.org/t/free-code-camp-javascript-style-guide/19121) 的内容。

   >请不要忽略任何Linting显示的错误。它是在**帮助您**，并确保干净简单的代码库。

## 复制您的freeCodeCamp副本

['Cloning'](https://help.github.com/articles/cloning-a-repository/) 让您可以**下载**您或其他人拥有的一个“远程”存储库副本。在您的情况下，这个“远程”副本是freeCodeCamp存储库的`fork`，应该可以在`https：// github.com / 您用户名  / freeCodeCamp`获得。

在局部性电脑上运行以下命令：

1.在项目目录中打开终端/命令提示符/ Bash Shell

    _i.e.：`/ yourprojectdirectory /`_

2.克隆你的freeCodeCamp的fork，用你的GitHub用户名替换'YOUR_USER_NAME`

```shell
    git clone https://github.com/YOUR_USER_NAME/freeCodeCamp.git
```

这将把整个freeCodeCamp存储库下载到您的项目目录中。

## 在主存储库中设置`upstream`

现在您已经下载了您的fork的副本，您将需要设置一个`upstream`。

如前所述，`https：// github.com / freeCodeCamp / freeCodeCamp`的主存储库通常被称为`upstream`存储库。你在`https：// github.com / YOUR_USER_NAME / freeCodeCamp`的分支通常被称为`origin`信息库。

除了`origin`之外，你还需要将你的本地克隆指向`upstream`。这样您就可以同步主存储库中的更改。这样您就不必一次又一次地进行分叉和复制。

1.将目录更改为新的freeCodeCamp目录：

```shell
   cd freeCodeCamp
```

2.将"远程“副本添加到主freeCodeCamp存储库：

```shell
   git remote add upstream https://github.com/freeCodeCamp/freeCodeCamp.git
```

3.检查配置,看合不合您心意：

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

## 在您的电脑上本地运行freeCodeCamp

现在您已拥有freeCodeCamp的本地副本，您可以按照这些说明使其在本地运行。这将有助于您：

 - 预览对学习平台上显示的页面的编辑。
 - 处理与UI相关的问题和增强功能。
 - 调试和修复应用程序服务器和客户端应用程序中的问题。

如果您只是编辑文件，执行`rebase`或解决`merge`冲突，您可以跳过本地运行freeCodeCamp。您以后可以随时返回这部分说明。

[跳过本地运行freeCodeCamp](#making-changes-to-your-clone-of-freecodecamp-locally)

### 安装必备软件

首先安装这些必备软件。

|必备软件|版本|备注|
| ------------------------------------------- | ------- | ----- |
| [MongoDB社区服务器](https://docs.mongodb.com/manual/administration/install-community/)| `3.6` | [发布说明](https://docs.mongodb.com/manual/release-notes/)， 注意：我们目前在`3.6`， [计划升级](https://github.com/freeCodeCamp/freeCodeCamp/issues/18275)。
| [Node.js](http://nodejs.org) | `8.x` | [LTS Schedule](https://github.com/nodejs/Release#release-schedule) |
| npm（与Node捆绑在一起）| `6.x` |没有LTS版本，我们使用与Node LTS |捆绑在一起的版本

**重要：**

我们强烈建议您更新上述最新的稳定版本a.k.a长期支持（LTS）版本。
如果您电脑上已安装Node.js或MongoDB，请运行以下命令以验证版本：

```shell
node -v
mongo --version
npm -v
```

>如果您有不同的版本，请安装推荐的版本。我们只支持推荐版本的安装问题。

**我在安装推荐的必备软件时遇到了问题。我该怎么办？**

我们定期开发流行的和最新的操作系统，如macOS 10.12或更高版本，Ubuntu 16.04或更高版本以及Windows 10.建议您在以下资源上搜寻您的特定问题：Google，Stack Overflow或Stack Exchange。有可能有人遇到了同样的问题，并且已经有了答案。

如果您使用的是其他操作系统，和/或仍然遇到问题，请联系我们公共论坛上的[贡献者社区](https://www.freeCodeCamp.org/c/contributors)  或 [贡献者聊天室](https://gitter.im/freeCodeCamp/Contributors) 。我们或许可以解决一些常见问题。

我们无法在GitHub上为您提供支持，因为软件安装问题超出了本项目的范围。

### 安装依赖选项

首先安装应用程序启动所需的依赖选项。

```shell
# Install NPM dependencies
npm install
```

然后，您需要添加私有环境变量（API密钥）：

```shell
＃创建“sample.env”的副本并将其命名为“.env”。
＃使用必要的API密钥和秘密填充它：

# macOS / Linux
cp sample.env .env

# Windows
copy sample.env .env
```
无需更改密钥即可在局部地运行应用程序。您可以保留`sample.env`中的默认值。

`MONGOHQ_URL`是最重要的一个。除非您在不同于默认值的设置中运行MongoDB，否则`sample.env`中的URL应该可以正常工作。

您可以保留其他选项。请记住，如果您想使用更多服务，您必须为这些服务获取自己的API密钥，并在`.env`文件中相应地编辑这些条目。

接下来，引导各种服务，即api-server，客户端UI应用程序等。您可以[在本指南中了解有关这些服务的更多信息]（＃）。

通过引导，您将绑定服务之间的链接。他们是半独立的。这意味着，在生产中，这些服务会部署到自己的位置，但在本地运行时，您希望它们都可供您使用。

```壳
＃引导此存储库中的所有项目
npm run bootstrap
```

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
    “C：\ Program Files \ MongoDB \ Server \ 3.6 \ bin \ mongod”
```

> 专人指点：
>将其设为后台服务安装，可以避免每次启动MongoDB。
>您可以[在他们的操作系统文档中了解更多信息](https://docs.mongodb.com/manual/administration/install-community/)

### 播种数据库

接下来，我们将在数据库播种。在此步骤中，我们运行以下命令，该命令将其他服务所需的一些初始数据集添加进MongoDB服务器。这包括一些模式，以及其他内容。

```shell
   npm run seed
```
### 开始freeCodeCamp客户端应用程序和API服务器

您能现在开始API服务器和客户端应用程序。

```shell
   npm run develop
```
这一个命令将射击所有服务，包括API服务器和客户端应用程序都可为您运作。
现在打开浏览器并且参观< http://localhost:8000 >。 如果app装载，恭喜 -- 您已整装待发。

> 专人指点：
>
> API服务器服务APIs在`http://localhost:3000 `
> Gatsby app为客户端应用程序服务在`http://localhost:8000 `

所以，如果您参观< http://localhost:3000/explorer >您应该会看到我们所有的APIs。
恭喜 🎉! 您现在有freeCodeCamp整个学习平台的副本运行在您的电脑。

## 局部工作的迅速命令参考
[这一个即时参考](/docs/README.md)时在您可能时常需要命令的名单：
## 当地做对您的freeCodeCamp副本进行复制
其次，您能做对文件的变动，并合做您的变动。
依照以下步骤：
1.确保您在‘master'的支上

```shell
   git status
```
您应该收到以下回复：

```shell
   On branch master
   Your branch is up-to-date with 'origin/master'.

   nothing to commit, working directory clean 
```
若您不再‘master' 或工作目录还没清理，请清理文件与拼合修改，然后 checkout `master`:

```shell
   git checkout master
```
2.接下来，您必须由`upstream`来`rebase` 。

这一步将从freeCodeCamp的主储藏库**同步任何改变**。为避免文件有冲突，您必须经常做‘rebase'。

```shell
   git pull --rebase upstream master
```
您也可以有‘起源’合拼进主储藏库，以保持您Github上副本的整洁。

```shell
   git push origin master --force
```

3. 之后, 您需要一个新的分支。

   在不同的分支修改不同的文章会帮助您保持文章整洁。请不要在`master`上工作。那可能会损坏您的副本，导致您得从新复制。

   如之前所提，检查您是否在 `master`然后从那里分支:

```shell
   git checkout -b fix/update-guide-for-xyz
```

    您的分支名称应始于`fix/`, `feat/`等等。避免使用编号。给分支取格简短，易分辨，有意义的名称。

    好的分支名称例子:

```md
    fix/update-challenges-for-react
    fix/update-guide-for-html-css
    fix/platform-bug-sign-in-issues
    feat/add-guide-article-for-javascript
    translate/add-spanish-basic-html
```

4. 接下来, 您可在您所喜的编辑器篇写文章或编码了。

5. 您可工作完毕后，到局部的freeCodeCamp预览您做的改变。

6. 确认您已校对错误,检查书写风格。我们的文章与篇码挑战都有个风格指南。

7. 接下来, 检查和确认您想跟新的文件。

```shell
    git status
```

   这将会显示您所修改的`unstaged`文件。

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

8. 改变阶段与提出更改。

   在这一步，您应该只选出您修改或更新的文件。（您可以重启您不想更改的文件。）
   
```shell
   git add path/to/my/changed/file.ext
```
   或者, 您可把 `unstaged` 文件加入’staging area‘:

```shell
   git add .
```
   只有移至‘staging area’的文件会被加入更改。

```shell
   git status
```
   回复:
```shell
    On branch feat/documentation
    Your branch is up to date with 'upstream/feat/documentation'.

   将被拼合的修改:
    (use "git reset HEAD <file>..." to unstage)

        modified:   CONTRIBUTING.md
        modified:   docs/README.md
        modified:   docs/how-to-setup-freecodecamp-locally.md
        modified:   docs/how-to-work-on-guide-articles.md
```

   现在，您便可加入留言，拼合您的修改如下：

```shell
    git commit -m "fix: my short commit message"
```

   例:

```md
    fix: update guide article for Java - for loop
    feat: add guide article for alexa skills
```

   可选:

   我们强力推荐使用常规拼合讯息。您将会在人气开源储藏库发现，这是个好习惯。身为开发人员，这鼓励您遵循常规原则。
    
   常规拼合讯息例子:

```md
    fix: update HTML guide article
    fix: update build scripts for Travis-CI
    feat: add article for JavaScript hoisting
    docs: update contributing guidelines
```

   请简短, 不要过于50个字。您可在之下的留言格上，书写详细内容。

   这并不会比用非常规的'update file'或'add index.md'花上跟多时间。

   您可到[这里](https://www.conventionalcommits.org/en/v1.0.0-beta.2/#why-use-conventional-commits)了解为何该使用常规拼合讯息。

9. 如果您发现您需要修改文件，或更新您的请求讯息，您可在作出更改后：

```shell
    git commit --amend
```

   这会开启默认文本编辑器，如`nano`或`vi`。您便能更改或加入讯息。

10. 现在, 您可由您的分叉拼合。

```shell
    git push origin branch/name-here
```

## 讓你的PR接受
1.一旦提交了編輯內容，系統將提示您在fork的GitHub頁面上創建一個拉取請求。

  ![Image - Compare pull request prompt on GitHub](/docs/images/github/compare-pull-request-prompt.png)


2.默認情況下，所有請求都應該針對freeCodeCamp主repo，`master`分支。
  提出拉取請求時，請確保將Base Fork設置為freeCodeCamp / freeCodeCamp。**

   ![Image - Comparing forks when making a pull request](/docs/images/github/comparing-forks-for-pull-request.png)

3.將分支的請求提交給freeCodeCamp的`master`分支。

4.在PR的正文中包含更詳細的摘要，包括您所做的更改以及原因。

     - 您将看到一個拉取請求模板。這是在打开拉取請求之前应该遵循的清单。

     - 填写適合的信息。我們將審核此信息，並決定是否接受您的提出的請求。

     - 如果PR旨在解決現有的错误/问题，那在結束時
      你PR的描述，附加关键字`closes`和#xxxx（其中xxxx
      是問題編號）。示例：`关闭＃1337`。這告訴GitHub
      如果PR被接受並合併，則自动关闭现有问题。

5.表明您是否在本地網站上進行過测试。

    當您進行非複制編輯降價文件的更改時，這非常重要。例如，對CSS或JavaScript代碼等的更改

## 獲得幫助

如果您遇到困難並需要幫助，請通過我們論壇上的['貢獻者'類別](https://www.freecodecamp.org/forum/c/contributors)或[貢獻者聊天室](https://gitter.im/FreeCodeCamp/Contributors)詢問我們的Gitter。

您的瀏覽器控制台或Bash /終端/命令行中可能存在錯誤，有助於識別問題。

### 故障排除

如果應用程序啟動但您遇到UI本身的錯誤，例如，如果未加載字體或代碼編輯器未正確顯示，您可以嘗試至少一次以下故障排除步驟：

```shell
＃刪除所有已安裝的節點模塊
rm -rf node_modules ./**/node_modules

# 重新安裝npm包
npm install

＃引導項目
npm run bootstrap

＃種子數據庫
npm run seed

＃重新啟動應用程序
npm run develop
```
