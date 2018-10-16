---
title: Managing Ruby versions
localeTitle: Gerenciando versões do Ruby
---
## Ruby mudou ao longo do tempo

Ruby estava em constante desenvolvimento desde a década de 1990 e, como muitas outras línguas, houve mudanças de sintaxe nas versões, por isso é importante estar claro sobre qual versão do Ruby seu código espera.

Provavelmente, a mudança mais visível veio com o Ruby 1.9; anteriormente, escrevemos hashes como este:

```ruby
  { :one => 1, :two => 2, :three => 3 } 
```

Este uso do operador 'hashrocket' ( `=>` ) era tão comum, que o Ruby 1.9 forneceu uma abreviação:
```
  { one: 1, two: 2, three: 3 } 
```

Este código mais antigo é executado em qualquer versão, mas a sintaxe mais recente só será executada no Ruby 1.9+.

## Como isso causa problemas?

Por exemplo, você pode ter decidido usar uma Gem que confia internamente em Ruby 1.9 características; isso significa que seu projeto agora também depende do Ruby 1.9 características.

Se você não especificar qual versão do Ruby seu projeto precisa, pode ser muito confuso quando o código funciona em uma máquina, mas não em outra.

Como na maioria dos idiomas, considera-se boa prática especificar a versão do Ruby que seu código espera. Isso torna muito mais fácil gerenciar múltiplos projetos em sua máquina de desenvolvimento, cada um esperando uma versão diferente Rubi.

## Como eu especifico minha versão em Ruby?

Há um par de ferramentas que são populares para isso, mas ambos concordaram em compartilhar um arquivo comum. Muitos projetos Ruby (ou Rails) incluirão um simples `.ruby-version` , que simplesmente especifica um número de versão, _por exemplo_ :
```
2.4.2 
```

Ferramentas populares para ajudá-lo a gerenciar sua versão do Ruby são:

*   [Ruby Version Manager (RVM)](https://rvm.io)
*   [rbenv](https://github.com/rbenv/rbenv)

Vamos dar uma olhada no RVM.

### Usando o RVM

RVM é normalmente instalado ( [link](https://rvm.io) ) em um Linux, Unix ou MacOS máquina, e é muito conveniente, uma vez que se conecta ao `cd` ( `c` mudança `d` irectory) comando assim quando você move para um novo projeto, sua `.ruby-version` é lida automaticamente, e você é automaticamente mudado para a versão correta do Ruby antes de começar a trabalhar.

Por exemplo, você pode ter esta sequência:

```shell
% cd ~/projects/older-project 
 % ruby --version 
 
 ruby 2.3.5p376 (2017-09-14 revision 59905) [x86_64-darwin16] 
 
 % cd ~/projects/newer-project 
 % ruby --version 
 
 ruby 2.4.2p198 (2017-09-14 revision 59899) [x86_64-darwin16] 
```

(Estes exemplos são de uma máquina MacOS)