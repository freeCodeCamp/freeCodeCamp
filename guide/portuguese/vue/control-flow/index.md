---
title: Control Flow
localeTitle: Controle de fluxo
---
## Controle de fluxo

### Condicionais

Com o Vue.js você pode decidir se mostra ou não uma parte do seu componente dependendo de alguma condição. Por exemplo, imagine uma entrada de formulário que seja necessário um texto com pelo menos 8 caracteres: se a entrada do usuário for menor que 8, uma mensagem de erro deve aparecer; mas se a entrada for maior que 8, a mensagem desaparece.

Um exemplo ainda mais simples é a exibição de um mensagem para um contador:

```html

<div id="app"> 
  <p v-if="counter > 10"> 
    This message is only rendered when the counter is greater than 10 
  </p> 
 </div> 
```

```javascript
let app = new Vue({ 
  el: '#app', 
  data: { 
    counter: 0 
  } 
 }); 
```

Se você for abrir o console e começar a incrementar o `counter`, quando ele cruzar limite de 10, a mensagem será mostrada! Então, se você diminuir o `counter` , Vue.js irá esconder a mensagem quando o `counter` ficar abaixo de 10. Por isso, usamos a diretiva `v-if` .

E você pode estar se perguntando se existe `else` para esse `if` . E há o `v-else` . Observe que o `v-else` sempre irá

*   esperar um `v-if` anterior a ele
*   ser referente ao `v-if` mais próximo

Vamos alterar um pouco nosso primeiro exemplo para entender isso.

```html

<div id="app"> 
  <p v-if="counter > 10"> 
    This message is only rendered when the counter is greater than 10 
  </p> 
  <p v-else> 
    And this is the "otherwise" option 
  </p> 
 </div> 
```

```javascript
let app = new Vue({ 
  el: '#app', 
  data: { 
    counter: 0 
  } 
 }); 
```

Brinque um pouco com isso, alterando os valores dos `counter` e preste atenção na mensagem mostrada.

O Vue.js também possui a diretiva `v-else-if`.

### Repetições

O Vue.js também ajuda na geração de várias cópias do mesmo elemento, através laços. O exemplo clássico é uma lista renderizada dinamicamente.

```html

<div id="app"> 
  <ul> 
    <li v-for="item in list"> 
      {{ item }} 
    </li> 
  </ul> 
 </div> 
```

```javascript
let app = new Vue({ 
  el: '#app', 
  data: { 
    list: [ 
      "shave", 
      "do the dishes", 
      "clean the sink", 
      "pay the bill" 
    ] 
  } 
 }); 
```

Muito mais fácil que inserir vários `<li>`. E observe que sempre que a variavel `list` muda, o resultado é renderizado automaticamente. Experimente: abra o console e faça `push` de alguma string para a `list`

```javascript
app.list.push("something else"); 
```

Como esperado, a página renderizada agora tem o nosso novo item!
