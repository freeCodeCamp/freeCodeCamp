---
id: 5900f3991000cf542c50feac
title: 问题45：三角形，五边形和六边形
challengeType: 5
videoUrl: ''
---

# --description--

三角形，五边形和六边形数由以下公式生成：

<div style='display：inline-grid; 文本对齐：居中； 网格模板列：repeat（3，minmax（117px，12％））; grid-template-rows：auto;'> <div>三角形</div> <div> T <sub> n </sub> = <var> n </var>（<var> n </var> +1 ）/ 2 </div> <div> 1、3、6、10、15 ... </div> </div>

<div style='display：inline-grid; 文本对齐：居中； 网格模板列：repeat（3，minmax（117px，12％））; grid-template-rows：auto;'> <div>五角形</div> <div> P <sub> n </sub> = <var> n </var>（3 <var> n </var>- 1）/ 2 </div> <div> 1、5、12、22、35，... </div> </div>

<div style='display：inline-grid; 文本对齐：居中； 网格模板列：repeat（3，minmax（117px，12％））; grid-template-rows：auto;'> <div>六角形</div> <div> H <sub> n </sub> = <var> n </var>（2 <var> n </var>- 1）</div> <div> 1、6、15、28、45，... </div> </div>

可以证明T <sub>285</sub> = P <sub>165</sub> = H <sub>143</sub> = 40755。

查找下一个也是五边形和六边形的三角形。

# --hints--

`triPentaHexa(40756)`应该返回1533776805。

```js
assert.strictEqual(triPentaHexa(40756), 1533776805);
```

# --solutions--

