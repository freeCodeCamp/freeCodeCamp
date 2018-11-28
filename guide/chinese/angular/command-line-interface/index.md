---
title: Command-line Interface
localeTitle: 命令行界面
---
## 命令行界面

#### 动机

Angular与其命令行界面（CLI）密切相关。 CLI简化了Angular文件系统的生成。它处理幕后的大多数配置，因此开发人员可以开始编码。 CLI也有一个低学习曲线，值得推荐给任何想要直接进入的新手。哎呀，即使是经验丰富的Angular开发人员也依赖于CLI！

#### 安装

Angular CLI需要[Node.js和Node Packet Manager（NPM）](https://nodejs.org/en/) 。您可以使用terminal命令检查这些程序： `node -v; npm -v` 。安装完成后，打开终端并使用以下命令安装Angular CLI： `npm install -g @angular/cli` 。这可以在系统的任何位置执行。 CLI配置为使用`-g`标志进行全局使用。

使用以下命令验证CLI是否存在： `ng -v` 。这输出了几行信息。其中一行说明了已安装CLI的版本。

认识到`ng`是CLI的基本构建块。您的所有命令都将以`ng`开头。是时候看看以`ng`为前缀的四个最常见的命令了。

#### 关键命令

*   ng new
    
*   ng serve
    
*   ng generate
    
*   ng build
    
*   ng update

*   ng add
    

每个关键术语都很有说服力。它们共同构成了使用Angular运行所需的功能。当然，还有更多。 [CLI的GitHub文档1](https://github.com/angular/angular-cli/wiki#additional-commands)中概述了所有命令。您可能会发现上面列出的命令将涵盖必要的基础。

#### ng new

`ng new`创建了一个_新的_ Angular文件系统。这是一个超现实的过程。请导航到_新_应用程序生成所需的文件位置。键入以下命令，将`[name-of-app]`替换`[name-of-app]`您想要的任何内容： `ng new [name-of-app]` 。

应显示`[name-of-app]`文件夹下的文件系统。随意探索内在的东西。尽量不做任何改动。运行第一个Angular应用程序所需的所有内容都将在此生成的文件系统中打包在一起。

#### ng serve

要使应用程序运行， `ng serve`命令必须在`[name-of-app]`文件夹中执行。文件夹中的任何位置都可以。 Angular CLI必须认识到它位于使用`ng new`生成的环境中。它将在这一条件下运行。继续尝试： `ng serve` 。

默认情况下，应用程序在端口4200上运行。您可以通过在任何Web浏览器中导航到`localhost:4200`来查看Angular应用程序。 Angular适用于所有浏览器。除非您使用旧版本的Internet Explorer，否则将弹出应用程序。它显示官方的Angular徽标以及一系列有用的链接。

好的，应用程序运行。它有希望发挥作用，但你需要知道幕后发生了什么。请参阅`[name-of-app]`文件系统。导航`[name-of-app] -> src -> app` 。其中的文件负责您在`localhost:4200`上看到的内容。

#### ng generate

`.component`文件定义Angular组件，包括其逻辑（ `.ts` ），样式（ `.css` ），布局（ `.html` ）和测试（ `.spec.ts` ）。 `app.module.ts`特别突出。这两组文件一起作为`component`和`module`一起工作。 `component`和`module`都是Angular原理图的两个独立示例。原理图分类代码_能发生_与不同目的导向块`ng generate` 。

为了本文的目的，请了解`module`向底层组件树导入和导入资产。 `component`关注用户界面的一个部分。该单元的逻辑，样式，布局和测试仍然封装在各种`.component`文件中。

对于`ng generate` ，此命令可以为每个可用的[Angular原理图2](https://github.com/angular/angular-cli/wiki/generate#available-schematics)生成骨架。导航到`[name-of-app -> src -> app]` 。尝试通过执行以下命令`ng generate component [name-of-component]`新`component` ： `ng generate component [name-of-component]` 。用你想要的任何东西替换`[name-of-component]` 。将弹出一个新文件`[name-of-component]`及其必要的`component`文件。

您可以看到`ng generate`加速了Angular的[样板代码](https://en.wikipedia.org/wiki/Boilerplate_code) 。 `ng generate`也可以解决问题。在Angular文件系统的上下文中创建的Schematics与系统的根模块连接。在这种情况下，这将是`[name-of-app -> src -> app]` `app.module.ts`文件。

#### ng build

Angular是一个前端工具。 CLI代表前端执行其操作。 `ng serve`负责后端服务器设置。这使开发完全集中在前端。也就是说，也必须将您自己的后端连接到Angular应用程序。

`ng build`满足了这个需求。在文件系统内部尝试之前。导航到`[name-of-app] -> angular.json` 。寻找这一行代码： `"outputPath": "dist/my-app"` 。

这一行配置确定`ng build`转储其结果的位置。结果是将整个Angular应用程序编译成一个文件夹`dist/my-app` 。在该文件夹内，存在`index.html` 。整个Angular应用程序可以使用`index.html`运行。从这里开始不需要`ng serve` 。使用此文件，您可以轻松连接后端。

试一试： `ng build` 。同样，这必须在Angular文件系统中执行。基于`angular.json`中`“outputPath:”`的`angular.json` 。将生成一个文件，其中原始应用程序已完全编译。如果保持`“outputPath:”`相同，则编译的应用程序将位于： `[name-of-app] -> dist -> [name-of-app]` 。

#### ng update

在angular更新中，对所有角度和npm包进行自动更新以获得最新版本。

以下是可以与`ng update`一起使用的语法和选项。

`ng update [package]`

#### ng add

將新的 Angular 能力直接加入到專案中，安裝 npm 套件後，還幫忙把該寫的 Code 加好，只留下設定檔給你調整。

`ng update [package]`

**选项**

*   干运行 `--dry-run (alias: -d)`
    
    无需进行任何更改即可运行。
    
*   力 `--force`
    
    如果为false，如果安装的软件包与更新不兼容，则会出错。
    
*   所有 `--all`
    
    是否更新package.json中的所有包。
    
*   下一个 `--next`
    
    使用最大的版本，包括beta和RC。
    
*   迁移，只 `--migrate-only`
    
    仅执行迁移，不更新已安装的版本。
    
*   从 `--from`
    
    要从中迁移的版本。仅在更新单个程序包时可用，且仅在仅迁移时才可用。
    
*   至 `--to`
    
    要应用迁移的版本。仅适用于正在更新的单个程序包，且仅适用于仅迁移。需要指定。默认为检测到的已安装版本。
    
*   注册处 `--registry`
    
    要使用的NPM注册表。
    

#### 结论

这些命令实现了基础知识。 Angular的CLI是一种令人难以置信的便利，可加速应用程序生成，配置和扩展。它在保持灵活性的同时完成所有这些，允许开发人员进行必要的更改。

如果您还没有，请查看`localhost:4200`上的链接。在打开之前不要忘记运行`ng serve` 。通过更好地理解CLI，您现在可以了解有关其最基本命令生成的内容的更多信息。

### 来源

1.  [谷歌。 “angular / angular-cli / wiki＃additional-commands。”GitHub。](https://github.com/angular/angular-cli/wiki#additional-commands)
    
2.  [谷歌。 “angular / angular-cli / wiki / generate #available-schematics。”GitHub。](https://github.com/angular/angular-cli/wiki/generate#available-schematics)
    

### 资源

*   [Angular CLI网站](https://cli.angular.io)
    
*   [Angular CLI自述文件](https://github.com/angular/angular-cli#angular-cli)
    
*   [Angular CLI文档](https://github.com/angular/angular-cli/wiki)
