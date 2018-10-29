---
title: Popup Boxes
localeTitle: Caixas de pop-up
---
## Caixas de pop-up

Caixas de pop-up (ou caixas de diálogo) são janelas modais usadas para notificar ou avisar o usuário ou para obter entrada do usuário.

Caixas de popup impedem que o usuário acesse outros aspectos de um programa até que o pop-up seja fechado, portanto eles não devem ser usados ​​em demasia.

Existem três tipos diferentes de métodos popup usados ​​em JavaScript: [window.alert ()](https://developer.mozilla.org/en-US/docs/Web/API/Window/alert) , [window.confirm ()](https://developer.mozilla.org/en-US/docs/Web/API/Window/confirm) e [window.prompt ()](https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt) .

### Alerta

O [método de alerta](https://developer.mozilla.org/en-US/docs/Web/API/Window/alert) exibe mensagens que não exigem que o usuário insira uma resposta. Uma vez que esta função é chamada, uma caixa de diálogo de alerta aparecerá com a mensagem especificada (opcional). Os usuários precisarão confirmar a mensagem antes que o alerta desapareça.

### Exemplo:

`window.alert("Welcome to our website");`

![Exemplo de Alerta MDN](https://mdn.mozillademos.org/files/130/AlertHelloWorld.png)

### confirme

O [método confirm](https://developer.mozilla.org/en-US/docs/Web/API/Window/confirm) é semelhante a `window.alert()` , mas também exibe um botão de cancelamento no pop-up. Os botões retornam valores booleanos: true para OK e false para Cancel.

### Exemplo:

```javascript
var result = window.confirm('Are you sure?'); 
 if (result === true) { 
    window.alert('Okay, if you're sure.'); 
 } else { 
    window.alert('You seem uncertain.'); 
 } 
```

![MDN Confirmar Exemplo](https://mdn.mozillademos.org/files/7163/firefoxcomfirmdialog_zpsf00ec381.png)

### Pronto

O [método de prompt](https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt) é normalmente usado para obter entrada de texto do usuário. Esta função pode ter dois argumentos, sendo ambos opcionais: uma mensagem para exibir ao usuário e um valor padrão a ser exibido no campo de texto.

### Exemplo:

`var age = prompt('How old are you?', '100');`

![Exemplo de Prompt do MDN](https://mdn.mozillademos.org/files/11303/prompt.png)

### Outras opções de design:

Se você não estiver satisfeito com os pop-ups de JavaScript padrão, poderá substituir em várias bibliotecas de UI. Por exemplo, o SweetAlert fornece um bom substituto para os modais JavaScript padrão. Você pode incluí-lo em seu HTML por meio de um CDN (rede de entrega de conteúdo) e começar a usá-lo.

```HTML
<script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script> 
```

A sintaxe é assim: `swal(title, subtitle, messageType)`

```javascript
swal("Oops!", "Something went wrong on the page!", "error"); 
```

O código acima irá produzir o seguinte popup: ![Exemplo SweetAlert](https://ludu-assets.s3.amazonaws.com/lesson-content/rWqOoQXgDrSVSMrAKiZ9) O SweetAlert não é de forma alguma o único substituto para modais padrão, mas é limpo e fácil de implementar.

#### Mais Informações:

*   [MDN window.alert ()](https://developer.mozilla.org/en-US/docs/Web/API/Window/alert)
*   [MDN window.confirm ()](https://developer.mozilla.org/en-US/docs/Web/API/Window/confirm)
*   [MDN window.prompt ()](https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt)