# 如何打开合并请求 (PR)

一个拉取请求使您能够将您在 GitHub 上的分叉中的更改发送到FreeCodeCodeCamp.org的主仓库中。 一旦您完成了代码的更改或编码挑战，您应该遵循这些指南来发送一个 PR。

## 准备一个好的 PR 标题

我们建议使用 [常规标题和消息](https://www.conventionalcommits.org/) 来提交和拉取请求。 公约有以下形式：

> `<type>([可选范围(s)]): <description>`
> 
> 例如：
> 
> `修复(学习)：在循环挑战的同时进行此项测试......`

当打开合并请求(PR)，您可以使用下面的方法来确定类型、范围(可选)和描述。

**类型:**

| 类型   | 何时选择                  |
|:---- |:--------------------- |
| 修复   | 已更改或更新/改进功能、测试、课本等。   |
| feat | 仅当您正在添加新功能、测试等。       |
| 合唱团  | 与课程的代码、测试或顶点无关的更改。    |
| 文档   | 更改为 `/docs` 目录或贡献指南等。 |

**范围：**

您可以从 [此标签列表](https://github.com/freeCodeCamp/freeCodeCamp/labels?q=scope) 中选择一个范围。

**Description:**

保持简短(小于30个字符)，您可以在 PR 描述框和评论中添加更多信息。

优秀PRs标题的一些例子包括：

- `修复(a11): 改进搜索栏对比度`
- `功能：添加更多测试到 html 和 css 挑战`
- `修复 (api,client): 防止提交窗体时发生CORS 错误`
- `docs(i18n)：本地设置的中文翻译`

## 提出拉取请求

1. 一旦编辑完成，您将被提示在您的 GitHub 页面上创建一个拉取请求。

   ![图像 - 比较GitHub 上的拉取请求](./images/github/compare-pull-request-prompt.png)

2. 默认情况下，所有合并请求都应该与免费CodeCamp的主仓库相对应， `主分支`。

   请确保您的基叉已设置为免费CodeCamp/免费CodeCamp 在提升合并请求。

   ![图像 - 在提出拉取请求时比较叉数](./images/github/comparing-forks-for-pull-request.png)

3. 将您的分支拉取请求提交给FreeCodeCamp的 `主` 分支。

4. 在您的 PR 正文中包含一个更详细的您所做的更改及其原因。

   - 您将收到拉请求模板。 这是一个您在打开拉取请求之前应该遵循的核对表。

   - 填写你认为合适的详细信息。 此信息将被审核，审核者将决定您的拉取请求是否被接受。

   - 如果PR 是为了解决现有的 GitHub 问题，那么，在 结束时，您的 PR's 描述实体， 使用关键字 _关闭了有问题号的_ 到 [自动关闭了该问题，如果接受并合并了](https://help.github.com/en/articles/closing-issues-using-keywords)。

     > 示例： `关闭 #123` 将关闭问题 123

5. 注明是否在网站的本地副本上进行过测试。

   在进行不仅仅是编辑文档或挑战描述等文本内容的更改时，这一点非常重要。 需要本地测试的更改实例包括JavaScript、CSS 或 HTML 可能改变页面功能或布局。

## 对合并请求的反馈

> 恭喜！ :tada: 即将创建一个PR 并非常感谢花费时间做出贡献。

我们的版主现在看看看并留下反馈。 请耐心看看同伴版主并尊重他们的时间。 所有合并请求都在适当时候得到审查。

如果您需要任何帮助，请在 [贡献者聊天室](https://gitter.im/FreeCodeCamp/Contributors)中讨论，我们非常乐意帮助您。

> [!提示] 如果您想要提交更多的拉取请求。 我们建议您阅读 [做出更改并同步](https://contribute.freecodecamp.org/#/how-to-setup-freecodecamp-locally?id=making-changes-locally) 指南，以避免必须删除您的叉。

## 在合并请求上冲突

可能会发生冲突，因为许多贡献者在仓库中工作，并且更改可能会破坏您正在等待审查和合并的PR 。

你可能经常不需要重置基地，因为我们会挤掉所有的提交， 但是，如果在此请求重置基础，这是你应该做的。

### 通常错误修复和功能

When you are working on regular bugs and features on our development branch `master`, you are able to do a simple rebase:

1. 重置您的本地副本：

   ```console
   git 结帐 <pr-branch>
   git pull --rebase 上游管理员
   ```

2. 解决任何冲突并添加/编辑提交

   ```console
   #
   git 添加 .
   git 提交 -m "chore: 解决冲突"

   # 或
   git 添加 .
   git 提交 --revise --no-edit
   ```

3. 将您的更改推回到PR

   ```console
   git 推送--force 来源 <pr-branch>
   ```

### 即将开设的课程和功能

当您正在为我们即将上来的课程 `下一个*` 分支开发功能时，您已经做了一次棋盘选择：

1. 请确保您的上游与您的本地同步：

   ```console
   git 签出master
   git 获取--all --prune
   git 签出下一个 python-project
   git 重置 --hard upstream/next python-projects
   ```

2. 备份备份

   a. 备份后删除您的本地分支(如果您仍然有本地分支)：

      ```console
      git 结帐 <pr-branch-name>

      # 示例：
      git 结帐功能/附加numpy-video-question

      git 结帐-b <backup-branch-name>

      # 示例：
      # git 结帐-b 备份功能/附加numpy-video-question

      git branch -D <pr-branch-name>
      ```

   b. 会议文件。 或者仅备份您的 pr 分支(如果您没有本地分支的话)：

      ```console
      git 结帐-b <backup-branch-name> origin/<pr-branch-name>

      # 例如：
      # git 结帐-b b备份功能/附加numpy-video question origin/feate/addnumpy-video question
      ```

4. 开始时有一个干净的套件：

   ```console
   git 签出 -b <pr-branch-name> 下一个 python-projects
   git cherry-self <commit-hash>
   ```

5. 解决任何冲突并清理，安装运行测试

   ```console
   npm 运行清洁

   npm ci
   npm 运行测试:course --superblock=<superblock-name>

   # 例如：

   # npm 运行测试:course --superblock=python-for everyone

   ```

6. 如果一切看起来都很好，请回到PR

   ```console
   git 推送--force 来源 <pr-branch-name>
   ```
