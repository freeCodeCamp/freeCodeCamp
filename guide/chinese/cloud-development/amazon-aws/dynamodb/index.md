---
title: Amazon DynamoDB
localeTitle: 亚马逊DynamoDB
--- ## 亚马逊DynamoDB

Amazon DynamoDB是Amazon Web Services（AWS）提供的一项服务，提供完全托管的NoSQL数据库。它的主要特征是根据所需的工作量无限扩展的能力。它是完全托管的，用户无需担心底层基础架构，例如如何根据工作负载进行扩展或缩小。它支持键值和基于文档的存储。

DynamoDB服务的基本组件是：

*   **表** ：DynamoDB将数据存储在表中，类似于关系数据库。主要区别在于它是无模式的，从创建之初就没有固定的结构。
    
*   **项目** ：项目是存储在表格中的数据，表格可以具有不确定数量的项目。与关系数据库相比，项目将是表格中的一行。
    
*   **属性** ：项具有属性，类似于关系数据库中的列。但是，由于DynamoDB是无模式的，因此项目不需要具有相同的属性。此外，属性可以是单个值，也可以是类似JSON的文档，其他字段也可以查询。
    

尽管DynamoDB不需要其表的固定结构，但它确实需要表中每个项的主键。与关系数据库一样，主键必须是唯一的。主键可以是简单的或组合的。简单主键仅由分区键组成。反过来，组合主键由分区键和排序键组成。在简单主键中，分区键必须是唯一的，而在组合键中，分区键可以相等，但排序键必须不同。

分区键和排序键的概念非常重要，因为它与DynamoDB存储数据的方式有关。 DynamoDB将数据存储在分区中，分区键是分区的密钥。 DynamoDB使用分区键中的值作为哈希函数的输入，以了解它存储数据的位置。对于组合键，具有相同分区键的所有项都存储在同一分区中，但它们按排序键排序。

Amazon DynamoDB也具有高可用性。它将数据复制到区域中不同可用区域中的许多服务器。可用区域是物理上隔开安全距离的数据中心。如果一台服务器发生灾难，其他服务器会将数据复制到一个安全的距离并且不受影响。

由于其易于设置和无限的扩展能力，它适用于许多用例。它最适用于不知道所需负载或突然出现峰值的情况。一些用例是用于无服务器应用程序，微服务，移动后端，游戏，物联网等的数据存储。

### 资源：

*   [关键价值数据库](https://guide.freecodecamp.org/computer-science/databases/key-value-databases)
*   [关系数据库](https://guide.freecodecamp.org/computer-science/databases/relational-databases)

### 更多信息：

*   “什么是Amazon DynamoDB？”来自[AWS DynamoDB文档](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Introduction.html?shortFooter=true)
*   [AWS DynamoDB文档中的](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.CoreComponents.html?shortFooter=true) “DynamoDB核心组件”