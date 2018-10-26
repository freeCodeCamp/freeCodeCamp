---
title: Go Maps
localeTitle: 去地图
---
## 去地图

地图，在其他语言中称为_字典_ ，将键“映射”到值。 地图声明如下：

```go
var m map[Key]Value 
```

此地图没有按键，也无法添加任何按键。 要创建地图，请使用`make`函数：

```go
m = make(map[Key]Value) 
```

任何东西都可以用作键或值。

### 修改地图

以下是地图的一些常见操作。

#### 插入/更改元素

在地图`m`创建或更改元素`foo` ：

```go
m["foo"] = bar 
```

#### 获得元素

在map `m`获取带有键`foo`元素：

```go
element = m["foo"] 
```

#### 删除元素

在地图`m`使用键`foo`删除元素：

```go
delete(m, "foo") 
```

#### 检查是否已使用密钥

检查地图`m`是否使用了密钥`foo` ：

```go
element, ok = m["foo"] 
```

如果`ok`为`true` ，则使用密钥， `element`将值保存在`m["foo"]` 。 如果`ok`为`false` ，则表示未使用该键，且该`element`保持其零值。

### 映射文字

您可以直接创建地图文字：

```go
var m = map[string]bool{ 
    "Go": true, 
    "JavaScript":false, 
 } 
 
 m["Go"] // true 
 m["JavaScript"] = true // Set Javascript to true 
 delete(m, "JavaScript") // Delete "JavaScript" key and value 
 language, ok = m["C++"] // ok is false, language is bool's zero-value (false) 
```

#### 更多信息：

*   [围棋之旅](https://tour.golang.org/moretypes/19)
*   [以身作则](https://gobyexample.com/maps)
*   [Golang Book](https://www.golang-book.com/books/intro/6#section3)
*   [Go编程语言规范](https://golang.org/ref/spec#Making_slices_maps_and_channels)