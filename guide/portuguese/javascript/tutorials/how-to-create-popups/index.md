---
title: How to Create Popups
localeTitle: Como criar pop-ups
---
## Como criar pop-ups

Pop-up é uma janela que aparece quando você seleciona uma opção com um mouse ou pressiona uma tecla de função especial.

Neste exemplo, o pop-up aparecerá quando você clicar em um botão e permanecerá na tela até que você pressione a opção X.

Vamos construir o popup usando `HTML` , `CSS` e `JavaScript`

### Etapa 1 em HTML

O HTML fornece a estrutura para o pop-up

\`\` \`html

Abra o PopUp

Popup com JavaScript

X
```
### Step 2 CSS 
 We will choose our own style for the popup window. Notice: the popup div should be hidden at first, so in the style I will select display: none; 
```

css .popup _main_ div { posição: fixa; largura: 800px; altura: 400 px; borda: 2px preto sólido; raio de fronteira: 5 px; background-color: #fff; esquerda: 50%; margem esquerda: -400px; topo: 50%; margem superior: -250px; Mostrar nenhum;

} .close _popup { posição: absoluta; largura: 25px; altura: 25 px; raio de fronteira: 25 px; borda: 2px preto sólido; texto-alinhar: centro; direita: 5px; top: 5px; cursor: ponteiro; } .close_ popup p { margem superior: 5px; font-weight: 400;

} .texto{ texto-alinhar: centro; tamanho da fonte: 30px; font-weight: 400; margem superior: 22%; } #Btn { posição: absoluta; esquerda: 50%; topo: 20%;

}
```
### Step 3 JavaScript 
```

js // Primeiro de tudo vou inicializar minhas variáveis // Selecione os elementos que usaremos no DOM // Eu adicionarei en event no botão que acionará uma função que mudará o estilo de exibição do pop-up de none para block

const Btn = document.getElementById ("Btn") const PopupDiv = document.querySelector (". popup _principal_ div") const ClosePopup = document.querySelector (". close\_popup") Btn.addEventListener ('clique', função () { PopupDiv.style.display = "bloquear" }) ClosePopup.addEventListener ('clique', função () { PopupDiv.style.display = "nenhum" })

\`\` \`

Live code in: [Codepen.io](https://codepen.io/voula12/pen/qyyNeK)