---
title: Redux Selectors
localeTitle: Seletores de Redux
---

## Seletores em Redux

Seletores em Redux são na sua essência funções que são usadas para selecionar um subconjunto de dados existentes num determinado estado, ou em termos de Redux, efetuar cálculos de dados derivados. 

Estas funções recebem um determinado estado como argumento e efetuam algumas computações e retornam os dados que irão ser fornecidos a um qualquer componente

## Porque usar este padrão?

Uma das razões para o uso deste padrão consiste na eliminação de dados duplicados.

Partindo do pressuposto que possuímos uma lista de itens em Redux e somente iria ser necessário apresentar uma lista filtrada desses dados.

Uma abordagem considerada ingénua a ser usada com Redux iria consistir em filtrar a lista, guardar os dados e então devolver estes para o componente em questão.

Com esta abordagem iriamos ter duas cópias de itens o que iria ser mais fácil de garantir que os dados não iriam estar sincronizados.

No caso de uma qualquer operação sobre os dados, seria necessário efetuar a atualização duas vezes.

Outra abordagem considerada ingénua, seria a transformação direta no componente, tirando proveito da função Redux `mapStateToProps`, tal como apresentado no bloco de código abaixo.

```javascript
 // redutor
 const listofItems=(state={items:[]},action)=>{
     switch(action.type){
         case "SHOW_ALL":
            return action.data.items;
         default:
            return state;
     }
 };
```


Os itens guardados poderiam ser algo deste tipo:
```javascript
{
    id:1,
    text:"Lorem ipsum dolor sit amet",
    complete:false
}
```
```javascript
    import React, { Component } from "react";
    import {connect} from "react-redux";

    class ItemShow extends Component{
        render(){
            const {incompleteItems}= this.props
            return (
                <ul>
                    {
                        incompleteItems.map(item=>(
                            <li key={item.id}>
                                {item.text}
                            </li>
                        ))
                    }
                </ul>
            )
        }
    }
    const mapStateToProps =(state)=>{
        return {
            incompleteItems:state.listofItems.filter(item=>{
                return !item.complete
            });
        }
    };
    export default connect(mapStateToProps,null)(ItemShow);
```

Com isto, o que iria acontecer na realidade era tornar os componentes cada vez mais dependentes do estado Redux e cada vez menos genéricos e reutilizáveis.

O que iria também causar impacto na performance da aplicação, isto porque a função `mapStateToProps` iria ser invocada inúmeras vezes durante o ciclo de vida da aplicação e utiliza-la para este tipo de cálculo não e considerado uma boa prática.


## Função Seletora em ação

Para resolver o problema acima descrito, será necessário criar uma função seletora.

De forma a que siga em conformidade com as boas práticas Redux, esta terá que estar definida o mais próximo possível do redutor.

Expandindo o exemplo já mencionado, agora o redutor será algo tal como o que o bloco de código seguinte.

```javascript
 // redutor
 const listofItems=(state={items:[]},action)=>{
     switch(action.type){
         case "SHOW_ALL":
            return action.data.items;
         default:
            return state;
     }
 };
 
 const getIncompleteItems=state=>{
     const {listofItems}=state;
     return listofItems.filter(item=>{
         return !item.complete
     });
 }
```

E o componente que iria usar os dados algo deste género.

```javascript
    import React, { Component } from "react";
    import {connect} from "react-redux";

    class ItemShow extends Component{
        render(){
            const {incompleteItems}= this.props
            return (
                <ul>
                    {
                        incompleteItems.map(item=>(
                            <li key={item.id}>
                                {item.text}
                            </li>
                        ))
                    }
                </ul>
            )
        }
    }
    const mapStateToProps =(state)=>{
        return {
            incompleteItems:getIncompleteItems(state);
        }
    };

    export default connect(mapStateToProps,null)(ItemShow);
```

#### Mais Informações:
[explicação simples reselect](https://guide.freecodecamp.org/redux/reselect)

[Documentação reselect](https://guide.freecodecamp.org/redux/reselect)