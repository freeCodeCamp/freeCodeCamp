---
title: Understand the Prototype Chain
localeTitle: 理解原型链
---
## 理解原型链

### 解

您的代码应该显示Object.prototype是Dog.prototype的原型

\`\`\`\`javascript function Dog（name）{ this.name = name; }

让beagle =新狗（“史努比”）;

Dog.prototype.isPrototypeOf（小猎犬）; // =>是的

//修复下面的代码，使其评估为true Object.prototype.isPrototypeOf（Dog.prototype）; \`\`\`