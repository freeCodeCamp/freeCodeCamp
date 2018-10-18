---
title: Improve Existing Pull Request by Another Contributor
localeTitle: 改善另一个贡献者的现有拉动请求
---
如何在保持承诺的同时取得某人的公关并以自己为基础做出自己的公关：

1.  建立一个新的分支，最好使用原始分支的PR＃。

`git checkout -b pr/xyz`

1.  将更改拉到它。

`git pull git://github.com/rafase282/wiki.git update/pr-guide`

这基本上意味着从存储库**Rafase282 / wiki** ，分支**更新/ pr / guide**到您当前的分支**pr / xyz** 。

1.  进行更改，添加，提交，推送。如果你需要压缩，请确保保持原始贡献者的提交不受影响。

**注意** ：您可能需要强制推送`git push -f origin pr/xyz`

1.  创建您的PR并在说明中使其关闭原始PR并`closes #xyz`

这应该使用原始更改生成一个新的pull请求，再添加一个新的pull请求，该请求将在合并时自动引用并关闭原始请求。