---
title: Sessions
localeTitle: 会议
---
## 会议

会话是PHP中的一项功能，允许您存储有关用户的数据服务器端。设置会话时，会设置一个浏览器cookie，用于向PHP标识用户，以便PHP知道要访问哪些服务器端变量。

### 开始一个会话

在您要访问会话的每个页面上，您需要启动（或加载）会话。为此，请运行加载PHP会话系统的`session_start()`函数。

```PHP
<?php 
 session_start(); 
```

请注意，在使用基于cookie的会话时，必须先调用session\_start（），然后才能向浏览器输出任何内容。其他任何事都会导致错误。

### 在会话中访问和设置数据

`$_SESSION['key']`变量是一种特殊类型的数组（使用浏览器cookie来确定要访问的会话）。

在下面的示例中，您会看到用户选择的主题设置为主题编号1。

```PHP
<?php 
 session_start(); 
 $_SESSION['themechoice'] = 1; 
```

访问会话变量类似于设置一个。只需将变量包含在需要访问的位置即可。例如，如下面的代码示例所示回显它。

```PHP
<?php 
 session_start(); 
 echo $_SESSION['themechoice']; 
```

### 删除会话

要从系统中删除会话，请运行以下PHP代码。它将取消设置会话变量并将其从系统中删除。

```PHP
<?php 
 session_unset(); 
 session_destroy(); 
```

### 会议是暂时的

重要的是不要将会话视为永久存储。每当应用程序移动到新的主机服务器时，应用程序本身（例如注销按钮），甚至在服务器维护期间，开发人员都会不时清除它们。对于数据的长期存储，请确保使用数据库。

### 安全

最后但同样重要的是，安全地使用php会话非常重要。阅读我们关于[会话标识符获取](/php/security/session-identifier-acquirement)和[会话劫持的](/php/security/session-hijacking)文章以获取更多信息。

#### 更多信息：

*   [php.net会话手册](https://secure.php.net/manual/en/book.session.php)