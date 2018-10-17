---
title: Casting
localeTitle: Fundição
---
## Fundição

Um elenco é um operador especial que força um tipo de dados a ser convertido em outro

Fundindo em C ++ difere um pouco para isso de C. C ++ faz uso de funções de carcaça distintas.

### static\_cast

Elenco estático é usado para conversões implícitas entre primitivos e sobrecargas de tipos.

### const\_cast

Const cast pode ser usado para expulsar constância. Isso é útil quando há um desejo de alterar um valor constante. Isso deve ser usado com moderação, em vez disso, deve-se considerar a criação de parâmetros / funções não-constantes nos casos em que um const-cast é usado.

Const cast também pode resultar em comportamento indefinido. A única aplicação do const cast deve ser remover a constância de um valor que foi passado para uma função e marcada const. Se o valor é verdadeiramente const, isto é, é marcado como const em tempo de compilação e é atribuído um valor, const cast e mutação da variável resultará em um comportamento indefinido.
```
const int y = 10;             // y is set to 10. 
 const_cast<int &>(y) = 20;    // undefined behaviour. 
```

### dynamic\_cast

A conversão dinâmica é usada para converter um objeto dentro de sua hierarquia de classes (para pai, pai e irmãos). O elenco dinâmico só pode ser chamado em classes polimórficas. Assim, a classe original neste caso `MyClass` deve ter um membro virtual, que está presente na forma do destruidor virtual.

Se o elenco dinâmico falhar, ele retornará um `nullptr` . O elenco dinâmico pode ser útil na determinação de tipos de objetos em tempo de execução. No entanto, deve-se notar que a conversão dinâmica não é livre e, em alguns casos, outras técnicas podem se mostrar mais eficientes na determinação do tipo de classe em tempo de execução.

### reinterpret\_cast

Reinterpretar elenco é talvez o mais perigoso de todos os elencos C ++, mas quando usado corretamente, pode ser ideal. Reinterpretar conversão não incorre em custo de desempenho, pois não realiza conversões. Ele simplesmente instrui o compilador a tratar o objeto fundido como se fosse o tipo solicitado. Isso também pode trazer problemas de alinhamento, por isso deve ser usado com moderação e somente quando os efeitos colaterais são conhecidos e explicados.

#### Uma nota em moldes de estilo C

O C ++ suporta o uso de conversões no estilo C, embora elas não sejam recomendadas. O uso da conversão de estilo C instruirá o compilador a executar primeiro uma conversão estática _, se a conversão estática_ falhar, reinterpret\_cast será usado em seu lugar. Por esse motivo, os lançamentos no estilo C podem produzir resultados imprevisíveis e gerar problemas inesperados.

## Exemplos

```cpp
#include <iostream> 
 
 class MyClass { 
 public: 
    virtual ~MyClass() = default; 
 
    void greet() { 
        std::cout << "Hello World!" << std::endl; 
    } 
 }; 
 
 class MyClassChild : public MyClass { 
 }; 
 
 void reinterpretCastTest(void *objectPtr) { 
    // Let's assume we know objectPtr is of type MyClass * 
    auto myClassObj = reinterpret_cast<MyClassChild *>(objectPtr); 
    myClassObj->greet(); 
 } 
 
 void constCastTest(const MyClassChild &myClassChild) { 
    auto nonConst = const_cast<MyClassChild &>(myClassChild); 
    nonConst.greet(); 
 } 
 
 void dynamicCastTest(MyClass *myClass) { 
    auto *child = dynamic_cast<MyClassChild *>(myClass); 
    child->greet(); 
 } 
 
 void staticCastTest(float floatVal) { 
    // Convert the float into an int. 
    auto intVal = static_cast<int>(floatVal); 
    std::cout << intVal << std::endl; 
 } 
 
 int main() { 
    MyClassChild myClass; 
    reinterpretCastTest(&myClass); 
    constCastTest(myClass); 
    dynamicCastTest(&myClass); 
    staticCastTest(10.5); 
 
    return 0; 
 } 

```