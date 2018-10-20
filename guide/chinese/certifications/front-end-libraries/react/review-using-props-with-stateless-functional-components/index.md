---
title: Review Using Props with Stateless Functional Components
localeTitle: 查看使用无状态功能组件的道具
---
## 查看使用无状态功能组件的道具

### 提示

*   功能（又名无状态）组件只是一个简单的javascript函数，它将props作为参数并返回一个react元素。
*   使用`Component.defaultProps`设置默认道具。
*   使用`Component.propTypes`设置道具类型。

### 解

```javascript
const Camper = props => (<p>{props.name}</p>); 
 
 Camper.defaultProps = { 
  name: 'CamperBot' 
 }; 
 
 Camper.propTypes = { 
  name: PropTypes.string.isRequired 
 }; 
```

### 相关链接

*   [使用PropTypes进行类型检查](https://reactjs.org/docs/typechecking-with-proptypes.html)