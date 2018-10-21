---
title: Defining Attributes
localeTitle: Definindo Atributos
---
## Definindo Atributos

Uma classe tem atributos e métodos. Os atributos são basicamente variáveis ​​dentro de uma classe.

**_Exemplo:_**

```java
public class Vehicle { 
  int maxSpeed; 
  int wheels; 
  String color; 
 
  void horn() { 
    System.out.println("Beep beep!"); 
  } 
 } 
```

`maxSpeed` , `wheels` e `color` são todos atributos da nossa classe Vehicle e o `horn()` é o único método.

### Criando Objetos

Podemos criar vários objetos de nossa classe Vehicle e usar a sintaxe de ponto para acessar seus atributos e métodos.

```java
class MyClass { 
  public static void main(String[] args) { 
    Vehicle v1 = new Vehicle(); 
    Vehicle v2 = new Vehicle(); 
    v1.color = "red"; 
    v2.horn(); 
  } 
 } 
```

### Modificadores de visibilidade

No exemplo do veículo acima, os atributos são declarados sem um modificador de visibilidade (por exemplo, público, privado ou protegido). Quando nenhum modificador é incluído em uma delaração de atributo, o padrão é algo chamado "pacote privado", o que significa que o atributo pode ser acessado diretamente usando o "." notação de ponto por qualquer outra classe dentro do mesmo pacote.

variáveis ​​'públicas' podem ser acessadas de qualquer classe Variáveis ​​'protected' podem ser acessadas por qualquer classe dentro do mesmo pacote, bem como por subclasses em qualquer outro pacote que tenha relacionamento pai / filho. variáveis ​​'privadas' só podem ser acessadas de dentro da classe onde são declaradas Os membros do 'pacote privado' podem ser acessados ​​pelas classes no mesmo pacote

'público', variáveis, métodos, construtores e classes (apenas um) podem ser declarados como públicos. 'protected', variáveis, métodos e construtores podem ser declarados como privados, mas não as classes e interfaces. 'private', variáveis, métodos e construtores podem ser declarados como privados, mas não as classes e interfaces. 'default', variáveis, métodos, construtores e classes podem ser do tipo padrão (declarado por não escrever nada).

#### public> protected> default> private (com base na facilidade de acessibilidade)

Em geral, é uma boa ideia tornar todos os atributos de uma classe privados e controlar o acesso a eles por meio do uso dos métodos "getter" e "setter".