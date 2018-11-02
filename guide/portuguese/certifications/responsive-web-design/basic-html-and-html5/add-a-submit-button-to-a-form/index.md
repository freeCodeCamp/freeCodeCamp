---
title: Add a Submit Button to a Form
localeTitle: Adicionar um botão Enviar para um formulário
---
## Adicionar um botão Enviar para um formulário

Neste desafio, você deseja inserir o botão de envio como o último elemento do formulário (logo antes da tag de fechamento `</form>` ) e atribuir-lhe o atributo `type="submit"` (tudo em minúsculas) e um conteúdo de texto "Submit". "(primeira letra maiúscula) conforme especificado na instrução de desafio.

1) o valor `submit` do `type` atributo é válido também dentro de uma tag de `input` e renderizará um botão com quase o mesmo comportamento, mas essa não é a tag que você deseja usar neste desafio.
```
<input type="submit">
```

Se você não especificar um valor, o botão terá um valor padrão escolhido pelo seu agente de usuário (geralmente é algo como "Enviar" ou "Enviar Consulta").

Se você deseja especificar um valor como "Enviar Pedido", você pode fazer assim:
```
<input type="submit" value="Send Request">

```