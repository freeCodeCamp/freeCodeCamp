---
title: The Auto Feature
localeTitle: O recurso automático
---
## O recurso automático

`auto` é um recurso do C ++ 11 que permite ao compilador inferir o tipo de dados para você em uma definição. Isso pode economizar bastante digitação, especialmente com tipos complicados.

Sem `auto` :

```cpp
double x = 10.425; 
 double y = x * x; 
```

Com `auto` :

```cpp
double x = 10.425; 
 auto y = x * x; 
```

Embora pareça trivial, torna-se incrivelmente útil quando os tipos de dados começam a ficar complicados. Por exemplo, suponha que você queira armazenar um [`vector`](https://guide.freecodecamp.org/cplusplus/vector) de funcionários e esteja interessado apenas em seu nome e idade. Uma maneira de armazenar o nome e a idade pode ser um `pair` com uma `string` e um `unsigned int` . Isso é declarado como `std::vector<std::pair<std::string, unsigned int>> employees` . Agora, suponha que você queira acessar o último funcionário adicionado:

```cpp
std::vector<std::pair<std::string, unsigned int>> employees; 
 
 // without auto, you have to write: 
 std::pair<std::string, unsigned int>> last_employee = employees.back(); 
 
 // with auto, you just have to write: 
 auto last_employee = employees.back(); 
```

Uma vez que o compilador determina o tipo do lado direito do `=` ele substitui o `auto` por esse tipo.

Nas versões modernas de C ++ (desde C ++ 14), `auto` também pode ser usado em uma declaração de função como o tipo de retorno. O compilador inferirá então o tipo de retorno da declaração de retorno dentro da função. Seguindo o exemplo com funcionários:
```
std::vector<std::pair<std::string, unsigned int>> employees; 
 auto get_last_employee() { 
    return employees.back(); // Compiler knows the return type from this line. 
 } 
```

O compilador saberá da linha com a instrução de retorno que o tipo de retorno da função deve ser `std::vector<std::pair<std::string, unsigned int>>` .

Embora bastante técnica, a [página de autopresença](http://en.cppreference.com/w/cpp/language/auto) descreve muitas outras utilizações de `auto` e os detalhes de quando pode e não pode ser usado.

### `auto` antes do C ++ 11

Em alguns livros antigos contendo código _muito_ antigo, a palavra `auto` chave `auto` é usada de maneira muito diferente.

Esse `auto` particular era uma palavra-chave emprestada de C e provavelmente era a palavra-chave menos usada de todos os tempos.

Em C ++, todas as variáveis ​​têm _duração automática_ , ou seja, são definidas até você sair da função em que estão definidas.

Por exemplo:

\`\` \`cpp

# incluir

int main () { int a; a = 1; // faz sentido, como foi definido na mesma função
```
    return 0; 
```

} a = 2; // não faz sentido, já que não está definido aqui \`\` \`

Este é um dado em C ++, e `auto` especificou que a variável deve ter uma _duração automática_ , daí a falta de uso.

## Leitura adicional:

*   http://www.stroustrup.com/C++11FAQ.html#auto