---
title: Installation
localeTitle: 安装
---
## 安装React

### 创建一个新的React项目

您可以在您的网页中嵌入React库，如下所示2 ：

```html

<script src="https://cdnjs.cloudflare.com/ajax/libs/react/16.0.0/cjs/react.production.min.js"></script> 
```

聪明的程序员希望采用更实用，更高效的方式： [创建React App](https://github.com/facebookincubator/create-react-app)

```bash
npm install -g create-react-app 
 create-react-app my-app 
 
 cd my-app 
 npm start 
```

这将设置您的开发环境，以便您可以使用最新的JavaScript功能，提供良好的开发人员体验，并优化您的应用程序以进行生产。

`npm start`将启动一个允许实时重新加载的开发服务器3 。

完成项目并准备将应用程序部署到生产环境后，您就可以使用了 `npm run build` 在`build`文件夹中创建应用程序的优化版本。

#### 有用的链接

[创建React App存储库](https://github.com/facebookincubator/create-react-app#create-react-app-)

#### 来源

[1.关于安装的React教程](https://reactjs.org/docs/installation.html) [2.链接到cdnjs.org上的React最小JavaScript库](https://cdnjs.com/libraries/react) [3\. npm start命令](https://docs.npmjs.com/cli/start)