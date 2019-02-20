---
title: React Router
localeTitle: React Router
---
# R适用于初学者的 React Router

# 安装

React Router已分为三个包： `react-router` ， `react-router-dom`和`react-router-native` 。

您几乎不必直接安装react-router。该软件包为React Router应用程序提供核心路由组件和功能。另外两个提供特定于环境的（浏览器和反应原生）组件，但它们也都重新导出所有react-router的导出。

我们正在构建一个网站（将在浏览器中运行），因此我们将安装react-router-dom。

`npm install --save react-router-dom`

# 路由器

启动新项目时，需要确定要使用的路由器类型。对于基于浏览器的项目，有和组件。当你有一个处理动态请求的服务器（知道如何响应任何可能的URI）时，应该使用`<BrowserRouter>` ，而应该用于静态网站（服务器只能响应它知道的文件请求）。

通常最好使用`<BrowserRouter>` ，但如果您的网站将托管在仅提供静态文件的服务器上，那么`<HashRouter>`是一个很好的解决方案。

对于我们的项目，我们假设网站将由动态服务器支持，因此我们选择的路由器组件是`<BrowserRouter>` 。

# 进口声明

```javascript
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
```

## IndexRoute和链接

现在，让我们添加导航以在页面之间获取。

为此，我们将使用`<Link>`组件。 `<Link>`类似于使用html锚标记。

来自文档：

允许用户浏览应用程序的主要方法。 将使用正确的href呈现完全可访问的锚标记。 为此，我们首先创建一个Nav组件。我们的Nav组件将包含`<Link>`组件，如下所示：

```javascript
const Nav = () => (
  <div>
    <Link to='/'>Home</Link>&nbsp;
    <Link to='/address'>Address</Link>
  </div>
 )

```