## 如何改进指南

在您的帮助下，我们可以创造全面的参考，帮助成千上万人学编码。💛

您能：
* [帮助我们创造和编辑指南](#steps为创造和编辑指南文章)。
* [帮助回顾指南的拉扯要求]() 

#### 创造和编辑指南步骤

1. 🍴 [叉子这repo] (https://github.com/freeCodeCamp/freeCodeCamp#fork-destination-box)
2. 👀️遵循如下的贡献指导方针。
3. 🔧做些精彩的改善!
4. 📖阅读[式样指南为最佳的实践](/docs/style指南为指南文章)。
5. 👉[做拉扯请求](https://github.com/freeCodeCamp/freeCodeCamp/compare)
6. 🎉得到您的拉扯请求批准-成功!

或请 [提出问题](https://github.com/freeCodeCamp/freeCodeCamp/issues) -哪怕帮点小忙也好! 😊

#### [遵循这些从我们样式指南被推荐的指导方针，书写更棒的指南](/docs/style-guide-for-guide-articles.md)

#### 提出拉扯请求(PR)以进行修改

在编辑或增加一篇文章后，您能以以下两种方式对贮藏库提出修改：

- [在您的浏览器使用GitHub网接口](#using这github网接口在你浏览器)。
- [在您的地方机器工作](#working在你地方机器) (_推荐_ 以便预览变动)。

### 在您的浏览器使用GitHub网接口

请看录影示范，或阅读它之下的步骤：
**[ TODO] **更新GIF录音。
! [显示GitHub接口的GIF跨步](#)

1. 进入 **“页”** 文件夹(位于 [`客户或src或者页或者指南`](/client/src/pages/guide)) 并且寻找您想书写或编辑的文章。
    > 所有存根都是index.md文件
    
2. 点击<kbd>Edit this file</kbd>铅笔图标并以GitHub风格的样式对您的文件做修改。
    > 如果铅笔图标是灰色的，并且发出警告：“您必须是在分支上提出对这个文件的变动”，您的文件可能在另一个人的树上。 在左上角的下拉列表会写着：“树：#######"。点击列表，并且改变分支到“Master”。这样，铅笔图标便可点击了。
    
3. 到网页的底部，添加留言，解释您的变动。
    (自选) ： 我们高度推荐以留言为惯例。 您将会在其他知名公开贮藏库发现，为您做的变动留言是很普遍的。 作为开发商，我们鼓励您跟随标准惯例。
    
    一些常用的留言为：
    ```md
    修改： 更新HTML指南文章
    修改： 更新TravisCI修造剧本
    技艺： 增加Javascript文章
    文件： 更新贡献指南
    ```
    留言要短，不超过50个字。 您也可在留言下增添加其它信息。
    这些留言不会比不普遍的‘更新文件’或‘增加index.md’花跟多时间。
    阅读 [为什么用留言](https://www.conventionalcommits.org/en/v1.0.0-beta.2/#why-use-conventional-commits)了解更多。

4. 然后选择 **“创造新的分支并且开始拉扯请求”** 的单选按钮，并且点击<kbd>Propose file changes</kbd>。

5. 在下个屏幕，您能增加关于您的PR的所有其他细节，然后点击<kbd>Create pull request</kbd>。
   恭喜您🎉! 您创造了拉扯请求。
   
### 您的地方机器工作(_推荐_以便预览变动)

您不一定需要在您的地方机器上工作，除非您希望预览您编辑或者做UI修饰与改善。 您也能在遇上git问题像是合并冲突， rebasing等等时使用地方机器工作。

##### 阅读指南关于 [怎样在地方机器设定freeCodeCamp] (/docs/how对设定freecodecamp locally.md) 

### 如何让PR受批准

批准PR时，评论者有遵循的几个方针：

* 有一个相关的描述，并且标题
* PR遵循 [式样指南](/docs/style指南为指南文章)
* 我们遵循在调解人指南的一般 [QA技巧](https://forum.freecodecamp.org/t/freecodecamp-moderator-guidelines/18295)
* 只要请求改进或扩展指南，我们都接受，即使它语言不标准或只有部份内容。
* 较旧的请求会先被评

#### 标签

* **内容**是改变指南文章内容的拉扯请求(他们修改修改，更新或增添内容)
* **复制**是跟另一开放请求一样内容的请求
* **修改请求**是在拼合之前，需要修改的请求。 
* **陈旧**是附上“修改请求”却在大约2个星期以后，还是没变动的请求。随后请求会被关闭。
  - **陈旧**的请求应该被关闭。
  -这里有个[例子](https://github.com/freeCodeCamp/freeCodeCamp/pull/235)。

#### 相冲突或复制内容
一个与现有的PR做一样修改的PR会被视为**复制品**。

一般来说，评论者将：
1. 排序PR，以最旧为先
2. 查寻相似内容的PR
3. 由最旧的开始拼合

复制PRs非常可能发生合并冲突。
评论者将尽可能努力解决冲突和合并复制PRs。

#### 提出请求

如果拉扯请求不是完善的，评论者可以：
* 对贡献者提出修改的请求，或在请求上增加*changes requested*标签
* 修饰小问题并且在PR上修改


#### Travis CI Build

在我们可以合并它之前，所有的请求必须通过Travis。
如果PR无法通过修造(Travis CI支票发生故障，并且展示红色“X”)，问题有三个可能的来源。

在我们可以合并您的PR之前，您将需要修理问题：
1. 您的PR创造一篇新的文章，并且在某处错过了`index.md `文件。
    * 每在`src或页`的文件夹都需要个`index.md `文件（而且名字必须是`index.md `)。
    * 两个可能的情景是，
      -除`index.md `之外， 您给文章别的名称，或者
      -您创造了一个新的文件夹，然后在这文件夹里创造了多一个，您在次级文件夹忘记投入`index.md `

2.您的PR创造一个新文件夾，文件夾名称格式不正确。
     - 您的文件夾名名称应全部小寫並以kebab-case格式化（即my-new-folder。
     
3.這篇文章的頂部沒有`title`字段。
     - 请参考[编写文章的式样指南]下的[标题]（＃title）部分（/ docs / style-guide-for-guide-articles.md）。

### 我們何時關閉拉取請求

我們關閉拉取請求

 - 如果同一篇文章的較舊PR合併，並且您的PR不添加新內容
 - 如果它沒有/很少的努力（例如：從維基百科等其他來源複製粘貼）
 - 如果有受版權保護的來源複製文本 - 請參閱[引用問題]（https://github.com/freeCodeCamp/freeCodeCamp/issues/2503）
 - 如果它不尊重[撰寫文章的風格指南]（/ docs / style-guide-for-guide-articles.md）
 - 如果不尊重[學術誠信政策]（https://www.freecodecamp.org/academic-honesty）
 - 如果它是陳舊的（如果要求更改並且約2週沒有活動）

此外，如果您正在處理“存根”文章，則您的更改必須足夠大，以替換存根文本。

我們不接受只添加“更多信息：”部分鏈接的请求。

存儲庫有一個`Normalise.js`腳本，它為鏈接添加屬性，但也通過RegEx檢查“這是一個存根...”文本。

如果找到，它會將文章文本還原為通用存根文本（並刪除更改）。

這是預期的行為，因為它允許我們在模板存根，因任何原因而更改時更新所有存根。

### 寻求帮助

這是一個由整個貢獻者團隊提供支持的社區，您可以從中汲取創意，並在撰寫時提出意見。

活躍参与[貢獻者聊天室]（https://gitter.im/freecodecamp/contributors）並提出很多問題。

---

## 评论指南拉取請求的步驟

>本節針對此储藏库的評論者。

## 壁球和合併

为了保持拼合歷史記錄清潔，我們使用<kcd> Squash和merge </ kcd>選項。

！[GIF  - 壁球和合併]（https://files.gitter.im/FreeCodeCamp/Contributors/56MQ/9cb8db153d7bb1b3576cd1ffc207e39d.gif）

### 過濾PR

> PR，Open，Oldest First，Travis CI建立成功，沒有人分配，沒有評論

[`是：pr is：open sort：updated-asc status：success no：assignee comments：0`]（https://github.com/freeCodeCamp/freeCodeCamp/pulls?utf8=%E2%9C%93&q=is% 3Apr％圖20是％3Aopen％20sort％3Aupdated-ASC％20status％3Asuccess％20no％3Aassignee％20comments％3A0）

> PR，Open，Oldest First，沒有標籤：`platform`，`enhancement`，`invalid`或`change changes'

[`是：pr是：open sort：updated-asc -label：platform -label：enhancement -label：invalid -label：“changes requested”“]（https://github.com/freeCodeCamp/freeCodeCamp/pulls?utf8 =％E2％9C％93＆q =是％3Apr％圖20是％3Aopen％20sort％3Aupdated-ASC％20-標記％3Aplatform％20-標記％3Aenhancement％20-標記％3Ainvalid％20-標籤％3A％22changes％20requested％ 22）。

### 模板

>您可以使用GitHub內置的[**已保存回复**]（https://github.com/settings/replies/）功能製作您自己的功能，或使用以下功能。

#### 謝謝

```降價
感謝您對該頁面的貢獻！ 👍
我們很高興接受這些變化，並期待未來的貢獻。 🎉
```

#### 謝謝你，恭喜你

>感謝和鼓勵第一次貢獻者。

```降價
嗨@username。恭喜你的第一次拉動請求（PR）！ 🎉

感謝您對該頁面的貢獻！ 👍
我們很高興接受這些變化，並期待未來的貢獻。 📝
```

#### 構建錯誤

```降價
嘿@username

因此，我希望能夠合併您的更改，但看起來Travis CI版本存在錯誤。 ⚠️

解決這些問題後，我將能夠審核您的PR並將其合併。 😊

---

>請隨意參考[文章指南撰寫文章]（https://github.com/freeCodeCamp/freeCodeCamp#article-title），以便正確格式化文章，以便Travis CI構建通過。 ✅
>
>此外，GitHub在創建PR時寫下您的更改的簡要說明是一種很好的做法。 📝
```

#### 同步Fork

>當PR與`master`分支不同時。

``````降價
嘿@username

因此，我希望能夠合併您的更改，但看起來Travis CI版本存在錯誤。 ⚠️

```慶典
錯誤：ENOTDIR：不是目錄，打開'src / pages / java / data-abstraction / index.md'
```

這個特殊錯誤實際上並不是由您的文件引起的，而是由於將錯誤代碼合併到`master`分支引起的舊錯誤。它已經解決了。

要傳遞構建，您必須同步來自`freeCodeCamp / freeCodeCamp` repo的`master`分支的最新更改。

使用命令行，您可以通過三個簡單的步驟完成此操作：

```慶典
git remote add upstream git：//github.com/freeCodeCamp/freeCodeCamp.git

git fetch upstream

git pull上游大師
```

如果你正在使用GUI，你只需“添加一個新的遠程...”並使用上面的鏈接`git：// github.com / freeCodeCamp / freeCodeCamp.git`。

一旦你同步你的fork並傳遞構建，我將能夠檢查你的PR並合併它。 😊

---

>隨意參考GitHub上的[Syncing a Fork]（https://help.github.com/articles/syncing-a-fork/）文章，了解如何讓您的叉子與最新版本保持同步上游存儲庫。 🔄
>
>此外，GitHub在創建PR時寫下您的更改的簡要說明是一種很好的做法。 📝
``````

#### 合併衝突

>當PR出現需要解決的合併衝突時.¹

```降價
嘿@username

所以我希望能夠合併您的更改，但看起來您有一些合併衝突。 ⚠️

解決這些衝突後，我將能夠檢查您的PR並將其合併。 😊

---

>如果您不熟悉合併衝突過程，請隨時查看GitHub關於[“解決合併衝突”的指南]（https://help.github.com/articles/resolving-a-merge-conflict-上的github /）。 🔍️
>
>此外，GitHub在創建PR時寫下您的更改的簡要說明是一種很好的做法。 📝
```
¹如果第一次撰稿人有合併衝突，維護人員將為他們解決衝突。

#### 複製

> PR重複或重複時。

```降價
嘿@username

對於您正在編輯的這篇文章，似乎已經接受了類似的更改，對此抱歉。 😓

如果您覺得還有更多要添加的內容，請隨時打開新的PR。

再次感謝！ 😊

---

>如果您有任何疑問，請隨時通過[Gitter]（https://gitter.im/FreeCodeCamp/Contributors）或通過以下評論與您聯繫。 💬
```

#### 關閉無效的拉取請求

> PR無效時。

```降價
嘿@username

你實際上沒有添加任何內容，所以我將無效拉請求此PR並將其標記為“無效”。 😓️

隨意打開另一個公關！ 👍
```
