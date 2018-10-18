---
title: Use && for a More Concise Conditional
localeTitle: 使用&&获得更简洁的条件
---
## 使用&&获得更简洁的条件

给出的例子是
```
{condition && <p>markup</p>} 
```

下面使用this.state.dinnerCooked布尔值的条件演示。 如果布尔值为true，则显示带有条件的{}中包含的标记，否则将不显示
```
class MyComponent extends React.Component { 
  constructor(props) { 
    super(props); 
    this.state = { 
      dinnerCooked: true 
    } 
  } 
  render() { 
    return ( 
       <div> 
         {this.state.dinnerCooked &&<h1>Dinner is Cooked!</h1>}//h1 tag contents will be displayed 
       </div> 
    ); 
  } 
 }; 
 
 ## Hint: 
 
 You don't have to do a full ```if/then``` statement. Just write the condition you are checking. 
 
 ## Solution: 
 
 As you can see, you don't have to write the full ```if/then``` statement. We only need to check the condition and see if it returns ```true``` or ```false```. In this case, we are checking the value of ```display```. If the value is ```true```, then you return the value to the right of ```&&```, which is ```<h1>Displayed!</h1>```. If the condition is ```false```, it returns nothing. 
```

JSX class MyComponent扩展了React.Component { 构造函数（道具）{ 超级（道具）; this.state = { 晚餐结束：假 }  
} render（）{  
回来（

{this.state.dinnerCooked &&

# 晚餐很熟！

} // h1标签内容将不会显示 显示：true } this.toggleDisplay = this.toggleDisplay.bind（this）; } toggleDisplay（）{ this.setState（{ display：！this.state.display }）; } render（）{ //更改此行下方的代码 回来（

切换显示 {this.state.display &&

# 显示出来！

}

）; } }; \`\`\` 来自[ReactJS.org文档的说明](https://reactjs.org/docs/conditional-rendering.html)

您可以通过将它们包装在花括号中来在JSX中嵌入任何表达式。这包括JavaScript逻辑&&运算符。它有条件地包括元素可以很方便

它的工作原理是因为在JavaScript中，true &&表达式总是求值为表达式，而false &&表达式总是求值为false。

因此，如果条件为真，则&&之后的元素将出现在输出中。如果是false，React将忽略并跳过它。