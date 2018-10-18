---
title: Use getters and setters to Control Access to an Object
localeTitle: 使用getter和setter来控制对象的访问
---
## 使用getter和setter来控制对象的访问

getter和setter是类/对象的关键部分。它们允许您从外部控制其属性。当您开始使用面向对象编程单元时，它们将变得更加突出（即将推出！）。目前，本练习将向您展示如何使用ES6操作它们。

## 提示1：

创建恒温器类。你将把你的构造函数，getter和setter放在这里。

## 提示2：

为构造函数提供一个参数（您可以为任何名称命名）。将参数设置为同名属性。请记住，您最初设置的是Farenheit温度。

## 提示3：

创建一个将Farenheit属性转换为Celsius的get方法。使用给你的公式。

## 提示4：

创建与get方法同名的set方法。它应该有一个接受摄氏温度的参数。将其转换为farenheit，并将其设置为属性。

## 剧透警报 - 提前解决！

## 解

```javascript
function makeClass() { 
  "use strict"; 
  /* Alter code below this line */ 
 
  class Thermostat{ 
    constructor(farenheit){ 
      this.farenheit = farenheit; 
    } 
    get temperature(){ 
      return 5 / 9 * (this.farenheit - 32); 
    } 
    set temperature(celsius){ 
      this.farenheit = celsius * 9.0 / 5 + 32; 
    } 
  } 
 
  /* Alter code above this line */ 
  return Thermostat; 
 } 

```