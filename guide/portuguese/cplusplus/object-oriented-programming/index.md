---
title: Object Oriented Programming using C++
localeTitle: Programação Orientada a Objetos usando C ++
---
## Programação Orientada a Objetos usando C ++

A programação orientada a objetos, abreviada para OOP, visa implementar entidades do mundo real como herança, ocultação e polimorfismo na programação. O principal objetivo da OOP é vincular os dados e as funções que operam neles, de modo que nenhuma outra parte do código possa acessar esses dados, exceto essa função.

Vamos aprender sobre diferentes características de uma linguagem de programação orientada a objetos:

### Objeto:

Objetos são entidades básicas de tempo de execução em um sistema orientado a objetos, objetos são instâncias de uma classe, são definidos como tipos de dados definidos pelo usuário.

```cpp
class person 
 { 
    char name[20]; 
    int id; 
 public: 
    void getdetails(){} 
 }; 
 
 int main() 
 { 
   person p1; //p1 is an object 
 } 
```

Objetos ocupam espaço na memória e possuem um endereço associado como um registro em pascal ou estrutura ou união em C.

Quando um programa é executado, os objetos interagem enviando mensagens entre si.

Cada objeto contém dados e código para manipular os dados. Os objetos podem interagir sem precisar conhecer detalhes dos dados ou códigos dos outros. É suficiente saber o tipo de mensagem aceita e o tipo de resposta retornada pelos objetos.

### Classe:

Class é um modelo de dados e funções ou métodos. Classe não ocupa espaço.

```cpp
class class_name 
 { 
  private: 
     //data members and member functions declarations 
  public: 
     //data members and member functions declarations 
  protected: 
     //data members and member functions declarations 
 }; 
```

Classe é um tipo de dados definido pelo usuário, como estruturas e uniões em C.

Por padrão, as variáveis ​​de classe são privadas, mas no caso de estrutura, são públicas. no exemplo acima, a pessoa é uma classe.

### Encapsulamento e abstração de dados:

Agrupar (combinar) dados e funções em uma única unidade é conhecido como encapsulamento. Os dados não são acessíveis ao mundo externo e apenas as funções que estão agrupadas na classe podem acessá-lo. Esse isolamento dos dados do acesso direto pelo programa é chamado de ocultação de dados ou ocultação de informações.

A abstração de dados se refere a fornecer apenas informações necessárias para o mundo externo e a ocultar detalhes da implementação. Por exemplo, considere uma classe Complex com funções públicas como getReal () e getImag (). Podemos implementar a classe como uma matriz de tamanho 2 ou como duas variáveis. A vantagem das abstrações é que podemos alterar a implementação a qualquer momento, os usuários da classe Complex não serão afetados, pois a interface do nosso método permanece a mesma. Se a nossa implementação fosse pública, não teríamos conseguido alterá-la.

### Herança:

Herança é o processo pelo qual objetos de uma classe adquirem as propriedades de objetos de outra classe. Suporta o conceito de classificação hierárquica. A herança fornece reutilização. Isso significa que podemos adicionar recursos adicionais a uma classe existente sem modificá-la.

### Polimorfismo:

Polimorfismo significa capacidade de tomar mais de um formulário. Uma operação pode exibir diferentes comportamentos em diferentes instâncias. O comportamento depende dos tipos de dados usados ​​na operação.

C ++ suporta sobrecarga do operador e sobrecarga de funções. A sobrecarga do operador é o processo de fazer com que um operador exiba comportamentos diferentes em instâncias diferentes. A sobrecarga de funções está usando um único nome de função para executar diferentes tipos de tarefas. O polimorfismo é amplamente utilizado na implementação de herança.

### Ligação Dinâmica:

Na ligação dinâmica, o código a ser executado em resposta à chamada de função é decidido no tempo de execução. C ++ tem funções virtuais para suportar isso.

### Passagem de mensagens:

Os objetos se comunicam entre si enviando e recebendo informações uns aos outros. Uma mensagem para um objeto é uma solicitação para execução de um procedimento e, portanto, invocará uma função no objeto de recebimento que gera os resultados desejados. A passagem de mensagens envolve a especificação do nome do objeto, o nome da função e as informações a serem enviadas.