---
title: Access Modifiers
localeTitle: Modificadores de Acesso
---
# Modificadores de Acesso

Você já quis definir como as pessoas acessariam algumas de suas propriedades? Você não iria querer que ninguém usasse sua cueca. No entanto, seus amigos próximos e parentes podem usar seu suéter e talvez seu carro.

Da mesma forma que você define um nível de acesso às suas posições, o Java também controla o acesso. Você deseja definir o nível de acesso para variáveis, métodos e classes, dependendo de quais outras classes você deseja acessá-las.

Java fornece 4 níveis de modificadores de acesso. Isso significa que você pode modificar o acesso a uma variável, método ou classe de 4 maneiras. Essas 4 formas são privadas, públicas, protegidas e padrão.

Estes modificadores de acesso podem ser aplicados a campos, métodos e classes (as Classes são um caso especial, nós as veremos no final deste artigo). Aqui está uma visão geral 1 do que são os `Access Levels` para cada `Access Modifier` :

#### Referência da Tabela de Modificadores de Acesso:

![Tabela de modificadores de acesso](https://cdn-media-1.freecodecamp.org/imgr/zoMspyn.png)

#### Modificador de Acesso Privado

Permite que uma variável ou método seja acessado somente na classe em que foi criada. Nenhuma outra classe além da classe que criou a variável ou método pode acessá-la. Isso é muito semelhante aos seus órgãos internos. Eles só são acessíveis ao proprietário. Para tornar uma variável ou método privado, basta anexar a palavra-chave privada antes da variável ou do tipo de método. Vamos usar privado em um exemplo de codificação. Se um banco quiser fornecer uma taxa de juros de 10% sobre seus empréstimos, ele garantiria que a variável de taxa de juros (suponhamos `int int_rate;` ) permanecesse privada, de modo que nenhuma outra classe tentaria acessá-lo e alterá-lo. Por exemplo;

`private String name;`

O exemplo acima cria uma variável chamada nome e garante que ela seja acessível somente dentro da classe a partir da qual foi criada.

Outro exemplo para um método é `java private void setAge(){ System.out.println("Set Age"); }` O exemplo acima garante que o método setAge seja acessível somente dentro da classe da qual foi criado e em nenhum outro lugar.

#### Modificador de Acesso Público

O modificador de acesso público é o oposto direto do modificador de acesso privado. Uma classe, método ou variável pode ser declarada como pública e significa que é acessível de qualquer classe. O modificador de acesso público pode ser comparado a uma escola pública onde qualquer pessoa pode procurar admissão e ser admitida.

Uma classe, método ou variável pública pode ser acessada de qualquer outra classe a qualquer momento.

Por exemplo, para declarar uma classe como pública, tudo o que você precisa é:

```java
public class Animal{ 
 
 } 
```

Como tal, a classe Animal pode ser acessada por qualquer outra classe.

```java
public int age; 
 public int getAge(){ 
 } 
```

Acima estão as maneiras de especificar uma variável e um método como público.

#### O modificador de acesso padrão

O modificador de acesso padrão é diferente de todos os outros modificadores de acesso, pois não possui uma palavra-chave. Para usar o modificador de acesso padrão, você simplesmente não usa nenhum dos outros modificadores de acesso e isso significa simplesmente que você está usando um modificador de acesso padrão.

Por exemplo, para usar o modificador de acesso padrão para uma classe, você usa

```java
class Bird{ 
 } 
```

Isso basicamente significa que você está usando o modificador de acesso padrão. O modificador de acesso padrão permite que uma variável, método ou classe seja acessível por outras classes dentro do mesmo pacote. Um pacote é uma coleção de classes relacionadas em um diretório de arquivos. Para mais informações sobre pacotes, confira a seção sobre pacotes.

Qualquer variável, método ou classe declarada para usar o modificador de acesso padrão não pode ser acessada por nenhuma outra classe fora do pacote do qual ela foi declarada.

```java
int age; 
 void setNewAge(){ 
 } 
```

Acima estão algumas maneiras de usar o modificador de acesso padrão para uma variável ou método. Não se esqueça de que o modificador de acesso padrão não possui uma palavra-chave. A ausência dos outros 3 modificadores de acesso significa que você está usando o modificador de acesso padrão.

#### Modificador de Acesso Protegido

O modificador de acesso protegido está intimamente relacionado ao modificador de acesso padrão. O modificador de acesso protegido tem as propriedades do modificador de acesso padrão, mas com uma pequena melhoria.

Uma variável e um método são os únicos a usar o modificador de acesso protegido. A pequena melhoria é que uma classe fora do pacote de classes a partir da qual a variável ou método foi declarado pode acessar a referida variável ou método. Isso é possível somente se ele herda da classe, no entanto.

A classe de outro pacote que pode ver variáveis ​​ou métodos protegidos deve ter estendido a classe que criou as variáveis ​​ou métodos.

Nota sem a vantagem da Herança, um modificador de acesso padrão tem exatamente o mesmo acesso que um modificador de acesso protegido.

Exemplos de uso do modificador de acesso protegido são mostrados abaixo:

```java
protected int age; 
 protected String getName(){ 
  return "My Name is You"; 
 } 
```

#### Modificadores de Acesso em Classes

Por padrão, as classes podem ter apenas dois modificadores:

*   público
*   sem modificador (modificador padrão)

Então isso significa que as classes nunca podem ser definidas como `private` ou `protected` ?

Isso é lógico, por que você quer fazer uma aula particular? Nenhuma outra classe seria capaz de usá-lo. Mas às vezes, você pode incorporar uma turma em outra turma. Essas classes especiais, classes `inner classes` , podem ser definidas como privadas ou protegidas para que somente a classe que as rodeia possa acessá-las:

```java
public class Car { 
    private String brand; 
    private Engine engine; 
    // ... 
    private class Engine { 
        // ... 
    } 
 } 
```

No exemplo acima, somente a classe `Car` pode usar a classe `Engine` . Isso pode ser útil em alguns casos.

Outras classes nunca podem ser definidas como `protected` ou `private` , porque não faz sentido. O modificador de acesso `protected` é usado para tornar as coisas do `package-private` mas com a opção de serem acessíveis às subclasses. Não há conceito como 'subpackages' ou 'package-inheritance' em java.

### Fontes

[1\. Documentos do Oracle sobre Modificadores de Acesso](https://docs.oracle.com/javase/tutorial/java/javaOO/accesscontrol.html "Oracle Docs")