---
title: Make Links Navigatable with HTML Access Keys
localeTitle: 使链接可以使用HTML访问密钥进行导航
---
## 使链接可以使用HTML访问密钥进行导航

按照说明： 为两个链接添加一个accesskey属性，并将第一个设置为“g”（对于加菲猫），将第二个设置为“c”（对于Chuck Norris）。 第8和第16行成为：

```css
<h2><a id="first" accesskey="g" href="">The Garfield Files: Lasagna as Training Fuel?</a></h2> 
```

```css
<h2><a id="second" accesskey="c" href="">Is Chuck Norris a Cat Person?</a></h2> 
```

通过这种方式，两个博客文章标题周围的链接具有键盘快捷键，因此他的网站用户可以快速导航到完整的故事。