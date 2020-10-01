# 如何在文档主题上工作

> [!注意] 一个快速提醒, 你不需要为文档站点的内容设置任何操作。
> 
> 要在贡献指南上工作，您可以在这里编辑或添加 `文档` 目录 [中的文件](https://github.com/freeCodeCamp/freeCodeCamp/tree/master/docs)。 当您的更改被合并时，它将自动在文档网站上提供。

## 文档网站的结构

网站使用 [`docsify`](https://docsify.js.org)生成，并使用GitHub 页面。

通常，您不需要更改任何配置或本地构建站点。 如果你有兴趣，这里是它的工作方式：

- 此站点的主页源在 [`docs/index.html`](index.html) 中可用。
- 我们使用 `将` 和 GitHub 页面作为一个 SPA 服务于这个文件。
- `Docsify` 脚本生成 `markdown` 文件的内容在 `docs` 目录需要时生成.
- 主页来自 [`_coverpage.md`](_coverpage.md)
- 侧边栏导航由 [`_sidebar.md`](_sidebar.md) 生成。

## 在当地服务文件网站

克隆免费CodeCamp：

```sh
git clone https://github.com/freeCodeCamp/freeCodeCamp.git
docsify service docs
```

安装 `对码化`：

```sh
npm install -g docsify
```

并服务 `/docs` 目录

```sh
对服务文档
```

或者，如果您已经在本地安装了免费CodeCamp(见本地安装指南)， 我们将CLI与开发工具捆绑在一起，以便您可以从仓库的根目录运行 `npm 运行文档：服务`。
