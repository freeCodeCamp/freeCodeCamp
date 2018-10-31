---
title: Key Value Databases
localeTitle: 关键价值数据库
---
## 关键价值数据库

键值数据库或键值存储是一种使用键/值存储的[NoSQL](https://en.wikipedia.org/wiki/NoSQL)数据库。这意味着存储在数据库中的数据是键值对的集合。

这种类型的数据结构用于许多编程语言。键值对通常称为关联数组，字典或散列。例如，考虑一个电话号码字典：

|关键|价值| | ------------ | ------------- | |瑞克| 1234555 | |莫蒂| 7754321 | |夏天| 5512377 |

### 钥匙

`key`中的键必须是唯一的。拥有唯一标识符将允许您访问与给定键关联的值。

理论上，关键可以是你想要的任何东西。密钥可以是字符串，二进制序列，图像等。但是，某些数据库可能会对可以使用的密钥类型施加限制。

以下是一些建议：

*   密钥应遵循约定以保持一致性。电话号码字典中的键应始终为名称，而不是名称，电子邮件地址和数字的组合。
*   密钥不应太长，否则可能会出现性能问题。
*   密钥不应太短，否则您可能会遇到可读性问题。

### 价值

该`value`在key-value存储可以是你想要的任何东西。这包括字符串，数字，代码，图像，列表，甚至是另一个键值对。某些数据库允许您限制可以存储的数据类型。

### 用例

键值数据库可用于多种方案。以下列出了最常见的应用程序：

*   电信目录。
*   用户配置文件和会话信息。
*   购物车内容。
*   产品详情或评论。
*   Internet协议（IP）转发表。
*   服务健康状况或配置。

### 例子

以下是使用键值方法的数据库的一些示例：

*   [Redis的](https://redis.io)
*   [Oracle NoSQL数据库](https://www.oracle.com/database/nosql/index.html)
*   [Cassandra](http://cassandra.apache.org) （键值和面向列的数据库之间的混合）
*   [伏地魔](http://www.project-voldemort.com/voldemort/)
*   [Consul KV商店](https://www.consul.io/intro/getting-started/kv.html) （一个拥有自己的键值[商店](https://www.consul.io/intro/getting-started/kv.html)的工具）

#### 更多信息：

*   [维基百科](https://en.wikipedia.org/wiki/Key-value_database)上的键值数据库

键值数据库是一个简单的数据库，它使用映射或字典作为基本数据模型，其中每个键与集合中的一个且仅一个值相关联，并且是最灵活的NoSQL数据库类型。