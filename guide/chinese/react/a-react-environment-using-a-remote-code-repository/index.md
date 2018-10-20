---
title: A React Environment Using a Remote Code Repository
localeTitle: 使用远程代码存储库的React环境
---
这是如何使用远程代码存储库创建非生产React环境。 我们将使用cdnjs.cloudflare.com 16.0.0 react，react-dom和babel-standalone 6.26.0 实现这一目标。 babel-polyfill用于较旧的浏览器兼容性。

\`\`\`HTML

  你好React

ReactDOM.render( <h1>Hello React</h1>, document.getElementById('helloreact'));

\`\`\` 如果此代码与html文件扩展名（helloReact.html）一起保存，则可以在Web浏览器中打开 它将运行React和Babel。