---
title: Use && for a More Concise Conditional
localeTitle: Use && para uma condicional mais concisa
---
## Use && para uma condicional mais concisa

O exemplo dado é
```
{condition && <p>markup</p>} 
```

que é demonstrada abaixo usando a condição do booleano this.state.dinnerCooked. Se o valor booleano for verdadeiro, a marcação incluída no {} com a condição será exibida, caso contrário, ela não será exibida
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

jsx classe MyComponent estende React.Component { construtor (props) { super (adereços); this.state = { dinnerCooked: false }  
} render () {  
Retorna (

{this.state.dinnerCooked &&

# O jantar é cozido!

} o conteúdo da tag // h1 NÃO será exibido display: true } this.toggleDisplay = this.toggleDisplay.bind (isso); } toggleDisplay () { this.setState ({ exibição:! this.state.display }); } render () { // muda o código abaixo desta linha Retorna (

Alternar exibição {this.state.display &&

# Exibido!

}

); } }; \`\` \` Explicação da [documentação](https://reactjs.org/docs/conditional-rendering.html) do [ReactJS.org](https://reactjs.org/docs/conditional-rendering.html)

Você pode incorporar quaisquer expressões no JSX agrupando-as em chaves. Isso inclui o operador lógico && JavaScript. Pode ser útil para incluir condicionalmente um elemento

Isso funciona porque, em JavaScript, true && expression sempre é avaliado como expressão e false && expression sempre é avaliado como false.

Portanto, se a condição for verdadeira, o elemento logo após && aparecerá na saída. Se for falso, o React irá ignorar e ignorá-lo.