---
title: Input and Output
localeTitle: Entrada e saída
---
## Entrada e Saída com Fluxos

Para imprimir coisas no console, ou ler a partir dele, use `cout` e `cin` , que são os chamados `streams` . Essa metáfora é usada porque você usa fluxos como o que você usaria uma pia ou um toque: ou você descarrega dados em uma pia ( `cout` ) ou obtém dados de um toque ( `cin` ).

### Saída com cout

O programa "Hello World" usa `cout` para imprimir "Hello World!" para o console:

```cpp
#include<iostream> 
 using namespace std; 
 
 int main() 
 { 
  cout << "Hello world!" << endl; 
 } 
```

As duas primeiras linhas no topo são necessárias para você usar `cout` e outros fluxos. `#include<iostream>` faz com que os objetos de fluxo estejam disponíveis e `using namespace std;` permite que você digite `cout` diretamente ao invés de ter que digitar `std::cout` , isto é, ter que especificar que queremos usar `cout` do namespace `std` .

`cout` significa "Console Output" e é um chamado _fluxo de saída_ que representa o console. Quando você quiser imprimir algo no console, você pode colocá-lo em `cout` ; imagine-o como um buraco que leva ao terminal. Para colocar coisas neste buraco, uma de cada vez, você usa o operador `<<` , também conhecido como o _operador de inserção_ 1 . O operador pode ser acorrentado, ou seja, você pode colocar várias coisas em uma após a outra. O seguinte irá imprimir "O bolo é uma mentira":

`cout << "The cake " << "is " << "a " << "lie." << endl;`

`endl` significa "End Line" e é outro item que vem de `<iostream>` . Quando você coloca `endl` em `cout` , ele irá imprimir um caractere de nova linha ( "\\ n") para o console, e também _alinhada_ `cout` , o que significa que ele irá forçar `cout` para imprimir tudo o que você colocar nele _agora._ Se você não colocar `endl` em `cout` , `cout` pode manter os dados que você colocou nele, mas esperar por mais dados antes de realmente imprimir tudo. Isto é chamado de _buffer_ e é muito bom para o desempenho, mas se você já tiver dado tudo o que é suposto para imprimir, você quer `cout` imprimi-lo immediatelly. Portanto, é uma boa prática terminar com `endl` em lugares onde faz sentido.

Quase tudo pode ser colocado em um fluxo: strings, números, variáveis, expressões, etc. Aqui estão alguns exemplos de inserções de fluxo válidas:

```cpp
// Notice we can use the number 42 and not the string "42". 
 cout << "The meaning of life is " << 42 << endl;` // Output: The meaning of life is 42 
```

```cpp
string name = "Tim"; 
 cout << "Except for you, " << name << endl;`// Output: Except for you, Tim 
```

```cpp
string name = "Tim"; 
 cout << name; 
 cout << " is a great guy!" << endl;` 
 // Output: Tim is a great guy! 
```

```cpp
int a = 3; 
 cout << a*2 + 18/a << endl;`// Output: 12 
```

### Uma nota sobre o espaço em branco

C ++ sempre coloca _você_ no controle e faz exatamente as coisas que você diz para fazer. Isso às vezes pode ser surpreendente, como no exemplo a seguir:

```cpp
string name = "Sarah"; 
 cout << "Good morning" << name << "how are you today? << endl; 
```

Você pode esperar que seja impresso "Bom dia Sarah, como você está hoje?", Mas na verdade, a saída seria "Bom dia, Sarah, como você está hoje?". A razão para esse bug é que você não escreveu espaços nas strings ao redor do `name` , e assim, como você não especificou nenhum espaço, o `cout` não imprimiu nenhum. A versão correta seria: `cout << "Good morning " << name << " how are you today? << endl;`

Quebras de linha também não acontecem sozinhas. Você pode pensar que isso imprimiria uma receita em quatro linhas:

```cpp
cout << "To make bread, you need:"; 
 cout << "* One egg"; 
 cout << "* One water"; 
 cout << "* Two wheat"; 
```

mas a saída é na verdade tudo em uma linha: "Para fazer pão, você precisa: \* Um ovo \* Uma água \* Dois de trigo". Isso ocorre porque não há caracteres de nova linha no final das linhas, portanto, naturalmente, o C ++ assume que não queremos imprimir caracteres de nova linha.

Você poderia consertar isso adicionando `endl` s após cada linha, porque, como discutido anteriormente, o `endl` insere um caractere de nova linha no fluxo de saída. No entanto, isso também força o buffer a ser liberado, o que nos perde um pouco o desempenho, já que poderíamos imprimir todas as linhas de uma só vez. Portanto, o melhor seria adicionar caracteres reais de nova linha no final das linhas e usar somente `endl` no final:

```cpp
cout << "To make bread, you need:\n"; 
 cout << "* One egg\n"; 
 cout << "* One water\n"; 
 cout << "* Two wheat" << endl; 
```

Se você está apenas imprimindo uma pequena receita, o tempo que você economiza é minúsculo e não vale a pena, mas se você estiver imprimindo milhões de itens, a diferença pode ser muito perceptível.

### Entrada com cin

Para ler a partir do console, você usa o _fluxo de entrada_ `cin` da mesma forma como faria `cout` , mas em vez de colocar as coisas em `cin` , você "tirá-los". O programa a seguir lê dois números do usuário e os adiciona juntos:

```cpp
#include<iostream> 
 using namespace std; 
 
 int main() 
 { 
  int a, b; // Variables to hold the two numbers. 
 
  cout << "Please enter the first number:" << endl; 
  cin >> a; 
  cout << "Please enter the second number:" << endl; 
  cin >> b; 
 
  cout << "The sum of your numbers is: " << a + b << endl; 
 } 
```

`cin` significa "Console Input" e é um _fluxo de entrada_ que representa a entrada do console. Na expressão `cin >> a;` , os dados são lidos de `cin` e salvos na variável `a` , usando o operador `>>` , o _operador de extração_ 2 . O operador de extração lê exatamente a quantidade de dados necessária para gravar na variável que especificamos e pula qualquer espaço em branco, portanto, se o usuário digitar "6", isso será lido apenas como o valor `6` .

Vale a pena notar que o `cin` irá parar todo o programa para esperar que o usuário digite seu valor. O programa não continuará até que o usuário tenha pressionado enter e alguns dados serão gravados na variável. Se o usuário apenas pressionar enter sem digitar nada, o `cin` continuará esperando por um valor.

O operador de extração `<<` pode ser encadeado também. Aqui está o mesmo programa da última vez, mas escrito de uma maneira mais concisa:

```cpp
#include<iostream> 
 using namespace std; 
 
 int main() 
 { 
  int a, b; // Variables to hold the two numbers. 
 
  cout << "Please enter two numbers:" << endl; 
  cin >> a >> b; 
  cout << "The sum of your numbers is: " << a + b << endl; 
 } 
```

Quando encadeado, o operador de extração primeiro lerá os dados de `cin` para preencher `a` e, em seguida, lerá os dados para preencher `b` .

As instruções printf e scanf padrão de C também podem ser usadas com o c ++ importando ' ' arquivo de cabeçalho.

## Fontes

1.  http://www.cplusplus.com/reference/ostream/ostream/operator%3C%3C/
2.  http://www.cplusplus.com/reference/istream/istream/operator%3E%3E/