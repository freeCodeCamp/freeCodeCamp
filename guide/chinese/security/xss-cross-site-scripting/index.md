---
title: XSS Cross Site Scripting
localeTitle: XSS跨站点脚本
---
## XSS跨站点脚本

跨站点脚本（XSS）是一种代码注入。它是Web上最常见的漏洞之一。

XSS通常涉及将代码输入到表单，url参数或接受显示回用户的用户输入的任何其他位置。例如，想象一个显示您的用户配置文件的网站，并输入`<script>alert("HELLO!");</script>`作为您的用户名。如果该网站没有阻止XSS，那么访问您个人资料的每个人都会收到一个警告弹出窗口。

#### 不同类型的XSS

有3种不同类型的XSS。

*   存储XSS
*   反射XSS
*   基于DOM的XSS

#### XSS的危险

当然，上述示例对查看您的个人资料的人没有任何直接危险。但是，如果你有更多险恶的意图怎么办？您可以执行一些javascript来显示虚假登录页面，并为该站点的其他用户收集用户名和密码，或者只是在不安全的情况下读取会话cookie。您可以强制他们访问其他网站或执行操作。

#### 抵御XSS

*   绝不信任用户数据
*   验证不受信任的数据（检查有效数据，如果无效，则拒绝而不是处理）
*   白名单安全值（而不是黑名单）
*   始终编​​码输出
*   编码正确的上下文（HTML / HTML属性/ CSS / JSS都不同）
*   保护cookie（仅限HTTP和安全只能由服务器读取）
*   实施内容安全策略

#### 更多信息：

阅读有关XSS的更多信息以及您可以采取的防范步骤来自：

[跨站点脚本（XSS）](https://www.owasp.org/index.php/Cross-site_Scripting_(XSS) ）

[OWASP XSS（跨站点脚本）预防备忘单](https://www.owasp.org/index.php/XSS_(Cross_Site_Scripting)

[Hacksplaining XSS课程](https://www.hacksplaining.com/exercises/xss-stored)