---
title: Rest API Design
localeTitle: Rest API设计
---### 历史

REST代表**Re** presentational **S** tate **T** ransfer协议。 Roy Fielding在2000年的博士论文中定义了REST。

### 它是什么？

开发REST是为了提供统一的界面

*   识别资源
*   操纵资源
*   自描述信息
*   使用超媒体作为应用程序状态引擎（HATEOS）

### 最佳实践

*   ＃＃＃＃ 基本

|方法| http://api.co/v2/cars | http://api.co/v2/cars/1234 |  
| --- | --- | --- | | GET |列出所有的汽车|检索单个汽车| | POST |制造新车|错误| | PUT |用新的替换汽车收藏|更换id为1234 |的汽车 |删除|删除所有汽车|删除ID为1234 |的汽车

_注意，当客户端或服务器的PUT操作可以生成id_

*   #### 名词很好动词很糟糕
    
*   使用名词来引用`cars` ， `fruits`等资源。
    
*   使用动词声明动作声明`convertMilesToKms` ， `getNutritionalValues`
    
*   #### 单数还是复数？
    
    使用正确的语法进行声明
    
    **避免** `/person/145`
    
    **首选** `/people/154`假设从人名单中返回第154个人
    
*   #### 使用套管
    
    使用以下任何一种模式并保持**一致！**
    
    |案例样式|示例| | ------------- | ------------- | | **UpperCamelCase** | `http://api.fintech.cp/DailyTransactions/Today` | | **lowerCamelCase** | `http://api.fintech.cp/dailyTransactions/today` |  
    | **snake\_case** | `http://api.fintech.cp/daily_transactions/today` |
    
*   #### **关系和资源**
    
*   资源可以具有`one-to-many` ， `many-to-many` ， `many-to-one`关系等。正确映射它们至关重要。
    
*   **一对多**映射
    
    例如， `Tickets/145/messages/4`表明`tickets`和`messages`之间的一对多关系。含义`1`票有`N`消息。消息不是独立资源。你不能拥有`/messages/4` 。
    
*   **多对多**映射
    
    例如， `/usergroups/345/users/56`建议选择第345个用户组并获取id为56的用户。但是，一个用户可能在多个`usergroups`即`/usergroups/209/users/56`也有效。在这种情况下，将depedant资源`users`分成一个单独的端点，如`/users/56`并在`/usergroups/209/users/56`提供资源链接
    
*   #### **API参数**
    
*   **PATH：** _需要_访问资源如`/cars` ， `/fruits`
    
*   **查询参数** ： _可选_过滤列表Eg `/cars?type=SUV&year=2010`
    
*   **正文** ：资源特定逻辑。高级搜索查询。有时它可能同时具有Query和body。
    
*   **标题** ：应包含全局或平台范围的数据。例如API密钥参数，用于auth的加密密钥，设备类型信息，例如移动或桌面或端点，设备数据类型，例如xml或json。使用标头来传达这些参数
    
*   #### HTTP状态代码
    
    使用正确的状态代码
    
    |代码|意义| | ------------- |：-------------：| | 1xx |收到并理解请求。 | | 2xx |收到，理解并要求客户要求采取的行动。 | | 3xx |客户必须采取其他措施来完成请求。大多数这些状态代码用于URL重定向。 | | 4xx |适用于似乎错误是由客户端引起的情况。 | | 5xx |服务器无法满足请求。 |
    
    关于**2xx的**更多信息！
    
*   **201资源创建。** POST `/cars`应返回使用`location`标头创建的HTTP 201，说明如何访问资源 例如`location` ：头文件中的`api.com/cars/124`
    
*   **202 - 接受**
    
    如果任务很大，请使用此选项。告诉客户，它已接受请求并将/正在处理/处理 没有返回有效负载
    
*   **204 - 没有内容**
    
    删除`DELETE cars/124` 不返回任何内容。但是如果API打算发送已删除的资源以供进一步处理，也可以返回`200 OK` 。
    
    危险的**5xx**资源！
    
*   **500**内部服务器错误
    
*   **504**网关超时。服务器未及时收到响应
    
    鲜为人知的**4xx**表明您传递了错误的参数。也可以传递错误的信息。例如
    
    `DELETE /cars/MH09234`
    
    返回`4xx`或消息 `Expecting int car id /car/id got string car/MH09234`
    

### **进一步阅读**

[如何设计优秀的API - 2013年解析开发者日](https://www.youtube.com/watch?v=qCdpTji8nxo)

[Guillaume Laforge永无止境的REST API设计辩论](https://www.youtube.com/watch?v=48azd2VqtP0)

[HTTP状态代码](https://httpstatuses.com/)