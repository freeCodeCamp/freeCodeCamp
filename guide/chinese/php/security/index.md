---
title: Security
localeTitle: 安全
---
## 安全

编写PHP代码时，记住安全概念以避免编写易受攻击的代码非常重要。

### 漏洞的类型

*   [跨站点请求伪造](/php/security/cross-site-request-forgery)由程序员未检查发送请求的位置导致应用程序中的漏洞 - 此攻击被发送给高权限级别用户以获得对应用程序的更高级别访问权限。
*   [跨站点脚本](/php/security/cross-site-scripting)在程序员输出到浏览器的输入之前没有清理输入（例如博客上的评论）导致应用程序中的漏洞。它通常用于在浏览器中运行恶意javascript以执行攻击，例如在其他恶意操作中窃取会话cookie以获得应用程序中的更高级别权限。
*   [本地文件包含](/php/security/local-file-inclusion)应用程序中的一个漏洞，由程序员需要用户提供的文件输入，而不是在访问所请求的文件之前清理输入。这导致文件被包含在不应该包含的位置。
*   [远程文件包含](/php/security/remote-file-inclusion)程序员中由程序员提供的漏洞，需要用户提供的文件输入，而不是在访问所请求的文件之前清理输入。这会导致从远程服务器中提取文件，并将其包含在不应该存在的位置。
*   [会话劫持](/php/security/session-hijacking)由攻击者获取对用户会话标识符的访问权并且能够使用其他用户帐户模拟它们所导致的漏洞。这通常用于访问管理用户的帐户。
*   [会话标识符获取](/php/security/session-identifier-acquirement)会话标识符获取是由攻击者能够猜测用户的会话标识符或利用应用程序本身或用户的浏览器中的漏洞来获取会话标识符而导致的漏洞。
*   [SQL注入](/php/security/sql-injection)应用程序中的一个漏洞，程序员在将输入包含到数据库查询中之前不会对其进行清理。这导致攻击者具有完全读取并且通常不会对数据库进行写访问。通过这种类型的访问，攻击者可以做很糟糕的事情。

#### 更多信息：

[OWASP Wiki的攻击页面](https://www.owasp.org/index.php/Category:Attack)