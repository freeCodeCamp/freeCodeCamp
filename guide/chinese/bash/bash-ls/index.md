---
title: Bash ls
localeTitle: 巴什ls
---## 巴什ls

`ls`是类Unix操作系统上的命令，用于列出目录的内容，例如文件夹和文件名。

### 用法

```bash
cat [options] [file_names] 
```

最常用的选项：

*   `-a` ，所有文件和文件夹，包括隐藏的文件和文件夹`.`
*   `-l` ，以长格式列出
*   `-G` ，启用彩色输出。

### 例：

在`freeCodeCamp/guide/`列出文件

```bash
ls                                                                ⚬ master 
 CODE_OF_CONDUCT.md bin                package.json       utils 
 CONTRIBUTING.md    gatsby-browser.js  plugins            yarn.lock 
 LICENSE.md         gatsby-config.js   src 
 README.md          gatsby-node.js     static 
 assets             gatsby-ssr.js      translations 
```

#### 更多信息：

*   [维基百科](https://en.wikipedia.org/wiki/Ls)