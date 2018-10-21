---
title: Methods
localeTitle: Métodos
---
# Métodos

O método mais reconhecível em Java é provavelmente `public static void main(String[]args)` , onde `public` significa que os usuários têm acesso ao método, `static` significa que o método é baseado em uma "classe" em vez de uma "instância", `void` meios que nada será retornado do método para outro método (nível superior) e `main` que é o nome desse método específico.

`getName()` e `getManufacturerName()` são dois métodos "Getter" que usamos aqui. Geralmente, os métodos em Java consistem nessas partes -

*   Acesse Modifer (Opcional) - `public` , `private` ou `protected` . Padrões para pacote privado se omitido
*   Tipo de Retorno - Isso é obrigatório, denota o valor retornado pelo método ou `void` se nada for retornado
*   Nome do Método - segue a convenção camelCase
*   Lista de Parâmetros - Lista de parâmetros com seus nomes e tipos, vazios se nenhum parâmetro for aceito
*   Corpo do método cercado por `{ }`

Os métodos também podem, opcionalmente, ter a palavra-chave `static` , o que significa que ela está associada à própria classe, em vez de uma instância da classe, ex- `public static void main()` .

Observe que, diferentemente do JavaScript, temos **que** definir o tipo de retorno de qualquer método que escrevermos, caso contrário, ele falhará em tempo de compilação. Se você não quiser que um método retorne nada, use o tipo de retorno `void` .

Cada método tem uma assinatura, que é a combinação do tipo de dados, o nome e o número de argumentos que o método usa. Em `public static void main` o método não possui um tipo de dados especificado e, em vez disso, usa `void` para declarar que nenhum dado é retornado. Em um método chamado `public static double ave(double val, double val)` o tipo de dado é "double" (0.0), o nome é "ave" (average) e o método recebe 2 argumentos. Cada método **deve** ter uma assinatura exclusiva.

```java
public class Car { 
    private String name; 
    private String manufacturersName; 
 
    public void changeName() { 
        name = "Tesla"; 
    } 
 
    public String getName(){ 
        return name; 
    } 
 
    public String getManufacurername(){ 
        return manufacturersName; 
    } 
 
 } 
```

Parâmetros podem ser passados ​​para métodos. Os parâmetros são declarados logo após o nome do método, entre parênteses. A sintaxe da declaração de parâmetro é \[Tipo de dados\] \[Nome\].

```java
public class Car { 
    private String name; 
 
    public void changeName(String newName) { 
        name = newName; 
    } 
 } 
```

Como acontece com qualquer outra linguagem, os métodos (ou funções, se você está aqui no mundo JS) são usados ​​com freqüência por sua modularidade e reusabilidade.

Os métodos geralmente servem a muitos propósitos, como atualizar informações em um objeto ou fornecer dados de volta ao chamador. Aqui estão alguns exemplos.

```java
public class Car { 
    private int numberOfWheels; 
 
    public void setNumberOfWheels(int newNumberOfWheels) { 
        numberOfWheels = newNumberOfWheels; 
    } 
 
    public int getNumberOfWheels() { 
        return numberOfWheels; 
    } 
 } 
```

No caso de `getNumberOfWheels()` o tipo de retorno é `int` que é um número inteiro. A palavra-chave `return` diz ao java para retornar o valor da variável da ocorrência `numberOfWheels` . `setNumberOfWheels(int newNumberOfWheels)` no entanto, não possui nenhum tipo de retorno, pois é um método setter como visto anteriormente. Nesse caso, ele aceita um argumento do tipo `int` e torna a ocorrência varible `numberOfWheels` igual a `newNumberOfWheels` .

Há também um método especial chamado construtor que permite que os dados sejam definidos ou que as operações sejam executadas quando a classe é instanciada. Este construtor não possui nenhum tipo de retorno.

```java
public class Car { 
    private String model; 
    private int numberOfWheels; 
 
    public Car(String model, int numberOfWheels) { 
        this.model = model; 
        this.numberOfWheels = numberOfWheels; 
    } 
 } 
```

A classe `Car` e o método `Car(String model, int numberOfWheels)` precisam ter o mesmo nome para que o java saiba que é o construtor. Agora, sempre que você instanciar uma nova ocorrência `Car` com a `new` palavra-chave, precisará chamar esse construtor e passar os dados necessários.